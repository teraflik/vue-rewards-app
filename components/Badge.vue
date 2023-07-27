<script setup lang="ts">

import type { UserBadge } from '~/types'

defineProps<{
    badge: UserBadge,
    hideTitle: Boolean
}>()

</script>

<template>
    <div class="col">
        <div class="card">
            <div class="px-3 text-center">
                <img :src=badge.image_url :alt=badge.name class="card-img-top">
            </div>
            <div v-if="!hideTitle" class="card-body text-center">
                <p class="card-title">{{ badge.name }}</p>
                <p class="fw-lighter fs-7">Unlocked: 23 Dec </p>
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
