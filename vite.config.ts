import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/tuctereb_react_bootstrap/',
    // This changes the out put dir from dist to build
    // comment this out if that isn't relevant for your project
    build: {
        outDir: "build",
    },

    plugins: [react()],
    resolve: {
        alias: {
            // Дозволяє використовувати '@' як шляхи до папки 'src'
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "../node_modules/bootstrap-scss/bootstrap";`,
                // Загальні імпорти SCSS

                quietDeps: true, // Вмикає приглушення попереджень про застарілі функції

                includePaths: ["node_modules"], // Додає node_modules в шляхи для імпорту
            },
        },
    },
})
