import type { FullConfig } from 'windicss/types/interfaces'
import { defineConfig } from 'windicss/helpers'
import { defu } from 'defu'

import { button } from '../src/components/button/style'
import { divider } from '../src/components/divider/style'
import { icon } from '../src/components/icon/style'
import { typography } from '../src/components/typography/style'

const size = {
  sm: '24px',
  base: '32px',
  lg: '40px',
}

const space = {
  /** more small */
  xss: '4px',
  /** small items */
  xs: '8px',
  /** Form controls and items */
  sm: '12px',
  /** small containers and buttons */
  md: '16px',
  /** containers */
  lg: '24px',
}

const defaultConfig = defineConfig({
  preflight: true,
  theme: {
    extend: {
      colors: {
        primary: {
          5: '#597ef7',
          6: '#2f54eb',
          7: '#1d39c4',
        },
        success: {
          base: '#52c41a',
          hover: '#73d13d',
          active: '#389e0d',
          outline: 'rgba(82, 196, 26, .2)',
        },
        error: {
          base: '#ff4d4f',
          hover: '#ff7875',
          active: '#d9363e',
          outline: 'rgb(255, 77, 79)',
        },
        warning: {
          base: '#faad14',
          hover: '#ffc53d',
          active: '#d48806',
          outline: 'rgb(250, 173, 20)',
        },
        disabled: {
          text: '#00000040',
          bg: '#f5f5f5',
        },
      },
      width: size,
      height: size,
      minHeight: size,
      minWidth: {
        base: size.base,
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'apple color emoji',
          'segoe ui emoji',
          'Segoe UI Symbol',
          'noto color emoji',
        ],
      },
      fontSize: {
        sm: '12px',
        base: '14px',
        lg: '16px',
      },
      lineHeight: {
        base: '1.5715',
      },
      textColor: {
        content: '#000000d9',
        inverse: '#ffffff',
      },
      borderColor: {
        base: '#d9d9d9',
      },
      borderRadius: {
        base: '2px',
      },
      textShadow: {
        button: '0 -1px 0 rgba(0, 0, 0, 0.12)',
      },
      boxShadow: {
        button: '0 2px 0 rgba(0, 0, 0, 0.015)',
        primary: '0 2px 0 rgba(0, 0, 0, 0.045)',
        input: '0 0 0 2px rgba(47, 84, 235, 0.2)',
        'input-error': '0 0 0 2px rgba(255, 77, 79, 0.2)',
        'input-warning': '0 0 0 2px rgba(250, 173, 20, 0.2)',
        card: '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
        'card-grid':
          '1px 0 #0000000f, 0 1px #0000000f, 1px 1px #0000000f, 1px 0 #0000000f inset, 0 1px #0000000f inset',
        'card-grid-hover':
          '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
      },
      backgroundImage: {
        skeleton:
          'linear-gradient(90deg, rgba(190, 190, 190, 0.2) 25%, rgba(129, 129, 129, 0.24) 37%, rgba(190, 190, 190, 0.2) 63%)',
      },
      transitionProperty: {
        input: 'border-color, box-shadow',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      animation: {
        'skeleton-loading': 'skeleton 1.4s ease infinite',
      },
      keyframes: {
        skeleton: {
          '0%': { transform: 'translateX(-37.5%)' },
          '100%': { transform: 'translateX(37.5%)' },
        },
      },
      padding: space,
      margin: space,
    },
  },
  shortcuts: {
    // Avatar
    'n-avatar':
      'inline-flex items-center justify-center w-base h-base rounded-1/2 overflow-hidden p-0 text-base text-white whitespace-nowrap align-middle bg-[#ccc]',
    'n-avatar-image': 'bg-transparent children:(block w-full h-full object-cover)',
    'n-avatar-square': 'rounded-base',
    'n-avatar-icon': 'text-[18px]',
    'n-avatar-small': 'w-sm h-sm',
    'n-avatar-large': 'w-lg h-lg',
    'n-avatar-icon-small': 'text-[14px]',
    'n-avatar-icon-large': 'text-[24px]',

    // Layout
    'n-layout': 'flex flex-auto flex-col min-h-0 bg-[#f0f2f5]',
    'n-layout-has-sider': 'flex-row',
    'n-layout-header': 'h-[64px] leading-[64px] px-[50px] text-content flex-shrink-0 bg-[#001529]',
    'n-layout-sider': 'relative bg-[#001529] transition-all duration-200 ease',
    'n-layout-sider-children': 'h-full',
    'n-layout-sider-trigger':
      'fixed bottom-0 z-1 flex items-center justify-center h-48px text-white bg-[#002140] cursor-pointer transition-all duration-200 ease',
    'n-layout-content': 'flex-auto min-h-0',
    'n-layout-footer': 'flex-shrink-0 text-content text-base py-[24px] px-[50px] bg-[#f0f2f5]',

    // Input
    'n-input': 'inline-flex w-full text-base text-content',
    'n-input-large': 'text-lg',
    'n-input-wrapper':
      'inline-flex flex-grow border-1 border-solid border-base rounded-base px-[11px] py-[4px] transition-all duration-300 ease hover:border-primary-5',
    'n-input-wrapper-small': 'py-0',
    'n-input-wrapper-large': 'py-[6.5px]',
    'n-input-focus': 'border-primary-5 shadow-input',
    'n-input-main': 'w-full leading-base outline-none placeholder-shown:overflow-ellipsis',
    'n-input-clear':
      'text-[#00000040] cursor-pointer transition-all duration-300 ease hover:text-[#00000073]',
    'n-input-prefix': 'flex items-center flex-none mr-xss',
    'n-input-prefix-error': 'text-error-base',
    'n-input-prefix-warning': 'text-warning-base',
    'n-input-suffix': 'flex items-center flex-none ml-xss',
    'n-input-suffix-item': 'mr-xs last:mr-0',
    'n-input-error': 'border-error-base hover:border-error-base shadow-error-outline/20',
    'n-input-warning': 'border-warning-base hover:border-warning-base shadow-warning-outline/20',
    'n-input-addon':
      'flex items-center relative text-center border-1 border-solid border-base rounded-base bg-[#fafafa] px-[11px] first:(border-r-0 rounded-tr-none rounded-br-none) last:(border-l-0 rounded-tl-none rounded-bl-none)',
    'n-input-addon-before': 'relative z-1 rounded-tl-none rounded-bl-none',
    'n-input-addon-after': 'relative z-1 rounded-tr-none rounded-br-none',
    'n-input-borderless': 'border-none shadow-none',
    'n-input-wrapper-disabled':
      'text-[#00000040] bg-[#f5f5f5] cursor-not-allowed hover:border-base',
    'n-input-main-disabled': 'bg-transparent cursor-not-allowed',
    'n-input-password':
      'text-[#00000073] transition-all duration-300 cursor-pointer hover:text-content',
    'n-input-show-count': 'text-[#00000073]',

    // Textarea
    'n-textarea': 'relative inline-block w-full text-base align-bottom',
    'n-textarea-show-count':
      'after:(content-[attr(data-count)] absolute right-[11px] bottom-[4px] text-[#00000073] whitespace-nowrap)',
    'n-textarea-main':
      'block w-full min-h-base text-content leading-base border border-solid border-base rounded-base px-[11px] py-[4px] bg-white bg-none outline-none transition-input duration-300 ease hover:border-primary-5 focus:(border-primary-5 shadow-input)',
    'n-textarea-clear': 'absolute top-[8px] right-[8px] z-1',
    'n-textarea-borderless': 'border-none focus:shadow-none',
    'n-textarea-error': 'border-error-base hover:border-error-base focus:shadow-error-outline/20',
    'n-textarea-warning':
      'border-warning-base hover:border-warning-base focus:(border-warning-hover shadow-warning-outline/20)',
    'n-textarea-disabled': 'text-[#00000040] bg-[#f5f5f5] cursor-not-allowed hover:border-base',

    // Space
    'n-space': 'inline-flex',
    'n-space-vertical': 'flex flex-col',
    'n-space-horizontal': 'flex-row',
    'n-space-wrap': 'flex-wrap',
    'n-space-align-start': 'items-start',
    'n-space-align-end': 'items-end',
    'n-space-align-center': 'items-center',
    'n-space-align-baseline': 'items-baseline',
  },
})

export function extendWindiConfig(userConfig: FullConfig = {}) {
  return defu(userConfig, button, divider, icon, typography, defaultConfig)
}
