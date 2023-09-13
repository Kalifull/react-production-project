import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
  selectProfileData,
  selectProfileReadOnly,
  selectProfileIsLoading,
} from '@/entities/profile';
import { selectAuthData } from '@/entities/user';

import { ButtonVariantEnum } from '@/shared/api';

import { Button, HStack, Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { allActions, useActionCreators, useAppSelector } from '@/shared/lib/hooks';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = memo(
  ({ className }) => {
    const { t } = useTranslation('profile');

    const { setReadOnly, setCancelEdit, saveProfileData } = useActionCreators(allActions);

    const profileData = useAppSelector(selectProfileData);
    const readOnly = useAppSelector(selectProfileReadOnly);
    const isLoading = useAppSelector(selectProfileIsLoading);

    const authData = useAppSelector(selectAuthData);

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
              type="button"
              role="switch"
              aria-checked={!readOnly}
              variant={readOnly ? ButtonVariantEnum.OUTLINE : ButtonVariantEnum.OUTLINE_RED}
              onClick={readOnly ? handleEdit : handleCancelEdit}
              disabled={isLoading}
              data-testid={
                readOnly
                  ? 'editable-profile-card-header-edit'
                  : 'editable-profile-card-header-cancel'
              }
            >
              {readOnly ? t('edit') : t('cancel')}
            </Button>
            {!readOnly && (
              <Button
                type="button"
                variant={ButtonVariantEnum.OUTLINE}
                onClick={handleSaveData}
                disabled={isLoading}
                data-testid="editable-profile-card-header-save"
              >
                {t('save')}
              </Button>
            )}
          </HStack>
        )}
      </HStack>
    );
  }
);
