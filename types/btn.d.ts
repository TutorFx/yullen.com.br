import type { VariantProps } from 'class-variance-authority'
import type { RouteLocationRaw } from '#vue-router'

export interface BtnProps {
  to?: RouteLocationRaw | string
  href?: string
  outlined?: boolean
  rounded?: boolean
  loading?: boolean

  size?: VariantProps<typeof useBtnVariants>['size']
  color?: VariantProps<typeof useBtnVariants>['color']
  variant?: VariantProps<typeof useBtnVariants>['variant']
  
  active?: boolean
}