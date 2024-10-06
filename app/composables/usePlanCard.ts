import { cva } from 'class-variance-authority'

export const usePlanCardVariants = cva('relative grid items-center border border-black rounded-2xl overflow-hidden', {
  variants: {
    variant: {
      primary: '[--color:theme(colors.primary.400)]',
      secondary: '[--color:theme(colors.secondary.400)]',
      success: '[--color:theme(colors.success.400)]',
      info: '[--color:theme(colors.info.400)]',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
