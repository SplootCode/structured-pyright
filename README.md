# Structured Pyright

**Warning:** This fork is full of horrible hacks and commented out code. Support is best-effort, but contributions are most welcome!

To be completely honest, I don't expect anyone except me to actually use this so I've not put much effort into a nice API. If you do want to use it for your own structured/visual Python editor I would be most happy to help you, please let me know!

## About

This repo is a fork of [pyright](https://github.com/microsoft/pyright) hacked for use in a web-based structured editor. Please see the pyright repo for more information about how it works.

Like most type checking, type inference, and autocomplete tools, pyright is built on the assumption that code is expressed as a series of text files. When you're trying to build a structured editor which operates on the code at an AST level, you can't make use of these tools because the public API works only in terms of text files and line/character offsets.

This fork effectively punches holes through the pyright API to allow the parse tree to be provided to pyright's internal binding and type evaluation logic without it being read from a text file. Elements of that parse tree can then be used for type checking and autocomplete tools without the need for there to be some kind of intermediate text format.

Credit goes to the folks at Microsoft and all contributors to pyright. Sorry for desecrating your work.

Differences to Pyright:
  - Adds methods to override the parse tree - skipping the need to parse a text file
  - Exposes internal parse tree types and enums (to enable building the parse tree yourself)
  - Supports running in a browser by faking out the filesystem and adding polyfills for nodejs libraries
  - Expects typeshed type definition files to be hosted at a URL that can be fetched when needed
  - Modifies a lot of operations to be async to enable async fetching of type definition files
  
As much as possible it aims to keep upstream code separate to make it easier to pull updates. That being said, some of the above involved some invasive changes that may prove hard to maintain.

## Usage

```ts
import {
  ModuleImport,
  ModuleNode,
  StructuredEditorProgram,
  createStructuredProgram,
} from 'structured-pyright'

// Without the typeshed definitions for Python builtins, basically nothing will work.
// typeshedPath is the base of the fethchable URLs where the typeshed files are located.
// These files are included in the structured-pyright package under `/dist/static`
//
// It's up to you to serve them statically in a way that's fetchable in your app.
// There's a lot of them so bundling them in JS would be a bad idea, it's the whole Python standard library.
// It's best to fetch only the ones you need for your imports.
const typeshedPath = '/static/typeshed/'

// Create a StructureEditorProgram once per project/workspace
const program = createStructuredProgram(typeshedPath)

// Construct the parse tree yourself, with a ModuleNode as the top level per file
// See the Pyright code for ParseNodes.ts to figure out what parse nodes to use when.
const moduleNode: ModuleNode = {
  nodeType: ParseNodeType.Module,

  // Each ParseNode needs a unique ID number (or the type evaluation gets _very_ confused)
  id: 1,

  // The starting character offset and length of each node is not needed and can be safely left as 0.
  // These are only kept to avoid making larger edits to the internal pyright code.
  start: 0,
  length: 0,

  // More ParseNodes for your code - see ParseNodes.ts to figure out how to generate the tree
  statements: [],
}

// Any module imports need to be in the AST as well as separately provided
const modules: ModuleImport[] = []

// Currently only works for a single file called main.py
// (shouldn't be to hard to extend to multiple files tho! Please file an issue if you need this.)
// It's ok to call updateStructuredFile even when you've not opened/loaded the file before.
program.updateStructuredFile('/main.py', moduleNode, modules)

// This is the only part that needs to be async - this step includes fetching imported files
// including builtins
await program.parseRecursively('/main.py')

// Runs the binding step over the file - necessary before type evaluations will work
program.getBoundSourceFile('/main.py')
```

To get useful type information, once you've run the bind step, the `TypeEvaluator` has a bunch of
methods which let you inspect the parse nodes you created.
For example, you can find the inferred type of any of your expression nodes by using `.getTypeOfExpression()`.

```ts
const typeResult = program.evaluator.getTypeOfExpression(someExpressionNode)
if (typeResult.type.category === TypeCategory.Class) {
  console.log(typeResult.type.details.fullName) // E.g. 'builtins.str'
}
```

## Developer Guide

To make upstream updates simpler, the code specific to `structured-pyright` module is in `packages/structured-pyright`.

To build:

```
cd packages/structured-pyright
npm install
npm run build
```

Use `npm link` or `yarn link` to use the locally built package in your own project.