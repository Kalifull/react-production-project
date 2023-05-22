import { ResolveOptions } from 'webpack';

export const buildResolves = (): ResolveOptions => {
  return {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  };
};
