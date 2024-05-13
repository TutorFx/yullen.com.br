import { z } from 'zod'
import { Status } from '@dto/Generic.d'

export const TestimonialQuerySchema = z.object({
  search: z.string().optional(),
  page: z.preprocess((x) => Number(x), z.number())
})

export const TestimonialFetchSchema = z.object({
  data: z.array(
    z.object({
      id: z.string().uuid(),
      status: z.nativeEnum(Status),
      date_created: z.string().datetime(),
      image: z.string().nullable(),
      title: z.string(),
      content: z.string(),
    }),
  ),
})

export const TestimonialPostSchema = z.object({
  id: z.string().uuid(),
  status: z.nativeEnum(Status),
  dateCreated: z.string().datetime(),
  image: z.string().nullable(),
  title: z.string(),
  content: z.string(),
})

export const TestimonialSchema = z.object({
  repository: z.array(TestimonialPostSchema),
  page: z.number().positive()
})
