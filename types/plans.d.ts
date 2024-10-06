import type { VariantProps } from 'class-variance-authority'
import type { usePlansCardVariants } from '~/composables/usePlanCard'

export interface PlanCardProps {
  betterChoice?: boolean

  title: string
  paragraph: string
  price: string

  priceDescription?: string

  features: string[]

  variant: VariantProps<typeof usePlansCardVariants>['variant']
}
