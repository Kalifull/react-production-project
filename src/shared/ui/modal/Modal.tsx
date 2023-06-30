import { FC, MouseEvent, ReactNode, useEffect, useState } from 'react';

import { Mods, cn } from '../../lib';

import { useMountTransition } from '../../lib/hooks';

import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const hasTransitioned = useMountTransition(isMounted, 300);

  const mods: Mods = {
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

  return hasTransitioned ? (
    <div className={cn(styles.modal, mods, [className])}>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.content} onClick={handleClose}>
          {children}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
