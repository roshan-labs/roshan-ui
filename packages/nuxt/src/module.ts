import { defineNuxtModule } from '@nuxt/kit'

import type { ModuleOptions } from './types'
import { name, version } from '../package.json'
import { useStyle } from './composables/use-style'
import { useComponents } from './composables/use-components'

export { ModuleOptions }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'roshan',
    compatibility: {
      nuxt: '^3.0.0-rc.13',
    },
  },
  defaults: {
    style: 'windicss',
  },
  setup(options) {
    useStyle(options)
    useComponents()
  },
})
