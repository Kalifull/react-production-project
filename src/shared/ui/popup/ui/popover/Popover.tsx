import { FC, Fragment, ReactNode, memo } from 'react';
import { Transition, Popover as UiPopover } from '@headlessui/react';

import type { PopupDirection } from '../../../../api';

import { cn } from '../../../../lib';

import { usePopup } from '../../../../lib/hooks';

import styles from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  children: ReactNode;
  trigger: ReactNode;
  direction?: PopupDirection;
}

const Popover: FC<PopoverProps> = memo((props) => {
  const { className, trigger, direction = 'bottom-left', children } = props;

  const directionClasses = usePopup();

  const classes = [directionClasses[direction]];

  return (
    <UiPopover className={cn(styles.popover, {}, [className])}>
      {({ open }) => (
        <>
          <UiPopover.Button as={Fragment}>{trigger}</UiPopover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter={cn(styles.enter)}
            enterFrom={cn(styles['enter-from'])}
            enterTo={cn(styles['enter-to'])}
            leave={cn(styles.leave)}
            leaveFrom={cn(styles['leave-from'])}
            leaveTo={cn(styles['leave-to'])}
          >
            <UiPopover.Panel className={cn(styles.panel, {}, classes)}>{children}</UiPopover.Panel>
          </Transition>
        </>
      )}
    </UiPopover>
  );
});

export default Popover;
