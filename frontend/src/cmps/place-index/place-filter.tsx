import { placeService } from "../../services/place.service"
import { useEffect, useState } from "react"
import Carousel from 'react-material-ui-carousel'

export function PlaceFilter() {
    const [filters, setFilters] = useState<Ifilter[]>(placeService.getFilters())

    interface Ifilter {
        icon: string,
        txt: string
    }
    return (
        <div className="place-filter">

            <div className="filters-container">
            {filters.map(filter => {
                return <div className="filter-container">
                    <span className="material-symbols-outlined filter-icon">{filter.icon}</span>
                    <p className="filter-txt">{filter.txt}</p>
                </div>
            })}
            </div>

            <button className="filter-btn">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '14px', width: '14px', fill: 'currentcolor'}}><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
            </button>
        </div>
    )
}