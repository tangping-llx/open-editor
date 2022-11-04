import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'cjs',
  outDir: 'dist',
  bundle: true,
  noExternal: ['launch-editor-middleware'],
  tsconfig: 'tsconfig.json',
  dts: true
})