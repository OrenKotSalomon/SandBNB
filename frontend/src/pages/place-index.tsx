import { PlaceList } from '../cmps/place-index/place-list'
import { PlaceFilter } from '../cmps/place-index/place-filter'

export function PlaceIndex() {
    return (
        <div className="place-index">
            <PlaceFilter/>
            <PlaceList/>
        </div>
    )
}