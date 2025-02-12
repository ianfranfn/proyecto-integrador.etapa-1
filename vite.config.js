import { resolve } from 'path' /* node */
// https://vite.dev/config/
// https://vite.dev/config/shared-options.html#css-devsourcemap
// https://vite.dev/guide/build.html#multi-page-app
export default {
    // config options
    css: {
        devSourcemap: true // configuramos para ver la linea donde esta escrita la regla css.
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                pages: resolve(__dirname, './src/pages/_alta.html'),
                pages: resolve(__dirname, './src/pages/_contacto.html'),
                pages: resolve(__dirname, './src/pages/_nosotros.html')
            }
        }
    }
}