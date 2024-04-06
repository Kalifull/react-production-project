import { type FC, Fragment, memo } from 'react';
import { Transition, Listbox as UiListbox } from '@headlessui/react';

import type { ListboxOptions, PopupDirection } from '../../../../api';

import { Button, HStack } from '../../..';

import { type Mods, cn } from '../../../../lib';

import { usePopup } from '../../../../lib/hooks';

import CheckMarkIcon from '../../../../assets/icons/check.svg';

import styles from './Listbox.module.scss';

interface ListboxProps {
  className?: string;
  label?: string;
  value?: string;
  defaultValue: string;
  options: ListboxOptions<string>[];
  readOnly?: boolean;
  direction?: PopupDirection;
  onChange: (value: string) => void;
}

const Listbox: FC<ListboxProps> = memo((props) => {
  const {
    className,
    label,
    value,
    defaultValue,
    options,
    readOnly,
    direction = 'bottom-right',
    onChange,
  } = props;

  const directionClasses = usePopup();

  const classes = [directionClasses[direction]];

  const mods: Mods = {
    [styles.readonly]: readOnly,
  };

  return (
    <HStack className={cn(styles.listbox, mods, [className])} gap="8">
      {label && <span>{`${label}>`}</span>}
      <UiListbox as="div" value={value} disabled={readOnly} onChange={onChange}>
        {({ open }) => (
          <>
            <UiListbox.Button as={Fragment}>
              <Button type="button">{value ?? defaultValue}</Button>
            </UiListbox.Button>

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
              <UiListbox.Options className={cn(styles.options, {}, classes)}>
                {options.map(({ id, optionValue, disabled, content }) => (
                  <UiListbox.Option key={id} as={Fragment} value={optionValue} disabled={disabled}>
                    {({ active, selected }) => (
                      <HStack
                        className={cn(styles.item, {
                          [styles.active]: active,
                          [styles.disabled]: disabled,
                        })}
                        tag="li"
                        justify="center"
                        gap="8"
                      >
                        {selected && <CheckMarkIcon className={cn(styles.icon)} />}
                        {content}
                      </HStack>
                    )}
                  </UiListbox.Option>
                ))}
              </UiListbox.Options>
            </Transition>
          </>
        )}
      </UiListbox>
    </HStack>
  );
});

export default Listbox;
