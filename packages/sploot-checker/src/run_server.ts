import { ImportResolver } from 'pyright-internal/analyzer/importResolver';
import { Scope } from 'pyright-internal/analyzer/scope';
import { TypeCategory } from 'pyright-internal/analyzer/types';
import { ConfigOptions } from 'pyright-internal/common/configOptions';
import { NoAccessHost } from 'pyright-internal/common/host';
import { CallNode, ModuleNode, StatementListNode } from 'pyright-internal/parser/parseNodes';

import { FakeFileSystem } from './fakeFileSystem';
import { SplootProgram } from './splootProgram';

async function main() {
    // const output = new StandardConsole();
    // const fileSystem = new PyrightFileSystem(createFromRealFileSystem(output, new ChokidarFileWatcherProvider(output)));

    const fileSystem = new FakeFileSystem();

    // console.log(fileSystem.getModulePath());

    // const mainPath = '/Users/katie/Projects/sploot/splootcode/pyright/packages/sploot-checker/main.py';
    // const workspacePath = '/Users/katie/Projects/sploot/splootcode/pyright/packages/sploot-checker/';

    const mainPath = '/fake/main.py';
    const workspacePath = '/fake/';

    const host = new NoAccessHost();
    const configOptions = new ConfigOptions(workspacePath, 'strict');
    // configOptions.ensureDefaultPythonPlatform(host, console);
    // configOptions.ensureDefaultExtraPaths(fileSystem, true, []);
    // configOptions.include.push(getFileSpec(fileSystem, process.cwd(), '.'));

    const importResolver = new ImportResolver(fileSystem, configOptions, host);

    // const sourceFile = new SourceFile(fileSystem, mainPath, 'main', false, false, output);
    // sourceFile.parse(configOptions, importResolver);
    // const parseResults = sourceFile.getParseResults();

    // console.log(parseResults);

    const program = new SplootProgram(importResolver, configOptions, console);
    program.addTrackedFile(mainPath);
    await program.parseRecursively(mainPath);
    const sourceFile = program.getBoundSourceFile(mainPath);
    // console.log(sourceFile);
    if (sourceFile) {
        console.log(sourceFile.getDiagnostics(configOptions));
        const parseResult = sourceFile.getParseResults();
        const moduleNode = parseResult?.parseTree as ModuleNode;
        // console.log(moduleNode.statements);
        const statement1 = moduleNode.statements[1] as StatementListNode;
        const printCall = statement1.statements[0] as CallNode;

        const typeResult = program.evaluator?.getTypeOfExpression(printCall);
        console.log(typeResult?.type);
        const scope = moduleNode.scope as Scope;
        const symbol = scope.symbolTable.get('x');
        if (symbol) {
            const t = program.evaluator?.getEffectiveTypeOfSymbol(symbol);
            // console.log(t);
            if (t?.category === TypeCategory.Class) {
                console.log(t.details.fullName);
            } else {
                console.log('Failed to get type for x');
            }
        } else {
            console.log('No symbol x!');
        }
    } else {
        console.log('No source file??');
    }
}

main();
