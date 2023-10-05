import { FC, memo } from 'react';

import { Mods, cn } from '../../lib';

import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

const Icon: FC<IconProps> = memo(({ className, Svg, inverted }) => {
  const mods: Mods = {
    [styles.icon]: !inverted,
    [styles.inverted]: inverted,
  };

  return <Svg className={cn('', mods, [className])} />;
});

export default Icon;
