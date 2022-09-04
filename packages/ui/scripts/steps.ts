import { existsSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

export function buildStart() {
  const distPath = fileURLToPath(new URL('../dist', import.meta.url))

  if (existsSync(distPath)) {
    rmSync(distPath, { recursive: true })
  }
}
