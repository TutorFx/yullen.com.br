<script setup lang="ts">
const options = ['plans.online', 'plans.offline']
const model = ref(options[0])

const cards = getPlanOptions()
</script>

<template>
  <div class="grid gap-12">
    <div>
      <SectionText
        :title="$t('plans.title')" :paragraph="$t('plans.paragraph')" theme="light"
        alignment="center"
      />
    </div>
    <div>
      <Switcher v-model="model" :options />
    </div>
    <div>
        <div>
            <PlansCard v-for="(card, i) in cards" :key="i" v-bind="card" />
        </div>
    </div>
  </div>
</template>
