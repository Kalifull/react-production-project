import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@/app/providers/store-provider';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
