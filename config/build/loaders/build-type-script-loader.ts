import ReactRefreshTypeScript from 'react-refresh-typescript';

export const buildTypeScriptLoader = (isDev: boolean) => ({
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        }),
        transpileOnly: isDev,
      },
    },
  ],
});
