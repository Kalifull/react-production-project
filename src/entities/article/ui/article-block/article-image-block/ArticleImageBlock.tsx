import { FC, memo } from 'react';

import { Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import type { ImageBlock } from '../../../model/types/article.interface';

import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;
  block: ImageBlock;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo(({ className, block }) => (
  <div className={cn(styles['image-block'], {}, [className])}>
    <img className={cn(styles.image)} src={block.src} alt={block.title} />
    <Text text={block.title} />
  </div>
));
