import React, { useState } from 'react';
import oldMan from "../images/oldMan.jpg"
import youngDude from "../images/youngdude.jpg"
import './frontpage.css';
import { Card } from 'antd';
import MapPage from '../mapPage';
import RequestPage from '../requestPage';
const FrontPage = () => {
    //const history = useHistory();
    //0 = frontpage, 1 = driverpage, 2 = requestpage
    const [page, setPage] = useState(0);
    const [userType, setUserType] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("")
    const nextPage = () => {
        if (page == 0) {
            setPage(1)
        }
        else if (page == 1 && userType) {
            setPage(2)
        }
        else if (page == 1 && !userType) {
            setPage(3)
        }
    }
    function handleClickMapPage() {
        setUserType(false);
        setPage(1);
        console.log(page);
    }
    function handleClickRequestPage() {
        setUserType(true);
        setPage(2);
    }
    return (
        page === 0 ?
            <div>
                <div className="card-div">
                    <Card className="card-css" hoverable={true} onClick={handleClickMapPage}>
                        <img className="image-Card-CSS" src={youngDude} alt="Graphic of young person" />
                        <h2>Be The Driver!</h2>
                    </Card>
                    <Card className="card-css" hoverable={true} onClick={handleClickRequestPage}>
                        <img className="image-Card-CSS" src={oldMan} alt="Graphic of senior person" />
                        <h2>I Need Assistance!</h2>
                    </Card>
                </div>
            </div >
            : page === 1 ? <MapPage />
                : <RequestPage />

    )
}
export default FrontPage;