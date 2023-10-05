import { resolve } from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';

import type { BuildPaths } from '../build/types/config';

import { buildCssLoader } from '../build/loaders/build-css-loader';
import { buildSvgLoader } from '../build/loaders/build-svg-loader';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };

  const rules = config.module!.rules as RuleSetRule[];

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');
  config.module!.rules!.push(buildCssLoader({ isDev: true }));
  config.module!.rules = rules.map((rule) =>
    /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg$/i } : rule
  );
  config.module!.rules!.push(buildSvgLoader());
  config.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://testapi.com'),
      __PROJECT__: JSON.stringify('storybook'),
    })
  );

  return config;
};
