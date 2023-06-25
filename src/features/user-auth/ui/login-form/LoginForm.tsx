import FocusLock from 'react-focus-lock';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { selectUserState } from '@/entities/user';

import { ButtonVariantEnum, TextVariantEnum } from '@/shared/api';

import { Button, Input, Text } from '@/shared/ui';

import { cn } from '@/shared/lib';

import { withAsyncReducers } from '@/shared/lib/hoc';

import {
  useActionCreators,
  useAppSelector,
  usePasswordToggle,
  allActions,
} from '@/shared/lib/hooks';

import { selectLoginUsername, selectLoginPassword } from '../../model/selectors/select-login-state';
import { loginReducer } from '../../model/slice/login-slice';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation(['translation', 'auth']);

  const { setUsername, setPassword, fetchLoginByUsername } = useActionCreators(allActions);

  const { error, isLoading } = useAppSelector(selectUserState);

  const username = useAppSelector(selectLoginUsername);
  const password = useAppSelector(selectLoginPassword);

  const { icon, inputType, handleShownPasswordVisibility } = usePasswordToggle();

  const handleChangeUsername = useCallback(
    (value: string) => {
      setUsername({ username: value.trim() });
    },
    [setUsername]
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      setPassword({ password: value.trim() });
    },
    [setPassword]
  );

  const handleClick = useCallback(() => {
    fetchLoginByUsername({ username, password });
  }, [fetchLoginByUsername, password, username]);

  return (
    <div className={cn(styles.form, {}, [className])}>
      <Text title={t('authForm', { ns: 'auth' })} />

      <FocusLock group="input">
        <Input
          type="text"
          className={cn(styles.input)}
          onChange={handleChangeUsername}
          value={username}
          placeholder={t('username')}
        />

        <Input
          type={inputType}
          className={cn(styles.input)}
          onChange={handleChangePassword}
          value={password}
          placeholder={t('password')}
        />

        <div className={cn(styles.icon)} onClick={handleShownPasswordVisibility}>
          {icon}
        </div>
      </FocusLock>

      {error && <Text text={t(`${error}`, { ns: 'auth' })} variant={TextVariantEnum.ERROR} />}

      <Button
        variant={ButtonVariantEnum.OUTLINE}
        className={cn(styles.button)}
        onClick={handleClick}
        disabled={isLoading}
      >
        {t('login')}
      </Button>
    </div>
  );
});

export default withAsyncReducers(LoginForm, { reducers: { loginFormInfo: loginReducer } });
