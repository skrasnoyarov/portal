import { Article, getArticleError, getArticleProps, getArticleStatus, IArticleProps, useArticle } from 'entities/Article'
import { FC, memo } from 'react'
import styles from './ArticleCard.module.scss'
import { useSelector } from 'react-redux'
import withError from 'shared/lib/HOCS/withError'

export interface IArticleCardProps extends JSX.IntrinsicAttributes {
  id: string
}

const Card = withError<IArticleProps &
{ className?: string, error?: { title: string, text: string } }
>(Article)
const ArticleCard: FC<IArticleCardProps> = ({ id }) => {
  const { isLoading, data: article, error } = useArticle(id)

  return (
    <div className={styles.articleCard}>
        <Card loading={isLoading} error={error} article={article} />
    </div>
  )
}

export default memo<IArticleCardProps>(ArticleCard)