import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonVariantEnum } from '@/shared/api';

import { Button } from '@/shared/ui';

import { cn } from '@/shared/lib';

interface LanguageSwitcherProps {
  className?: string;
  isCollapsed?: boolean;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(({ className, isCollapsed }) => {
  const { t, i18n } = useTranslation('translation');

  const handleSwitchLanguage = () => {
    const currentLanguage = i18n.language === 'ru' ? 'en' : 'ru';

    i18n.changeLanguage(currentLanguage);
  };

  return (
    <Button
      className={cn('', {}, [className])}
      variant={ButtonVariantEnum.CLEAR}
      onClick={handleSwitchLanguage}
    >
      {t(isCollapsed ? 'shortLanguage' : 'language')}
    </Button>
  );
});

export default LanguageSwitcher;
