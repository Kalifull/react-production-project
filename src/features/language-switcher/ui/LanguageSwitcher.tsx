import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';

import { ThemeButtonEnum } from '@/shared/api';

import { cn } from '@/shared/lib';

import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation('translation');

  const handleSwitchLanguage = () => {
    const currentLanguage = i18n.language === 'ru' ? 'en' : 'ru';

    i18n.changeLanguage(currentLanguage);
  };

  return (
    <Button
      className={cn(styles.button, {}, [className])}
      variant={ThemeButtonEnum.CLEAR}
      onClick={handleSwitchLanguage}
    >
      {t('language')}
    </Button>
  );
};

export default LanguageSwitcher;
