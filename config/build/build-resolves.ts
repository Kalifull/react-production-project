import type { ResolveOptions } from 'webpack';

import type { BuildOptions } from './types/config';

export const buildResolves = ({ paths }: BuildOptions): ResolveOptions => ({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  preferAbsolute: true,
  modules: [paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: { '@': paths.src },
});
