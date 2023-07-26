<script setup lang="ts">

const appConfig = useAppConfig()
let userId = appConfig.userId

let badges = getSampleUserBadges(userId)

</script>


<template>
    <div class="mt-5 mb-3">
        <h4>Your unlocked badges</h4>
    </div>

    <div class="row row-cols-2">
        <Badge v-for="badge in badges" :key=badge.id :badge=badge :hideTitle="false" />
    </div>
</template>


