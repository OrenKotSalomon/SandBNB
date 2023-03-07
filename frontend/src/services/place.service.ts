// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export const placeService = {
    getPlaces,
    getFilters
}

function getFilters() {
    return [
        {
            icon: 'rocket_launch',
            txt:'OMG!'
        },
        {
            icon: 'local_fire_department',
            txt:'Trending'
        },
        {
            icon:'fort',
            txt:'Castles'
        },
        {
            icon: 'kayaking',
            txt:'Lake'
        },
        {
            icon: 'camping',
            txt:'Domes'
        },
        {
            icon: 'bed',
            txt:'Private rooms'
        },
        {
            icon: 'castle',
            txt:'Mentions'
        },
        {
            icon: 'downhill_skiing',
            txt:'Ski'
        },
        {
            icon: 'location_city',
            txt:'Apartment'
        },
        {
            icon: 'family_restroom',
            txt:'Family'
        },
        {
            icon: 'local_cafe',
            txt:'Bed & breakfast'
        },
        {
            icon: 'holiday_village',
            txt:'Village'
        },
        {
            icon: 'cabin',
            txt:'Cabin'
        },
        {
            icon: 'gite',
            txt:'Farm'
        },
        // {
        //     icon: ,
        //     txt:
        // },
        // {
        //     icon: ,
        //     txt:
        // },
        // {
        //     icon: ,
        //     txt:
        // },
        // {
        //     icon: ,
        //     txt:
        // },
        // {
        //     icon: ,
        //     txt:
        // },
        // {
        //     icon: ,
        //     txt:
        // },
        // {
        //     icon: ,
        //     txt:
        // },
        // {
        //     icon: ,
        //     txt:
        // },
        // {
        //     icon: ,
        //     txt:
        // },
        // {
        //     icon: ,
        //     txt:
        // },
        // {
        //     icon: ,
        //     txt:
        // },
    ]
}

