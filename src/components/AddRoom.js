import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import ProductImageUpload from './ProductImageUpload'
import { toast } from "react-toastify";
// import addProduct from '../services/addProductService.js'
// import addProductImage from '../services/addProductImageService'
// import getSuppliers from '../services/getSupplierForProduct'
import DayPicker from './DayPicker'
import RoomImageUpload from './RoomImageUpload';

import addRoom from '../services/addRoomService'
import addRoomImage from '../services/addImageService'


function AddRoom() {

    const [roomData, setroomData] = useState({
        roomNo: '',
        roomName: '',
        description: '',
        price: '',
        // category: '',
        size: 'XS',
        quantity: 0
    })
    // const [dateRange, setdateRange] = useState({
    //     from: undefined,
    //     to: undefined,
    //     show: false
    // })
     const sizes = ["Select Size","Single","Double","Family"]
    const [loading, setLoading] = useState(false)

    const [file, setFile] = useState('')
    const [filePreview, setFilePreview] = useState('')
    const [filename, setFilename] = useState('Choose File')
    const [nameOfImage, setNameOfImage] = useState('')

    const [productSaved, setproductSaved] = useState(false)
    const [imageSaved, setimagesaved] = useState(false)
    const [savedSize, setsavedSize] = useState('')

   

    const onchange = (e) => {
        setroomData({
            ...roomData,
            [e.target.name] : e.target.value
        })
    }

    const onchangeSelect = (e) => {
        setroomData({
            ...roomData,
            size : e.target.value
        })
        // console.log(roomData)
    }

    const submit = (e) => { 
        e.preventDefault()
        console.log(roomData)
        setLoading(true)
        setsavedSize(roomData.size)
        setNameOfImage(roomData.roomNo)
        // console.log("Name of image", nameOfImage)
        // console.log("Product Data", roomData)
        async function saveRoom() {
            await addRoom(roomData)
        }
        saveRoom()
       
        // console.log(file, filename, filePreview, nameOfImage)
        // addProductImage(file, nameOfImage)
        setLoading(false)
        setproductSaved(true)
        // setTimeout(function(){ reload() }, 3000);        
        
    }
    const submitImage = (e) => {
        e.preventDefault()
        addRoomImage(file, nameOfImage)
        setimagesaved(true)
    }

    return (
        <div>
            <form className="container" autoComplete="off">
                <h6 style={{backgroundColor: "blueviolet"}} className="pl-5 pt-1 pb-1 mb-5">Add Room</h6>
                
                <div className="row">   
                    <div className="col-6">
                        <RoomImageUpload
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
                                <label htmlFor="roomNo" className="col-5">Room No</label> 
                                <input onChange={onchange} value={roomData.roomNo} className="form-control col-11 ml-3" type="text" id="roomNo" name="roomNo"/>
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="roomName" className="col-5">Room Name</label> 
                                <input onChange={onchange} value={roomData.roomName} className="form-control col-11 ml-3"  type="text" id="roomName" name="roomName" />
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="description" className="col-5">Description</label> 
                                <textarea onChange={onchange} value={roomData.description} className="form-control col-11 ml-3" type="textarea" rows="4" id="description" name="description"/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="price" className="col-5">Price</label> 
                                <input onChange={onchange} value={roomData.price} className="form-control col-11 ml-3" type="number" id="price" name="price"/>
                            </div>
                            {/* <div className="col-12">
                                <SizeAqty />
                            </div> */}
                            {/* <div className="form-group col-6">
                                <label htmlFor="category" className="col-5">Category</label> 
                                <input onChange={onchange} value={roomData.category} className="form-control col-11" type="text" id="category" name="category"/>
                            </div>  */}
                                
                            <div className="form-group col-6">
                                <label htmlFor="size" className="col-5">Size</label> 
                                <select onChange={onchangeSelect} value={roomData.size} id="size" name="size" className="form-control col-11 ml-3" required>
                                    {
                                        sizes.map(option => {
                                            return(
                                                <option key={option} value={option} style={{textAlign: "center"}}>
                                                    {option}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>                    
                            <div className="form-group col-6">
                                <label htmlFor="quantity" className="col-5">Quantity</label> 
                                <input onChange={onchange} value={roomData.quantity} className="form-control col-11" type="number" id="quantity" name="quantity"/>
                            </div>
                            {/* <div className="form-group col-6">
                                <label htmlFor="quantity" className="col-5">Date</label> 
                                <DayPicker dateRange={dateRange} setdateRange={setdateRange} 
                                // filterRecords={filterRecords}
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
                
                    {savedSize && <p className="">* Room Size {savedSize} Saved</p> }
                    <button
                    onClick={submit} 
                     type="submit" className="btn btn-primary float-right m-1 col-12">
                        {productSaved ?  `Room Saved`: 'Save Room'}</button>
                    <div>
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
                    </div>

                
                
                {/* <button type="submit" className="btn btn-primary float-right m-1">Next</button> */}
                {/* <button type="submit" onClick={() => setStep(1)} className="btn btn-primary float-right m-1">Back</button> */}
            </form> 
        </div>
    )
}

export default AddRoom