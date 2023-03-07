import { placeService } from "../../services/place.service"
import { useEffect, useState } from "react"

export function PlaceFilter() {
    const [filters, setFilters] = useState<Ifilter[]>(placeService.getFilters())

    interface Ifilter {
        icon: string,
        txt: string
    }
    return (
        <div className="place-filter">
            {filters.map(filter => {
                return <div className="filter-container">
                    <span className="material-symbols-outlined filter-icon">{filter.icon}</span>
                    <p className="filter-txt">{filter.txt}</p>
                </div>
            })}
        </div>
    )
}