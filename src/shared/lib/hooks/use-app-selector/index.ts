import { TypedUseSelectorHook, useSelector } from 'react-redux';

import type { RootState } from '@/app/providers/store-provider';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
