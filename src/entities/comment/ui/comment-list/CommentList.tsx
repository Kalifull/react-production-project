import { FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TextAlignEnum } from '@/shared/api';

import { Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import {
  selectCommentsInfo,
  selectCommentsIsLoading,
} from '../../model/selectors/select-comments-state';
import { commentsReducer } from '../../model/slice/comment-slice';
import { CommentCard } from '../comment-card/CommentCard';

import styles from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
}

type PageParams = {
  id: string;
};

const CommentList: FC<CommentListProps> = memo(({ className }) => {
  const { t } = useTranslation('article');
  const { id } = useParams<PageParams>();

  const { fetchCommentsByArticleId } = useActionCreators(allActions);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      fetchCommentsByArticleId(id);
    }
  }, [fetchCommentsByArticleId, id]);

  const comments = useAppSelector(selectCommentsInfo.selectAll);
  const isLoading = useAppSelector(selectCommentsIsLoading);

  if (isLoading) {
    return (
      <div className={cn(styles['comments-block'], {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={cn(styles['comments-block'], {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard className={cn(styles.comment)} key={comment.id} comment={comment} />
        ))
      ) : (
        <Text align={TextAlignEnum.LEFT} text={t('noComments')} />
      )}
    </div>
  );
});

export default withAsyncReducers(CommentList, {
  reducers: { commentsInfo: commentsReducer },
});
