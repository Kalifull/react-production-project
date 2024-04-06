import { type FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/page';

import { EditableProfileCard } from '@/features/editable-profile-card';

import { VStack } from '@/shared/ui';

import { cn } from '@/shared/lib';

import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

type PageParams = {
  id: string;
};

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
  const { id } = useParams<PageParams>();

  return (
    <Page className={cn(styles['profile-page'], {}, [className])}>
      <VStack gap="16" stretch>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
