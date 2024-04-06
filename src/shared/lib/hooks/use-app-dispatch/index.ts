import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@/app/providers/store-provider';

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
