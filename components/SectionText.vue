<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import type { RouteLocationRaw } from '#vue-router'

const props = withDefaults(
  defineProps<{
    accent?: string;
    title: string;
    paragraph: string;
    alignment?: 'start' | 'end' | 'center';
    theme?: Style;
    button?: {
      title: string;
      path: RouteLocationRaw | string;
    };
    list?: {
      title: string;
      paragraph: string;
    }[];
  }>(),
  {
    alignment: 'start',
    theme: 'dark',
  },
)

const styles = {
  light: {
    accent: '',
    title: 'text-peaceful-900',
    paragraph: 'text-peaceful-900',
    list: 'text-peaceful-900',
    btn: '',
  },
  dark: {
    accent: '',
    title: 'text-white',
    paragraph: 'text-white',
    list: 'text-white',
    btn: '',
  },
}

type Style = keyof typeof styles

const containerClasses = computed(() =>
  twMerge(
    'grid',
    `justify-${props.alignment}`,
  ),
)

const accentClasses = computed(() =>
  twMerge(
    `text-${props.alignment}`,
    'text-lg font-medium uppercase tracking-wide',
    styles[props.theme].accent,
  ),
)

const titleClasses = computed(() =>
  twMerge(
    `text-${props.alignment}`,
    'text-balance text-2xl font-bold md:text-4xl',
    styles[props.theme].title,
  ),
)

const paragraphClasses = computed(() =>
  twMerge(
    `text-${props.alignment}`,
    'text-balance text-sm font-light md:text-xl',
    styles[props.theme].paragraph,
  ),
)

const btnClasses = computed(() =>
  twMerge(
    `justify-${props.alignment}`,
  ),
)
</script>

<template>
  <div :class="containerClasses">
    <div class="grid gap-6">
      <div class="grid max-w-3xl gap-3">
        <h3 v-if="accent" :class="accentClasses" v-html="accent"/>
        <h1 :class="titleClasses" v-html="title"/>
        <div :class="paragraphClasses" v-html="paragraph"/>
      </div>
      <ol v-if="list" class="grid gap-2">
        <li v-for="(item, i) in list" :key="i" class="content-none">
          <div class="grid grid-cols-[max-content_1fr] items-end gap-3">
            <span class="text-info-700 font-black">{{ i + 1 }}.</span> 
            <span class="text-lg font-bold">{{ item.title }}</span>
          </div>
          <p>
            {{ item.paragraph }}
          </p>
        </li>
      </ol>
      <div v-if="button" class="grid" :class="btnClasses">
        <div>
          <Btn :to="button.path">
            {{ button.title }}
          </Btn>
        </div>
      </div>
    </div>
  </div>
</template>
