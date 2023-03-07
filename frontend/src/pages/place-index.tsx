import { PlaceList } from '../cmps/place-index/place-list'
import { PlaceFilter } from '../cmps/place-index/place-filter'
import { AppFooter } from '../cmps/app-footer'

export function PlaceIndex() {
    return (
        <div className="place-index">
            <PlaceFilter />
            <PlaceList />
            <AppFooter />
        </div>
    )
}