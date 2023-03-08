import { PlaceList } from '../cmps/place-index/place-list'
import { PlaceFilter } from '../cmps/place-index/place-filter'
import { AppFooter } from '../cmps/app-footer'
import { DynamicBtn } from '../cmps/dynamic-btn-nav/dynamic-btn'

export function PlaceIndex() {
    return (
        <div className="place-index">
            <PlaceFilter />
            <PlaceList />
            <DynamicBtn txt='index' />
        </div>
    )
}