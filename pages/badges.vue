<script setup lang="ts">
const appConfig = useAppConfig()
let userId = appConfig.userId

let user_badges = getSampleUserBadges(userId)
//let user_badges = await getUserBadges(userId)
</script>


<template>
    <div class="my-3">
        <h4>Your unlocked badges</h4>
    </div>

    <div class="row row-cols-2">
        <Badge v-for="badge in user_badges" :key=badge.id :badge=badge :hideTitle="false" />
    </div>
</template>


