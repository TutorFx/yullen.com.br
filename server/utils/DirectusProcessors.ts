import { reactive } from 'vue'
import { ZodError } from 'zod'
import { fromZodError } from 'zod-validation-error'
import { BlogFetchSchema } from '@schemas/Blog'

import BlogPost from '~/_entities/BlogPost'
import Blog from '~/_entities/Blog'

import type { IBlogFetch } from '@dto/Blog'

export function BlogProcessor(fetchData: IBlogFetch, page: number): Blog {
  BlogFetchSchema.parse(fetchData)

  const instances = fetchData.data.map((entry) => {
    try {
      const controller = new BlogPost({
        ...entry,
        dateCreated: entry.date_created,
      })

      if (import.meta.client)
        return reactive(controller)
      else
        return controller
    }
    catch (e) {
      if (e instanceof ZodError) {
        const validationError = fromZodError(e)
        console.warn(entry.title, validationError.toString())
      }

      return null
    }
  })
    .filter(Boolean) as BlogPost[]

  return new Blog({
    repository: instances,
    page
  })
}
