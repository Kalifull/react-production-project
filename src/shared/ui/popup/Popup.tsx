import type { FC, ReactNode } from 'react';

import { PopupProvider } from '../../context';

import { cn } from '../../lib';

import Dropdown from './ui/dropdown/Dropdown';
import Listbox from './ui/listbox/Listbox';
import Popover from './ui/popover/Popover';

import styles from './Popup.module.scss';

interface PopupSubComponents {
  Dropdown: typeof Dropdown;
  Listbox: typeof Listbox;
  Popover: typeof Popover;
}

interface PopupProps {
  className?: string;
  children: ReactNode;
}

const Popup: FC<PopupProps> & PopupSubComponents = ({ className, children }) => (
  <PopupProvider className={cn(styles.popup, {}, [className])}>{children}</PopupProvider>
);

Popup.Dropdown = Dropdown;
Popup.Listbox = Listbox;
Popup.Popover = Popover;

export default Popup;
