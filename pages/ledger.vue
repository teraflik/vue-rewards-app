<script setup lang="ts">

const appConfig = useAppConfig()
let userId = appConfig.userId

let ledger = getSampleUserFuelPointLedger(userId).reverse()
let user_fuel_points_balance = getSampleUserFuelPointsBalance(userId)

</script>


<template>

    <div class="mt-5 mb-3">
        <h6>Your Current Fuel Points Balance: <b>{{ user_fuel_points_balance }}</b></h6>
    </div>

    <div class="mt-5">
        <h5>History</h5>
    </div>

    <div class="row">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Remark</th>
                </tr>
            </thead>
            <tbody>
                <LedgerEntry v-for="ledger_entry in ledger" :key=ledger_entry.id :ledger_entry=ledger_entry />
            </tbody>
        </table>
    </div>
</template>


