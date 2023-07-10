import { FC, memo } from 'react';

import { cn } from '../../lib';

import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const Icon: FC<IconProps> = memo(({ className, Svg }) => (
  <Svg className={cn(styles.icon, {}, [className])} />
));

export default Icon;
