<script setup lang="ts">

import type { UserLedgerEntry } from '~/types'
import moment from 'moment';

defineProps<{
  ledger_entry: UserLedgerEntry
}>()

</script>

<template>
    <tr class="fs-7">
        <td>{{ moment(ledger_entry.transaction_timestamp).format('MM-DD-YYYY') }}</td>
        <td>{{ ledger_entry.amount }}</td>
        <td>{{ ledger_entry.remarks }}</td>
    </tr>
</template>