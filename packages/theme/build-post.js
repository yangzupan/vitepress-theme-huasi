import fs from 'fs'
import path from 'path'

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
}

const cssContent = fs.readFileSync(path.resolve('src/styles/index.css'), 'utf-8')
const injectCSS = `
const style = document.createElement('style');
style.textContent = \`${cssContent.replace(/`/g, '\\`')}\`;
document.head.appendChild(style);
`

const mjsPath = path.resolve('dist/index.mjs')
if (fs.existsSync(mjsPath)) {
  let mjsContent = fs.readFileSync(mjsPath, 'utf-8')
  mjsContent = injectCSS + mjsContent
  fs.writeFileSync(mjsPath, mjsContent)
}

const cjsPath = path.resolve('dist/index.cjs')
if (fs.existsSync(cjsPath)) {
  let cjsContent = fs.readFileSync(cjsPath, 'utf-8')
  cjsContent = injectCSS + cjsContent
  fs.writeFileSync(cjsPath, cjsContent)
}