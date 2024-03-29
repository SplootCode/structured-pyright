import commonjs from '@rollup/plugin-commonjs';
import inject from '@rollup/plugin-inject';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import nodePolyfills from 'rollup-plugin-polyfill-node';

const name = 'structured-pyright';

export default [
    {
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
                compilerOptions: {
                    rootDir: '../..',
                    declaration: false,
                },
                sourceMap: true,
            }),
            commonjs(),
            json(),
            {
                ...inject({
                    Buffer: ['buffer/', 'Buffer'],
                    process: 'process-es6/',
                }),
            },
            nodePolyfills(),
            nodeResolve(),
        ],
        input: 'src/index.ts',
        output: [
            {
                file: `dist/${name}.js`,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: `dist/${name}.mjs`,
                format: 'es',
                sourcemap: true,
            },
        ],
    },
    {
        input: './out/structured-pyright/src/index.d.ts',
        output: [{ file: `dist/${name}.d.ts`, format: 'es' }],
        plugins: [
            nodeResolve(),
            dts({
                compilerOptions: {
                    rootDir: './dist/out',
                    paths: {
                        'pyright-internal/*': ['./out/pyright-internal/src/*'],
                    },
                },
                respectExternal: true,
            }),
        ],
    },
];
