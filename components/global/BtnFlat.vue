<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import type { RouteLocationRaw } from '#vue-router'

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw | string
    href?: string
    outlined?: boolean
    size?: Size
    color?: Style
    rounded?: boolean
    loading?: boolean
    ghost?: boolean
  }>(),
  {
    color: 'primary',
    size: 'md',
    outlined: false,
    loading: false,
    rounded: false,
    ghost: false,
  },
)

const NuxtLink = resolveComponent('NuxtLink')

const styles = {
  primary: {
    inside: 'text-primary-content',
    outside: `bg-primary hover:bg-primary-600`,
  },
  secondary: {
    inside: 'text-secondary-content',
    outside: `bg-secondary hover:bg-secondary-600`,
  },
}

const sizes = {
  md: {
    inside: 'text-md px-3 py-2 rounded-lg',
    outside: 'rounded-lg',
  },
  sm: {
    inside: 'text-sm px-2 py-1 rounded-md',
    outside: 'rounded-md',
  },
}

type Style = keyof typeof styles
type Size = keyof typeof sizes

const outside = computed(() =>
  twMerge(
    'cursor-inherit group cursor-pointer',
    sizes[props.size].outside,
    styles[props.color].outside,
    props.ghost? 'bg-stone-300 hover:bg-stone-400':'',
  ),
)

const inside = computed(() =>
  twMerge(
    'text-center inline-block relative transition-all transition-ease-in-out group-active:!top-0 group-active:!left-0',
    sizes[props.size].inside,
    styles[props.color].inside,
    props.ghost? 'text-stone-900 hover:text-black':'',
  ),
)
</script>

<template>
  <component
    :is="to || href ? NuxtLink : 'button'"
    class="inline-block select-none"
    :class="outside"
    :to
    :href
  >
    <div class="select-none" :class="inside">
      <Icon
        v-if="loading"
        class="mr-3"
        size="20"
        name="line-md:loading-twotone-loop"
      />
      <slot v-else />
    </div>
  </component>
</template>
