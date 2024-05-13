import type { IBlogFetch, IBlogQuery } from '@dto/Blog'
import type Blog from '@entities/Blog'

import { BlogQuerySchema } from '@schemas/Blog'
import { QuestionQuerySchema } from '@schemas/Question'
import type { IQuestionFetch, IQuestionQuery } from '@dto/Question'
import type Question from '@entities/Question'
import { cms } from '@/constants'
import { BlogProcessor, TestimonialProcessor } from '@/server/utils/DirectusProcessors'
import type { ITestimonialFetch, ITestimonialQuery } from '~/_dto/Testimonial'
import type Testimonial from '~/_entities/Testimonial'
import { TestimonialQuerySchema } from '~/_schemas/Testimonial'

export function FetchBlog(query: IBlogQuery): Promise<Blog> {
  BlogQuerySchema.parse(query)
  return $fetch<IBlogFetch>('items/Blog', {
    baseURL: cms,
    query: {
      ...query,
      offset: 20,
    },
  }).then(val => BlogProcessor(val, Number(query.page)))
}

export function FetchQuestion(query: IQuestionQuery): Promise<Question> {
  QuestionQuerySchema.parse(query)
  return $fetch<IQuestionFetch>('items/Blog', {
    baseURL: cms,
    query: {
      ...query,
      offset: 20,
    },
  }).then(val => QuestionProcessor(val, Number(query.page)))
}

export function FetchTestimonial(query: ITestimonialQuery): Promise<Testimonial> {
  TestimonialQuerySchema.parse(query)
  return $fetch<ITestimonialFetch>('items/Testemunhos', {
    baseURL: cms,
    query: {
      ...query,
      offset: 20,
    },
  }).then(val => TestimonialProcessor(val, Number(query.page)))
}
