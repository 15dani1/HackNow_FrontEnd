import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Card, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

function ViewRequestPage(props) {
    //SHOPPING LIST IS THE ARRAY 
    //Structure is [{item: "milk"},{item: "eggs"},{item: "chicken"}]
    const [request, setRequest] = useState({});
    useEffect(() => {
        axios.post("http://localhost:5000/account", {
            query: `query($storeAddress: String!) {
                request(StoreAddress: $storeAddress){
                    account {
                        address
                        name
                        phoneNumber
                    }
                    storeAddress
                    items
                }
            }`,
            variables: {
                storeAddress: props.storeAddress,
            }
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            setRequest(res.data.data);
        });
    }, []);
    

    return (
        <div style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '5%', textAlign: 'center' }}>
            {request.storeAddress}
        </div>
    )
}
export default ViewRequestPage;