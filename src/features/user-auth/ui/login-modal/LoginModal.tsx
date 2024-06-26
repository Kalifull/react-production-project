import { type FC, Suspense } from 'react';

import { Loader, Modal } from '@/shared/ui';

import { cn } from '@/shared/lib';

import LoginForm from '../login-form/LazyLoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal className={cn('', {}, [className])} isOpen={isOpen} onClose={onClose}>
    <Suspense fallback={<Loader />}>
      <LoginForm />
    </Suspense>
  </Modal>
);

export default LoginModal;
