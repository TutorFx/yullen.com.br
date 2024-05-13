import type { ITestimonial } from '@dto/Testimonial'
import { TestimonialSchema } from '@schemas/Testimonial'

export default class implements ITestimonial {
  repository;
  page;

  constructor(content: ITestimonial) {
    TestimonialSchema.parse(content)
    this.repository = content.repository
    this.page = content.page
  }
}
