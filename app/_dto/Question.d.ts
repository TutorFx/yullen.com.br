import type { z } from 'zod'
import type {
  QuestionFetchSchema,
  QuestionPostSchema,
  QuestionQuerySchema,
  QuestionSchema,
} from '@schemas/Question'

export type IQuestionQuery = z.infer<
    typeof QuestionQuerySchema
>

export type IQuestionFetch = z.infer<
    typeof QuestionFetchSchema
>

export type IQuestionPost = z.infer<
    typeof QuestionPostSchema
>

export type IQuestion = z.infer<
    typeof QuestionSchema
>
