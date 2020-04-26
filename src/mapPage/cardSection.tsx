import React, { useState } from 'react';
import { Card } from 'antd';
import { Button, notification } from 'antd';
import './mappage.css'
import LeaderModal from './leaderModal'
export default function CardSection(props: any) {
    const openNotification = () => {
        const key = `open${Date.now()}`;
        const btn = (
          <Button type="primary" size="small" onClick={() => notification.close(key)}>
            Confirm
          </Button>
        );
        notification.open({
          message: 'Notification Title',
          description:
            'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
          btn,
          key,
        });
    };
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
                    style={groceryLoc == props.selectedStore ? {"backgroundColor": "lightgrey"} : {}}
                    onClick={() => props.setSelectedStore(groceryLoc)}
                >
                    <LeaderModal modalShow={modalShow} setModalShow={setModalShow} />
                    <h1>{groceryLoc.name}</h1>
                    <p>{groceryLoc.Address.formattedAddress}</p>
                </Card>
            ))}
        </div>
    )
}


// const close = () => {
//   console.log(
//     'Notification was closed. Either the close button was clicked or duration time elapsed.',
//   );
// };


// };

// ReactDOM.render(<Button type="primary" onClick={openNotification}>
// Open the notification box
// </Button>
//   ,
//   mountNode,
// );