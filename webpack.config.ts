import path from 'path';
import { Configuration } from 'webpack';

import { buildWebpackConfig } from './config/build/build-webpack-config';

import type { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const port = env.port || 3000;
  const analyze = env.analyze || false;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const isDev = mode === 'development';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    port,
    isDev,
    paths,
    analyze,
    apiUrl,
    project: 'frontend',
  });

  return config;
};
