<template>
  <div class="grid grid-cols-12">
    <div />
    <div class="col-span-10">
      <SectionText
        :title="$t('hero.title')"
        :paragraph="$t('hero.paragraph')"
        :button="{ title: $t('hero.btn'), path: '/contact' }"
        alignment="center"
      />
    </div>
    <div />
  </div>
</template>
