/*
* extension.ts
*
* Copyright (c) Microsoft Corporation.
* Licensed under the MIT license.
*
* Provides client for Pyright Python language server. This portion runs
* in the context of the VS Code process and talks to the server, which
* runs in another process.
*/

import * as path from 'path';
import { ExtensionContext, workspace as Workspace, TextDocument,
	OutputChannel, window as Window } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions,
	TransportKind } from 'vscode-languageclient';
import { ProgressReporting } from './progress';

const clients = new Map<string, LanguageClient>();

export function activate(context: ExtensionContext) {
	const outputChannel: OutputChannel = Window.createOutputChannel('pyright');
	const serverModule = context.asAbsolutePath(path.join('server', 'server.js'));
	const debugOptions = { execArgv: ["--nolazy", "--inspect=6600"] };

	// If the extension is launched in debug mode, then the debug server options are used.
	// Otherwise the run options are used.
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions }
	}

	const detectDoc = (document: TextDocument) => {
		if (!(document.languageId === 'python' && document.uri.scheme === 'file')) {
			return;
		}

		const folder = Workspace.getWorkspaceFolder(document.uri);
		if (!folder || clients.has(folder.uri.toString())) {
			return;
		}

		// Create the language client and start the client.
		// Options to control the language client
		const clientOptions: LanguageClientOptions = {
			// Register the server for python source files.
			documentSelector: [{
				scheme: 'file',
				language: 'python',
				pattern:  `${folder.uri.fsPath}/**/*`
			}],
			synchronize: {
				// Synchronize the setting section to the server.
				configurationSection: 'python'
			},
			workspaceFolder: folder,
			outputChannel: outputChannel
		}
		const languageClient = new LanguageClient('python', 'Pyright',
			serverOptions, clientOptions);
		const disposable = languageClient.start();

		// Push the disposable to the context's subscriptions so that the 
		// client can be deactivated on extension deactivation.
		context.subscriptions.push(disposable);

		// Allocate a progress reporting object.
		const progressReporting = new ProgressReporting(languageClient);
		context.subscriptions.push(progressReporting);

		clients.set(folder.uri.toString(), languageClient);
	};

	Workspace.onDidOpenTextDocument(detectDoc);
	Workspace.textDocuments.forEach(detectDoc);

	Workspace.onDidChangeWorkspaceFolders((event) => {
		for (let folder of event.removed) {
			const client = clients.get(folder.uri.toString());

			if (client) {
				clients.delete(folder.uri.toString());
				client.stop();
			}
		}
	});
}

export function deactivate(): Thenable<void> {
	const promises: Thenable<void>[] = [];

	for (let client of clients.values()) {
		promises.push(client.stop());
	}

	return Promise.all(promises).then(() => undefined);
}
