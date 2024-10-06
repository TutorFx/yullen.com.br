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
  }>(),
  {
    color: 'primary',
    size: 'md',
    outlined: false,
    loading: false,
    rounded: false,
  },
)

const NuxtLink = resolveComponent('NuxtLink')

const styles = {
  primary: {
    inside: 'text-primary-content bg-primary border-black border-2',
    outside: 'bg-black',
  },
  secondary: {
    inside: 'text-black bg-secondary border-black border-2',
    outside: 'bg-black',
  },
}

const sizes = {
  md: {
    inside: 'text-md px-3 py-2 rounded-lg -top-1 -left-1 -group-hover:top-.5 -group-hover:left-.5',
    outside: 'rounded-lg',
  },
  sm: {
    inside: 'text-sm px-2 py-1 rounded-md -top-1 -left-1 -group-hover:top-.5 -group-hover:left-.5',
    outside: 'rounded-md',
  },
}

type Style = keyof typeof styles
type Size = keyof typeof sizes

const outside = computed(() =>
  twMerge(
    'cursor-inherit mt-2 ml-2 group cursor-pointer',
    sizes[props.size].outside,
    styles[props.color].outside,
  ),
)

const inside = computed(() =>
  twMerge(
    'text-center inline-block relative transition-all transition-ease-in-out group-active:!top-0 group-active:!left-0',
    sizes[props.size].inside,
    styles[props.color].inside,
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
