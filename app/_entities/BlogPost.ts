import type { IBlogPost } from '@dto/Blog'
import { BlogPostSchema } from '@schemas/Blog'

export default class implements IBlogPost {
  image
  title
  content

  id
  status
  dateCreated

  constructor(data: IBlogPost) {
    BlogPostSchema.parse(data)

    this.image = data.image
    this.title = data.title
    this.content = data.content
    this.id = data.id
    this.status = data.status
    this.dateCreated = data.dateCreated
  }
}
