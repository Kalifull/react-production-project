import { FC, memo } from 'react';

import { TextAlignEnum } from '@/shared/api';

import { Text, VStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import type { TextBlock } from '../../../model/types/article.interface';

interface ArticleTextBlockProps {
  className?: string;
  block: TextBlock;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo(({ className, block }) => (
  <VStack className={cn('', {}, [className])} gap="8" tag="section" aria-label="text-block" stretch>
    {block?.title && <Text title={block.title} align={TextAlignEnum.LEFT} />}
    {block.paragraphs.map((paragraph, index) => (
      <Text key={index} text={paragraph} align={TextAlignEnum.LEFT} />
    ))}
  </VStack>
));
