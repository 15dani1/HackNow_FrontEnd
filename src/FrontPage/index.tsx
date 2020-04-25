import React, { Component } from 'react';
import oldMan from "../images/oldMan.jpg"
import youngDude from "../images/youngdude.jpg"
import './frontpage.css';
import { Card } from 'antd';
function FrontPage() {
    return (
        <div>
            <div className="card-div">
                <Card className="card-css" hoverable={true}>
                    <img className="image-Card-CSS" src={youngDude} />
                    <h2 className="path">Be The Driver!</h2>
                </Card>
                <Card className="card-css" hoverable={true}>
                    <img className="image-Card-CSS" src={oldMan} />
                    <h2 className="path">I Need Assistance!</h2>
                </Card>
            </div>
        </div >
    )
}
export default FrontPage;