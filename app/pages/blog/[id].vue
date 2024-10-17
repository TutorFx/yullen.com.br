<script setup lang="ts">
const route = useRoute()
const { locale: lang } = useI18n()

const query = gql`
  query BlogItem($id: String, $lang: String) {
    Blog(filter: { id: { _eq: $id } }) {
      id
      translations(filter: { languages_code: { _eq: $lang } }) {
        languages_code
        Title
        content
      }
    }
  }
`

const { result } = useQuery<BlogQuery>(query, {
  lang,
  id: route.params.id
})

const data = computed(() => {
  const blog = result.value?.Blog

  if (!blog) return null

  const items = blog.map((item) => {
    const translation = item.translations[0]

    if (!translation) return null

    return {
      translation,
      ...item
    }
  })
  .filter((item) => item !== null)

  return items[0]
})
</script>

<template>
  <div class="grid">
    <Container class="grid">
      <div v-if="data" class="grid items-start">
        <div class="grid items-start gap-3 py-6">
          <h1 class="text-4xl font-bold">
            {{ data.translation.Title }}
          </h1>
          <MDC :value="data.translation.content" tag="article" class="grid items-start gap-1" />
        </div>
      </div>
      <div v-else-if="data == null">
        404
      </div>
    </Container>
    <Footer />
  </div>
</template>
