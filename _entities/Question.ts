import type { IQuestion } from '@dto/Question'
import { QuestionSchema } from '@schemas/Question'

export default class implements IQuestion {
  repository
  page

  constructor(content: IQuestion) {
    QuestionSchema.parse(content)
    this.repository = content.repository
    this.page = content.page
  }
}
