import createOpenEditor from 'launch-editor-middleware'
import { createServer } from 'http'

export function openEditor(specifiedEditor: string = 'code', port: number | string = 5001) {

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
  server.listen(port, () => {
    console.log('open in editor server run at http://127.0.0.1:' + port)
  })
}