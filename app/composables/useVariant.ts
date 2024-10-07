import { cva } from 'class-variance-authority'

// Plan Cards

const cvPlanCard = {
  success: '[--color:theme(colors.success.400)]',
  info: '[--color:theme(colors.info.400)]',
  primary: '[--color:theme(colors.primary.400)]',
  secondary: '[--color:theme(colors.secondary.400)]',
}

export const usePlanCardVariants = cva('bg-black [&>div]:bg-white rounded-2xl mt-1 ml-1', {
  variants: {
    variant: cvPlanCard,
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export function usePlanColor(id: number) {
  const keyValus = Object.keys(cvPlanCard)
  return keyValus[id % keyValus.length]
}

// Button

export const useBtnVariants = cva('grid grid-cols-1 grid-rows-1', {
  variants: {
    variant: {
      default: [
        'bg-transparent [&>div]:border-[--border] [&>div]:bg-[--color] [&>div]:text-[--text]',
        '[&>div]:py-[calc(var(--size)*.5)] [&>div]:px-[calc(var(--size)*.75)]',
        '[&>div]:relative [&>div]:!-left-0 [&>div]:!-top-0',
        '[&>div]:active:-left-[0] [&>div]:active:-top-[0]',
        '[&>div]:rounded-[calc(var(--size)*.75)] rounded-[calc(var(--size)*.75)]',
        'focus:outline outline-2 outline-offset-2'
      ],
      extruded: [
        'bg-[--border] [&>div]:border-[--border] [&>div]:bg-[--color] [&>div]:text-[--text]',
        '[&>div]:py-[calc(var(--size)*.5)] [&>div]:px-[calc(var(--size)*.75)]',
        'mt-[calc(var(--size)*.25)] ml-[calc(var(--size)*.25)]',
        '[&>div]:relative [&>div]:-left-[calc(var(--size)*.25)] [&>div]:-top-[calc(var(--size)*.25)]',
        '[&>div]:active:-left-[0] [&>div]:active:-top-[0]',
        '[&>div]:transform-gpu [&>div]:transition-all [&>div]:duration-100',
        '[&>div]:border-[calc(var(--size)*.15)] border border-[--border]',
        '[&>div]:rounded-[calc(var(--size)*.5)] rounded-[calc(var(--size)*.75)]',
        'focus:outline outline-0'
      ]
    },
    color: {
      success: [
        '[--color:theme(colors.success.DEFAULT)]', 
        '[--border:theme(colors.black)]', 
        '[--text:theme(colors.white)]'
      ],
      info: [
        '[--color:theme(colors.info.DEFAULT)]', 
        '[--border:theme(colors.black)]', 
        '[--text:theme(colors.black)]'
      ],
      primary: [
        '[--color:theme(colors.primary.DEFAULT)] hover:[--color:theme(colors.primary.800)] focus:[--color:theme(colors.primary.800)]', 
        '[--border:theme(colors.black)]', 
        '[--text:theme(colors.white)]'
      ],
      secondary: [
        '[--color:theme(colors.secondary.DEFAULT)]', 
        '[--border:theme(colors.black)]', 
        '[--text:theme(colors.black)]'
      ],
      inactive: [
        '[--color:theme(colors.white)]', 
        '[--border:theme(colors.black)]', 
        '[--text:theme(colors.black)]'
      ],
      base: [
        '[--color:theme(colors.black)]', 
        '[--border:theme(colors.black)]', 
        '[--text:theme(colors.secondary.content)]'
      ],
    },
    active: {
      true: [
        '[&>div]:-left-[calc(var(--size)*.15)] [&>div]:-top-[calc(var(--size)*.1)]',
      ],
      false: [
        '[&>div]:hover:-left-[calc(var(--size)*.15)] [&>div]:hover:-top-[calc(var(--size)*.1)]',
        '[&>div]:focus:-left-[calc(var(--size)*.15)] [&>div]:focus:-top-[calc(var(--size)*.1)]'
      ]
    },
    size: {
      sm: '[--size:theme(space.2)]',
      default: '[--size:theme(space.4)]',
      md: '[--size:theme(space.6)]'
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'default',
    variant: 'default',
    active: false
  },
})