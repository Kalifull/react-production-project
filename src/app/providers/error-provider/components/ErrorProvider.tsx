import { type FC, type ReactNode, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { PageError } from '@/widgets/page-error';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorProvider: FC<ErrorBoundaryProps> = ({ children }) => {
  const location = useLocation();

  const handleReset = useCallback(() => window.location.reload(), []);

  return (
    <ReactErrorBoundary FallbackComponent={PageError} onReset={handleReset} resetKeys={[location]}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorProvider;
