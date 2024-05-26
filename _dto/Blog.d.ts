import type { z } from 'zod'
import type {
  BlogFetchSchema,
  BlogPostSchema,
  BlogQuerySchema,
  BlogSchema,
} from '@schemas/Blog'

export type IBlogQuery = z.infer<
    typeof BlogQuerySchema
>

export type IBlogPost = z.infer<
    typeof BlogPostSchema
>

export type IBlog = z.infer<
    typeof BlogSchema
>

export type IBlogFetch = z.infer<
    typeof BlogFetchSchema
>
