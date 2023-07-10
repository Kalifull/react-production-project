import { CSSProperties, FC, ImgHTMLAttributes, memo, useMemo } from 'react';

import { Mods, cn } from '../../lib';

import styles from './Avatar.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  readOnly?: boolean;
}

const Avatar: FC<AvatarProps> = memo((props) => {
  const { className, src, size, alt, readOnly, ...restProps } = props;

  const style = useMemo<CSSProperties>(() => {
    return { width: size || 100, height: size || 100 };
  }, [size]);

  const mods: Mods = {
    [styles.editing]: readOnly,
  };

  return (
    <img
      className={cn(styles.avatar, mods, [className])}
      style={style}
      src={src}
      alt={alt}
      {...restProps}
    />
  );
});

export default Avatar;
