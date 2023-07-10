import { FC, memo } from 'react';

import { Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import type { ImageBlock } from '../../../model/types/article.interface';

import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  children?: string;
  block: ImageBlock;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo(({ children, block }) => (
  <div className={cn(styles['image-block'], {}, [children])}>
    <img className={cn(styles.image)} src={block.src} alt={block.title} />
    <Text text={block.title} />
  </div>
));
