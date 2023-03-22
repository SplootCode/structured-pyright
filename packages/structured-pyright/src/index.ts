import { ImportResolver } from 'pyright-internal/analyzer/importResolver';
import { ConfigOptions } from 'pyright-internal/common/configOptions';
import { FileSystem } from 'pyright-internal/common/fileSystem';
import { NoAccessHost } from 'pyright-internal/common/host';

import { FakeFileSystem } from './fakeFileSystem';
import { StructuredEditorProgram } from './structuredEditorProgram';

export { typeshedDirEntries } from './fileSystemData';
export { StructuredEditorProgram } from './structuredEditorProgram';
export { resolveAliasDeclaration, ResolvedAliasInfo } from 'pyright-internal/analyzer/aliasDeclarationUtils';
export * from 'pyright-internal/analyzer/declaration';
export { DeclarationType } from 'pyright-internal/analyzer/declaration';
export { ParseTreeWalker } from 'pyright-internal/analyzer/parseTreeWalker';
export { Scope } from 'pyright-internal/analyzer/scope';
export { Symbol, SymbolTable } from 'pyright-internal/analyzer/symbol';
export { TypeResult } from 'pyright-internal/analyzer/typeEvaluatorTypes';
export { CallSignatureInfo, EvaluatorFlags } from 'pyright-internal/analyzer/typeEvaluatorTypes';
export { FunctionParameter, Type, TypeCategory } from 'pyright-internal/analyzer/types';
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

export function createStructuredProgram(hostedTypeshedBasePath: string): StructuredEditorProgram {
    const fileSystem = new FakeFileSystem(hostedTypeshedBasePath);
    const workspacePath = '/';

    const host = new NoAccessHost();
    const configOptions = new ConfigOptions(workspacePath, '');
    const importResolver = new ImportResolver(fileSystem, configOptions, host);
    const program = new StructuredEditorProgram(importResolver, configOptions, console);

    return program;
}

export function createStructuredProgramWorker(fs: FileSystem): StructuredEditorProgram {
    const workspacePath = '/';

    const host = new NoAccessHost();
    const configOptions = new ConfigOptions(workspacePath, '');
    const importResolver = new ImportResolver(fs, configOptions, host);
    const program = new StructuredEditorProgram(importResolver, configOptions, console);

    return program;
}
