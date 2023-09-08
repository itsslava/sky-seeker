import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import TsconfigPaths from 'vite-plugin-tsconfig-paths';
import autoprefixer from 'autoprefixer';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TsconfigPaths(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['last 2 versions', 'IE 11'],
        }),
      ],
    },
  },
});
