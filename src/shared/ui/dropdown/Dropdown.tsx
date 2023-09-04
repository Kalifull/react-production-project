import { FC, Fragment, ReactNode, memo } from 'react';
import { Menu, Transition } from '@headlessui/react';

import type { DropdownOptions, DropdownDirection } from '../../api';
import { AppLink, Button } from '..';
import { cn } from '../../lib';

import styles from './Dropdown.module.scss';

const directionClasses: Record<DropdownDirection, string> = {
  'top-left': styles['top-left'],
  'top-right': styles['top-right'],
  'bottom-left': styles['bottom-left'],
  'bottom-right': styles['bottom-right'],
};

interface DropdownProps {
  className?: string;
  trigger: ReactNode;
  items: DropdownOptions<string>[];
  direction?: DropdownDirection;
}

const Dropdown: FC<DropdownProps> = memo((props) => {
  const { className, trigger, items, direction = 'bottom-right' } = props;

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
