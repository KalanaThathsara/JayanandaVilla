import React, {useState, useEffect} from 'react'

import getGallery from '../services/getGalleryImages'
import ViewGalleryImage from './ViewGalleryImage'

import '../css/loginRegiser.css'

function Gallery() {

    const [images, setimages] = useState([])

    useEffect(() => {
        async function fetchImages() {
            const results = await getGallery()
            setimages(results)
        }
        fetchImages()
    }, [])
    return (
        <div>
            <div className="card-deck row">
            {
                images &&

                images.map((i) => (
                    <div className="card col-3 m-3" key={i._id}>
                        <ViewGalleryImage name={i.name} height="200" width="200" />
                        <div className="card-body">
                            <h5 className="card-title">{i.name}</h5>
                            {/* <small>{r.combinations[0].size}</small>
                            <p className="card-text">{r.description}</p>
                            <p className="card-text"><small className="text-muted">Rs. {r.price}</small></p> */}
                        </div>
                    </div>
                ))          
            }
            </div>
            
        </div>
    )
}

export default Gallery
