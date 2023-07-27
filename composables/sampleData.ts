import type { User, UserLedgerEntry, UserBadge } from '../types'

let sampleUserBadges: UserBadge[] = [
    {
        id: 1,
        name: 'Fuel Buddy',
        image_url: '/badges/fuel_buddy.png',
        unlock_timestamp: '23 Aug'
    },
    {
        id: 2,
        name: 'Handsfree Champ',
        image_url: '/badges/handsfree_champ.png',
        unlock_timestamp: '23 Aug'
    },
    {
        id: 3,
        name: 'Into Tunes Driver',
        image_url: '/badges/into_tunes_driver.png',
        unlock_timestamp: '23 Aug'
    },
    {
        id: 4,
        name: 'No Need For Speed',
        image_url: '/badges/no_need_for_speed.png',
        unlock_timestamp: '23 Aug'
    },
    {
        id: 5,
        name: 'Optimum Driver',
        image_url: '/badges/optimum_driver.png',
        unlock_timestamp: '23 Aug'
    },
    {
        id: 6,
        name: 'Road Master',
        image_url: '/badges/road_master.png',
        unlock_timestamp: '23 Aug'
    },
    {
        id: 7,
        name: 'Zen Owl',
        image_url: '/badges/zen_owl.png',
        unlock_timestamp: '23 Aug'
    }
]

export const sampleUser: User = {
    id: 1,
    name: 'Anne Marie',
    phone_no: '+11-82723282',
    profile_image_url: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp',
}

export const sampleLedger: UserLedgerEntry[] = [
    {
        id: 1,
        transaction_timestamp: '2021-02-23',
        amount: 400,
        remarks: 'Awarded for unlocking "Avid Driver" milestone',
    },
    {
        id: 2,
        transaction_timestamp: '2022-04-27',
        amount: 150,
        remarks: 'Awarded for unlocking "Zen of Night" milestone',
    },
    {
        id: 3,
        transaction_timestamp: '2022-06-16',
        amount: -23.45,
        remarks: 'Redeemed at "Texas Interstate Fuel Station"',
    },
    {
        id: 4,
        transaction_timestamp: '2023-02-14',
        amount: 200,
        remarks: 'Awarded for unlocking "Zen Owl" milestone',
    },
]

export function getSampleUser(user_id: number): User {
    return sampleUser
}

export function getSampleUserBadges(user_id: number): UserBadge[] {
    return sampleUserBadges
}

export function getSampleUserFuelPointsBalance(user_id: number): Number {
    return 726.55
}

export function getSampleUserFuelPointLedger(user_id: number): UserLedgerEntry[] {
    return sampleLedger
}

