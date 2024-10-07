<script setup lang="ts">
import { cn } from '~~/utils'
import type { BtnProps } from '~~/types';

withDefaults(
  defineProps<BtnProps>(),
  {
    outlined: false,
    loading: false,
    rounded: false,
  },
)

const NuxtLink = resolveComponent('NuxtLink')

</script>

<template>
  <component
    tabindex="0"
    :is="to || href ? NuxtLink : 'button'"
    class="inline-block select-none"
    :class="cn(useBtnVariants({ size, color, active, variant }))"
    :to
    :href
  >
    <div class="select-none">
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
