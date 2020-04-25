import React, { useState, useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import axios from 'axios';
export default function MapSection() {
    const mapSettings = {
        lng: 29.647377,
        lat: -82.351269,
        zoom: 17
    };
    const Map = ReactMapboxGl({
        accessToken: "pk.eyJ1IjoiMTVkYW5pMSIsImEiOiJjazlmNWdvdG4wMGVvM2xubjdqcTducXM1In0.H7cu4oj3nkFtR23KeFEliQ"
    });
    Map.defaultProps.center = [mapSettings.lat, mapSettings.lng];
    Map.defaultProps.zoom = [mapSettings.zoom];
    const [groceryLocs, setGroceryLocs] = useState([]);
    useEffect(() => {
        axios({
            'method': 'GET',
            'url': 'https://dev.virtualearth.net/REST/v1/LocalSearch/',
            'headers': {
            },
            'params': {
                'query': 'grocery',
                'userCircularMapView': '29.647377,-82.351269,5000',
                'key': 'AoBKzt9SZBG4MjjEqZ38E0VigPst6O07EL26AIUiGfX36eGHqdG5j8KrcFeh144A'
            },
        }).then(res => {
            console.log(res.data['resourceSets'][0]['resources']);
            setGroceryLocs(res.data['resourceSets'][0]['resources']);
        })
    }, []);

    //https://medium.com/better-programming/animate-map-markers-using-mapbox-react-hooks-2f646a6301e
    return (
        <div>
            <Map
                //Below comment needed to supress the style error (just a semantical issue)
                // eslint-disable-next-line
                style={"mapbox://styles/mapbox/streets-v9"}
                containerStyle={{
                    height: "100vh",
                    width: "auto"
                }}
            >
                <ZoomControl />
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "vienna-u-bahn" }}
                >
                    {groceryLocs.map(grocery => <Feature coordinates={[grocery['geocodePoints'][0]['coordinates'][1], grocery['geocodePoints'][0]['coordinates'][0]]} />)}
                </Layer>
            </Map>
        </div>
    )
}