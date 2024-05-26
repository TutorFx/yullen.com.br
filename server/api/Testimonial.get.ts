import type { ITestimonialQuery } from '@dto/Testimonial'
import { TestimonialQuerySchema } from '@schemas/Testimonial'

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery<ITestimonialQuery>(
    event,
    TestimonialQuerySchema.parseAsync,
  )
  return await FetchTestimonial(query)
})
