import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@roshan-ui/nuxt'],
  roshan: {
    style: 'css',
  },
  imports: {
    autoImport: false,
  },
})
