import { createPortal } from 'react-dom';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';

interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

const Portal: FC<PortalProps> = (props) => {
  const { children, container = document.querySelector('#root') } = props;

  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<Element | null>(null);

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
