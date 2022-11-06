import { addComponent } from '@nuxt/kit'

const components = ['RoButton']

export const useComponents = () => {
  components.forEach((name) => {
    addComponent({
      name,
      export: name,
      filePath: 'roshan-ui',
    })
  })
}
