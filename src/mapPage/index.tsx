import React, { useState } from 'react';
import MapSection from './mapSection';
import CardSection from './cardSection';
import './mappage.css'
function MapPage() {
    const [groceryLocs, setGroceryLocs] = useState([]);
    return (
        <div>
            <div className="cardSection">
                <CardSection groceryLocs={groceryLocs}/>
            </div>
            <div className="mapSection">
                <MapSection groceryLocs={groceryLocs} setGroceryLocs={setGroceryLocs}/>
            </div>
        </div>
    )
}
export default MapPage;