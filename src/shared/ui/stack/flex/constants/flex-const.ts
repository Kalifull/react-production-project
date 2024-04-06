import type { FlexDirection, FlexJustify, FlexAlign, FlexGap } from '../../../../api';

import styles from '../Flex.module.scss';

export const directionClasses: Record<FlexDirection, string> = {
  row: styles['direction-row'],
  column: styles['direction-column'],
};

export const justifyClasses: Record<FlexJustify, string> = {
  center: styles['justify-center'],
  start: styles['justify-start'],
  end: styles['justify-end'],
  between: styles['justify-between'],
};

export const alignClasses: Record<FlexAlign, string> = {
  center: styles['align-center'],
  start: styles['align-start'],
  end: styles['align-end'],
  stretch: styles['align-stretch'],
};

export const gapClasses: Record<FlexGap, string> = {
  4: styles['gap-4'],
  8: styles['gap-8'],
  16: styles['gap-16'],
  32: styles['gap-32'],
};
