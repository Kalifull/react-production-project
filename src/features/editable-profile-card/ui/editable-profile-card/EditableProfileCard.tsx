import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Profile,
  ProfileForm,
  profileReducer,
  selectFormData,
  selectProfileError,
  selectProfileReadOnly,
  selectProfileIsLoading,
  selectValidationErrors,
  validateErrorTranslation,
} from '@/entities/profile';

import { TextVariantEnum } from '@/shared/api';

import { Text, Loader, Avatar, VStack, HStack } from '@/shared/ui';

import { Mods, cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import styles from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const EditableProfileCard: FC<EditableProfileCardProps> = memo((props) => {
  const { className, id } = props;

  const { t } = useTranslation('profile');

  const { fetchProfileData, updateProfileForm } = useActionCreators(allActions);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      fetchProfileData(id);
    }
  }, [fetchProfileData, id]);

  const formData = useAppSelector(selectFormData);
  const error = useAppSelector(selectProfileError);
  const readOnly = useAppSelector(selectProfileReadOnly);
  const isLoading = useAppSelector(selectProfileIsLoading);
  const validationErrors = useAppSelector(selectValidationErrors);

  const mods: Mods = {
    [styles.editing]: readOnly,
  };

  const handleChangeProfileForm = useCallback(
    (value: string, field: keyof Profile) => {
      const validationValue = value.replace(/\D+/gm, '');
      const currentValue = field === 'age' ? +validationValue : value;

      updateProfileForm({ value: currentValue, field });
    },
    [updateProfileForm]
  );

  if (isLoading) {
    return (
      <HStack className={cn(styles.card, {}, [className, styles.loader])} justify="center" stretch>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack className={cn(styles.card, {}, [className, styles.error])} justify="center" stretch>
        <Text variant={TextVariantEnum.ERROR} title={t(error)} text={t('refreshPage')} />
      </HStack>
    );
  }

  return (
    <VStack className={cn(styles.card, mods, [className])} align="center" gap="16" stretch>
      {validationErrors?.length &&
        validationErrors.map((validateError) => (
          <Text
            key={validateError}
            variant={TextVariantEnum.ERROR}
            text={t(validateErrorTranslation[validateError])}
          />
        ))}
      <HStack justify="center" stretch>
        <Avatar src={formData?.avatar} size={200} alt={t('avatar')} readOnly={readOnly} />
      </HStack>
      <ProfileForm
        formData={formData}
        readOnly={readOnly}
        onChangeProfileForm={handleChangeProfileForm}
      />
    </VStack>
  );
});

export default withAsyncReducers(EditableProfileCard, {
  reducers: { profileInfo: profileReducer },
});
