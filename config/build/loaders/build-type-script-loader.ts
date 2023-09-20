import ReactRefreshTypeScript from 'react-refresh-typescript';

interface BuildTypeScriptLoaderProps {
  isDev: boolean;
}

export const buildTypeScriptLoader = ({ isDev }: BuildTypeScriptLoaderProps) => ({
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
