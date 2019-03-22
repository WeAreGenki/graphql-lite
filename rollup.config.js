/* eslint-disable global-require */

import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    typescript({
      typescript: require('typescript'),
    }),
  ],
};
