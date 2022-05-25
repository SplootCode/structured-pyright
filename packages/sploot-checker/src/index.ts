import { ImportResolver } from 'pyright-internal/analyzer/importResolver';
import { ConfigOptions } from 'pyright-internal/common/configOptions';
import { NoAccessHost } from 'pyright-internal/common/host';
import { TextRange } from 'pyright-internal/common/textRange';
import { TextRangeCollection } from 'pyright-internal/common/textRangeCollection';
import { AssignmentNode, ModuleNode, ParseNodeType, StatementListNode } from 'pyright-internal/parser/parseNodes';
import { ParseResults } from 'pyright-internal/parser/parser';
import { IgnoreComment } from 'pyright-internal/parser/tokenizer';
import { Token, TokenType } from 'pyright-internal/parser/tokenizerTypes';

import { FakeFileSystem } from './fakeFileSystem';
import { SplootProgram } from './splootProgram';

export { Scope } from 'pyright-internal/analyzer/scope';
export { TypeCategory } from 'pyright-internal/analyzer/types';
export { ModuleNode, ParseNodeType } from 'pyright-internal/parser/parseNodes';

export function generateParsedFile() {
    const rootNode: ModuleNode = {
        start: 0,
        length: 0,
        nodeType: ParseNodeType.Module,
        id: 1,
        statements: [],
    };
    const statementList: StatementListNode = {
        nodeType: ParseNodeType.StatementList,
        statements: [],
        parent: rootNode,
        id: 5,
        start: 0,
        length: 0,
    };
    rootNode.statements.push(statementList);
    const statement1: AssignmentNode = {
        nodeType: ParseNodeType.Assignment,
        id: 2,
        start: 0,
        length: 0,
        leftExpression: {
            nodeType: ParseNodeType.Name,
            id: 3,
            length: 0,
            start: 0,
            value: 'x',
            token: { type: TokenType.Identifier, value: 'x', start: 0, length: 0 },
        },
        rightExpression: {
            nodeType: ParseNodeType.Number,
            id: 4,
            length: 0,
            start: 0,
            isImaginary: false,
            isInteger: true,
            value: 4,
        },
        parent: statementList,
    };
    statement1.leftExpression.parent = statement1;
    statement1.rightExpression.parent = statement1;

    statementList.statements.push(statement1);

    const parseResults: ParseResults = {
        text: 'x = 4\n',
        parseTree: rootNode,
        importedModules: [],
        futureImports: new Map(),
        tokenizerOutput: {
            tokens: new TextRangeCollection<Token>([]),
            lines: new TextRangeCollection<TextRange>([]),
            typeIgnoreAll: undefined,
            typeIgnoreLines: new Map<number, IgnoreComment>(),
            pyrightIgnoreLines: new Map<number, IgnoreComment>(),
            predominantEndOfLineSequence: '\n',
            predominantTabSequence: '    ',
            predominantSingleQuoteCharacter: "'",
        },
        containsWildcardImport: false,
        typingSymbolAliases: new Map(),
    };
    return parseResults;
}

export function setupProgram(hostedTypeshedBasePath: string): SplootProgram {
    const fileSystem = new FakeFileSystem(hostedTypeshedBasePath);
    const workspacePath = '/fake/';

    const host = new NoAccessHost();
    const configOptions = new ConfigOptions(workspacePath, 'strict');
    const importResolver = new ImportResolver(fileSystem, configOptions, host);
    const program = new SplootProgram(importResolver, configOptions, console);
    return program;
}
