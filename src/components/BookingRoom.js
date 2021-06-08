import React, {useState} from 'react'
import DayPicker from './DayPicker'
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

import bookRoom from '../services/bookRoomService'

function BookingRoom(props) {

    // console.log(props)

    const [bookingData, setbookingData] = useState({
        email: '',
        name: '',
        contactNo: '',
        room: props.match.params.id
    })
    
    const [dateRange, setdateRange] = useState({
        from: undefined,
        to: undefined,
        show: false
    })
    const [loading, setLoading] = useState(false)

    const onchange = (e) => {
        setbookingData({
            ...bookingData,
            [e.target.name] : e.target.value
        })
        // console.log(customerData)
    }
    const reload = () => {
        window.location.reload(false);
    }

    const style = {

    }

    const submit = async (e) => { 
        e.preventDefault()
        const jwt = localStorage.getItem("token");
        let userID
        if(jwt) {
            userID = jwt ? jwtDecode(jwt)._id : '';
        }
        

        if(userID) {
            let booking = {
                from: dateRange.from,
                to: dateRange.to,
                room: bookingData.room,
                customer: userID,
                // roomPrice: 
            }
            await bookRoom(booking) 
        }
        else {
            toast.error("Please Login to Continue Booking")
            props.history.push('/user/login')
        }
          
        
    }

    return (
        <div className="back" style={{height: '700px'}}>
           
            <div className="row">
            <div className="col-3">

            </div>
            <div className="col-6">
            <form className="container mt-5 formBook" autoComplete="off">                
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="form-group col-12">
                                <label htmlFor="from" className="col-5">Dates</label> 
                                <div className="form-group col-6">
                                    <DayPicker dateRange={dateRange} setdateRange={setdateRange}/>
                                </div>
                            </div>
                            {/* <div className="form-group col-12 mt-2">
                                <label htmlFor="email" className="col-5">Email</label> 
                                <input onChange={onchange} value={bookingData.email} className="form-control col-11 ml-3"  type="text" id="email" name="email" />
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="name" className="col-5">Name</label> 
                                <input onChange={onchange} value={bookingData.name} className="form-control col-11 ml-3" type="textarea" rows="4" id="name" name="name"/>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="contactNo" className="col-5">Contact No</label> 
                                <input onChange={onchange} value={bookingData.contactNo} className="form-control col-11 ml-3" type="text" id="contactNo" name="contactNo"/>
                            </div> */}
                            <div className="form-group col-12 mt-5">
                                <center>
                                    <button onClick={submit} type="submit" className="btn btn-success" disabled={!dateRange.from || !dateRange.to}>Book</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </form> 
            </div>
            <div className="col-3">

            </div>
            </div>
        </div>
        
    )
}

export default BookingRoom
