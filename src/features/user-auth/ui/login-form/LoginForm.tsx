import FocusLock from 'react-focus-lock';
import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { selectUserError, selectUserIsLoading } from '@/entities/user';

import { ButtonVariantEnum, TextVariantEnum } from '@/shared/api';

import { routesPaths } from '@/shared/config';

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
  const navigate = useNavigate();
  const { t } = useTranslation(['translation', 'auth']);

  const { setUsername, setPassword, fetchUserByUsername } = useActionCreators(allActions);

  const isLoading = useAppSelector(selectUserIsLoading);
  const error = useAppSelector(selectUserError);

  const username = useAppSelector(selectLoginUsername);
  const password = useAppSelector(selectLoginPassword);

  const { Icon, inputType, handleShownPasswordVisibility } = usePasswordToggle();

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

  const handleLoginClick = useCallback(async () => {
    const result = await fetchUserByUsername({ username, password });

    if (result.meta.requestStatus === 'fulfilled') {
      navigate(routesPaths.main);
    }
  }, [fetchUserByUsername, navigate, password, username]);

  return (
    <FocusLock>
      <div className={cn(styles.form, {}, [className])}>
        <Text title={t('authForm', { ns: 'auth' })} className={cn(styles.text)} />

        <Input
          className={cn(styles.input)}
          type="text"
          onChange={handleChangeUsername}
          value={username}
          placeholder={t('username', { ns: 'auth' })}
          readOnly={isLoading}
          required
        />

        <Input
          className={cn(styles.input)}
          type={inputType}
          onChange={handleChangePassword}
          value={password}
          placeholder={t('password', { ns: 'auth' })}
          readOnly={isLoading}
          required
        />

        <div className={cn(styles.icon)} onClick={handleShownPasswordVisibility}>
          {Icon}
        </div>

        {error && <Text text={t(error, { ns: 'auth' })} variant={TextVariantEnum.ERROR} />}

        <Button
          variant={ButtonVariantEnum.OUTLINE}
          className={cn(styles.button)}
          onClick={handleLoginClick}
          disabled={isLoading}
        >
          {t('login')}
        </Button>
      </div>
    </FocusLock>
  );
});

export default withAsyncReducers(LoginForm, {
  reducers: { loginFormInfo: loginReducer },
});
