import { defineNuxtModule } from '@nuxt/kit'

import { name, version } from '../package.json'
import { useStyle } from './composables/use-style'
import { useComponents } from './composables/use-components'

export default defineNuxtModule({
  meta: {
    name,
    version,
  },
  setup() {
    useStyle()
    useComponents()
  },
})
