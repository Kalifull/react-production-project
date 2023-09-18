import type { RuleSetRule } from 'webpack';

import { buildBabelLoader } from './loaders/build-babel-loader';
import { buildCssLoader } from './loaders/build-css-loader';
import { buildFileLoader } from './loaders/build-file-loader';
import { buildSvgLoader } from './loaders/build-svg-loader';
import { buildTypeScriptLoader } from './loaders/build-type-script-loader';

import type { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const babelLoader = buildBabelLoader();

  const cssLoader = buildCssLoader(isDev);

  const fileLoader = buildFileLoader();

  const svgLoader = buildSvgLoader();

  const typescriptLoader = buildTypeScriptLoader(isDev);

  return [fileLoader, babelLoader, typescriptLoader, cssLoader, svgLoader];
};
