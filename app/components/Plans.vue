<script setup lang="ts">
import { getPlanOptions } from '~~/utils'

const options = ['plans.online.title', 'plans.offline.title']
const model = ref<string>('plans.online.title')

const cards = computed(() => {
  const path = model.value.split('.')
  path.pop()
  return getPlanOptions(path.join('.'))
})
</script>

<template>
  <div class="grid gap-12">
    <div>
      <SectionText
        :title="$t('plans.title')"
        :paragraph="$t('plans.paragraph')"
        theme="light"
        alignment="center"
      />
    </div>
    <div>
      <Switcher v-model="model" :options />
    </div>
    <div>
      <div class="grid items-center gap-6 md:grid-cols-3">
        <PlansCard v-for="(card, i) in cards" :key="i" v-bind="card" :variant="usePlanColor(i)" />
      </div>
    </div>
  </div>
</template>
