import { type FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TextAlignEnum } from '@/shared/api';

import { Text, VStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { actionsCreators, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import {
  selectCommentsInfo,
  selectCommentsIsLoading,
} from '../../model/selectors/select-comments-state';
import { commentsReducer } from '../../model/slice/comment-slice';
import { CommentCard } from '../comment-card/CommentCard';

interface CommentListProps {
  className?: string;
}

type PageParams = {
  id: string;
};

const CommentList: FC<CommentListProps> = memo(({ className }) => {
  const { t } = useTranslation('article');
  const { id } = useParams<PageParams>();

  const { fetchCommentsByArticleId } = useActionCreators(actionsCreators);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      fetchCommentsByArticleId(id);
    }
  }, [fetchCommentsByArticleId, id]);

  const comments = useAppSelector(selectCommentsInfo.selectAll);
  const isLoading = useAppSelector(selectCommentsIsLoading);

  if (isLoading) {
    return (
      <VStack className={cn('', {}, [className])} gap="8" stretch>
        <CommentCard count={3} isLoading />
      </VStack>
    );
  }

  return (
    <VStack className={cn('', {}, [className])} gap="8" stretch>
      {comments?.length ? (
        comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
      ) : (
        <Text align={TextAlignEnum.LEFT} text={t('noComments')} />
      )}
    </VStack>
  );
});

export default withAsyncReducers(CommentList, {
  reducers: { commentsInfo: commentsReducer },
});
