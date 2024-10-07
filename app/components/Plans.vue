<script setup lang="ts">
const online = ref(true)

const { locale: lang } = useI18n()

const query = gql`
    query PlanosQuery($online: Boolean, $lang: String) {
        Planos(filter: { online: { _eq: $online } }) {
            slug
            periodicity
            featured
            variant
            translations(filter: { languages_code: { _eq: $lang } }) {
                languages_code
                title
                description
                features
                price
            }
        }
    }
`

const { result } = useQuery<PlanosQuery>(query, {
  online,
  lang,
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
      <PlansSwitcher v-model="online" />
    </div>
    <div v-if="result">
      <div class="grid items-start gap-6 md:grid-cols-3 justify-center px-12 xl:px-24">
        <PlansCard v-for="(card, i) in processPlanRequest(result)" :key="i" v-bind="card" :variant="usePlanColor(i)" />
      </div>
    </div>
  </div>
</template>
