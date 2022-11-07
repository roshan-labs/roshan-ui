import { defineNuxtConfig } from 'nuxt/config'

import Module from '..'

export default defineNuxtConfig({
  modules: [Module],
  imports: {
    autoImport: false,
  },
})
