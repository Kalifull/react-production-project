import { type FC, memo } from 'react';

import { VStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import type { ImageBlock } from '../../../model/types/article.interface';

import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;
  block: ImageBlock;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo(({ className, block }) => (
  <VStack className={cn('', {}, [className])} tag="figure" align="center" gap="8" stretch>
    <img className={cn(styles.image)} src={block.src} alt={block.title} />
    <figcaption>{block.title}</figcaption>
  </VStack>
));
