import { FC, MouseEvent, ReactNode } from 'react';

import { cn } from '@/shared/lib';

import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  handleToggle?: () => void;
}

const Modal: FC<ModalProps> = ({ className, children, isOpen, handleToggle }) => {
  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  const handleClose = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className={cn(styles.modal, mods, [className])}>
      <div className={styles.overlay} onClick={handleToggle}>
        <div className={styles.content} onClick={handleClose}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
