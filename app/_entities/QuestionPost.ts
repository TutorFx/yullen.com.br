import type { IQuestionPost } from '@dto/Question'

export default class implements IQuestionPost {
  id
  title
  content

  constructor(question: IQuestionPost) {
    this.id = question.id
    this.title = question.title
    this.content = question.content
  }
}
