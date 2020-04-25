import React, { Component } from 'react';
import './frontpage.css';
import { Card } from 'antd';
function FrontPage() {
    return (
        <div>
            <div className="card-div">
                <Card className="card-css" hoverable={true}>
                    <p>Card content</p>
                </Card>
                <Card className="card-css" hoverable={true}>
                    <p>Card content</p>
                </Card>
            </div>
        </div >
    )
}
export default FrontPage;