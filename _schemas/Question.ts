import { z } from 'zod'

export const QuestionQuerySchema = z.object({
    search: z.string().optional(),
    page: z.preprocess((x) => Number(x), z.number().positive())
})

export const QuestionFetchSchema = z.object({
    data: z.array(
        z.object({
            id: z.string().uuid(),
            title: z.string(),
            content: z.string(),
        }),
    ),
})

export const QuestionPostSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    content: z.string(),
})

export const QuestionSchema = z.object({
    repository: z.array(QuestionPostSchema),
    page: z.number().positive()
})