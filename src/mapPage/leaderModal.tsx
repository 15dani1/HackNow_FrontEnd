import React, { useEffect, useState } from 'react';
import { Modal, Table } from 'antd';

export default function LeaderModal(props: any) {
    function showModal() {
        props.setModalShow(false)
    }
    // let demoLeaderBoard = []
    const [demoLeaderBoard, setLeaderBoard] = useState([]);
    const columns = [
        {
            title: 'Place',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Total Deliveries',
            dataIndex: 'deliveries',
            key: 'deliveries',
        },
    ]
    useEffect(() => {
        for (let i = 0; i < 100; i++) {
            // let ranNumDeliveries = Math.floor(Math.random() * 100);
            let ranNumDeliveries = 100-i
            demoLeaderBoard.push({ id: i + 1, name: "John Doe", deliveries: ranNumDeliveries })
        }
    }, []);
    return (
        <div>
            <Modal
                title="Leaderboard"
                visible={props.modalShow}
                onOk={showModal}
                width={"75%"}
                onCancel={showModal}

            >
                <Table dataSource={demoLeaderBoard} columns={columns} />;
        </Modal>
        </div>
    )
}