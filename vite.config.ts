import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), svgr({ exportAsDefault: true })],
    server: {
      port: 4000,
      open: true,
    },
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
      __API__: JSON.stringify(env.API_ENV),
      __IS_DEV__: JSON.stringify(env.DEV_ENV),
      __PROJECT__: JSON.stringify(env.PROJECT_ENV),
    },
  };
});
