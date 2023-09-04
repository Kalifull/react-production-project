import {
  CSSProperties,
  FC,
  ForwardedRef,
  ImgHTMLAttributes,
  forwardRef,
  memo,
  useMemo,
} from 'react';

import { Mods, cn } from '../../lib';

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
  forwardRef((props, ref) => {
    const { className, src, size, alt, readOnly, ...restProps } = props;

    const style = useMemo<CSSProperties>(() => {
      return { width: size || 100, height: size || 100 };
    }, [size]);

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
