import type { ITestimonialPost } from '@dto/Testimonial'
import { TestimonialPostSchema } from '@schemas/Testimonial'

export default class implements ITestimonialPost {
  image
  title
  content

  id
  status
  dateCreated

  constructor(data: ITestimonialPost) {
    TestimonialPostSchema.parse(data)

    this.image = data.image
    this.title = data.title
    this.content = data.content
    this.id = data.id
    this.status = data.status
    this.dateCreated = data.dateCreated
  }
}
