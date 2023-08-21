import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { selectProfileData } from '@/entities/profile';
import { selectAuthData } from '@/entities/user';

import { ButtonVariantEnum } from '@/shared/api';

import { Button, HStack, Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

interface ProfilePageHeaderProps {
  className?: string;
  isLoading?: boolean;
  readOnly?: boolean;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = memo((props) => {
  const { className, isLoading, readOnly } = props;

  const { t } = useTranslation('profile');

  const { setReadOnly, setCancelEdit, saveProfileData } = useActionCreators(allActions);

  const authData = useAppSelector(selectAuthData);
  const profileData = useAppSelector(selectProfileData);

  const isCanEditProfile = authData?.id === profileData?.id;

  const handleEdit = useCallback(() => {
    setReadOnly({ readOnly: false });
  }, [setReadOnly]);

  const handleCancelEdit = useCallback(() => {
    setCancelEdit({ readOnly: true });
  }, [setCancelEdit]);

  const handleSaveData = useCallback(() => {
    saveProfileData();
  }, [saveProfileData]);

  return (
    <HStack className={cn('', {}, [className])} justify="between" stretch>
      <Text title={t('profileUser')} />
      {isCanEditProfile && (
        <HStack gap="8">
          <Button
            variant={readOnly ? ButtonVariantEnum.OUTLINE : ButtonVariantEnum.OUTLINE_RED}
            onClick={readOnly ? handleEdit : handleCancelEdit}
            disabled={isLoading}
          >
            {readOnly ? t('edit') : t('cancel')}
          </Button>
          {!readOnly && (
            <Button
              variant={ButtonVariantEnum.OUTLINE}
              onClick={handleSaveData}
              disabled={isLoading}
            >
              {t('save')}
            </Button>
          )}
        </HStack>
      )}
    </HStack>
  );
});
