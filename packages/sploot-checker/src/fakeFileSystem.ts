import { Dirent, readdirSync, readFileSync, ReadStream, WriteStream } from 'fs';

import {
    FileSystem,
    FileWatcher,
    FileWatcherEventHandler,
    MkDirOptions,
    Stats,
    TmpfileOptions,
} from 'pyright-internal/common/fileSystem';

function file(name: string): Dirent {
    return {
        name: name,
        isFile: () => true,
        isDirectory: () => false,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isSymbolicLink: () => false,
        isFIFO: () => false,
        isSocket: () => false,
    };
}

function dir(name: string): Dirent {
    return {
        name: name,
        isFile: () => false,
        isDirectory: () => true,
        isBlockDevice: () => false,
        isCharacterDevice: () => false,
        isSymbolicLink: () => false,
        isFIFO: () => false,
        isSocket: () => false,
    };
}

export class FakeFileSystem implements FileSystem {
    existsSync(path: string): boolean {
        console.log(path);
        switch (path) {
            case '/fake/':
            case '/fake/main.py':
                return true;
            case '/typeshed/typeshed-fallback':
                return true;
        }
        console.log('Path no exist', path);
        return false;
    }
    mkdirSync(path: string, options?: MkDirOptions): void {
        throw new Error('Method not implemented.');
    }
    chdir(path: string): void {
        throw new Error('Method not implemented.');
    }
    readdirEntriesSync(path: string): Dirent[] {
        console.log('readdirEntriesSync', path);
        if (path === '/fake') {
            return [file('main.py')];
        } else if (path === '/typeshed/typeshed-fallback') {
            return [dir('stdlib'), dir('stubs')];
        } else if (path === '/typeshed/typeshed-fallback/stdlib') {
            // return [
            //     dir('_typeshed'),
            //     dir('os'),
            //     file('__future__.pyi'),
            //     file('__main__.pyi'),
            //     file('_ast.pyi'),
            //     file('_collections_abc.pyi'),
            //     file('builtins.pyi'),
            //     file('types.pyi'),
            //     file('sys.pyi'),
            //     file('VERSIONS'),
            // ];
            const res = readdirSync('./dist/typeshed-fallback/stdlib/', { withFileTypes: true });
            return res;
        } else if (path === '/typeshed/typeshed-fallback/stdlib/_typeshed') {
            return readdirSync('./dist/typeshed-fallback/stdlib/_typeshed', { withFileTypes: true });
        }

        throw new Error('Method not implemented.');
    }
    readdirSync(path: string): string[] {
        console.log('readdirSync', path);
        throw new Error('Method not implemented.');
    }
    readFileSync(path: string, encoding?: null): Buffer;
    readFileSync(path: string, encoding: BufferEncoding): string;
    readFileSync(path: string, encoding?: BufferEncoding | null): string | Buffer;
    readFileSync(path: any, encoding?: any): string | Buffer {
        console.log('readFileSync', path);
        if (path === '/typeshed/typeshed-fallback/stdlib/VERSIONS') {
            const st = readFileSync('./dist/typeshed-fallback/stdlib/VERSIONS', 'utf8');
            // console.log(st);
            return st;
        }
        throw new Error('Method not implemented.');
    }
    writeFileSync(path: string, data: string | Buffer, encoding: BufferEncoding | null): void {
        throw new Error('Method not implemented.');
    }
    statSync(path: string): Stats {
        // if (path === '/fake/main.py') {
        //     return {
        //         size: 10,
        //         isFile: () => true,
        //         isDirectory: () => false,
        //         isBlockDevice: () => false,
        //         isCharacterDevice: () => false,
        //         isFIFO: () => false,
        //         isSocket: () => false,
        //         isSymbolicLink: () => false,
        //     };
        // }
        // console.log('statSync:', path);
        if (path === '/typeshed/typeshed-fallback/stdlib/VERSIONS') {
            return {
                size: 100,
                isFile: () => true,
                isDirectory: () => false,
                isBlockDevice: () => false,
                isCharacterDevice: () => false,
                isFIFO: () => false,
                isSocket: () => false,
                isSymbolicLink: () => false,
            };
        }
        console.log('File no exist', path);
        throw new Error('Method not implemented.');
    }
    unlinkSync(path: string): void {
        throw new Error('Method not implemented.');
    }
    realpathSync(path: string): string {
        console.log('realpathSync', path);
        throw new Error('Method not implemented.');
    }
    getModulePath(): string {
        return '/typeshed/';
    }
    createFileSystemWatcher(paths: string[], listener: FileWatcherEventHandler): FileWatcher {
        throw new Error('Method not implemented.');
    }
    createReadStream(path: string): ReadStream {
        throw new Error('Method not implemented.');
    }
    createWriteStream(path: string): WriteStream {
        throw new Error('Method not implemented.');
    }
    copyFileSync(src: string, dst: string): void {
        throw new Error('Method not implemented.');
    }
    readFile(path: string): Promise<Buffer> {
        console.log('readFile', path);
        throw new Error('Method not implemented.');
    }
    readFileText = async (path: string, encoding?: BufferEncoding) => {
        console.log('reading:', path);
        const promise: Promise<string> = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path === '/fake/main.py') {
                    resolve('x = "hi"\nprint(x)\n');
                }
                if (path.startsWith('/typeshed/typeshed-fallback/')) {
                    const st = readFileSync('./dist' + path.slice(9), 'utf8');
                    resolve(st);
                }
            }, 1000);
        });
        return promise;
    };
    tmpdir(): string {
        throw new Error('Method not implemented.');
    }
    tmpfile(options?: TmpfileOptions): string {
        throw new Error('Method not implemented.');
    }
    realCasePath(path: string): string {
        console.log('realCasePath', path);

        throw new Error('Method not implemented.');
    }
    isMappedFilePath(filepath: string): boolean {
        return false;
    }
    getOriginalFilePath(mappedFilePath: string): string {
        return mappedFilePath;
    }
    getMappedFilePath(originalFilepath: string): string {
        throw new Error('Method not implemented.');
    }
    getUri(path: string): string {
        throw new Error('Method not implemented.');
    }
    isInZipOrEgg(path: string): boolean {
        throw new Error('Method not implemented.');
    }
}
