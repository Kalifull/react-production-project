import { type FC, memo, useCallback, useEffect } from 'react';
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

import { type Mods, cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { actionsCreators, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import { EditableProfileCardHeader } from '../editable-profile-card-header/EditableProfileCardHeader';

import styles from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const EditableProfileCard: FC<EditableProfileCardProps> = memo(({ className, id }) => {
  const { t } = useTranslation('profile');

  const { fetchProfileData, updateProfileForm } = useActionCreators(actionsCreators);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
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
    <VStack className={cn('', {}, [className])} align="center" gap="16" stretch>
      <EditableProfileCardHeader />
      {validationErrors?.length &&
        validationErrors.map((validateError) => (
          <Text
            key={validateError}
            variant={TextVariantEnum.ERROR}
            text={t(validateErrorTranslation[validateError])}
            data-testid="editable-profile-card-error"
          />
        ))}
      <VStack className={cn(styles.card, mods)} align="center" gap="16" stretch>
        <HStack justify="center" stretch>
          <Avatar src={formData?.avatar} size={200} alt={t('avatar')} readOnly={readOnly} />
        </HStack>
        <ProfileForm
          formData={formData}
          readOnly={readOnly}
          onChangeProfileForm={handleChangeProfileForm}
        />
      </VStack>
    </VStack>
  );
});

export default withAsyncReducers(EditableProfileCard, {
  reducers: { profileInfo: profileReducer },
});
