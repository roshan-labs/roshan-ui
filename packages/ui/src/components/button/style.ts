import { defineConfig } from 'windicss/helpers'

const types = ['default', 'primary', 'dashed', 'text', 'link']

export const button = defineConfig({
  safelist: [
    types.map((type) => `r-button-${type}`),
    types.map((type) => `r-button-${type}-danger`),
  ],
  shortcuts: {
    'r-button':
      'inline-flex items-center justify-center h-base text-base font-normal text-content py-[4px] px-[15px] whitespace-nowrap align-middle bg-none border-1 border-solid border-base shadow-button cursor-pointer transition-all duration-300 ease-in-out select-none rounded-base bg-white outline-none hover:(no-underline bg-white text-primary-5 border-primary-5) active:(outline-none bg-white text-primary-7 border-primary-7) focus:(outline-none bg-white text-primary-5 border-primary-5)',
    'r-button-default':
      'disabled:(text-disabled-text bg-disabled-bg border-base shadow-none text-shadow-none cursor-not-allowed) disabled:hover:border-base disabled:hover:text-disabled-text',
    'r-button-primary':
      'text-white border-primary-6 bg-primary-6 text-shadow-button shadow-primary hover:(border-primary-5 bg-primary-5 text-white) focus:(border-primary-5 bg-primary-5 text-white) active:(border-primary-7 bg-primary-7 text-white) disabled:(text-disabled-text bg-disabled-bg border-base shadow-none text-shadow-none cursor-not-allowed)',
    'r-button-dashed':
      'border-dashed disabled:(text-disabled-text bg-disabled-bg border-base shadow-none text-shadow-none cursor-not-allowed)',
    'r-button-text':
      'border-transparent bg-transparent shadow-transparent hover:(text-content border-transparent bg-[rgba(0,0,0,0.018)]) focus:(text-content border-transparent bg-[rgba(0,0,0,0.018)]) active:(text-content border-transparent bg-[rgba(0,0,0,0.028)]) disabled:(text-disabled-text bg-transparent cursor-not-allowed) disabled:hover:text-disabled-text',
    'r-button-link':
      'text-primary-6 border-transparent bg-transparent shadow-transparent no-underline hover:(border-transparent bg-transparent) focus:(border-transparent bg-transparent) active:(border-transparent bg-transparent) disabled:(text-disabled-text bg-transparent cursor-not-allowed) disabled:hover:text-disabled-text',
    'r-button-block': 'w-full',
    'r-button-default-danger':
      'text-error-base border-error-base hover:(text-error-hover border-error-hover) focus:(text-error-hover border-error-hover) active:(text-error-active border-error-active)',
    'r-button-primary-danger':
      'bg-error-base border-error-base hover:(bg-error-hover border-error-hover) focus:(bg-error-hover border-error-hover) active:(bg-error-active border-error-active)',
    'r-button-dashed-danger': 'r-button-default-danger',
    'r-button-text-danger':
      'text-error-base hover:text-error-hover focus:text-error-hover active:text-error-active',
    'r-button-link-danger': 'r-button-text-danger',
    'r-button-default-ghost':
      'text-white bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent',
    'r-button-primary-ghost':
      'text-primary-6 bg-transparent text-shadow-none hover:(text-primary-5 bg-transparent) focus:(text-primary-5 bg-transparent) active:(text-primary-7 bg-transparent)',
    'r-button-dashed-ghost': 'r-button-default-ghost',
    'r-button-danger-ghost':
      'text-error-base hover:text-error-hover focus:text-error-hover active:text-error-active',
    'r-button-large': 'min-w-40px h-lg text-lg',
    'r-button-small': 'h-sm py-0 px-xs',
    'r-button-circle': 'min-w-base px-0 rounded-1/2',
    'r-button-circle-small': 'min-w-24px',
    'r-button-circle-large': 'min-w-40px',
    'r-button-round': 'rounded-32px',
    'r-button-round-small': 'rounded-24px',
    'r-button-round-large': 'rounded-40px',
    'r-button-icon': 'w-base py-0 px-0 text-lg',
    'r-button-icon-small': 'w-sm py-0 px-0',
    'r-button-icon-large': 'w-lg text-[18px]',
  },
})
