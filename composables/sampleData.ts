import type { User, Badge, LedgerEntry } from '../types'

export const sampleUserBadges: Badge[] = [
    {
        id: 1,
        title: 'Example Badge 1',
        image_url: 'https://placehold.co/300.png',
        unlocked_timestamp: '23 Dec',
    },
    {
        id: 2,
        title: 'Example Badge 2',
        image_url: 'https://placehold.co/300.png',
        unlocked_timestamp: '14 Nov',
    },
    {
        id: 3,
        title: 'Example Badge 3',
        image_url: 'https://placehold.co/300.png',
        unlocked_timestamp: '15 Mar',
    },
    {
        id: 4,
        title: '100 km covered',
        image_url: 'https://placehold.co/300.png',
        unlocked_timestamp: '23 Dec',
    }
]

export const sampleUser: User = {
    id: 1,
    name: 'Anne Marie',
    phone_no: '+11-82723282',
    profile_image_url: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp',
}

export const sampleLedger: LedgerEntry[] = [
    {
        id: 1,
        date: '2021-02-23',
        amount: 400,
        remark: 'Awarded for unlocking "Avid Driver" milestone',
    },
    {
        id: 2,
        date: '2022-04-27',
        amount: 150,
        remark: 'Awarded for unlocking "Zen of Night" milestone',
    },
    {
        id: 3,
        date: '2022-06-16',
        amount: -23.45,
        remark: 'Redeemed at "Texas Interstate Fuel Station"',
    },
    {
        id: 4,
        date: '2023-02-14',
        amount: 200,
        remark: 'Awarded for unlocking "Avid Driver milestone"',
    },
]

export function getSampleUserBadges(user_id: number): Badge[] {
    return sampleUserBadges
}

export function getSampleUser(user_id: number): User {
    return sampleUser
}

export function getSampleUserFuelPointsBalance(user_id: number): Number {
    return 726.55
}

export function getSampleUserFuelPointLedger(user_id: number): LedgerEntry[] {
    return sampleLedger
}

