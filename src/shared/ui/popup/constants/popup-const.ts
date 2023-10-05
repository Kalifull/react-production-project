import type { PopupDirection } from '../../../api';

import styles from '../Popup.module.scss';

export const directionClasses: Record<PopupDirection, string> = {
  'top-left': styles['top-left'],
  'top-right': styles['top-right'],
  'bottom-left': styles['bottom-left'],
  'bottom-right': styles['bottom-right'],
};
