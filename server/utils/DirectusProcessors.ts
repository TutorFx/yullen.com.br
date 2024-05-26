import { reactive } from 'vue'
import { ZodError } from 'zod'
import { fromZodError } from 'zod-validation-error'

import type { IBlogFetch } from '@dto/Blog'
import type { IQuestionFetch } from '@dto/Question'
import QuestionPost from '@entities/QuestionPost'
import Question from '@entities/Question'
import BlogPost from '@entities/BlogPost'
import Blog from '@entities/Blog'
import { BlogFetchSchema } from '@schemas/Blog'
import { QuestionFetchSchema } from '@schemas/Question'
import { TestimonialFetchSchema } from '@schemas/Testimonial'
import type { ITestimonialFetch } from '@dto/Testimonial'
import Testimonial from '@entities/Testimonial'
import TestimonialPost from '@entities/TestimonialPost'

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
    page,
  })
}

export function QuestionProcessor(fetchData: IQuestionFetch, page: number): Question {
  QuestionFetchSchema.parse(fetchData)
  const instances = fetchData.data.map((entry) => {
    try {
      const controller = new QuestionPost({
        id: entry.id,
        title: entry.title,
        content: entry.content,
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
    .filter(Boolean) as QuestionPost[]

  return new Question({
    repository: instances,
    page,
  })
}

export function TestimonialProcessor(fetchData: ITestimonialFetch, page: number): Testimonial {
  TestimonialFetchSchema.parse(fetchData)

  const instances = fetchData.data.map((entry) => {
    try {
      const controller = new TestimonialPost({
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
    .filter(Boolean) as TestimonialPost[]

  return new Testimonial({
    repository: instances,
    page,
  })
}
