<script setup lang="ts">
defineProps<{ 
    src: string; 
    alt: string 
}>()

</script>

<template>

    <NuxtImg 
        height="100%"
        max-height="24rem"
        class="max-h-96 rounded-xl"
        width="auto"
        placeholder="16"
        sizes="xs:60px sm:60px lg:80px xl:120px xxl:120px 2xl:120px"
        densities="x0.2 x0.5 x1 x2"
        :modifiers="{ fit: 'contain' }"
        :src 
        :alt 
    />

</template>