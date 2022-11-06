import { defineNuxtModule } from '@nuxt/kit'

import { name, version } from '../package.json'
import { useComponents } from './composables/use-components'

export default defineNuxtModule({
  meta: {
    name,
    version,
  },
  setup() {
    useComponents()
  },
})
