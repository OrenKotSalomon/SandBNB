import { useEffect, useState } from "react"
import { placeService } from "../../services/place.service"

export function PlacePreview() {

    const [places, setPlaces] = useState(null)

    useEffect(() => {
        loadWaps()
    }, [])

    function loadWaps() {
        // setPlaces(placeService.getPlaces())
    }

    return (
        <div className="place-preview">
            Hey
        </div>
    )
}