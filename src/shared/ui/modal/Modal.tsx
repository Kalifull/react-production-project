import { FC, MouseEvent, ReactNode, useEffect, useState } from 'react';

import { cn } from '@/shared/lib';

import { useMountTransition } from '@/shared/lib/hooks';

import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const hasTransitionedIn = useMountTransition(isMounted, 300);

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }

    return () => setIsMounted(false);
  }, [isOpen]);

  const handleClose = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    hasTransitionedIn && (
      <div className={cn(styles.modal, mods, [className])}>
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.content} onClick={handleClose}>
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
