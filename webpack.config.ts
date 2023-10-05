import { resolve } from 'path';
import type { Configuration } from 'webpack';

import { buildWebpackConfig } from './config/build/build-webpack-config';

import type { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const port = env.port || 3000;
  const apiUrl = env.apiUrl || 'http://localhost:8000';
  const analyze = env.analyze || false;

  const isDev = mode === 'development';

  const isTsx = true;
  const project = 'frontend';

  const paths: BuildPaths = {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    build: resolve(__dirname, 'build'),
    html: resolve(__dirname, 'public', 'index.html'),
    src: resolve(__dirname, 'src'),
    locales: resolve(__dirname, 'public', 'locales'),
    buildLocales: resolve(__dirname, 'build', 'locales'),
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    port,
    apiUrl,
    analyze,
    isDev,
    isTsx,
    project,
    paths,
  });

  return config;
};
