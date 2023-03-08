import React from "react";
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
interface IMapState {
    lat: number;
    lng: number;
    text: string;
}
const AnyReactComponent = ({ text }: IMapState) => <div className="map-marker">{text}</div>;

export function MapPricing() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 1
    };

    // Important! Always set the container height explicitly
    return <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA8SqR_MWlmUlCNuXIdfpWY3LqRg4LHvjQ' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >

            <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="123$"
            />
            <AnyReactComponent
                lat={54.955413}
                lng={30.337844}
                text="1123$"
            />
            <AnyReactComponent
                lat={57.955413}
                lng={30.337844}
                text="1223$"
            />

        </GoogleMapReact>
    </div>

}