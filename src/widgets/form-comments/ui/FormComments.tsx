import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { SendFormComment, selectFormCommentError } from '@/features/send-form-comment';

import { CommentList } from '@/entities/comment';

import { TextSizeEnum, TextVariantEnum } from '@/shared/api';

import { Text, VStack } from '@/shared/ui';

import { useAppSelector } from '@/shared/lib/hooks';

const CommentsDetails: FC = memo(() => {
  const { t } = useTranslation('article');

  const error = useAppSelector(selectFormCommentError);

  return (
    <VStack align="center" gap="16" stretch>
      <Text size={TextSizeEnum.L} title={t('comments')} />
      <SendFormComment />
      {error && <Text text={t(error)} variant={TextVariantEnum.ERROR} />}
      <CommentList />
    </VStack>
  );
});

export default CommentsDetails;
