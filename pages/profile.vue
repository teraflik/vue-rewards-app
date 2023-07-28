<script setup lang="ts">
const appConfig = useAppConfig()
let userId = appConfig.userId

let user = getSampleUser(userId)
let user_fuel_points_balance = getSampleUserFuelPointsBalance(userId)
// let user_fuel_points_balance = await getUserFuelPointsBalance(userId)
let user_badges = getSampleUserBadges(userId)
// let user_badges = await getUserBadges(userId)
</script>


<template>
    <div class="row text-center">
        <div class="mt-3 mb-4">
            <img :src="user.profile_image_url" class="rounded-circle img-fluid" style="width: 100px;" />
        </div>
        <h4 class="mb-2">{{ user.name }}</h4>
        <p class="text-muted mb-4">{{ user.phone_no }}</p>
    </div>
    <div class="row mb-3">
        <h6>Recent Badges</h6>
        <div class="d-flex mt-3 mb-3">
            <Badge v-for="badge in user_badges.slice(-3).reverse()" :key=badge.id :badge=badge :hideTitle="true" />
        </div>

    </div>
    <hr />

    <div class="d-flex justify-content-between text-center mt-5 mb-2">
        <NuxtLink to="/ledger" class="text-decoration-none">
            <div class="border rounded text-bg-primary p-2">
                <p class="mb-2 h5">{{ user_fuel_points_balance.fuel_points_balance }}</p>
                <p class="mb-0">Fuel Points Balance →</p>
            </div>
        </NuxtLink>
        <NuxtLink to="/badges" class="text-decoration-none">
        <div class="border rounded text-bg-primary p-2">
            <p class="mb-2 h5">{{ user_badges.length }}</p>
            <p class="mb-0">Total Badges Earned →</p>
        </div>
        </NuxtLink>
    </div>
</template>

