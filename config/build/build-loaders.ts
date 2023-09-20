import type { RuleSetRule } from 'webpack';

import { buildBabelLoader } from './loaders/build-babel-loader';
import { buildCssLoader } from './loaders/build-css-loader';
import { buildFileLoader } from './loaders/build-file-loader';
import { buildSvgLoader } from './loaders/build-svg-loader';

import type { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const babelLoader = buildBabelLoader({ ...options, isTsx: false });

  const babelLoaderWithTsx = buildBabelLoader({ ...options, isTsx: true });

  const cssLoader = buildCssLoader(options);

  const fileLoader = buildFileLoader();

  const svgLoader = buildSvgLoader();

  return [fileLoader, babelLoader, babelLoaderWithTsx, cssLoader, svgLoader];
};
