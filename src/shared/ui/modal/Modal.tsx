import { type FC, type MouseEvent, type ReactNode, useEffect, useState, useCallback } from 'react';

import { type Mods, cn } from '../../lib';

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

  const { isTransitioned } = useMountTransition({ isMounted, unmountDelay: 300 });

  const mods: Mods = {
    [styles.opened]: isOpen,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }

    return () => setIsMounted(false);
  }, [isOpen]);

  const handleClose = useCallback((event: MouseEvent) => event.stopPropagation(), []);

  return isTransitioned ? (
    <div className={cn(styles.modal, mods, [className])}>
      <div className={cn(styles.overlay)} onClick={onClose}>
        <div className={cn(styles.content)} onClick={handleClose}>
          {children}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
