<script setup lang="ts">

import type { Badge } from '~/types'

defineProps<{
    badge: Badge,
    hideTitle: Boolean
}>()

</script>

<template>
    <div class="col">
        <div class="card">
            <div class="px-3 text-center">
                <img :src=badge.image_url :alt=badge.title class="card-img-top rounded-circle">
            </div>
            <div v-if="!hideTitle" class="card-body text-center">
                <p class="card-title">{{ badge.title }}</p>
                <p class="fw-lighter fs-7">Unlocked: {{ badge.unlocked_timestamp }}</p>
            </div>
        </div>
    </div>
</template>

<style>
.card {
    border: none;
}

img{
    max-width: 100px;
}

.fs-7 {
    font-size: 0.75rem!important;
}
</style>
