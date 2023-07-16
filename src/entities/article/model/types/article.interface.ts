import { User } from '../../../user';

export enum ArticleBlockTypeEnum {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

interface ArticleBlockBase {
  id: string;
  type: ArticleBlockTypeEnum;
}

export interface TextBlock extends ArticleBlockBase {
  type: ArticleBlockTypeEnum.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface CodeBlock extends ArticleBlockBase {
  type: ArticleBlockTypeEnum.CODE;
  code: string;
}

export interface ImageBlock extends ArticleBlockBase {
  type: ArticleBlockTypeEnum.IMAGE;
  src: string;
  title: string;
}

export type ArticleBlock = TextBlock | CodeBlock | ImageBlock;

export enum ArticleTypeEnum {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleViewEnum {
  LIST = 'list',
  TILE = 'tile',
}

export interface Article {
  id: string;
  user: User;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  userId: string;
  type: ArticleTypeEnum[];
  blocks: ArticleBlock[];
}
