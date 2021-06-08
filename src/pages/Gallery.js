import React, {useState, useEffect} from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
//import RoomContainer from '../components/RoomContainer';

//import getAllRooms from '../services/getRooms'
import ViewGalleryImage from '../components/ViewGalleryImage';

const Gallery = () => {

    const [gallery, setgallery] = useState([])

    useEffect(() => {
        // setIsLoading(true) 
        async function fetchAllGallery() {
            const gallery = await getAllGallery();
            console.log("products", gallery)
            setgallery(gallery)
            console.log('All products', gallery)
        } 
        fetchAllGallery() 
        
        // setIsLoading(false)
    }, []);

    return (

    <div className="container">
    <h1>OUR Gallery</h1>
    <div className="card-deck row">
        
        {
            gallery &&

            gallery.map((r) => (
                <div className="card col-3 m-3" key={r._id}>
                    {/* <img className="card-img-top" src={r.image} alt={r.roomName} /> */}
                    {/* <ViewRoomImage roomNo={r.roomNo} height="200" width="200" /> */}
                    <div className="card-body">
                    <h5 className="card-title">{r.roomName}</h5>
                    {/* <small>{r.combinations[0].size}</small>
                    <p className="card-text">{r.description}</p>
                    <p className="card-text"><small className="text-muted">Rs. {r.price}</small></p> */}
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
    );
};

export default Gallery;
