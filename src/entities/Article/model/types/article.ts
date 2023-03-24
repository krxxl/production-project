import { User } from 'entities/User';

export enum ArticleBlockType {
  TEXT='TEXT',
  CODE='CODE',
  IMAGE='IMAGE'
}

export interface ArticleBlockBase {
  id: string,
  type: ArticleBlockType,
}

export interface ArticleCodeBlock extends ArticleBlockBase{
  type: ArticleBlockType.CODE,
  code: string
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE,

  src: string,
  title: string,
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT,
  title?: string,
  paragraphs: string[],
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock;

export enum ArticleView {
  BIG = 'BIG',
  SMALL ='SMALL'
}
export enum ArticleType {
  IT='IT',
  SCIENCE='SCIENCE',
  GEOGRAPHY='GEOGRAPHY'
}
export interface Article {
  id: string,
  title?: string
  subtitle?: string
  img?: string
  views?: number,
  createdAt?: string
  type?: ArticleType[],
  blocks?: ArticleBlock[],
  user?: User,
}
