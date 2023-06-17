import { FC } from 'react';

import { Modal } from '@/shared/ui';

import { cn } from '@/shared/lib';

import LoginForm from '../login-form/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose, className }) => (
  <Modal className={cn('', {}, [className])} isOpen={isOpen} onClose={onClose}>
    <LoginForm />
  </Modal>
);

export default LoginModal;
