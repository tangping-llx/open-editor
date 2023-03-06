// import { openEditor } from './core'
import createOpenEditor from 'launch-editor-middleware'
import { createUnplugin} from 'unplugin'

const PATH = '/__open-in-editor'

const unpluginOpenEditor = createUnplugin((options: Options = { editor: 'code' }) => {
  const { editor } = options
  return {
    name: 'unplugin-open-editor',
    vite: {
      async configureServer (server) {
        server.middlewares.use(PATH, createOpenEditor(editor))
      },
      apply: 'serve'
    },
    webpack(compiler) {
      compiler.hooks.environment.tap('unplugin-open-editor', async () => {
        compiler.options.devServer = {
          ...compiler.options.devServer,
          before(app) {
            app.use(PATH, createOpenEditor(editor))
            console.log(app);
          }
        }

        console.log(compiler.options.devServer);
      })
    }
  }
})

export default unpluginOpenEditor

export interface Options {
  editor?: string
}
