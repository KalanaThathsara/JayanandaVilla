import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


export default function Error() {
    return( 
    <>
    <Hero>
        <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at Rs 10,000">
        <Link to='/rooms' className="btn-primary">
            Our Rooms
        </Link>
        </Banner>
    </Hero>
    <Services></Services>
    <FeaturedRooms></FeaturedRooms>
    </>
    )
}
