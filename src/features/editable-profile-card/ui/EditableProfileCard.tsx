import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileForm, selectFormData, profileReducer, Profile } from '@/entities/profile';

import { TextVariantEnum } from '@/shared/api';

import { Text, Loader, Avatar, VStack, HStack } from '@/shared/ui';

import { Mods, cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

import styles from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
  className?: string;
  isLoading?: boolean;
  error?: string | null;
  readOnly?: boolean;
}

const EditableProfileCard: FC<EditableProfileCardProps> = memo((props) => {
  const { className, isLoading, error, readOnly } = props;

  const { t } = useTranslation('profile');

  const { updateProfileForm } = useActionCreators(allActions);

  const formData = useAppSelector(selectFormData);

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
    <VStack className={cn(styles.card, mods, [className])} gap="16" stretch>
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
