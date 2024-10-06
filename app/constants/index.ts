import type { IMenu } from "~~/types"

export const appName = 'Yullen Personal'
export const appDescription = 'Vitesse for Nuxt 3'
export const cms = 'https://cms.yullen.com.br/'
export const site = 'https://www.yullen.com.br/'
export const graphqlRoot = 'graphql/'

export const menuData: IMenu[] = [
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