import { defineConfig } from 'windicss/helpers'

import { range } from '../../styles/helper'

export const typography = defineConfig({
  safelist: [
    // Typography title level
    range(5).map((i) => `r-title-h${i}`),
    ['secondary', 'success', 'warning', 'danger'].map((type) => `r-typography-${type}`),
  ],
  shortcuts: {
    'r-link':
      'text-primary-6 no-underline outline-none transition-colors duration-300 hover:text-primary-5 active:text-primary-7',
    'r-typography': 'text-content break-words',
    'r-typography-code':
      'text-[85%] leading-base px-[.4em] pt-[.2em] pb-[.1em] mx-[.2em] rounded-[3px] border border-solid border-[rgba(100,100,100,.2)] bg-[rgba(150,150,150,.1)]',
    'r-typography-delete': 'line-through',
    'r-typography-disabled':
      'text-disabled-text select-none cursor-not-allowed hover:text-disabled-text',
    'r-typography-keyboard':
      'text-[90%] leading-base pt-[.15em] px-[.4em] pb-[.1em] mx-[.2em] border border-b-2 border-solid border-[rgba(100,100,100,.2)] rounded-[3px] bg-[rgba(150,150,150,.06)]',
    'r-typography-mark': 'p-0 bg-[#ffe58f]',
    'r-typography-strong': 'font-semibold',
    'r-typography-success': 'text-success-base',
    'r-typography-secondary': 'text-[#00000073]',
    'r-typography-warning': 'text-warning-base',
    'r-typography-danger': 'text-error-base',
    'r-typography-underline': 'underline',
  },
})
