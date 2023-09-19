import { createRoot } from 'react-dom/client';

import App from '@/app';

import { StoreProvider } from '@/app/providers/store-provider';

import '@/app/styles/index.scss';

import '@/shared/config/i18n';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
