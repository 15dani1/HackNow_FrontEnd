import React, { useState } from 'react';
import { Form, Input, Button, Select, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
function RequestPage() {
    const [shoppingList, setShoppingList] = useState([]);
    const onFinish = values => {
        //shoppingList.push({ item: values.cartItem });
        setShoppingList(shoppingList.concat({ item: values.cartItem }));
        console.log(shoppingList);
    };
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
                        Submit
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
                            <Button style={{float:'right'}} onClick={() => console.log(shop)} type='danger'>Delete</Button>
                        </Card>
                    )
                    )
                }
            </div>
        </div>
    )
}
export default RequestPage;