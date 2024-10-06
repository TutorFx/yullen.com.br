import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { PlanCardProps } from '~~/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPlanOptions(mode: string): PlanCardProps[] {
  const nuxtApp = useNuxtApp()
  const { t } = nuxtApp.$i18n

  return [
    {
      title: t(`${mode}.essentials.title`),
      paragraph: t(`${mode}.essentials.paragraph`),
      price: t(`${mode}.essentials.price`),
      variant: 'primary',
      priceDescription: t('plans.price-description-monthly'),
      features: [
        '',
      ],
    },
    {
      title: t(`${mode}.advanced.title`),
      paragraph: t(`${mode}.advanced.paragraph`),
      price: t(`${mode}.advanced.price`),
      variant: 'primary',
      priceDescription: t('plans.price-description-monthly'),
      features: [
        '',
      ],
      betterChoice: true,
    },
    {
      title: t(`${mode}.premium.title`),
      paragraph: t(`${mode}.premium.paragraph`),
      price: t(`${mode}.premium.price`),
      variant: 'primary',
      priceDescription: t('plans.price-description-monthly'),
      features: [
        '',
      ],
    },
  ]
}
