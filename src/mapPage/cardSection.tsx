import React, { useState } from 'react';
import { Card } from 'antd';
import './mappage.css'
import LeaderModal from './leaderModal'
export default function CardSection(props: any) {
    const [modalShow, setModalShow] = useState(false);
    function setShow() {
        setModalShow(true);
    }
    function handleClick(e) {
        console.log(e.target);
    }
    return (
        <div>
            <Card className="leaderboard-card"
                hoverable={true}
                style={{ "textAlign": "center" }}
                onClick={setShow}>
                Leaderboard</Card>
            {props.groceryLocs.map(groceryLoc => (
                <Card className='card'
                    hoverable={true}
                    onClick={handleClick}
                >
                    <LeaderModal modalShow={modalShow} setModalShow={setModalShow} />
                    <h1>{groceryLoc.name}</h1>
                    <p>{groceryLoc.Address.formattedAddress}</p>
                </Card>
            ))}
        </div>
    )
}