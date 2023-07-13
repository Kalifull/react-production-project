import { FC, memo } from 'react';

import { TextAlignEnum } from '@/shared/api';

import { AppLink, Avatar, Skeleton, Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { routesPaths } from '@/shared/config';

import type { Comment } from '../../model/types/comment.interface';

import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={cn(styles['comment-card'], {}, [className])}>
        <div className={cn(styles.header)}>
          <Skeleton width={60} height={60} border="50%" />
          <Skeleton className={cn(styles.username)} width="30%" height={24} />
        </div>
        <Skeleton className={cn(styles.text)} width="100%" height={24} />
      </div>
    );
  }

  return comment ? (
    <div className={cn(styles['comment-card'], {}, [className])}>
      <AppLink className={cn(styles.header)} to={`${routesPaths.profile}${comment.user.id}`}>
        {comment.user.avatar && <Avatar src={comment.user.avatar} size={60} />}
        <Text className={cn(styles.username)} title={comment.user.username} />
      </AppLink>
      <Text className={cn(styles.text)} text={comment.text} align={TextAlignEnum.LEFT} />
    </div>
  ) : null;
});
