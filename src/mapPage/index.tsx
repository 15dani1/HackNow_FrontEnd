import React, { useState } from 'react';
import MapSection from './mapSection';
import CardSection from './cardSection';
import './mappage.css'
function MapPage() {
    const [groceryLocs, setGroceryLocs] = useState([]);
    const [selectedStore, setSelectedStore] = useState();
    return (
        <div>
            <div className="cardSection">
                <CardSection selectedStore={selectedStore} setSelectedStore={setSelectedStore} groceryLocs={groceryLocs}/>
            </div>
            <div className="mapSection">
                <MapSection selectedStore={selectedStore} setSelectedStore={setSelectedStore} groceryLocs={groceryLocs} setGroceryLocs={setGroceryLocs}/>
            </div>
        </div>
    )
}
export default MapPage;