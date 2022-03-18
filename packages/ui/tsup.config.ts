import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => {
  return {
    entry: ['src/index.ts'],
    minify: !options.watch,
    legacyOutput: true,
    format: ['esm', 'cjs'],
    dts: true,
    external: ['react'],
    sourcemap: true,
  }
})
