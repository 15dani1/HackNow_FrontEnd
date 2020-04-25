import React, { Component } from 'react';
import { Popover, Row, Col, Avatar } from 'antd';
import { ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import './frontpage.css';


const FrontPage = () => {
    return (
        <div className="background">
            <Row>
                <Col span={6}/>
                <Col span={6}>
                    <Popover content={<div>Click here to see who needs help near you</div>} title="Deliver groceries">
                        <Avatar size={128} icon={<ShoppingCartOutlined />} /> 
                    </Popover>
                </Col>
                <Col span={6}>
                <Popover content={<div>Click here to see who needs help near you</div>} title="Deliver groceries">

                    <Avatar size={128} icon={<HomeOutlined />} />
                    </Popover>
                    
                </Col>
                <Col span={6}/>
            </Row>
            Hello there
        </div>
    )
}
export default FrontPage;