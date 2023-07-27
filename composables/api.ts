import { _getAppConfig } from 'nuxt/app'
import type { User, UserLedgerEntry, UserFuelPointsBalance, UserBadge } from '../types'

const apiBaseUrl = _getAppConfig().apiBaseUrl

// generic function to make requests to the API
async function fetchfromAPI(endpoint: string): Promise<any> {
  const {data} = useFetch(endpoint, {
    baseURL: apiBaseUrl,
  })
  return data
}


// function to get user details
export function getUser(user_id: number): Promise<User> {
  return fetchfromAPI(`/user/${user_id}`)
}

// function to get badges for a user
export function getUserBadges(user_id: number): Promise<UserBadge[]> {
  return fetchfromAPI(`/user/${user_id}/badges`)
}

// function to get fuel_points_balance for a user
export function getUserFuelPointsBalance(user_id: number): Promise<UserFuelPointsBalance> {
  return fetchfromAPI(`/user/${user_id}/fuel_points_balance`)
}

// function to get fuel_points_ledger for a user
export function getUserFuelPointLedger(user_id: number): Promise<UserLedgerEntry[]> {
  return fetchfromAPI(`/user/${user_id}/fuel_points_ledger`)
}