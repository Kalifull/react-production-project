import path from 'path';
import { Configuration } from 'webpack';

import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const port = env.port || 3000;

  const isDev = mode === 'development';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const config: Configuration = buildWebpackConfig({ mode, port, isDev, paths });

  return config;
};
