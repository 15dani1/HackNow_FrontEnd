import React, { useEffect, useState } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup, ZoomControl } from "react-mapbox-gl";
import { Card, Popover, Button, Popconfirm } from 'antd'
import {CheckCircleOutlined} from '@ant-design/icons'
import axios from 'axios';
import ProgressModal from './progressModal'

export default function MapSection(props: any) {
    const [progressModalShow, setProgressModal] = useState(false);
    function openProgress() {
        setProgressModal(true);
    }
    const mapSettings = {
        lng: 29.647377,
        lat: -82.351269,
        zoom: 12
    };
    const [confirmVisible, setConfirmVisible] = useState(false);
    const Map = ReactMapboxGl({
        accessToken: "pk.eyJ1IjoiMTVkYW5pMSIsImEiOiJjazlmNWdvdG4wMGVvM2xubjdqcTducXM1In0.H7cu4oj3nkFtR23KeFEliQ"
    });
    Map.defaultProps.center = [mapSettings.lat, mapSettings.lng];
    Map.defaultProps.zoom = [mapSettings.zoom];

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
            props.setGroceryLocs(res.data['resourceSets'][0]['resources']);
        })
        // eslint-disable-next-line
    }, []);
    //https://medium.com/better-programming/animate-map-markers-using-mapbox-react-hooks-2f646a6301e
    return (
        <div>
            <ProgressModal address={props.address} onCancel={() => setProgressModal(false)} modalShow = {progressModalShow} driver={true}/>
            <Button onClick={() => setProgressModal(true)}>Show progress modal</Button>
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
                {props.groceryLocs.map(grocery => grocery == props.selectedStore ? <Popup onMouseLeave={() => {}} onMouseEnter={() => {}} coordinates={[grocery['geocodePoints'][0]['coordinates'][1], grocery['geocodePoints'][0]['coordinates'][0]]}>
                        <Card
                        title={grocery.name}
                        actions={[<Button icon={<CheckCircleOutlined />} onClick={() => props.nextPage()}/>]}
                        >
                        {grocery.Address.formattedAddress}
                    </Card>
                </Popup> : null)}
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "vienna-u-bahn" }}
                >
                    {props.groceryLocs.map(grocery => <Feature 
                    onClick={() => props.setSelectedStore(grocery)}
                    coordinates={[grocery['geocodePoints'][0]['coordinates'][1], grocery['geocodePoints'][0]['coordinates'][0]]} />)}
                </Layer>
            </Map>
        </div>
    )
}