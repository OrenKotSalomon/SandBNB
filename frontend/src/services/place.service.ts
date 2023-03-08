// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export const placeService = {
    getPlaces,
    getFilters
}

function getFilters() {
    return [
        {
            icon: 'rocket_launch',
            txt: 'OMG!'
        },
        {
            icon: 'local_fire_department',
            txt: 'Trending'
        },
        {
            icon: 'fort',
            txt: 'Castles'
        },
        {
            icon: 'kayaking',
            txt: 'Lake'
        },
        {
            icon: 'camping',
            txt: 'Domes'
        },
        {
            icon: 'bed',
            txt: 'Private rooms'
        },
        {
            icon: 'castle',
            txt: 'Mentions'
        },
        {
            icon: 'downhill_skiing',
            txt: 'Ski'
        },
        {
            icon: 'location_city',
            txt: 'Apartment'
        },
        {
            icon: 'family_restroom',
            txt: 'Family'
        },
        {
            icon: 'local_cafe',
            txt: 'Bed & breakfast'
        },
        {
            icon: 'holiday_village',
            txt: 'Village'
        },
        {
            icon: 'cabin',
            txt: 'Cabin'
        },
        {
            icon: 'gite',
            txt: 'Farm'
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
            _id: '105',
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
            _id: '106',
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
            _id: '107',
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
            _id: '108',
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
            _id: '109',
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
            _id: '110',
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
            _id: '111',
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
            _id: '112',
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
            _id: '113',
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
            _id: '114',
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
            _id: '115',
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
            _id: '116',
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
            _id: '117',
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
            _id: '118',
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
            _id: '120',
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
            _id: '121',
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

const locations = [
    {
        _id: '123456789',
        name: 'Example Property',
        type: 'Apartment',
        imgUrls: [
            'https://example.com/images/property-1.jpg',
            'https://example.com/images/property-2.jpg',
            'https://example.com/images/property-3.jpg'
        ],
        price: 100.00,
        summary: 'This is an example property description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        capacity: 4,
        amenities: [
            'Wifi',
            'Air conditioning',
            'Washing machine',
            'Dryer',
            'Iron',
            'Hair dryer'
        ],
        labels: [
            'Luxury',
            'Modern',
            'Spacious'
        ],
        host: {
            _id: '987654321',
            fullname: 'John Doe',
            imgUrl: 'https://example.com/images/host-avatar.jpg'
        },
        loc: {
            country: 'United States',
            countryCode: 'US',
            city: 'New York',
            address: '123 Example Street',
            lat: 40.712776,
            lng: -74.005974
        },
        reviews: [
            {
                id: 'review-1',
                txt: 'This place was amazing! Would definitely stay here again.',
                rate: 5,
                by: {
                    _id: '111111111',
                    fullname: 'Jane Smith',
                    imgUrl: 'https://example.com/images/user-avatar.jpg'
                }
            },
            {
                id: 'review-2',
                txt: 'The location was great, but the apartment could have been cleaner.',
                rate: 3,
                by: {
                    _id: '222222222',
                    fullname: 'Bob Johnson',
                    imgUrl: 'https://example.com/images/user-avatar.jpg'
                }
            }
        ],
        likedByUsers: ['333333333', '444444444'] // array of user IDs who have liked this property
    }, {
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
    }, {
        _id: '10009876',
        name: 'Cozy Cabin in the Woods',
        type: 'Cabin',
        imgUrls: ['https://www.example.com/images/cabin1.jpg', 'https://www.example.com/images/cabin2.jpg'],
        price: 120.00,
        summary: 'Escape the hustle and bustle of the city and retreat to this cozy cabin in the woods...',
        capacity: 4,
        amenities: [
            'Fireplace',
            'Kitchen',
            'Free parking on premises',
            'Wifi',
            'Pet-friendly'
        ],
        labels: [
            'Romantic',
            'Secluded',
            'Nature',
            'Adventure'
        ],
        host: {
            _id: 'u104',
            fullname: 'Alice Johnson',
            imgUrl: 'https://www.example.com/images/host1.jpg',
        },
        loc: {
            country: 'USA',
            countryCode: 'US',
            city: 'Asheville',
            address: '1234 Forest Lane',
            lat: 35.5951,
            lng: -82.5515
        },
        reviews: [
            {
                id: 'r101',
                txt: 'My partner and I had a lovely time at this cabin. It was clean, cozy, and had everything we needed for a romantic getaway.',
                rate: 5,
                by: {
                    _id: 'u105',
                    fullname: 'John Smith',
                    imgUrl: 'https://www.example.com/images/user1.jpg'
                }
            },
            {
                id: 'r102',
                txt: 'We had a great time staying at this cabin. It was the perfect size for our family of four and had all the amenities we needed.',
                rate: 4,
                by: {
                    _id: 'u106',
                    fullname: 'Jessica Lee',
                    imgUrl: 'https://www.example.com/images/user2.jpg'
                }
            }
        ],
        likedByUsers: ['u107', 'u108', 'u109'] // for user-wishlist : use $in
    }, {
        _id: '100987',
        name: 'Modern Loft in Downtown LA',
        type: 'Apartment',
        imgUrls: ['https://images.unsplash.com/photo-1575427064015-46e01e810c3f', 'https://images.unsplash.com/photo-1596745874929-b1b2a60767fd'],
        price: 120.00,
        summary: 'Stylish and modern loft in the heart of downtown Los Angeles. Conveniently located near all the best attractions and restaurants.',
        capacity: 4,
        amenities: [
            'TV',
            'Wifi',
            'Air conditioning',
            'Kitchen',
            'Free parking'
        ],
        labels: [
            'Luxury',
            'Convenience',
            'Modern'
        ],
        host: {
            _id: 'u205',
            fullname: 'Amanda Smith',
            imgUrl: 'https://images.unsplash.com/photo-1522071822973-5a810fda9663',
        },
        loc: {
            country: 'United States',
            countryCode: 'US',
            city: 'Los Angeles',
            address: '123 Main St',
            lat: 34.0522,
            lng: -118.2437
        },
        reviews: [
            {
                id: 'review1',
                txt: 'Great location and beautiful apartment. Amanda was a wonderful host and made our stay very comfortable.',
                rate: 5,
                by: {
                    _id: 'u306',
                    fullname: 'John Doe',
                    imgUrl: 'https://images.unsplash.com/photo-1531746796927-56b2c9025ee5',
                }
            },
            {
                id: 'review2',
                txt: 'The loft was just as advertised and we had a great stay. Would definitely recommend!',
                rate: 4,
                by: {
                    _id: 'u407',
                    fullname: 'Jane Smith',
                    imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
                }
            }
        ],
        likedByUsers: ['user123', 'user456'] // for user-wishlist : use $in
    },
    {
        _id: '10002345',
        name: 'Sunny Beach House',
        type: 'House',
        imgUrls: [
            'https://www.example.com/images/property1/1.jpg',
            'https://www.example.com/images/property1/2.jpg',
            'https://www.example.com/images/property1/3.jpg',
        ],
        price: 120.00,
        summary: 'Beautiful beach house with amazing views of the ocean and sunset',
        capacity: 6,
        amenities: [
            'TV',
            'Wifi',
            'Kitchen',
            'Washer',
            'Dryer',
            'Free parking'
        ],
        labels: [
            'Beachfront',
            'Luxury',
            'Relaxing',
            'Romantic'
        ],
        host: {
            _id: 'u202',
            fullname: 'John Smith',
            imgUrl: 'https://www.example.com/images/host2.jpg',
        },
        loc: {
            country: 'United States',
            countryCode: 'US',
            city: 'Miami',
            address: '1234 Beach Blvd',
            lat: 25.7907,
            lng: -80.1300
        },
        reviews: [
            {
                id: 'review1',
                txt: 'This place was amazing! The views are breathtaking and the house is beautiful.',
                rate: 5,
                by: {
                    _id: 'u101',
                    fullname: 'Jane Doe',
                    imgUrl: 'https://www.example.com/images/user1.jpg'
                }
            },
            {
                id: 'review2',
                txt: 'We had a wonderful time at this beach house. The location was perfect and the house had everything we needed.',
                rate: 4,
                by: {
                    _id: 'u102',
                    fullname: 'Bob Johnson',
                    imgUrl: 'https://www.example.com/images/user2.jpg'
                }
            }
        ],
        likedByUsers: ['u101', 'u203', 'u301'] // for user-wishlist : use $in
    }, {
        _id: '10006894',
        name: 'Stylish Apartment in the Heart of Paris',
        type: 'Apartment',
        imgUrls: ['https://a0.muscache.com/im/pictures/083c2f72-1e2c-4c60-a070-2c6ee57f6e9f.jpg?aki_policy=large', 'otherImg.jpg'],
        price: 110.00,
        summary: 'Beautifully designed and decorated apartment in the heart of Paris, just steps away from the Seine river...',
        capacity: 4,
        amenities: [
            'TV',
            'Wifi',
            'Kitchen',
            'Air conditioning',
            'Washer',
            'Dryer'
        ],
        labels: [
            'Romantic',
            'Luxury',
            'City',
            'Historic'
        ],
        host: {
            _id: 'u106',
            fullname: 'Sophie Martin',
            imgUrl: 'https://a0.muscache.com/im/pictures/user/77dd80ea-3587-498e-ba63-3a1d2b1eb7a8.jpg?aki_policy=profile_small'
        },
        loc: {
            country: 'France',
            countryCode: 'FR',
            city: 'Paris',
            address: '12 Rue de Rivoli',
            lat: 48.8575,
            lng: 2.3429
        },
        reviews: [
            {
                id: 'reviewId1',
                txt: 'Amazing location and apartment. Highly recommend!',
                rate: 5,
                by: {
                    _id: 'u107',
                    fullname: 'John Smith',
                    imgUrl: 'https://a0.muscache.com/im/pictures/user/e09c1ad7-f2f5-4c68-994f-f9ee9ab4ecb5.jpg?aki_policy=profile_small'
                }
            },
            {
                id: 'reviewId2',
                txt: 'Great host and wonderful apartment. Would definitely stay here again!',
                rate: 4,
                by: {
                    _id: 'u108',
                    fullname: 'Mary Brown',
                    imgUrl: 'https://a0.muscache.com/im/pictures/user/0c49714a-22dc-4a80-8be6-3d6a7a452c28.jpg?aki_policy=profile_small'
                }
            }
        ],
        likedByUsers: ['mini-user'] // for user-wishlist : use $in
    }, {
        _id: '10003927',
        name: 'Sunny Apartment in Madrid',
        type: 'Apartment',
        imgUrls: ['https://a0.muscache.com/im/pictures/4d1c42af-94e2-4c22-89f3-3b7db9f3e3f7.jpg?aki_policy=large', 'https://a0.muscache.com/im/pictures/6d7a8c58-d6aa-4276-b0b6-a064a8f0f29e.jpg?aki_policy=large', 'https://a0.muscache.com/im/pictures/71ee4b1c-4e4d-4d92-99dd-a07c231b70dc.jpg?aki_policy=large'],
        price: 120.00,
        summary: 'Beautiful and spacious apartment located in the heart of Madrid. The flat has 2 bedrooms, a fully equipped kitchen and a cozy living room...',
        capacity: 6,
        amenities: [
            'TV',
            'Wifi',
            'Air conditioning',
            'Heating',
            'Washer',
            'Dryer'
        ],
        labels: [
            'Family-friendly',
            'Luxury',
            'City view',
            'Couples'
        ],
        host: {
            _id: 'u103',
            fullname: 'Maria Rodriguez',
            imgUrl: 'https://a0.muscache.com/im/users/92637512/profile_pic/1432753758/original.jpg?aki_policy=profile_small',
        },
        loc: {
            country: 'Spain',
            countryCode: 'ES',
            city: 'Madrid',
            address: '23 Gran Vía',
            lat: 40.420287,
            lng: -3.705908
        },
        reviews: [
            {
                id: 'madeId',
                txt: 'We had a wonderful stay in this apartment. It was very clean and had everything we needed. The location was great too, very central and close to lots of shops and restaurants.',
                rate: 5,
                by: {
                    _id: 'u104',
                    fullname: 'John Smith',
                    imgUrl: '/img/img3.jpg'
                }
            },
            {
                id: 'madeId',
                txt: 'The apartment was great and the location was perfect. We would definitely stay here again!',
                rate: 4,
                by: {
                    _id: 'u105',
                    fullname: 'Jane Doe',
                    imgUrl: '/img/img4.jpg'
                }
            }
        ],
        likedByUsers: ['mini-user', 'u104'] // for user-wishlist : use $in
    }, {
        _id: '10002371',
        name: 'Gorgeous Villa with Private Pool',
        type: 'Villa',
        imgUrls: [
            'https://a0.muscache.com/im/pictures/84eb6a39-2b04-44f9-8e8d-1b25d01ef1cf.jpg?aki_policy=large',
            'https://a0.muscache.com/im/pictures/e8fbd04c-6b3a-4623-8b23-5dcb27fbbfc1.jpg?aki_policy=large'
        ],
        price: 320.00,
        summary: 'Beautiful 4-bedroom villa with private pool and panoramic views of the Mediterranean Sea...',
        capacity: 10,
        amenities: [
            'Air conditioning',
            'Free parking',
            'Wifi',
            'Kitchen',
            'Washer',
            'Dryer'
        ],
        labels: [
            'Luxury',
            'Beach',
            'Romantic',
            'Relaxing'
        ],
        host: {
            _id: 'u203',
            fullname: 'Maria Rodriguez',
            imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
        loc: {
            country: 'Spain',
            countryCode: 'ES',
            city: 'Marbella',
            address: '10 Calle del Sol',
            lat: 36.5099,
            lng: -4.8864
        },
        reviews: [
            {
                id: 'r401',
                txt: 'The villa was perfect for our family vacation. The pool was a hit with the kids and the views were breathtaking.',
                rate: 5,
                by: {
                    _id: 'u502',
                    fullname: 'John Smith',
                    imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg'
                }
            },
            {
                id: 'r402',
                txt: 'This was hands down the best Airbnb experience we have ever had. The villa was even more beautiful than in the pictures and the hosts were incredibly welcoming and helpful.',
                rate: 5,
                by: {
                    _id: 'u701',
                    fullname: 'Emily Lee',
                    imgUrl: 'https://randomuser.me/api/portraits/women/2.jpg'
                }
            }
        ],
        likedByUsers: ['u102', 'u205', 'u508']
    }, {
        _id: '100325',
        name: 'Luxury Villa with Ocean View',
        type: 'Villa',
        imgUrls: ['https://images.unsplash.com/photo-1556159993-1e3125c5b5d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpbGxhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'],
        price: 1200.00,
        summary: 'Beautiful luxury villa with ocean view and private pool. Perfect for a family vacation or a romantic getaway.',
        capacity: 6,
        amenities: [
            'Private pool',
            'Air conditioning',
            'Full kitchen',
            'Gym',
            'Outdoor grill'
        ],
        labels: [
            'Luxury',
            'Ocean view',
            'Private pool',
            'Romantic'
        ],
        host: {
            _id: 'u222',
            fullname: 'Samantha Lee',
            imgUrl: 'https://randomuser.me/api/portraits/women/40.jpg'
        },
        loc: {
            country: 'Spain',
            countryCode: 'ES',
            city: 'Marbella',
            address: 'Calle de la Playa, 17',
            lat: 36.5099,
            lng: -4.8864
        },
        reviews: [
            {
                id: 'r1',
                txt: 'The villa was amazing! The view was stunning and the pool was perfect. Highly recommended!',
                rate: 5,
                by: {
                    _id: 'u122',
                    fullname: 'John Doe',
                    imgUrl: 'https://randomuser.me/api/portraits/men/29.jpg'
                }
            },
            {
                id: 'r2',
                txt: 'The villa was beautiful and clean, but the location was a bit too far from the beach for our liking.',
                rate: 4,
                by: {
                    _id: 'u321',
                    fullname: 'Jane Smith',
                    imgUrl: 'https://randomuser.me/api/portraits/women/62.jpg'
                }
            }
        ],
        likedByUsers: ['u122', 'u321']
    }, {
        _id: '20001234',
        name: 'Sunny Beach House',
        type: 'House',
        imgUrls: [
            'https://www.example.com/images/20001234_1.jpg',
            'https://www.example.com/images/20001234_2.jpg',
            'https://www.example.com/images/20001234_3.jpg'
        ],
        price: 150.00,
        summary: 'Beautiful beach house with stunning ocean views...',
        capacity: 6,
        amenities: [
            'TV',
            'Wifi',
            'Kitchen',
            'Parking',
            'Beachfront',
            'Washer',
            'Dryer'
        ],
        labels: [
            'Beachfront',
            'Relaxation',
            'Family-friendly'
        ],
        host: {
            _id: 'u202',
            fullname: 'Jenny Smith',
            imgUrl: 'https://www.example.com/images/u202_profile.jpg',
        },
        loc: {
            country: 'United States',
            countryCode: 'US',
            city: 'Miami',
            address: '123 Ocean Ave',
            lat: 25.7936,
            lng: -80.1326
        },
        reviews: [
            {
                id: 'r01',
                txt: 'The view from this house is amazing!',
                rate: 5,
                by: {
                    _id: 'u102',
                    fullname: 'Sarah Brown',
                    imgUrl: 'https://www.example.com/images/u102_profile.jpg'
                }
            },
            {
                id: 'r02',
                txt: 'The house was clean and well-maintained.',
                rate: 4,
                by: {
                    _id: 'u103',
                    fullname: 'John Doe',
                    imgUrl: 'https://www.example.com/images/u103_profile.jpg'
                }
            }
        ],
        likedByUsers: ['u102', 'u105'] // for user-wishlist : use $in
    }

]