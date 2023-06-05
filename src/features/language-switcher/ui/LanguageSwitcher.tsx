import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonVariantEnum } from '@/shared/api';

import { Button } from '@/shared/ui';

import { cn } from '@/shared/lib';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className, short }) => {
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
      {t(short ? 'shortLanguage' : 'language')}
    </Button>
  );
};

export default LanguageSwitcher;
