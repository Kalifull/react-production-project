import type { ReactNode, MouseEventHandler } from 'react';

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

export type PopupDirection = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface DropdownOptions<T extends string> {
  id: number;
  href?: T;
  disabled?: boolean;
  content: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
