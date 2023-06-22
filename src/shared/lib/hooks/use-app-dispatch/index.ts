import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/providers/store-provider';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
