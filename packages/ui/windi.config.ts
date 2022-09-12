import { defineConfig } from 'windicss/helpers'

import { extendWindiConfig } from './src/windicss'

export default defineConfig(
  extendWindiConfig({
    extract: {
      exclude: ['src/windicss.ts'],
    },
  })
)
