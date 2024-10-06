<script setup lang="ts">

const menuVisible = useScrollLock(document)


</script>

<template>
  <div class="py-3">
    <Container class="grid grid-cols-[max-content_1fr]">
      <NuxtLink to="/">
        <Logo width="120" />
      </NuxtLink>

      <div class="grid grid-flow-col items-center justify-end gap-3">
        <div class="grid-flow-col hidden items-center gap-1 sm:grid">
          <BtnFlat
            v-for="(item, i) in Menu" :key="`menu-item-${i}-desktop`" :to="item.to" color="secondary"
            size="sm"
          >
            {{ item.text }}
          </BtnFlat>
        </div>
        <div class="grid items-center">
          <Btn to="ada" size="sm">
            CONTATO
          </Btn>
        </div>
        <a class="text-black sm:hidden" @click="menuVisible = !menuVisible">
          <Icon size="38" name="mdi:menu" />
        </a>
      </div>
    </Container>


    <div 
      v-if="menuVisible"
      class="fixed inset-0 z-[1000] grid translate-x-100% bg-secondary transition-all transition-duration-300 target:translate-x-0 !focus:translate-x-100%"
    >
      <div class="grid grid-rows-[max-content_1fr]">
        <div class="grid grid-cols-[max-content_1fr] gap-3 p-3">
          <NuxtLink to="/">
            <Logo width="120" />
          </NuxtLink>
          <div class="grid items-center justify-end">
            <a class="text-black" @click="menuVisible = !menuVisible">
              <Icon size="38" name="mdi:close" />
            </a>
          </div>
        </div>
        <div class="grid items-center bg-secondary-600 p-3 text-3xl">
          <div>
            <Btn v-for="(item, i) in Menu" :key="`menu-item-${i}-mobile`" :to="item.to">
              {{ item.text }}
            </Btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
