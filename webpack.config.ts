import path from 'path';
import { Configuration } from 'webpack';

import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const port = env.port || 3000;
  const analyze = env.analyze || false;

  const isDev = mode === 'development';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: Configuration = buildWebpackConfig({ mode, port, isDev, paths, analyze });

  return config;
};
