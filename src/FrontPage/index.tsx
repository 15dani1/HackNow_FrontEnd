import React from 'react';
import oldMan from "../images/oldMan.jpg"
import youngDude from "../images/youngdude.jpg"
import './frontpage.css';
import { Card } from 'antd';
import { useHistory } from "react-router-dom";
import history from './../history';
function FrontPage() {
    //const history = useHistory();
    function handleClickMapPage() {
        history.push("/driver");
    }
    return (
        <div>
            <div className="card-div">
                <Card className="card-css" hoverable={true} onClick={handleClickMapPage}>
                    <img className="image-Card-CSS" src={youngDude} alt="Graphic of young person" />
                    <h2 className="path">Be The Driver!</h2>
                </Card>
                <Card className="card-css" hoverable={true}>
                    <img className="image-Card-CSS" src={oldMan} alt="Graphic of senior person" />
                    <h2 className="path">I Need Assistance!</h2>
                </Card>
            </div>
        </div >
    )
}
export default FrontPage;