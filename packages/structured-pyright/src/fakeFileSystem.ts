import type { Dirent, ReadStream, WriteStream } from 'fs';

import {
    FileSystem,
    FileWatcher,
    FileWatcherEventHandler,
    MkDirOptions,
    Stats,
    TmpfileOptions,
} from 'pyright-internal/common/fileSystem';

import { typeshedDirEntries } from './fileSystemData';

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
    private _hostedTypeshedBasePath: string;

    constructor(hostedTypeshedBasePath: string) {
        this._hostedTypeshedBasePath = hostedTypeshedBasePath;
    }

    existsSync(path: string): boolean {
        switch (path) {
            case '/':
            case '/main.py':
                return true;
            case '/typeshed/typeshed-fallback':
                return true;
        }
        return false;
    }
    mkdirSync(path: string, options?: MkDirOptions): void {
        throw new Error('Method not implemented.');
    }
    chdir(path: string): void {
        throw new Error('Method not implemented.');
    }
    readdirEntriesSync(path: string): Dirent[] {
        if (path === '/') {
            return [file('main.py')];
        } else if (path.startsWith('/typeshed/typeshed-fallback')) {
            let newPath = path.substring('/typeshed/typeshed-fallback/'.length);
            if (newPath.endsWith('/')) {
                newPath = newPath.substring(0, newPath.length - 1);
            }
            return typeshedDirEntries[newPath].map((entry) => {
                if (entry.isDir) {
                    return dir(entry.name);
                }
                return file(entry.name);
            });
        }
        throw new Error(`Unexpected readdirEntriesSync for path ${path}`);
    }
    readdirSync(path: string): string[] {
        throw new Error('Method not implemented.');
    }
    readFileSync(path: string, encoding?: null): Buffer;
    readFileSync(path: string, encoding: BufferEncoding): string;
    readFileSync(path: string, encoding?: BufferEncoding | null): string | Buffer;
    readFileSync(path: any, encoding?: any): string | Buffer {
        // Choosing to return an empty VERSIONS file rather than editing
        // the code to fetch it asynchronously like all the other typeshed files.
        if (path === '/typeshed/typeshed-fallback/stdlib/VERSIONS') {
            return '';
        }
        throw new Error(`Unexpected readFileSync of path ${path}.`);
    }
    writeFileSync(path: string, data: string | Buffer, encoding: BufferEncoding | null): void {
        throw new Error('Method not implemented.');
    }
    statSync(path: string): Stats {
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
        throw new Error(`Unexpected statSync of path ${path}.`);
    }
    unlinkSync(path: string): void {
        throw new Error('Method not implemented.');
    }
    realpathSync(path: string): string {
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
        throw new Error('Method not implemented.');
    }
    readFileText = async (path: string, encoding?: BufferEncoding) => {
        if (path.startsWith('/typeshed/typeshed-fallback/')) {
            const newPath = path.substring('/typeshed/typeshed-fallback/'.length);
            const response = await fetch(this._hostedTypeshedBasePath + newPath);
            const text = await response.text();
            return text;
        }
        return '';
    };
    tmpdir(): string {
        throw new Error('Method not implemented.');
    }
    tmpfile(options?: TmpfileOptions): string {
        throw new Error('Method not implemented.');
    }
    realCasePath(path: string): string {
        throw new Error('Method not implemented.');
    }
    isMappedFilePath(filepath: string): boolean {
        return false;
    }
    getOriginalFilePath(mappedFilePath: string): string {
        // No file mapping
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
