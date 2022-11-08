import { useNuxt } from '@nuxt/kit'

export const useStyle = () => {
  const nuxt = useNuxt()

  nuxt.options.css.push('roshan-ui/style/index.css')
}
