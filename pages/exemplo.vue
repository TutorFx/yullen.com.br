<template>
    <div>
        <div>
            <div class="grid grid-cols-2">
                <div v-for="i in 4" :key="i">
                    {{ i }}
                </div>
            </div>
        </div>
    </div>
</template>