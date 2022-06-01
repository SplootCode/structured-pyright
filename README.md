# Structured Pyright

**Warning:** This fork is full of horrible hacks and commented out code. Support is best-effort, but contributions are welcome!

This repo is a fork of [pyright](https://github.com/microsoft/pyright) hacked for use in a web-based structured editor. Please see the pyright repo for more information about how it works.

Like most type checking, type inference, and autocomplete tools, pyright is built on the assumption that code is expressed as a series of text files. When you're trying to build a structured editor which operates on the code at an AST level, you can't make use of these tools because the public API works only in terms of text files and line/character offsets.

This fork effectively punches holes through the pyright API to allow the parse tree to be provided to pyright's internal binding and type evaluation logic without it being read from a text file. Elements of that parse tree can then be used for type checking and autocomplete without the need for there to be some kind of intermediate text format.

All credit to the folks at Microsoft as well as other contributors to pyright. Sorry for desecrating your work.

Differences to Pyright:
  - Adds methods to override the parse tree to skip parsing from a text file
  - Exposes internal parse tree types and enums (to enable building it yourself)
  - Supports running in a browser by faking out the filesystem access and adding polyfills for nodejs libraries
  - Expects typeshed type definition files to be hosted at a URL that can be fetched when needed
  - Modifies a lot of operations to be async to enable async fetching of type definition files
  
As much as possible it aims to keep upstream code separate to make it easier to pull updates. That being said, some of the above involved some invasive changes.

## Developer Guide

To keep it separate, the `structure-pyright` module is in `packages/structured-pyright`.

To build:

```
cd packages/structured-pyright
npm install
npm run build
```

