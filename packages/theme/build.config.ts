import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index', 'src/config/index'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true
  },
  externals: ['vitepress'],
  hooks: {
    'build:done': async () => {
      const fs = await import('fs')
      const path = await import('path')
      const srcStyles = path.resolve('src/styles')
      const distStyles = path.resolve('dist/styles')
      if (!fs.existsSync(distStyles)) {
        fs.mkdirSync(distStyles, { recursive: true })
      }
      const files = fs.readdirSync(srcStyles)
      for (const file of files) {
        const srcPath = path.join(srcStyles, file)
        const destPath = path.join(distStyles, file)
        fs.copyFileSync(srcPath, destPath)
        process.stdout.write(`Copied ${file} to dist/styles\n`)
      }
    }
  }
})
