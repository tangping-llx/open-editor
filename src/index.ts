import createOpenEditor from 'launch-editor-middleware'
import { createServer } from 'http'
import { createServer as _createServer } from 'net'

export async function openEditor(specifiedEditor: string = 'code', port: number | string = 5001) {

  const server = createServer()

  server.on('request', (req, res) => {
      const next = () => {
        res.end(JSON.stringify({
        data: 0
      }))
    }
    const open = (createOpenEditor as any)(specifiedEditor) as any
    open(req, res, next)
  })
  const canUse = await checkPort(port)
  const url = 'http://127.0.0.1:' + port
  if (canUse) {
    server.listen(port, () => {
      console.log('open in editor server run at' +  url)
    })
  }
  return {
    webpack: {
      '/__open-in-editor': {
        target: url
      }
    },
    vite: {
      '/__open-in-editor': {
        target: url
      }
    },
    rollup: {
      '__open-in-editor': url
    }
  }
}

function checkPort(port: number | string) {
  return new Promise((resolve) => {
    const server = _createServer().listen(port)
    server.on('listening', () => {
      server.close()
      resolve(true)
    })
    server.on('error', () => resolve(false))
  })
}