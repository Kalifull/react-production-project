import { Configuration } from 'webpack';

import { BuildOptions } from './types/config';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(options),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
  };
};
