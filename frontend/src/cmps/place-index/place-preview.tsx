interface Iplace {
    place:{
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
}

export function PlacePreview({place}: Iplace) {


    return (
        <div className="place-preview">
            <div className="img-container">
                <img className="preview-img" src={place.imgUrls[0]} />
            </div>
            <div className="info-container">
                <p className="place-name">{place.name}</p>
                <p className="place-location">{`${place.loc.country}, ${place.loc.city}, ${place.loc.address}`}</p>
                <p className="place-dates">March 13-15</p>
                <p className="place-price"><span>${place.price}</span> night</p>
            </div>
        </div>
    )
}