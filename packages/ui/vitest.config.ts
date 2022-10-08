import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import icon from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    vue(),
    icon({
      autoInstall: true,
      iconCustomizer(_collection, _icon, props) {
        // Reset icon style
        props.width = '1em'
        props.height = '1em'
      },
    }),
  ],
  test: {
    environment: 'happy-dom',
  },
})
