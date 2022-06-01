import { ImportResolver } from 'pyright-internal/analyzer/importResolver';
import { ConfigOptions } from 'pyright-internal/common/configOptions';
import { NoAccessHost } from 'pyright-internal/common/host';

import { FakeFileSystem } from './fakeFileSystem';
import { StructuredEditorProgram } from './structuredEditorProgram';

export { StructuredEditorProgram } from './structuredEditorProgram';
export { Scope } from 'pyright-internal/analyzer/scope';
export { TypeResult } from 'pyright-internal/analyzer/typeEvaluatorTypes';
export { EvaluatorFlags } from 'pyright-internal/analyzer/typeEvaluatorTypes';
export { Type, TypeCategory } from 'pyright-internal/analyzer/types';
export { transformPossibleRecursiveTypeAlias } from 'pyright-internal/analyzer/typeUtils';
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
