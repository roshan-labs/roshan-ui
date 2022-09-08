import { existsSync, renameSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

export function buildStart() {
  const distPath = fileURLToPath(new URL('../dist', import.meta.url))

  if (existsSync(distPath)) {
    rmSync(distPath, { recursive: true })
  }
}

export function buildEnd() {
  // Delete style/index.js
  const styleIndex = fileURLToPath(new URL('../dist/style/index.js', import.meta.url))
  existsSync(styleIndex) && rmSync(styleIndex)

  // Rename style/style.css to style/index.css
  const stylePath = fileURLToPath(new URL('../dist/style/style.css', import.meta.url))
  const indexPath = fileURLToPath(new URL('../dist/style/index.css', import.meta.url))
  existsSync(stylePath) && renameSync(stylePath, indexPath)
}
