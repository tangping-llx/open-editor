const { defineConfig } = require('@vue/cli-service')
const openEditor = require('../dist/webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      openEditor.default({
        editor: 'code'
      })
    ],
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000'
        }
      },
      before (app) {
        console.log(app)
      }
    }
  }
})