function getPlaces() {
    return [
        {
            _id: '101',
            name: 'Ribeira Charming Duplex',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1674317426/card6_nhuv58.jpg'],
            price: 180.00,
            loc: {
                country: ' Kingdom',
                countryCode: 'PIN',
                city: ' city',
                address: '69',
            },
        },
        {
            _id: '102',
            name: 'Orens  Cave',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673877599/%D7%A7%D7%95%D7%A1%D7%98%D7%94_%D7%A8%D7%99%D7%A7%D7%94_%D7%9E%D7%A9%D7%A4%D7%97%D7%94_%D7%A8%D7%90%D7%A4%D7%98%D7%99%D7%A0%D7%92_ncmgot.jpg'],
            price: 840.00,
            loc: {
                country: 'Portugal',
                countryCode: 'PT',
                city: 'Porto',
                address: '17 Kombo st',
            },
        },
        {
            _id: '103',
            name: 'Maor house',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673819141/%D7%A6%D7%91%D7%90_%D7%A2%D7%9D_%D7%92%D7%9C_dxaphz.jpg'],
            price: 870.00,
            loc: {
                country: 'United state',
                countryCode: 'USA',
                city: 'washington',
                address: '17 Kombo st',
            },
        },
        {
            _id: '104',
            name: ' Maor',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673817085/%D7%99%D7%9D_%D7%94%D7%9E%D7%9C%D7%97_%D7%A2%D7%9E%D7%99%D7%93%D7%AA_%D7%99%D7%93%D7%99%D7%99%D7%9D_qf2ku1.jpg'],
            price: 280.00,
            loc: {
                country: 'israel',
                countryCode: 'ISR',
                city: 'Tel Aviv',
                address: '17',
            },
        },
        {
            _id: '101',
            name: 'Ribeira Charming Duplex',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1674317426/card6_nhuv58.jpg'],
            price: 180.00,
            loc: {
                country: ' Kingdom',
                countryCode: 'PIN',
                city: ' city',
                address: '69',
            },
        },
        {
            _id: '102',
            name: 'Orens  Cave',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673877599/%D7%A7%D7%95%D7%A1%D7%98%D7%94_%D7%A8%D7%99%D7%A7%D7%94_%D7%9E%D7%A9%D7%A4%D7%97%D7%94_%D7%A8%D7%90%D7%A4%D7%98%D7%99%D7%A0%D7%92_ncmgot.jpg'],
            price: 840.00,
            loc: {
                country: 'Portugal',
                countryCode: 'PT',
                city: 'Porto',
                address: '17 Kombo st',
            },
        },
        {
            _id: '103',
            name: 'Maor house',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673819141/%D7%A6%D7%91%D7%90_%D7%A2%D7%9D_%D7%92%D7%9C_dxaphz.jpg'],
            price: 870.00,
            loc: {
                country: 'United state',
                countryCode: 'USA',
                city: 'washington',
                address: '17 Kombo st',
            },
        },
        {
            _id: '104',
            name: ' Maor',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673817085/%D7%99%D7%9D_%D7%94%D7%9E%D7%9C%D7%97_%D7%A2%D7%9E%D7%99%D7%93%D7%AA_%D7%99%D7%93%D7%99%D7%99%D7%9D_qf2ku1.jpg'],
            price: 280.00,
            loc: {
                country: 'israel',
                countryCode: 'ISR',
                city: 'Tel Aviv',
                address: '17',
            },
        },
        {
            _id: '101',
            name: 'Ribeira Charming Duplex',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1674317426/card6_nhuv58.jpg'],
            price: 180.00,
            loc: {
                country: ' Kingdom',
                countryCode: 'PIN',
                city: ' city',
                address: '69',
            },
        },
        {
            _id: '102',
            name: 'Orens  Cave',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673877599/%D7%A7%D7%95%D7%A1%D7%98%D7%94_%D7%A8%D7%99%D7%A7%D7%94_%D7%9E%D7%A9%D7%A4%D7%97%D7%94_%D7%A8%D7%90%D7%A4%D7%98%D7%99%D7%A0%D7%92_ncmgot.jpg'],
            price: 840.00,
            loc: {
                country: 'Portugal',
                countryCode: 'PT',
                city: 'Porto',
                address: '17 Kombo st',
            },
        },
        {
            _id: '103',
            name: 'Maor house',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673819141/%D7%A6%D7%91%D7%90_%D7%A2%D7%9D_%D7%92%D7%9C_dxaphz.jpg'],
            price: 870.00,
            loc: {
                country: 'United state',
                countryCode: 'USA',
                city: 'washington',
                address: '17 Kombo st',
            },
        },
        {
            _id: '104',
            name: ' Maor',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673817085/%D7%99%D7%9D_%D7%94%D7%9E%D7%9C%D7%97_%D7%A2%D7%9E%D7%99%D7%93%D7%AA_%D7%99%D7%93%D7%99%D7%99%D7%9D_qf2ku1.jpg'],
            price: 280.00,
            loc: {
                country: 'israel',
                countryCode: 'ISR',
                city: 'Tel Aviv',
                address: '17',
            },
        },
        {
            _id: '101',
            name: 'Ribeira Charming Duplex',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1674317426/card6_nhuv58.jpg'],
            price: 180.00,
            loc: {
                country: ' Kingdom',
                countryCode: 'PIN',
                city: ' city',
                address: '69',
            },
        },
        {
            _id: '102',
            name: 'Orens  Cave',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673877599/%D7%A7%D7%95%D7%A1%D7%98%D7%94_%D7%A8%D7%99%D7%A7%D7%94_%D7%9E%D7%A9%D7%A4%D7%97%D7%94_%D7%A8%D7%90%D7%A4%D7%98%D7%99%D7%A0%D7%92_ncmgot.jpg'],
            price: 840.00,
            loc: {
                country: 'Portugal',
                countryCode: 'PT',
                city: 'Porto',
                address: '17 Kombo st',
            },
        },
        {
            _id: '103',
            name: 'Maor house',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673819141/%D7%A6%D7%91%D7%90_%D7%A2%D7%9D_%D7%92%D7%9C_dxaphz.jpg'],
            price: 870.00,
            loc: {
                country: 'United state',
                countryCode: 'USA',
                city: 'washington',
                address: '17 Kombo st',
            },
        },
        {
            _id: '104',
            name: ' Maor',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673817085/%D7%99%D7%9D_%D7%94%D7%9E%D7%9C%D7%97_%D7%A2%D7%9E%D7%99%D7%93%D7%AA_%D7%99%D7%93%D7%99%D7%99%D7%9D_qf2ku1.jpg'],
            price: 280.00,
            loc: {
                country: 'israel',
                countryCode: 'ISR',
                city: 'Tel Aviv',
                address: '17',
            },
        },
        {
            _id: '101',
            name: 'Ribeira Charming Duplex',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1674317426/card6_nhuv58.jpg'],
            price: 180.00,
            loc: {
                country: ' Kingdom',
                countryCode: 'PIN',
                city: ' city',
                address: '69',
            },
        },
        {
            _id: '102',
            name: 'Orens  Cave',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673877599/%D7%A7%D7%95%D7%A1%D7%98%D7%94_%D7%A8%D7%99%D7%A7%D7%94_%D7%9E%D7%A9%D7%A4%D7%97%D7%94_%D7%A8%D7%90%D7%A4%D7%98%D7%99%D7%A0%D7%92_ncmgot.jpg'],
            price: 840.00,
            loc: {
                country: 'Portugal',
                countryCode: 'PT',
                city: 'Porto',
                address: '17 Kombo st',
            },
        },
        {
            _id: '103',
            name: 'Maor house',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673819141/%D7%A6%D7%91%D7%90_%D7%A2%D7%9D_%D7%92%D7%9C_dxaphz.jpg'],
            price: 870.00,
            loc: {
                country: 'United state',
                countryCode: 'USA',
                city: 'washington',
                address: '17 Kombo st',
            },
        },
        {
            _id: '104',
            name: ' Maor',
            imgUrls: ['https://res.cloudinary.com/dimirmc9j/image/upload/v1673817085/%D7%99%D7%9D_%D7%94%D7%9E%D7%9C%D7%97_%D7%A2%D7%9E%D7%99%D7%93%D7%AA_%D7%99%D7%93%D7%99%D7%99%D7%9D_qf2ku1.jpg'],
            price: 280.00,
            loc: {
                country: 'israel',
                countryCode: 'ISR',
                city: 'Tel Aviv',
                address: '17',
            },
        }
    ]
}

// DEMO PLACE JSON

const location = {
    _id: '10006546',
    name: 'Ribeira Charming Duplex',
    type: 'House',
    imgUrls: ['https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large', 'otherImg.jpg'],
    price: 80.00,
    summary: 'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
    capacity: 8,
    amenities: [
        'TV',
        'Wifi',
        'Kitchen',
        'Smoking allowed',
        'Pets allowed',
        'Cooking basics'
    ],
    labels: [
        'Top of the world',
        'Trending',
        'Play',
        'Tropical'
    ],
    host: {
        _id: 'u101',
        fullname: 'Davit Pok',
        imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
    },
    loc: {
        country: 'Portugal',
        countryCode: 'PT',
        city: 'Porto',
        address: '17 Kombo st',
        lat: -8.61308,
        lng: 41.1413
    },
    reviews: [
        {
            id: 'madeId',
            txt: 'Very helpful hosts. Cooked traditional...',
            rate: 4,
            by: {
                _id: 'u102',
                fullname: 'user2',
                imgUrl: '/img/img2.jpg'
            }
        }
    ],
    likedByUsers: ['mini-user'] // for user-wishlist : use $in
}