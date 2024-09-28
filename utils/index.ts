import type { NuxtLinkProps } from '#app'

interface IMenu extends NuxtLinkProps {
  text: string
}

export const Menu: IMenu[] = [
  {
    to: '/planos',
    text: 'PLANOS',
  },
  {
    to: '/resultados',
    text: 'RESULTADOS',
  },
  {
    to: '/blog',
    text: 'BLOG',
  },
]

interface IPlanOption {
  title: string
  paragraph: string
  price: string
  features: string[]
}

export function getPlanOptions(): IPlanOption[] {
  const nuxtApp = useNuxtApp()
  const { t } = nuxtApp.$i18n

  return [
    {
      title: t('plans.essentials.title'),
      paragraph: t('plans.essentials.paragraph'),
      price: t('plans.essentials.price'),
      features: [
        '',
      ],
    },
    {
      title: t('plans.advanced.title'),
      paragraph: t('plans.advanced.paragraph'),
      price: t('plans.advanced.price'),
      features: [
        '',
      ],
    },
    {
      title: t('plans.premium.title'),
      paragraph: t('plans.premium.paragraph'),
      price: t('plans.premium.price'),
      features: [
        '',
      ],
    },
  ]
}
