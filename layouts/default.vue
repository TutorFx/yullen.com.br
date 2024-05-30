<template>
  <div class="grid grid-rows-[max-content_1fr_max-content] min-h-[100dvh] bg-secondary text-secondary-content font-sans">
    <NavHeader />
    <main>
      <slot />
    </main>
    <NavFooter />
  </div>
</template>
