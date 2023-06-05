import { FC } from 'react';

import { cn } from '@/shared/lib';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <div className={styles.links}>TEXT</div>
    </div>
  );
};

export default Navbar;
