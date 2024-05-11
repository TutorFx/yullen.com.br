import type { IBlogFetch, IBlogQuery } from '@dto/Blog'
import type Blog from '@entities/Blog'
import { cms } from '@/constants'
import { BlogProcessor } from '@/server/utils/DirectusProcessors'

export function FetchBlog(query: IBlogQuery): Promise<Blog> {
  return $fetch<IBlogFetch>('items/Blog', {
    baseURL: cms,
    query: {
        ...query,
        offset: 20,
    }
  }).then(val => BlogProcessor(val, Number(query.page)))
}
