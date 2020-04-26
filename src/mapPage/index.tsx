import React, { useState } from 'react';
import MapSection from './mapSection';
import CardSection from './cardSection';
import './mappage.css'
function MapPage(props) {
    const [groceryLocs, setGroceryLocs] = useState([]);
    // const [selectedStore, setSelectedStore] = useState();
    return (
        <div>
            <div className="cardSection">
                <CardSection selectedStore={props.storeAddress} setSelectedStore={props.setStoreAddress} groceryLocs={groceryLocs}/>
            </div>
            <div className="mapSection">
                <MapSection address={props.address} selectedStore={props.storeAddress} setSelectedStore={props.setStoreAddress} groceryLocs={groceryLocs} setGroceryLocs={setGroceryLocs}/>
            </div>
        </div>
    )
}
export default MapPage;