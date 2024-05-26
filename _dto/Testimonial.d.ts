import type { z } from 'zod'
import type {
  TestimonialFetchSchema,
  TestimonialPostSchema,
  TestimonialQuerySchema,
  TestimonialSchema,
} from '@schemas/Testimonial'

export type ITestimonialQuery = z.infer<
    typeof TestimonialQuerySchema
>

export type ITestimonialPost = z.infer<
    typeof TestimonialPostSchema
>

export type ITestimonial = z.infer<
    typeof TestimonialSchema
>

export type ITestimonialFetch = z.infer<
    typeof TestimonialFetchSchema
>
