<template>
    <div class="grid gap-12">
        <div class="grid gap-3">
            <h3 v-if="accent" :text="alignment" :class="accentClasses">
                {{ accent }}
            </h3>
            <h1 :text="alignment" :class="titleClasses">
                {{ title }}
            </h1>
            <p :text="alignment" :class="paragraphClasses">
                {{ paragraph }}
            </p>
        </div>
        <div v-if="button" class="grid" :justify="alignment">
            <div>
                <Btn :to="button.path">{{ button.title }}</Btn>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { RouteLocationRaw } from '#vue-router';

const props = withDefaults(
    defineProps<{
        accent?: string;
        title: string;
        paragraph: string;
        alignment?: 'start' | 'end' | 'center',
        theme?: Style,
        button?: {
            title: string;
            path: RouteLocationRaw | string
        }
    }>(),
    {   
        alignment: 'start',
        theme: 'dark',
    }
)

const styles = {
    light: {
        accent: '',
        title: 'text-white',
        paragraph: 'text-white',
        btn: '',
    },
    dark: {
        accent: '',
        title: '',
        paragraph: '',
        btn: '',
    }
}

type Style = keyof typeof styles

const accentClasses = computed(() =>
  twMerge(
    'text-brand-primary text-lg font-medium uppercase tracking-wide',
    styles[props.theme].accent,
  ),
)

const titleClasses = computed(() =>
  twMerge(
    'mx-auto max-w-3xl text-balance text-2xl font-bold md:text-4xl',
    styles[props.theme].title,
  ),
)

const paragraphClasses = computed(() =>
  twMerge(
    'mx-auto text-balance text-sm font-light md:text-xl',
    styles[props.theme].paragraph,
  ),
)
</script>