import { ArticleTextBlock } from './article-text-block/ArticleTextBlock';
import { ArticleCodeBlock } from './article-code-block/ArticleCodeBlock';
import { ArticleImageBlock } from './article-image-block/ArticleImageBlock';

import {
  TextBlock,
  CodeBlock,
  ImageBlock,
  ArticleBlock,
  ArticleBlockTypeEnum,
} from '../../model/types/article.interface';

export const mappingArticlesBlock = (block: ArticleBlock) => {
  return {
    [ArticleBlockTypeEnum.TEXT]: <ArticleTextBlock key={block.id} block={block as TextBlock} />,
    [ArticleBlockTypeEnum.CODE]: <ArticleCodeBlock key={block.id} block={block as CodeBlock} />,
    [ArticleBlockTypeEnum.IMAGE]: <ArticleImageBlock key={block.id} block={block as ImageBlock} />,
  };
};
