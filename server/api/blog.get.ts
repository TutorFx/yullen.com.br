import type { IBlogQuery } from "@dto/Blog"
import { BlogQuerySchema } from "@schemas/Blog"

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery<IBlogQuery>(
    event, 
    BlogQuerySchema.parseAsync
  )
  return await FetchBlog(query)
})
