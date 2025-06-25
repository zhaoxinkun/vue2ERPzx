const {defineConfig} = require('@vue/cli-service')
const path = require("node:path");
module.exports = defineConfig(
    {
        transpileDependencies: true,
        devServer: {
            open: true,
            port: 8080,
            host: 'localhost',
        },
        css: {
            loaderOptions: {
                scss: {
                    // additionalData: `@import "src/style/index.scss";`
                }
            }
        },
        configureWebpack: {
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, 'src'),
                }
            }
        }
    },
)