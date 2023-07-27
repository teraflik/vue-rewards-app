// Interfaces for the app
export interface User {
    id: number
    name: string
    phone_no: string
    profile_image_url: string
}

export interface UserLedgerEntry {
    id: number
    transaction_timestamp: string
    amount: number
    remarks: string
}

export interface UserFuelPointsBalance {
    fuel_points_balance: number
}

export interface UserBadge {
    id: number
    name: string
    image_url: string
    fuel_points?: number
    unlock_timestamp: string
}
