interface BlogTranslation {
  languages_code: string
  title: string
  description: string | null
  features: string[] | null
  price: number | null
  online: boolean
  tags: string[]
}

interface Blog {
  variant: string
  slug: string
  periodicity: string
  featured: boolean
  translations: BlogTranslation[]
}

interface PlanosQuery {
  plans: Blog[]
}
