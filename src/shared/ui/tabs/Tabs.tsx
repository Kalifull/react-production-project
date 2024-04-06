import { memo, useCallback } from 'react';

import { CardVariantEnum, type TabsOptions } from '../../api';

import { Card, HStack } from '..';

import { cn } from '../../lib';

import styles from './Tabs.module.scss';

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabsOptions<T>[];
  type: string;
  onClick?: (value: T) => void;
}

const typedMemo: <T>(c: T) => T = memo;

const Tabs = typedMemo(<T extends string>({ className, tabs, type, onClick }: TabsProps<T>) => {
  const handleClick = useCallback((currentValue: T) => () => onClick?.(currentValue), [onClick]);

  return (
    <HStack
      className={cn(styles.tabs, {}, [className])}
      gap="8"
      role="tablist"
      aria-labelledby="tabs-label"
      stretch
    >
      {tabs.map(({ value, content }, index) => (
        <Card
          key={value}
          role="tab"
          tabIndex={index + 1}
          aria-selected={value === type ? 'true' : 'false'}
          variant={value === type ? CardVariantEnum.PRIMARY : CardVariantEnum.OUTLINE}
          onClick={handleClick(value)}
          onFocus={handleClick(value)}
        >
          {content}
        </Card>
      ))}
    </HStack>
  );
});

export default Tabs;
