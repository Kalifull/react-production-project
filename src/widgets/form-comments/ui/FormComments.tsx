import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { SendFormComment, selectFormCommentError } from '@/features/send-form-comment';

import { CommentList } from '@/entities/comment';

import { TextVariantEnum } from '@/shared/api';

import { Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { useAppSelector } from '@/shared/lib/hooks';

import styles from './FormComments.module.scss';

const CommentsDetails: FC = memo(() => {
  const { t } = useTranslation('article');

  const error = useAppSelector(selectFormCommentError);

  return (
    <>
      <Text className={cn(styles.comments)} title={t('comments')} />
      <SendFormComment className={cn(styles['form-comment'])} />
      {error && (
        <Text className={cn(styles.error)} text={t(error)} variant={TextVariantEnum.ERROR} />
      )}
      <CommentList />
    </>
  );
});

export default CommentsDetails;
