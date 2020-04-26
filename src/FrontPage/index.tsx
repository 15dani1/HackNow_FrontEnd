import React, { useState } from 'react';
import oldMan from "../images/oldMan.jpg"
import youngDude from "../images/youngdude.jpg"
import './frontpage.css';
import { Card, Input, Button, Modal, message } from 'antd';
import MapPage from '../mapPage';
import axios from 'axios';
import RequestPage from '../requestPage';

const { Search } = Input;
const FrontPage = () => {
    //const history = useHistory();
    //0 = frontpage, 1 = driverpage, 2 = requestpage
    const [page, setPage] = useState(0);
    const [userType, setUserType] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputAddress, setInputAddress] = useState("");
    const [storeAddress, setStoreAddress] = useState("");
    const [showCreateModal, setShowCreateModal] = useState(false);
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
    const handleCreate = () => {
        axios.post("http://localhost:5000/account", {
            query: `mutation($phoneNumber: String!, $name: String!, $address: String!) {
                createRequest(Name: $name, Address: $address, PhoneNumber: $phoneNumber){
                    name
                    address
                    phoneNumber
                }
            }`,
            variables: {
                phoneNumber: phoneNumber,
                address: inputAddress,
                name: inputName
            }
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            setAddress(res.data.data.createAccount.address)
            setName(res.data.data.createAccount.name)
            setShowCreateModal(false);
            message.success("Logged in!")
        });
    }
    const handleLogin = () => {
        axios.post("http://localhost:5000/account", {
            query: `query($phoneNumber: String!) {
                account(PhoneNumber: $phoneNumber){
                    name
                    address
                    phoneNumber
                }
            }`,
            variables: {
                phoneNumber: phoneNumber
            }
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res.data)
            setName(res.data.data.account.name);
            setAddress(res.data.data.account.address);
            res.data.data.account.address ? message.success("Logged in!") : setShowCreateModal(true);
        });
    }
    return (
        page === 0 ?
            <div style={{ textAlign: 'center' }}>
                <Modal
                    title="Create account"
                    visible={showCreateModal}
                    onOk={() => { }}
                    onCancel={() => { }}
                    footer={[
                        <Button key="back" onClick={() => setShowCreateModal(false)}>
                            Return
                    </Button>,
                        <Button key="submit" type="primary" onClick={handleCreate}>
                            Create Account and Login
                    </Button>,
                    ]}
                    width={"75%"}>
                    <Input placeholder="Name"
                        style={{ marginBottom: '10px' }}
                        value={inputName} onChange={e => setInputName(e.target.value)} />
                    <Input placeholder="Address"
                        value={inputAddress} onChange={e => setInputAddress(e.target.value)} />
                </Modal>
                <Search placeholder="Phone number" enterButton="Submit"
                    style={{ width: '66%', marginTop: '20px', borderRadius: '30px' }}
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    onSearch={handleLogin}
                />
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
            : page === 1 ? <MapPage setStoreAddress={setStoreAddress} storeAddress={storeAddress} address={address} />
                : <RequestPage storeAddress={storeAddress} phoneNumber={phoneNumber} />

    )
}
export default FrontPage;