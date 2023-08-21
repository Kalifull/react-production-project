import { memo, useCallback } from 'react';

import { CardVariantEnum, TabsOptions } from '../../api';
import { cn } from '../../lib';

import Card from '../card/Card';

import styles from './Tabs.module.scss';

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabsOptions<T>[];
  type: string;
  onClick?: (value: T) => void;
}

const typedMemo: <T>(c: T) => T = memo;

const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
  const { className, tabs, type, onClick } = props;

  const handleClick = useCallback(
    (currentValue: T) => () => {
      onClick?.(currentValue);
    },
    [onClick]
  );

  return (
    <div className={cn(styles.tabs, {}, [className])}>
      {tabs.map(({ value, content }) => (
        <Card
          key={value}
          variant={value === type ? CardVariantEnum.PRIMARY : CardVariantEnum.OUTLINE}
          onClick={handleClick(value)}
        >
          {content}
        </Card>
      ))}
    </div>
  );
});

export default Tabs;
