import { FC, memo } from 'react';

import { TextAlignEnum } from '@/shared/api';

import { Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import type { TextBlock } from '../../../model/types/article.interface';

import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;
  block: TextBlock;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo(({ className, block }) => (
  <section className={cn(styles['text-block'], {}, [className])}>
    {block?.title && (
      <Text className={cn(styles.title)} title={block.title} align={TextAlignEnum.LEFT} />
    )}
    {block.paragraphs.map((paragraph, index) => (
      <Text
        className={cn(styles.paragraph)}
        key={index}
        text={paragraph}
        align={TextAlignEnum.LEFT}
      />
    ))}
  </section>
));
