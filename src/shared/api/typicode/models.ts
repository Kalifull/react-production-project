import { ReactNode, MouseEventHandler } from 'react';

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

export type FlexJustify = 'center' | 'start' | 'end' | 'between';

export type FlexAlign = 'center' | 'start' | 'end' | 'stretch';

export type FlexGap = '4' | '8' | '16' | '32';

export interface SelectOptions<T extends string> {
  optionValue: T;
  content: string;
}

export interface TabsOptions<T extends string> {
  value: T;
  content: ReactNode;
}

export interface ListboxOptions<T extends string> {
  id: number;
  optionValue: T;
  content: ReactNode;
  disabled?: boolean;
}

export type ListboxDirection = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface DropdownOptions<T extends string> {
  id: number;
  href?: T;
  disabled?: boolean;
  content: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export type DropdownDirection = ListboxDirection;
