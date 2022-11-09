import type { ModuleOptions as WindiOptions } from 'nuxt-windicss'
import { existsSync } from 'node:fs'
import { installModule, resolvePath, useNuxt } from '@nuxt/kit'
import { extendWindiConfig } from 'roshan-ui/windicss'
import { defu } from 'defu'

import type { ModuleOptions } from '../types'

export const useStyle = async (options: ModuleOptions) => {
  const nuxt = useNuxt()

  if (options.style === 'css') {
    nuxt.options.css.push('roshan-ui/style/index.css')
  } else if (options.style === 'windicss') {
    const windiConfigPath = await resolvePath('windi.config')
    let windiConfig: WindiOptions['config']

    if (nuxt.options.windicss?.config) {
      windiConfig = nuxt.options.windicss.config
    }

    if (typeof windiConfig === 'object') {
      windiConfig = extendWindiConfig(windiConfig)
    }

    if (!windiConfig && !existsSync(windiConfigPath)) {
      windiConfig = extendWindiConfig()
    }

    nuxt.options.windicss = defu({ config: windiConfig }, nuxt.options.windicss)

    await installModule('nuxt-windicss')
  }
}

declare module '@nuxt/schema' {
  interface NuxtOptions {
    windicss?: WindiOptions
  }
}
