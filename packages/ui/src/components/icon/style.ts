import { defineConfig } from 'windicss/helpers'

export const icon = defineConfig({
  shortcuts: {
    'r-icon': 'relative inline-flex justify-center items-center fill-current svg:(w-[1em] h-[1em])',
    'r-icon-spin': 'animate-spin',
  },
})
