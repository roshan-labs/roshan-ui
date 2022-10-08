const { mergeConfig } = require('vite')
const windicss = require('vite-plugin-windicss').default
const unpluginIcon = require('unplugin-icons/vite')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        windicss(),
        unpluginIcon({
          autoInstall: true,
          iconCustomizer(_collection, _icon, props) {
            // 重置图标样式
            props.width = '1em'
            props.height = '1em'
          },
        }),
      ],
    })
  },
}
