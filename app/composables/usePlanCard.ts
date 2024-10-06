import { cva } from 'class-variance-authority'

const cvPlanCard = {
  success: '[--color:theme(colors.success.400)]',
  info: '[--color:theme(colors.info.400)]',
  primary: '[--color:theme(colors.primary.400)]',
  secondary: '[--color:theme(colors.secondary.400)]',
}

export const usePlanCardVariants = cva('bg-black [&>div]:bg-white rounded-2xl mt-1 ml-1', {
  variants: {
    variant: cvPlanCard,
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export function usePlanColor(id: number) {
  const keyValus = Object.keys(cvPlanCard)
  return keyValus[id % keyValus.length]
}
