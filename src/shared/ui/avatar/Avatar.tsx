import {
  type FC,
  type CSSProperties,
  type ForwardedRef,
  type ImgHTMLAttributes,
  forwardRef,
  memo,
  useMemo,
} from 'react';

import { type Mods, cn } from '../../lib';

import styles from './Avatar.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  readOnly?: boolean;
  ref?: ForwardedRef<HTMLImageElement>;
}

const Avatar: FC<AvatarProps> = memo(
  forwardRef(({ className, src, size, alt, readOnly, ...restProps }, ref) => {
    const style = useMemo<CSSProperties>(
      () => ({ width: size || 100, height: size || 100 }),
      [size]
    );

    const mods: Mods = {
      [styles.editing]: readOnly,
    };

    return (
      <img
        ref={ref}
        className={cn(styles.avatar, mods, [className])}
        style={style}
        src={src}
        alt={alt}
        {...restProps}
      />
    );
  })
);

export default Avatar;
