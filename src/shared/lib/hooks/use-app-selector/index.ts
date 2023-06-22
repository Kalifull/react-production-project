import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '@/app/providers/store-provider';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
