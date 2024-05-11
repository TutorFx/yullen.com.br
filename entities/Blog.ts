import type { IBlog } from '@dto/Blog'
import { BlogSchema } from '@schemas/Blog'

export default class implements IBlog {
  repository;
  page;

  constructor(content: IBlog) {
    BlogSchema.parse(content)
    this.repository = content.repository
    this.page = content.page
  }
}
