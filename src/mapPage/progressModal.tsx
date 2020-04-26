import React, { useEffect, useState } from 'react';
import { Modal, Steps } from 'antd';
export default function ProgressModal(props: any) {
    const { Step } = Steps;
    return (
        <div>
            <Modal
                title="Tracking your groceries!"
                visible={props.modalShow}
                // onOk={showModal}
                width={"75%"}

            // onCancel={showModal}
            >
                <Steps current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
            </Modal>
        </div>
    )
}