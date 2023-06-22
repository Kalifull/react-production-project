import { RootState } from '@/app/providers/store-provider';

export const selectLoginState = (state: RootState) => state.loginFormInfo;
