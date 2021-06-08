import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import GalleryImageUpload from './GalleryImageUpload';

import addGalleryImage from '../services/addGalleryImageService'


function AddGallery() {

    const [imageName, setimageName] = useState('')    

    const [loading, setLoading] = useState(false)

    const [file, setFile] = useState('')
    const [filePreview, setFilePreview] = useState('')
    const [filename, setFilename] = useState('Choose File')
    const [nameOfImage, setNameOfImage] = useState('')

    const [productSaved, setproductSaved] = useState(false)
    const [imageSaved, setimagesaved] = useState(false)

    const onchange = (e) => {
       setimageName(e.target.value)
    }

    const submit = (e) => { 
        e.preventDefault()
        // console.log(galleryData)
        setLoading(true)
        // setNameOfImage(roomData.roomNo)
        async function saveGallery() {
            await addGalleryImage(file, imageName)
        }
        saveGallery()
       
        // console.log(file, filename, filePreview, nameOfImage)
        // addProductImage(file, nameOfImage)
        setLoading(false)
        // setproductSaved(true)
        // setTimeout(function(){ reload() }, 3000);        
        
    }
    // const submitImage = (e) => {
    //     e.preventDefault()
    //     addGalleryImage(file, nameOfImage)
    //     setgallerysaved(true)
    // }

    return (
        <div>
            <form className="container" autoComplete="off">
                <h6 style={{backgroundColor: "blueviolet"}} className="pl-5 pt-1 pb-1 mb-5">Add Gallery</h6>
                
                <div className="row">   
                    <div className="col-6">
                        <GalleryImageUpload
                            // onImageSubmit={onImageSubmit} 
                            file={file} 
                            setFile={setFile} 
                            filePreview={filePreview}
                            setFilePreview={setFilePreview}
                            filename={filename}
                            setFilename={setFilename}
                            nameOfImage={nameOfImage}
                        />
                    </div> 

                    <div className="col-6">
                        <div className="row">
                            <div className="form-group col-12">
                                <label htmlFor="roomName" className="col-5">Image Name</label> 
                                <input onChange={onchange} value={imageName} className="form-control col-11 ml-3"  type="text" id="roomName" name="roomName" />
                            </div>
                        </div>
                    </div>
                </div>
                
                    {/* {savedSize && <p className="">* Room Size {savedSize} Saved</p> } */}
                    <button
                    onClick={submit} 
                     type="submit" className="btn btn-primary float-right m-1 col-12">
                        Save Image</button>
                    {/* <div>
                        {(!imageSaved && productSaved ) &&
                        <>
                            <h6 style={{backgroundColor: 'red'}} className="p-2 rounded"> Image hasn't been saved yet</h6>
                            <button 
                            onClick={submitImage} 
                            className="btn btn-success float-right m-1 col-12" type="submit">
                                Save Image
                            </button>
                        </>
                        }
                    </div> */}

                
                
                {/* <button type="submit" className="btn btn-primary float-right m-1">Next</button> */}
                {/* <button type="submit" onClick={() => setStep(1)} className="btn btn-primary float-right m-1">Back</button> */}
            </form> 
        </div>
    )
}

export default AddGallery