import { useState } from 'react';

import styles from './Counter.module.scss';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className={styles.increment}>
      <h1>{count}</h1>
      <button onClick={handleClick}>increment</button>
    </div>
  );
};
