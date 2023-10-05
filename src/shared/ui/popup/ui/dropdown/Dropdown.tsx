import { FC, Fragment, ReactNode, memo } from 'react';
import { Menu, Transition } from '@headlessui/react';

import type { DropdownOptions, PopupDirection } from '../../../../api';

import { AppLink, Button } from '../../..';

import { cn } from '../../../../lib';

import { usePopup } from '../../../../lib/hooks';

import styles from './Dropdown.module.scss';

interface DropdownProps {
  className?: string;
  trigger: ReactNode;
  items: DropdownOptions<string>[];
  direction?: PopupDirection;
}

const Dropdown: FC<DropdownProps> = memo((props) => {
  const { className, trigger, items, direction = 'bottom-right' } = props;

  const directionClasses = usePopup();

  const classes = [directionClasses[direction]];

  return (
    <Menu className={cn(styles.menu, {}, [className])} as="div">
      {({ open }) => (
        <>
          <Menu.Button as={Fragment}>{trigger}</Menu.Button>

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
            <Menu.Items className={cn(styles.items, {}, classes)}>
              {items.map(({ id, href, disabled, content, handleClick }) => {
                const item = ({ active }: { active: boolean }) => (
                  <Button
                    className={cn(styles.item, { [styles.active]: active })}
                    disabled={disabled}
                    onClick={handleClick}
                  >
                    {content}
                  </Button>
                );

                return href ? (
                  <Menu.Item key={id} as={AppLink} to={href} disabled={disabled} refName="href">
                    {item}
                  </Menu.Item>
                ) : (
                  <Menu.Item key={id} as={Fragment} disabled={disabled}>
                    {item}
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
});

export default Dropdown;
