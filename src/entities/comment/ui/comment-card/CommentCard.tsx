import { type FC, memo } from 'react';

import { TextAlignEnum } from '@/shared/api';

import { routesPaths } from '@/shared/config';

import { AppLink, Avatar, HStack, Skeleton, Text, VStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import type { Comment } from '../../model/types/comment.interface';

import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  count?: number;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo(
  ({ className, count = 1, comment, isLoading }) => {
    if (isLoading) {
      return Array(count)
        .fill(null)
        .map((_, index) => (
          <VStack
            className={cn(styles['comment-card'], {}, [className])}
            key={index}
            gap="8"
            stretch
          >
            <HStack gap="8" stretch>
              <Skeleton width={60} height={60} border="50%" />
              <Skeleton className={cn(styles.username)} width="30%" height={24} />
            </HStack>
            <Skeleton width="100%" height={24} />
          </VStack>
        ));
    }

    return (
      comment && (
        <VStack className={cn(styles['comment-card'], {}, [className])} gap="8" stretch>
          <AppLink className={cn(styles.header)} to={`${routesPaths.profile}${comment.user.id}`}>
            {comment.user.avatar && (
              <Avatar src={comment.user.avatar} size={60} alt={comment.user.username} />
            )}
            <Text className={cn(styles.username)} title={comment.user.username} />
          </AppLink>
          <Text text={comment.text} align={TextAlignEnum.LEFT} />
        </VStack>
      )
    );
  }
);
