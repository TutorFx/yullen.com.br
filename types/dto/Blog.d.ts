interface BlogTranslation {
  __typename: 'Blog_translations'
  languages_code: string
  Title: string
  description: string
  content: string
}

interface Blog {
    __typename: "Blog"
    id: string
    translations: BlogTranslation[]
}

interface BlogQuery {
  Blog: Blog[]
}
