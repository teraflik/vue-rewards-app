// Interfaces for the app
export interface User {
    id: number
    name: string
    phone_no: string
    profile_image_url: string
}

export interface Badge {
    id: number
    title: string
    image_url: string
    unlocked_timestamp: string
}

export interface LedgerEntry {
    id: number
    date: string
    amount: number
    remark: string
}