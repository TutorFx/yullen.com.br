import type { IBlogQuery } from "@dto/Blog"
import { BlogQuerySchema } from "~/schemas/Blog"

export default defineEventHandler(async (event) => {
  const query = getQuery<IBlogQuery>(event)
  BlogQuerySchema.parse(query)
  return await FetchBlog(query)
})
