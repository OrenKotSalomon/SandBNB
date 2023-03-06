import { PlacePreview } from './place-preview'
import { useEffect, useState } from "react"
import { placeService } from "../../services/place.service"

interface Iplace {
    _id: string,
    name: string,
    imgUrls: string[],
    price: number,
    loc: {
        country: string,
        countryCode: string,
        city: string,
        address: string,
    },
}


export function PlaceList() {
    const [places, setPlaces] = useState<Iplace[]>(placeService.getPlaces())

    // useEffect(() => {
    //     loadWaps()
    // }, [])

    // function loadWaps() {
    //     const filteredPlaces = placeService.getPlaces()
    //     setPlaces(filteredPlaces)
    // }
    
    return (
        <div className="place-list">
            {places.length && places.map((place) => {
                return <PlacePreview place={place} key={place._id} />
            })}
        </div>
    )
}