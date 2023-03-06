```ts
version: 1.x
// entry file --vite.config.js  webpack.config.js...
const { openEditor } = require('@tonyptang/open-editor')
import { openEditor } from '@tonyptang/open-editor'

// openEditor('code', 5001)  // default
const { vite, webpack, rollup } = openEditor()

// vite 
{
  server: {
    proxy: {
      ...vite
    }
  }
}

// webpack
{
  devServer: {
    proxy: {
      ...webpack
    }
  }
}

version: 2.x
import openEditor from '@tonyptang/open-editor/vite'

{
  plugins: [openEditor()]
}
```
