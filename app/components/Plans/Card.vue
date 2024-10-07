<script setup lang="ts">
import { cn } from '~~/utils'
import type { PlanCardProps } from '~~/types'

withDefaults(
  defineProps<PlanCardProps>(),
  {
    betterChoice: false,
  },
)
</script>

<template>
  <div :class="cn(usePlanCardVariants({ variant }))">
    <div class="parent relative grid items-center border border-black rounded-2xl overflow-hidden -top-1 -left-1">
      <div v-if="betterChoice" class="px-1 pt-1">
        <div class="rounded-t-xl bg-black px-1 py-3 text-center text-balance text-white font-bold uppercase">
          {{ $t('plans.better-choice') }}
        </div>
      </div>
      <div class="pr-1">
        <div class="bg-[--color]">
          <div class="grid gap-3 p-8">
            <div class="text-3xl">
              {{ title }}
            </div>
            <div v-html="paragraph" class="text-balance" />
            <div>
              {{ price }}
            </div>
            <div v-if="price" class="text-xs">
              {{ priceDescription }}
            </div>
          </div>
        </div>
      </div>
      <div class="grid p-3 gap-3">
        <ul v-if="features && features.length > 0" class="px-2 py-2 grid gap-1">
          <li v-for="(item, i) in features" :key="i" class="grid gap-3 grid-flow-col items-center justify-start">
            <Icon class="text-[--color]" size="14" name="material-symbols:asterisk" />
            <span class="text-sm">{{ item }}</span>
          </li>
        </ul>
        <Btn color="base">
          {{ $t('plans.choose') }}
        </Btn>
      </div>
    </div>
  </div>
</template>
