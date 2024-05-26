import type { IQuestionQuery } from '@dto/Question'
import { QuestionQuerySchema } from '~/_schemas/Question'

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery<IQuestionQuery>(
    event,
    QuestionQuerySchema.parseAsync,
  )
  return FetchQuestion(query)
})
