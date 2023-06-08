import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

const Portal: FC<PortalProps> = (props) => {
  const { children, container = document.querySelector('.app') } = props;

  return createPortal(children, container);
};

export default Portal;
