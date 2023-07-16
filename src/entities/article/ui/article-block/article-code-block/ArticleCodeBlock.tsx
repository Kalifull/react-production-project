import { FC, memo } from 'react';

import { Code } from '@/shared/ui';

import { cn } from '@/shared/lib';

import type { CodeBlock } from '../../../model/types/article.interface';

import styles from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
  block: CodeBlock;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo(({ className, block }) => (
  <div className={cn(styles['code-block'], {}, [className])}>
    <Code text={block.code} />
  </div>
));
