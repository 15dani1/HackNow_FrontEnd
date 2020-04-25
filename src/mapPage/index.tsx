import React from 'react';
import MapSection from './mapSection';
import CardSection from './cardSection';
import './mappage.css'
function MapPage() {
    return (
        <div>
            <div className="cardSection">
                <CardSection />
            </div>
            <div className="mapSection">
                <MapSection />
            </div>

        </div>
    )
}
export default MapPage;