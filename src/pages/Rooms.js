import React, {useState, useEffect} from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';
import '../css/loginRegiser.css'

import getAllRooms from '../services/getRooms'
import ViewRoomImage from '../components/ViewRoomImage';

const Rooms = () => {

    const [rooms, setrooms] = useState([])
    

    useEffect(() => {
        // setIsLoading(true) 
        async function fetchAllRooms() {
            const rooms = await getAllRooms();
            console.log("products", rooms)
            setrooms(rooms)
            console.log('All products', rooms)
        } 
        fetchAllRooms() 
        
        // setIsLoading(false)
    }, []);

    return (

    <div className="back">
        <div className="container">
            <center>
            <h1>OUR ROOMS</h1>
            </center>
   
    <div className="card-deck row">
        {
            rooms &&

            rooms.map((r) => (
                <div className="card col-3 m-5 p-3 rounded" key={r._id}>
                    {/* <img className="card-img-top" src={r.image} alt={r.roomName} /> */}
                    <ViewRoomImage roomNo={r.roomNo} height="200" width="200" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <h5 className="card-title">{r.roomName}</h5>
                                {/* <p>{r.description}</p> */}
                                <small>{r.size}</small>
                            </div>
                            <div className="col-6">
                                <p className="card-text">Rs. {r.price}</p>
                                {/* <Link to={`/user/rooms/book/${r._id}`}>
                                    <button className="btn btn-outline-dark">Book Now</button>
                                </Link> */}
                            </div>
                            <div className="col-12">
                            <p>{r.description}</p>
                            </div>
                            <div className="col-12">
                                <Link to={`/user/rooms/book/${r._id}`}>
                                    <button className="btn btn-outline-dark float-right">Book Now</button>
                                </Link>
                            </div>
                        </div>
                        {/* <h5 className="card-title">{r.roomName}</h5> */}
                        {/* <small>{r.combinations[0].size}</small> */}
                        {/* <p className="card-text">{r.description}</p> */}
                        
                    </div>
                    
                    
                </div>
            ))          
        }
    </div>
    {/* <Hero hero="roomsHero">
        <Banner title="our rooms">
            <Link to='/' classNameName="btn-primary">
                return home
            </Link>
        </Banner>
    </Hero>
    <RoomContainer></RoomContainer> */}
    </div>
    </div>
    );
};

export default Rooms;
