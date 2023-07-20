import { useCallback, useEffect, useRef, useState, MutableRefObject } from 'react';

interface UseHoverResponse {
  ref: MutableRefObject<HTMLDivElement | null>;
  isHover: boolean;
}

const useHover = (): UseHoverResponse => {
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

  return { ref, isHover };
};

export default useHover;
