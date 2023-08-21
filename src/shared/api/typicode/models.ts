import { ReactNode } from 'react';

export enum ThemeEnum {
  LIGHT = 'app-light-theme',
  DARK = 'app-dark-theme',
  VIOLET = 'app-violet-theme',
}

export enum AppLinkVariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ButtonVariantEnum {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline-red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSizeEnum {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

export enum TextVariantEnum {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlignEnum {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export enum TextSizeEnum {
  M = 'size-m',
  L = 'size-l',
}

export enum CardVariantEnum {
  PRIMARY = 'primary',
  OUTLINE = 'outline',
}

export type FlexDirection = 'row' | 'column';

export type FlexJustify = 'start' | 'end' | 'center' | 'between';

export type FlexAlign = 'start' | 'end' | 'center';

export type FlexGap = '4' | '8' | '16' | '32';

export interface SelectOptions<T extends string> {
  optionValue: T;
  content: string;
}

export interface TabsOptions<T extends string> {
  value: T;
  content: ReactNode;
}
