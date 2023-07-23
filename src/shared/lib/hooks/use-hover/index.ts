import { useCallback, useEffect, useRef, useState, MutableRefObject } from 'react';

interface UseHoverResponse<T> {
  ref: MutableRefObject<T | null>;
  isHover: boolean;
}

const useHover = <T extends HTMLElement>(): UseHoverResponse<T> => {
  const [isHover, setIsHover] = useState(false);
  const targetRef = useRef<T | null>(null);

  const handleMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  useEffect(() => {
    const targetElement = targetRef.current;

    if (!targetElement) {
      return;
    }

    targetElement.addEventListener('mouseenter', handleMouseEnter);
    targetElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      targetElement.removeEventListener('mouseenter', handleMouseEnter);
      targetElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return { ref: targetRef, isHover };
};

export default useHover;
