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
