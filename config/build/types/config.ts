import type { Configuration } from 'webpack';

export type BuildMode = Configuration['mode'];

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
  analyze: boolean;
}

export interface BuildOptions extends BuildEnv {
  paths: BuildPaths;
  isDev: boolean;
  isTsx: boolean;
  project: 'storybook' | 'frontend' | 'jest';
}
