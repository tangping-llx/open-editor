import { defineConfig } from 'tsup'

// export default defineConfig([].map(entry => ({
//   entry: ['src/index.ts'],
//   format: 'cjs',
//   outDir: 'dist',
//   bundle: true,
//   noExternal: ['launch-editor-middleware'],
//   tsconfig: 'tsconfig.json',
//   dts: true
// })))

export default defineConfig({
  entry: ['src/webpack.ts', 'src/vite.ts', 'src/rollup.ts'],
  format: 'cjs',
  outDir: 'dist',
  bundle: true,
  noExternal: ['launch-editor-middleware'],
  tsconfig: 'tsconfig.json',
  dts: true
})