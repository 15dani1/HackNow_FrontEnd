import React from 'react';
import { Card } from 'antd';
import './mappage.css'

export default function CardSection(props: any) {
    //const [locations, setlocations] = useState([{}]);
    //const [locations, setLocations] = useState([Array(100).keys()].map(i => { name: "yeet" }));

    // let location: { id: number, name: string };
    // const [locs, setlocs] = useState([location]);
    // //let cards = location.map(loc => <Card className="card">{loc.name}</Card>)
    //let cards = [] as any;
    // const[cards,setCards] = useState([]);
    // function generateCards() {
    //     for (let i = 0; i < 100; i++) {
    //     }
    //     console.log(cards);
    //     //cards = location.map(loc => <Card className="card">{loc.name}</Card>)
    // }
    // // //var cards = locations.map((location) => <Card className="card"></Card>)
    // useEffect(() => {
    //     document.title = "Driver"
    //     generateCards();
    // }, []);
    return (
        <div>
            {props.groceryLocs.map(groceryLoc => (
                <Card className='card' hoverable={true} title={groceryLoc.name}><p>{groceryLoc.Address.formattedAddress}</p></Card>
            ))}
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
            <Card className='card' hoverable={true}>Test</Card>
        </div>
    )
}