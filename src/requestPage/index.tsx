import React, { useState } from 'react';
import { Form, Input, Button, Select, Card, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

function RequestPage(props) {
    //SHOPPING LIST IS THE ARRAY 
    //Structure is [{item: "milk"},{item: "eggs"},{item: "chicken"}]
    const [shoppingList, setShoppingList] = useState([]);
    const onFinish = values => {
        //shoppingList.push({ item: values.cartItem });
        setShoppingList(shoppingList.concat({ item: values.cartItem }));
        console.log(shoppingList);
    };
    const handleSubmit = () => {
        axios.post("http://localhost:5000/account", {
            query: `mutation($phoneNumber: String!, $storeAddress: String!, $items: String!) {
                createRequest(StoreAddress: $storeAddress, PhoneNumber: $phoneNumber, Items: $items){
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
                phoneNumber: props.phoneNumber,
                storeAddress: props.storeAddress,
                items: shoppingList.map(a => a.item).join(",")
            }
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            message.success("Submitted request!")
        });
    }
    const handleRemoveItem = name => {
        setShoppingList(shoppingList.filter(item => item.item !== name))
    }
    const buttonStyle = { width: '100%', borderRadius: '100px' };
    // const searchStyle = { float: 'left', width: '2%', margin: '10px', borderRadius: '5px' };
    const searchStyle = {}

    return (
        <div style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '5%', textAlign: 'center' }}>
            <Form
                name="basic"
                initialValues={{
                }}
                onFinish={onFinish}
            >
                <Form.Item

                    name="cartItem"
                    rules={[
                        {
                            required: true,
                            message: 'Please type something!',
                        },
                    ]}
                >
                    <Input type="primary" style={{ float: 'left', width: '100%', borderRadius: '5px' }} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ ...buttonStyle }}>
                        Add To Cart
                    </Button>
                </Form.Item>
            </Form>
            <div className="shoppingCards" style={{ margin: 'auto', width: '60%' }}>
                {
                    shoppingList.map(shop => (
                        <Card className='card'
                            hoverable={true}
                            onClick={() => console.log('test')}
                            style={{ margin: '10px' }}
                        >
                            <h1 style={{ margin: 'auto', float: 'left' }}>{shop.item}</h1>
                            <Button style={{ float: 'right' }} onClick={() => handleRemoveItem(shop.item)} type='danger'>Delete</Button>
                        </Card>
                    )
                    )
                }
            </div>
            {shoppingList.length !== 0 ? <Button onClick={handleSubmit} type="primary">
                All done!
                    </Button> : null}
        </div>
    )
}
export default RequestPage;