<script setup lang="ts">
import { menuData } from '~/constants';
import type { IMenu } from '~~/types';

const data = ref<Record<string, IMenu[]>>({
    menu: menuData
})

const localePath = useLocalePath()
</script>

<template>
    <div class="grid">
        <div class="bg-white py-12">
            <Container class="grid gap-6 grid-flow-col justify-center text-black items-center">
                <div>
                    <SmallLogo />
                </div>
                <div class="grid grid-flow-col gap-12">
                    <div v-for="(item, i) in data" :key="i" class="grid grid-flow-col justify-start gap-6">
                        <div class="text-secondary font-bold py-1">
                            {{ i.toUpperCase() }}
                        </div>
                        <div>
                            <ul class="grid gap-3">
                                <li v-for="(link, z) in item" :key="`${i}-${z}`">
                                    <Btn v-if="link.to" :to="localePath(link.to)" color="inactive" size="sm">{{ link.text }}</Btn>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <div class="py-6 bg-black text-center text-balance px-2">
            Todos os direitos reservados pela licença Creative Commons 4.0 - Yullen Personal 2024
        </div>
    </div>
</template>