import React, { useState } from 'react';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";

import './mappage.css'
function MapPage() {
    const [mapSettings] = useState({
        lng: 29.647377,
        lat: -82.351269,
        zoom: 17
    });
    function print(){
        console.log('yeet');
    }
    const Map = ReactMapboxGl({
        accessToken: "pk.eyJ1IjoiMTVkYW5pMSIsImEiOiJjazlmNWdvdG4wMGVvM2xubjdqcTducXM1In0.H7cu4oj3nkFtR23KeFEliQ"
    });
    Map.defaultProps.center = [mapSettings.lat, mapSettings.lng];
    Map.defaultProps.zoom = [mapSettings.zoom];

    //https://medium.com/better-programming/animate-map-markers-using-mapbox-react-hooks-2f646a6301e
    return (
        <div>
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: "100vh",
                    width: "100vw"
                }}
            >
                <ZoomControl />
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "vienna-u-bahn" }}
                    onClick={print}
                >
                    <Feature coordinates={[mapSettings.lat, mapSettings.lng]} />
                </Layer>
            </Map>
        </div>
    )
}
export default MapPage;