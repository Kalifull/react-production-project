import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types/config';

export const buildResolves = ({ paths }: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: { '@': paths.src },
  };
};
