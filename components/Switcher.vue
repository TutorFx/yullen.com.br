<script setup lang="ts" generic="T extends string">
defineProps<{
  options: T[]
}>()

const model = defineModel<T>()
</script>

<template>
    <div class="grid justify-center">
        <div class="grid grid-flow-col items-center justify-center gap-2 rounded-md p-1 px-2 font-black">
          <component 
            v-for="item in options" 
            :is="model === item ? 'Btn' : 'BtnFlat'"
            color="secondary"
            :ghost="model !== item" 
            :key="item"
            @click="model = item"
          >
            {{ $t(item) }}
          </component>
        </div>
    </div>
</template>
