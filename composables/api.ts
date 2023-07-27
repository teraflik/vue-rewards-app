import { _getAppConfig } from 'nuxt/app'
import type { User, Badge, LedgerEntry } from '../types'

const apiBaseUrl = _getAppConfig().apiBaseUrl

// generic function to make requests to the API
async function fetchfromAPI<T>(endpoint: string): Promise<T> {
  return await $fetch(endpoint, {
    baseURL: apiBaseUrl,
  })
}

// function to get user details
export function getUser(user_id: number): Promise<User> {
  return fetchfromAPI(`/user/${user_id}`)
}

// function to get badges for a user
export function getUserBadges(user_id: number): Promise<Badge[]> {
  return fetchfromAPI(`/user/${user_id}/badges`)
}

// function to get fuel_points_balance for a user
export function getUserFuelPointsBalance(user_id: number): Promise<Number> {
  return fetchfromAPI(`/user/${user_id}/fuel_points_balance`)
}


// function to get fuel_points_ledger for a user
export function getUserFuelPointLedger(user_id: number): Promise<LedgerEntry[]> {
  return fetchfromAPI(`/user/${user_id}/fuel_points_ledger`)
}