import { addComponent } from '@nuxt/kit'

const components = ['RoButton', 'RoDivider', 'RoIcon', 'RoLink', 'RoParagraph', 'RoText', 'RoTitle']

export const useComponents = () => {
  components.forEach((name) => {
    addComponent({
      name,
      export: name,
      filePath: 'roshan-ui',
    })
  })
}
