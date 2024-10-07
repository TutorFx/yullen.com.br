<script setup lang="ts" generic="T extends string">

const model = defineModel<boolean>({ required: true })

function color(status: boolean){
  return status ? 'primary' : 'inactive'
}
</script>

<template>
    <div class="grid justify-center">
        <div class="grid grid-flow-col items-center justify-center gap-2 rounded-md p-1 px-2 font-black">
          <Btn variant="extruded" @click="model = true" :active="model" :color="color(model)">{{ $t('plans.online.title') }}</Btn>
          <Btn variant="extruded" @click="model = false" :active="!model" :color="color(!model)">{{ $t('plans.offline.title') }}</Btn>
        </div>
    </div>
</template>
