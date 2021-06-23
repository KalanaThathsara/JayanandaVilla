import React, {useState, useEffect} from 'react'
import DayPicker from './DayPicker'
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

import BookingsCalender from './BookingsCalender';

import bookRoom from '../services/bookRoomService'
import getOneRooms from '../services/getOneRoom'
import data from '../data';

function BookingRoom(props) {

    const [roomData, setroomData] = useState({})

    const [bookingData, setbookingData] = useState({
        email: '',
        name: '',
        contactNo: '',
        room: props.match.params.id,
        roomName: props.match.params.name,
        // roomDetails: roomData.description || '',
        // roomPrice: roomData.price,
        from: '',
        to: '',
        total: ''

    })
    
    const [dateRange, setdateRange] = useState({
        from: undefined,
        to: undefined,
        show: false
    })
    const [onBook, setonBook] = useState(false)
    const [loading, setLoading] = useState(false)

    // console.log(props)
    async function fetchRoom() {
        let room = await getOneRooms(props.match.params.id)
        console.log(room)
        setroomData(room)
    }
    useEffect(() => {
        fetchRoom()
        console.log(roomData)
        const jwt = localStorage.getItem("token");
        let userID
        let uname
        if(jwt) {
            userID = jwt ? jwtDecode(jwt)._id : '';
            uname = jwt ? jwtDecode(jwt).name : '';
        }

        if(userID) {
            setbookingData({
                ...bookingData,
                name: uname
            })
        }
        else {
            toast.error("Please Login to Continue Booking")
            props.history.push('/user/login')
        }
    }, [])

    

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

    const calculateTotal = () => {

        let from = new Date(dateRange.from)
        let to = new Date(dateRange.to)

        // setbookingData({...bookingData, from: from.toLocaleDateString(), to: to.toLocaleDateString()})

        let bookedDates = getDatesBetweenDates(from, to)
        console.log('Booked Dates', bookedDates)
        console.log('Room Price', roomData.price)
        let subtotal = parseInt(roomData.price) * parseInt(bookedDates.length)

        function getDatesBetweenDates(startDate, endDate) {
            let dates = []
            //to avoid modifying the original date
            const theDate = new Date(startDate)
            while (theDate < endDate) {
              dates = [...dates, new Date(theDate)]
              theDate.setDate(theDate.getDate() + 1)
            }
            dates = [...dates, endDate]
            dates.pop()
            // console.log(dates)
            return dates
        }
        console.log('Subbbbb', subtotal)
        setbookingData({...bookingData, total: subtotal, from: from.toLocaleDateString(), to: to.toLocaleDateString()})
        return subtotal
    }


    const submit = async (e) => { 
        e.preventDefault()
        fetchRoom()
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
            calculateTotal() 
            // setbookingData({...bookingData, total: total})   
                    
            setonBook(true)
            // await bookRoom(booking) 
        }
        else {
            toast.error("Please Login to Continue Booking")
            props.history.push('/user/login')
        }          
        
    }

    const bookARoom = (e) => { 
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
                customer: userID
            } 
            bookRoom(booking)
            .then(() => props.history.push('/user/rooms'))
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
                                <div className="row">
                                {!onBook ? <>

                                <div className='col-3'></div>
                                <div className="form-group col-6">                                
                                <center>                                    
                                    <label htmlFor="from">Dates</label>
                                    <DayPicker dateRange={dateRange} setdateRange={setdateRange}/>
                                </center>
                                </div>
                                <div className='col-3'>
                                    <BookingsCalender />
                                </div>
                                </>
                                :
                                <>                                    
                                    {/* <form> */}
                                    <div className="col-2"></div>
                                    <div className="col-10">
                                    <div className="row">
                                        <div className="col-4">
                                        <p>Customer : </p>
                                        <p>Room : </p>
                                        <p>Details : </p>
                                        <p>Room Price : </p>
                                        <p>Dates : </p>
                                        <p>Total : </p>
                                        </div>  
                                        <div className="col-7">
                                        <p>{bookingData.name}</p>
                                        <p>{bookingData.roomName} </p>
                                        <p>{roomData.description} </p>
                                        <p>Rs. {roomData.price} </p>
                                        <p>From {bookingData.from} - To {bookingData.to}</p>
                                        <p>Rs. {bookingData.total}</p>
                                        </div>
                                    </div>
                                    </div>
                                </>
                                }
                                </div>
                            </div>
                            <div className="form-group col-12 mt-5">
                                {!onBook ?
                                <center>
                                    <button onClick={submit} type="submit" className="btn btn-success" disabled={!dateRange.from || !dateRange.to}>Confirm</button>
                                </center>
                                :
                                <center>
                                    <button onClick={() => setonBook(false)} type="submit" className="btn btn-danger mr-3" disabled={!dateRange.from || !dateRange.to}>Cancel</button>
                                    <button onClick={bookARoom} type="submit" className="btn btn-success ml-5" disabled={!dateRange.from || !dateRange.to}>Book</button>
                                </center>
                                }
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
