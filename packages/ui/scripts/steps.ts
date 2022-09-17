import { copyFileSync, existsSync, renameSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

export function buildStart() {
  const distPath = fileURLToPath(new URL('../dist', import.meta.url))

  if (existsSync(distPath)) {
    rmSync(distPath, { recursive: true })
  }
}

export function buildEnd() {
  // 删除 dist/style 中的 index.js 文件
  const styleIndex = fileURLToPath(new URL('../dist/style/index.js', import.meta.url))
  existsSync(styleIndex) && rmSync(styleIndex)

  // 重命名 style/style.css 文件为 style/index.css
  const stylePath = fileURLToPath(new URL('../dist/style/style.css', import.meta.url))
  const indexPath = fileURLToPath(new URL('../dist/style/index.css', import.meta.url))
  existsSync(stylePath) && renameSync(stylePath, indexPath)

  // 复制 src/styles/global.css 文件到 dist/windicss
  const globalSource = fileURLToPath(new URL('../src/styles/global.css', import.meta.url))
  const globalTarget = fileURLToPath(new URL('../dist/windicss/global.css', import.meta.url))
  existsSync(globalSource) && copyFileSync(globalSource, globalTarget)
}
