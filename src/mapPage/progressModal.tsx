import React, { useEffect, useState } from 'react';
import { Modal, PageHeader, Steps, Form, Input, Button, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
export default function ProgressModal(props: any) {
    const { Step } = Steps;
    const [step, setStep] = useState(0);
    return (
        <div>
            <Modal
                title="Tracking your groceries!"
                visible={props.modalShow}
                // onOk={showModal}
                width={"75%"}

            // onCancel={showModal}
            >
                <Steps current={step}>
                    <Step title="Enter items to deliver" description="This is a description." >
                        testing
                        
                    </Step>
                    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
                <PageHeader
                    className="site-page-header"
                    title={step == 0 ? "Enter items" : (step == 1 ? "Awaiting delivery" : null)}
                />
                Your address is {props.address}
                {step == 0 ? (<Form>
                            <Form.List name="items">
                                {(fields, {add, remove}) => (
                                    <div>
                                        {fields.map((field, index) => (
                                            <Row key={field.key}>
                                                <Col>
                                                    <Form.Item
                                                    name={[field.name, "item"]}>
                                                        <Input placeholder="Item"/>
                                                    </Form.Item>
                                                </Col>
                                                <Col flex="none">
                                                    <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => {
                                                        remove(field.name);
                                                    }}
                                                    />
                                                </Col>
                                            </Row>
                                        ))}
                                        <Form.Item>
                                            <Button
                                            type="dashed"
                                            onClick={() => {
                                                add();
                                            }}
                                            style={{ width: "100%" }}
                                            >
                                            <PlusOutlined /> Add field
                                            </Button>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary">Submit</Button>
                                        </Form.Item>
                                    </div>
                                )
                                }
                            </Form.List>
                        </Form>) : null}
            </Modal>
        </div>
    )
}