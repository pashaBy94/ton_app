import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), nodePolyfills()],
    // base: '/my-twa/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@/icons': path.resolve(__dirname, 'src/shared/assets/icons'),
            '@/images': path.resolve(__dirname, 'src/shared/assets/images'),
            '@/markers': path.resolve(__dirname, 'src/shared/assets/markers'),
            '@/pages': path.resolve(__dirname, 'src/pages'),
            '@/processes': path.resolve(__dirname, 'src/processes'),
            '@/widgets': path.resolve(__dirname, 'src/widgets'),
            '@/features': path.resolve(__dirname, 'src/features'),
            '@/entities': path.resolve(__dirname, 'src/entities'),
            '@/shared': path.resolve(__dirname, 'src/shared'),
        },
    },
});
