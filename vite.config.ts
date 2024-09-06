import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default ({
    envPrefix: "REACT_ENV",

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
                // Підключення Bootstrap SCSS
                additionalData: `@import "../node_modules/bootstrap-scss/bootstrap";`,
                // Вимкнення попереджень
                quietDeps: true, // це працює у новіших версіях Vite/Sass
                includePaths: ["node_modules"],
            },
        },
    },
})
