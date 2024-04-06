import { createPortal } from 'react-dom';
import { type FC, type ReactNode, useEffect, useRef, useState } from 'react';

interface PortalProps {
  children: ReactNode;
  container?: Element;
}

const Portal: FC<PortalProps> = ({ children, container = document.querySelector('#root') }) => {
  const containerRef = useRef<Element | null>(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    containerRef.current = container;

    return () => setIsMounted(false);
  }, [container]);

  if (!container) {
    return <>{children}</>;
  }

  return isMounted && !!containerRef.current ? createPortal(children, containerRef.current) : null;
};

export default Portal;
