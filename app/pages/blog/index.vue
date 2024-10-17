<script setup lang="ts">

const { locale: lang } = useI18n()

const query = gql`
  query BlogQuery($lang: String) {
    Blog {
      id
      translations(filter: { languages_code: { _eq: $lang } }) {
        languages_code
        Title
        description
        content
        tags
      }
    }
  }
`

const { result } = useQuery<BlogQuery>(query, {
  lang,
})

const data = computed(() => {
  const blog = result.value?.Blog

  if (!blog) return null

  return blog.map((item) => {
    const translation = item.translations[0]

    if (!translation) return null

    return {
      translation,
      ...item
    }
  })
  .filter((item) => item !== null)
})

const localePath = useLocalePath()
</script>

<template>
  <div class="pt-12 grid grid-rows-[1fr_max-content]">
    <Container>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink 
          v-for="item in data" :key="item.id" 
          :to="localePath({ name: 'blog-id', params: { id: item.id }})" 
          class="border border-primary rounded-xl"
        >
          <div class="grid gap-4 p-4">
            <div class="flex flex-wrap gap-2" v-if="item.translation.tags">
              <span class="bg-red-500 px-2 py-1 rounded-md text-sm" v-for="tag in item.translation.tags" :key="tag">
                {{ tag }}
              </span>
            </div>
            <div class="grid gap-2">
              <h2 class="text-3xl font-black">{{ item.translation.Title }}</h2>
              <p class="text-xl font-light line-clamp-3">{{ item.translation.description }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </Container>
    <Footer />
  </div>
</template>
