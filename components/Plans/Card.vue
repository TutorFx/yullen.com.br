<script setup lang="ts">
withDefaults(
    defineProps<{
        betterChoice?: boolean;
    
        title: string;
        paragraph: string;
        price: string;
    
        priceDescription?: string;
    
        features: string[];
    }>(),
    {
        betterChoice: false,
    }
)
</script>

<template>
    <div>
        <div v-if="betterChoice">
            {{ $t('plans.better-choice') }}
        </div>
        <div>
            <div>
                {{ title }}
            </div>
            <div>
                {{ paragraph }}
            </div>
            <div>
                {{ price }}
            </div>
            <div>
                {{ priceDescription }}
            </div>
        </div>
    </div>
</template>