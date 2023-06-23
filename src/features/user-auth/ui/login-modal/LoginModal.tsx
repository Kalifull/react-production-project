import { FC, Suspense } from 'react';

import { Loader, Modal } from '@/shared/ui';

import { cn } from '@/shared/lib';

import LazyLoginForm from '../login-form/LazyLoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose, className }) => (
  <Modal className={cn('', {}, [className])} isOpen={isOpen} onClose={onClose}>
    <Suspense fallback={<Loader />}>
      <LazyLoginForm />
    </Suspense>
  </Modal>
);

export default LoginModal;
