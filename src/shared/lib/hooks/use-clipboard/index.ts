import { useState, useCallback, useEffect } from 'react';

interface UseClipboardOptions {
  /** @param {number} [options.ms] The duration of the copied state in milliseconds. */
  ms?: number;
}

interface UseClipboardResponse {
  /** Whether the text has been copied. */
  isCopied: boolean;
  /** A function to copy text to clipboard. */
  copyToClipboard: (text: string) => void;
}

/**
 * Custom hook for handling clipboard functionality.
 *
 * @param {UseClipboardOptions} options Optional options for configuring clipboard behavior.
 * @return {UseClipboardResponse} An object containing the current copied state and a function to copy text to clipboard.
 * @example
 * ```tsx
 * import type { FC } from 'react';
 *
 * const Component: FC = () => {
 *   const { isCopied, copyToClipboard } = useClipboard({ ms: 3000 });
 *
 *   const handleCopyText = useCallback(() => copyToClipboard('Copy text'), [copyToClipboard]);
 *
 *   return <div onClick={handleCopyText}>{isCopied ? 'Copied to clipboard!' : 'Copy to clipboard'}</div>;
 * };
 * ```
 */

const useClipboard = (options?: UseClipboardOptions): UseClipboardResponse => {
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
      timeoutId = setTimeout(() => setIsCopied(false), ms);
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
