export enum IArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export interface IArticleBlockBase {
  id: string
  type: IArticleBlockType
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: IArticleBlockType.CODE
  code: string
}

export interface IArticleImageBlock extends IArticleBlockBase {
  type: IArticleBlockType.IMAGE
  src: string
  title: string
}

export interface IArticleTextBlock extends IArticleBlockBase {
  type: IArticleBlockType.TEXT
  paragraphs: string[]
  title?: string
}

export type IArticleBlock = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock

export enum IArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export interface IArticle {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: IArticleType[]
  blocks: IArticleBlock[]
}

export interface ArticleSchema {
  data?: IArticle
}