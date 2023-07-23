import { useState, useCallback, useEffect } from 'react';

interface useClipboardOptions {
  ms?: number;
}

interface useClipboardResponse {
  isCopied: boolean;
  copyToClipboard: (text: string) => void;
}

const useClipboard = (options?: useClipboardOptions): useClipboardResponse => {
  const [isCopied, setIsCopied] = useState(false);

  const ms = options?.ms ?? 1000;

  const copyToClipboard = useCallback((text: string) => {
    try {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isCopied) {
      timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, ms);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isCopied, ms]);

  return { isCopied, copyToClipboard };
};

export default useClipboard;
