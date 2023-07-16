import { useCallback, useEffect, useRef, useState, MutableRefObject } from 'react';

type UseHoverResult = [MutableRefObject<HTMLDivElement | null>, boolean];

const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return [ref, isHover];
};

export default useHover;
