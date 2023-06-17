import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

const Portal: FC<PortalProps> = (props) => {
  const { children, container = document.querySelector('#root') } = props;

  if (!container) {
    return <>{children}</>;
  }

  return createPortal(children, container);
};

export default Portal;
