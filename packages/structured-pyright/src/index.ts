import { ImportResolver } from 'pyright-internal/analyzer/importResolver';
import { PythonPathResult } from 'pyright-internal/analyzer/pythonPathUtils';
import { ConfigOptions, PythonPlatform } from 'pyright-internal/common/configOptions';
import { FileSystem } from 'pyright-internal/common/fileSystem';
import { Host, HostKind, NoAccessHost } from 'pyright-internal/common/host';
import { PythonVersion } from 'pyright-internal/common/pythonVersion';

import { FakeFileSystem } from './fakeFileSystem';
import { StructuredEditorProgram } from './structuredEditorProgram';

export { typeshedDirEntries } from './fileSystemData';
export { StructuredEditorProgram } from './structuredEditorProgram';
export { resolveAliasDeclaration, ResolvedAliasInfo } from 'pyright-internal/analyzer/aliasDeclarationUtils';
export * from 'pyright-internal/analyzer/declaration';
export { DeclarationType } from 'pyright-internal/analyzer/declaration';
export { ParseTreeWalker } from 'pyright-internal/analyzer/parseTreeWalker';
export { Scope } from 'pyright-internal/analyzer/scope';
export { SourceFile } from 'pyright-internal/analyzer/sourceFile';
export { Symbol, SymbolTable } from 'pyright-internal/analyzer/symbol';
export { TypeResult } from 'pyright-internal/analyzer/typeEvaluatorTypes';
export { CallSignatureInfo, EvaluatorFlags, TypeEvaluator } from 'pyright-internal/analyzer/typeEvaluatorTypes';
export { FunctionParameter, Type, TypeBase, TypeCategory, TypeFlags } from 'pyright-internal/analyzer/types';
export { transformPossibleRecursiveTypeAlias } from 'pyright-internal/analyzer/typeUtils';
export {
    FileSystem,
    FileWatcher,
    FileWatcherEventHandler,
    MkDirOptions,
    Stats,
    TmpfileOptions,
} from 'pyright-internal/common/fileSystem';
export * from 'pyright-internal/parser/parseNodes';
export { ModuleImport, ParseResults } from 'pyright-internal/parser/parser';
export * from 'pyright-internal/parser/tokenizerTypes';
export { Token, TokenType } from 'pyright-internal/parser/tokenizerTypes';

// TODO(harrison): remove this entrypoint once we have pyright fully running in the worker
export function createStructuredProgram(hostedTypeshedBasePath: string): StructuredEditorProgram {
    const fileSystem = new FakeFileSystem(hostedTypeshedBasePath);
    const workspacePath = '/';

    const host = new NoAccessHost();
    const configOptions = new ConfigOptions(workspacePath, '');
    const importResolver = new ImportResolver(fileSystem, configOptions, host);
    const program = new StructuredEditorProgram(importResolver, configOptions, console);

    return program;
}

class PyodideHost implements Host {
    get kind(): HostKind {
        return HostKind.NoAccess;
    }

    getPythonSearchPaths(pythonPath?: string, logInfo?: string[]): PythonPathResult {
        return {
            paths: ['/lib/python3.10', '/lib/python3.10/site-packages'],
            prefix: '/',
        };
    }

    getPythonVersion(pythonPath?: string, logInfo?: string[]): PythonVersion | undefined {
        return PythonVersion.V3_10;
    }

    getPythonPlatform(logInfo?: string[]): PythonPlatform | undefined {
        return PythonPlatform.Linux;
    }
}

export function createStructuredProgramWorker(fs: FileSystem): StructuredEditorProgram {
    const workspacePath = '/';

    const host = new PyodideHost();
    const configOptions = new ConfigOptions(workspacePath, '');
    const importResolver = new ImportResolver(fs, configOptions, host);
    const program = new StructuredEditorProgram(importResolver, configOptions, console);

    return program;
}
