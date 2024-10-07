import type { VariantProps } from 'class-variance-authority'
import type { usePlansCardVariants } from '~/composables/useVariant'

export interface PlanCardProps {
  betterChoice?: boolean

  title: string
  paragraph: string | null
  price: string | null

  priceDescription?: string

  features: string[] | null

  variant: VariantProps<typeof usePlansCardVariants>['variant']
}
