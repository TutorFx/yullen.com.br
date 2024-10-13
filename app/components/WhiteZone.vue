<template>
  <WhiteZoneContainer>
    <div class="grid gap-32">
      <SectionText
        :title="$t('remote.title')"
        :paragraph="$t('remote.paragraph')"
        :button="{ title: $t('remote.btn'), path: '/contact' }"
        theme="light"
        alignment="center"
      />
      <div class="grid items-center gap-12 md:grid-cols-2">
        <SectionText
          class="max-md:order-1"
          :title="$t('about.title')"
          :paragraph="$t('about.paragraph')"
          :button="{ title: $t('about.btn'), path: '/about' }"
          theme="light"
          alignment="start"
        />
        <div class="aspect-square rounded-2xl bg-gray-200 max-md:order-0" />
      </div>
      <div class="grid items-center gap-12 md:grid-cols-2">
        <NuxtImg class="rounded-2xl" src="/YullenPeso.png"></NuxtImg>
        <SectionText
          :title="$t('steps.title')"
          :paragraph="$t('steps.paragraph')"
          :button="{ title: $t('steps.btn'), path: '/about' }"
          :list="[
            {
              title: $t('steps.discover-yourself.title'),
              paragraph: $t('steps.discover-yourself.paragraph'),
            },
            {
              title: $t('steps.track-your-progress.title'),
              paragraph: $t('steps.track-your-progress.paragraph'),
            },
            {
              title: $t('steps.evolve-constantly.title'),
              paragraph: $t('steps.evolve-constantly.paragraph'),
            },
          ]"
          theme="light"
          alignment="start"
        />
      </div>
      <Plans />
    </div>
  </WhiteZoneContainer>
</template>
