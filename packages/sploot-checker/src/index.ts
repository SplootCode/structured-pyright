import { ImportResolver } from 'pyright-internal/analyzer/importResolver';
import { Scope } from 'pyright-internal/analyzer/scope';
import { TypeCategory } from 'pyright-internal/analyzer/types';
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

function generateParsedFile() {
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

export async function initialise() {
    // const output = new StandardConsole();
    // const fileSystem = new PyrightFileSystem(createFromRealFileSystem(output, new ChokidarFileWatcherProvider(output)));

    const fileSystem = new FakeFileSystem('http//localhost:5000/static');

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

    // const splootSourceFile = new SourceFile(fileSystem, '/fake/main.py', 'main', false, false);
    // splootSourceFile.overrideParseResults(generateParsedFile(), configOptions, importResolver);

    const program = new SplootProgram(importResolver, configOptions, console);
    // program.addTrackedFile(mainPath);
    program.addSplootFile(mainPath, generateParsedFile());
    await program.parseRecursively(mainPath);
    const sourceFile = program.getBoundSourceFile(mainPath);
    console.log(sourceFile?.getParseResults());
    // console.log(splootSourceFile?.getParseResults());
    // console.log(sourceFile);
    if (sourceFile) {
        console.log(sourceFile.getDiagnostics(configOptions));
        const parseResult = sourceFile.getParseResults();
        const moduleNode = parseResult?.parseTree as ModuleNode;
        // console.log(moduleNode.statements);
        // const statement1 = moduleNode.statements[1] as StatementListNode;
        // const printCall = statement1.statements[0] as CallNode;

        // const typeResult = program.evaluator?.getTypeOfExpression(printCall);
        // console.log(typeResult?.type);
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
