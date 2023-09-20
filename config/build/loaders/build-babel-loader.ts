import type { BuildOptions } from '../types/config';

import { babelRemovePropsPlugin } from '../../babel/babel-remove-props-plugin ';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}

export const buildBabelLoader = ({ isTsx }: BuildBabelLoaderProps) => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-typescript', { isTsx }],
        [
          '@babel/plugin-transform-runtime',
          {
            absoluteRuntime: false,
            corejs: false,
            helpers: true,
            regenerator: true,
            version: '7.0.0-beta.0',
          },
        ],
        isTsx && [babelRemovePropsPlugin, { props: ['data-testid'] }],
      ].filter(Boolean),
    },
  },
});
