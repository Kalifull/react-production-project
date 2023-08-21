import { FC, memo } from 'react';

import { Code, VStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import type { CodeBlock } from '../../../model/types/article.interface';

interface ArticleCodeBlockProps {
  className?: string;
  block: CodeBlock;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo(({ className, block }) => (
  <VStack className={cn('', {}, [className])} tag="section" aria-label="code-block" stretch>
    <Code text={block.code} />
  </VStack>
));
