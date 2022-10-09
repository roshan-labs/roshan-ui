import { defineConfig } from 'windicss/helpers'

export const divider = defineConfig({
  shortcuts: {
    'r-divider':
      'box-border p-0 m-0 text-content text-base tabular-nums leading-base list-none border-t border-solid',
    'r-divider-horizontal': 'flex items-center w-full my-lg border-[#0000000f]',
    'r-divider-vertical':
      'relative top-[-0.06em] inline-block h-[0.9em] mx-xs align-middle border-t-0 border-l border-[rgba(0,0,0,.06)]',
    'r-divider-dashed': 'bg-transparent border-[#0000000f] border-dashed',
    'r-divider-text':
      'my-md mx-0 text-content font-medium text-lg whitespace-nowrap text-center border-t-0',
    'r-divider-line': 'w-1/2 h-0 border-t border-solid border-[inherit]',
    'r-divider-inner-text': 'inline-block px-[1em]',
    'r-divider-plain': 'font-normal text-base',
  },
})
