import { FC, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { ButtonVariantEnum } from '@/shared/api';

import { Button, Input } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { useActionCreators, allActions, useAppSelector } from '@/shared/lib/hooks';

import {
  selectFormCommentText,
  selectFormCommentIsLoading,
} from '../../model/selectors/select-form-comment-state';
import { formCommentReducer } from '../../model/slice/form-comment-slice';

import styles from './SendFormComment.module.scss';

interface SendFormCommentProps {
  className?: string;
}

const SendFormComment: FC<SendFormCommentProps> = memo(({ className }) => {
  const { t } = useTranslation('article');

  const { setText, sendCommentForArticle } = useActionCreators(allActions);

  const text = useAppSelector(selectFormCommentText);
  const isLoading = useAppSelector(selectFormCommentIsLoading);

  const handleChangeTextComment = useCallback(
    (value: string) => {
      setText({ text: value });
    },
    [setText]
  );

  const handleSendComment = useCallback(() => {
    sendCommentForArticle(text);
  }, [sendCommentForArticle, text]);

  return (
    <div className={cn(styles.form, {}, [className])}>
      <Input
        className={cn(styles.input)}
        type="text"
        onChange={handleChangeTextComment}
        value={text}
        placeholder={t('textComment')}
        readOnly={isLoading}
      />
      <Button variant={ButtonVariantEnum.OUTLINE} onClick={handleSendComment} disabled={isLoading}>
        {t('send')}
      </Button>
    </div>
  );
});

export default withAsyncReducers(SendFormComment, {
  reducers: { formCommentInfo: formCommentReducer },
});
