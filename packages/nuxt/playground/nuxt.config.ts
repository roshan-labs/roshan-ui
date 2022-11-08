import { defineNuxtConfig } from 'nuxt/config'

import NuxtModule from '..'

export default defineNuxtConfig({
  modules: [NuxtModule],
  imports: {
    autoImport: false,
  },
})
