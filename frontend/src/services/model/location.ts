import { User } from "./user"

export interface location {
    _id: string,
    name: string,
    type: string,
    imgUrls: string[],
    price: number,
    summary: string,
    capacity: number,
    amenities: string[],
    labels: string[],
    host: {
        _id: string,
        fullname: string,
        imgUrl: string,
    },
    loc: {
        country: string,
        countryCode: string,
        city: string,
        address: string,
        lat: number,
        lng: number
    },
    reviews:
    {
        id: string,
        txt: string,
        rate: number,
        by: {
            _id: string,
            fullname: string,
            imgUrl: string
        }
    }[]

    likedByUsers: User[] // for user-wishlist : use $in
}