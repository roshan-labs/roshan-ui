import { defineConfig } from 'windicss/helpers'

export const divider = defineConfig({
  shortcuts: {
    'r-divider':
      'box-border p-0 m-0 text-content text-base tabular-nums leading-base list-none border-t border-solid',
    'r-divider-horizontal': 'flex items-center clear-both w-full min-w-full my-lg border-[#0000000f]',
    'r-divider-vertical':
      'relative top-[-0.06em] inline-block h-[0.9em] mx-xs align-middle border-t-0 border-l border-[rgba(0,0,0,.06)]',
    'r-divider-dashed': 'bg-transparent border-[#0000000f] border-dashed',
    'r-divider-text':
      'my-md mx-0 text-content font-medium text-lg whitespace-nowrap text-center border-t-0 before:(content-[""] relative top-1/2 h-0 border-t border-solid border-[inherit]) after:(content-[""] relative top-1/2 w-1/2 border-t border-solid border-[inherit] transform translate-y-1/2)',
    'r-divider-text-dashed': 'before:border-dashed after:border-dashed',
    'r-divider-text-left': 'before:(top-1/2 w-[5%]) after:(top-1/2 w-[95%])',
    'r-divider-text-right': 'before:(top-1/2 w-[95%]) after:(top-1/2 w-[5%])',
    'r-divider-inner-text': 'inline-block px-[1em]',
    'r-divider-plain': 'font-normal text-base',
    'r-divider-orientation-left': 'before:w-0',
    'r-divider-orientation-right': 'after:w-0',
  },
})
