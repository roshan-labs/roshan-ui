import { useNuxt } from '@nuxt/kit'

import type { ModuleOptions } from '../types'

export const useStyle = (options: ModuleOptions) => {
  const nuxt = useNuxt()

  switch (options.style) {
    case 'css':
      nuxt.options.css.push('roshan-ui/style/index.css')
      break

    default:
      break
  }
}
