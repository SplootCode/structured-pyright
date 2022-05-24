import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import nodePolyfills from 'rollup-plugin-polyfill-node';

const name = 'sploot-checker';

export default [
    {
        plugins: [
            typescript({
                compilerOptions: {
                    rootDir: '../..',
                },
                sourceMap: true,
            }),
            commonjs(),
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
        plugins: [
            typescript({
                compilerOptions: {
                    rootDir: '../..',
                },
                sourceMap: true,
            }),
            commonjs(),
            nodePolyfills(),
            nodeResolve(),
        ],
        input: 'src/index.ts',
        output: {
            file: `dist/${name}.d.ts`,
            format: 'es',
            sourcemap: true,
        },
    },
];
