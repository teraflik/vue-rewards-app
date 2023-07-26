<script setup lang="ts">

import type { LedgerEntry } from '~/types'

defineProps<{
  ledger_entry: LedgerEntry
}>()

</script>

<template>
    <tr class="fs-7">
        <td>{{ ledger_entry.date }}</td>
        <td>{{ ledger_entry.amount }}</td>
        <td>{{ ledger_entry.remark }}</td>
    </tr>
</template>