import { FC } from 'react';
import FocusLock from 'react-focus-lock';
import { useTranslation } from 'react-i18next';

import { Button, Input } from '@/shared/ui';

import { cn } from '@/shared/lib';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation('translation');

  return (
    <div className={cn(styles.form, {}, [className])}>
      <FocusLock group="input">
        <Input type="text" className={cn(styles.input)} placeholder={t('username')} />
        <Input type="text" className={cn(styles.input)} placeholder={t('password')} />
      </FocusLock>
      <Button className={cn(styles.button)}>{t('login')}</Button>
    </div>
  );
};

export default LoginForm;
