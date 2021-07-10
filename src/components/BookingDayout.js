import React, { useState, useEffect } from "react";
import OneDayPicker from "./OneDayPicker";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

import BookedCalender from "./BookedCalender";

import bookDayoutPackage from "../services/addDayoutBooking";
import getOneDayoutPackages from "../services/getOneDayoutPackage";
import data from "../data";

function BookingDayout(props) {
  const [roomData, setroomData] = useState({});

  const [bookingData, setbookingData] = useState({
    email: "",
    name: "",
    contactNo: "",
    room: props.match.params.id,
    roomName: props.match.params.name,
    // roomDetails: roomData.description || '',
    // roomPrice: roomData.price,
    from: "",
    to: "",
    total: "",
    adults: "",
    childs: "",
  });
  const [numOfPersons, setnumOfPersons] = useState({
    adults: 0,
    childs: 0,
  });

  const [dateRange, setdateRange] = useState({
    from: undefined,
    to: undefined,
    show: false,
  });
  const [onBook, setonBook] = useState(false);
  const [loading, setLoading] = useState(false);

  // console.log(props)
  async function fetchRoom() {
    const room = await getOneDayoutPackages(props.match.params.id);
    console.log("booking room", room);
    setroomData(room);
  }
  useEffect(() => {
    fetchRoom();
    console.log(roomData);
    const jwt = localStorage.getItem("token");
    let userID;
    let uname;
    if (jwt) {
      userID = jwt ? jwtDecode(jwt)._id : "";
      uname = jwt ? jwtDecode(jwt).name : "";
    }

    if (userID) {
      setbookingData({
        ...bookingData,
        name: uname,
      });
    } else {
      toast.error("Please Login to Continue Booking");
      props.history.push("/user/login");
    }
  }, []);

  const onchange = (e) => {
    setbookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
    // console.log(customerData)
  };
  const reload = () => {
    window.location.reload(false);
  };

  const calculateTotal = () => {
    let from = new Date(dateRange.from);

    let subtotal =
      parseInt(roomData.aprice) * parseInt(numOfPersons.adults) +
      parseInt(roomData.cprice) * parseInt(numOfPersons.childs);

    setbookingData({
      ...bookingData,
      total: subtotal,
      from: from.toLocaleDateString(),
      adults: numOfPersons.adults,
      childs: numOfPersons.childs,
    });
    return subtotal;
  };

  const submit = async (e) => {
    e.preventDefault();
    fetchRoom();
    const jwt = localStorage.getItem("token");
    let userID;
    if (jwt) {
      userID = jwt ? jwtDecode(jwt)._id : "";
    }

    if (userID) {
      let booking = {
        from: dateRange.from,
        to: dateRange.to,
        room: bookingData.room,
        customer: userID,
        // roomPrice:
      };
      calculateTotal();
      // setbookingData({...bookingData, total: total})

      setonBook(true);
      // await bookRoom(booking)
    } else {
      toast.error("Please Login to Continue Booking");
      props.history.push("/user/login");
    }
  };

  const bookARoom = (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("token");
    let userID;
    if (jwt) {
      userID = jwt ? jwtDecode(jwt)._id : "";
    }

    if (userID) {
      let booking = {
        date: new Date(dateRange.from).toISOString(),
        package: bookingData.room,
        numOfPersons,
        customer: userID,
        total: bookingData.total,
        timeStamp: new Date().toISOString(),
      };
      console.log("Package Booking", booking);
      bookDayoutPackage(booking).then(() =>
        props.history.push("/user/dayouts")
      );
    } else {
      toast.error("Please Login to Continue Booking");
      props.history.push("/user/login");
    }
  };

  return (
    <div className="back" style={{ height: "700px" }}>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form className="container mt-5 formBook" autoComplete="off">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="form-group col-12">
                    <div className="row">
                      {!onBook ? (
                        <>
                          {/* <div className='col-3'></div> */}
                          <div className="form-group col-6 ">
                            <center>
                              <label htmlFor="from">Dates</label>
                              <OneDayPicker
                                dateRange={dateRange}
                                setdateRange={setdateRange}
                              />
                              <label htmlFor="from">Adults</label>
                              <input
                                className="form-control col-3"
                                type="number"
                                value={numOfPersons.adults}
                                onChange={(e) =>
                                  setnumOfPersons({
                                    ...numOfPersons,
                                    adults: e.target.value,
                                  })
                                }
                              />
                              <label htmlFor="from">Childs</label>
                              <input
                                className="form-control col-3"
                                type="number"
                                value={numOfPersons.childs}
                                onChange={(e) =>
                                  setnumOfPersons({
                                    ...numOfPersons,
                                    childs: e.target.value,
                                  })
                                }
                              />
                            </center>
                          </div>
                          <div className="col-6 mt-5">
                            Current Bookings
                            {/* <BookedCalender roomID={props.match.params.id} /> */}
                          </div>
                        </>
                      ) : (
                        <>
                          {/* <form> */}
                          <div className="col-2"></div>
                          <div className="col-10">
                            <div className="row">
                              <div className="col-4">
                                <p>Customer : </p>
                                <p>Package : </p>
                                <p>Packgae Prices : </p>
                                <p>Date : </p>
                                <p>Adults : </p>
                                <p>Childs : </p>
                                <p>Total : </p>
                              </div>
                              <div className="col-7">
                                <p>{bookingData.name}</p>
                                <p>{bookingData.roomName} </p>
                                <p>
                                  Rs. {roomData.aprice} (A) - Rs.{" "}
                                  {roomData.cprice} (C)
                                </p>
                                <p>{bookingData.from}</p>
                                <p>{numOfPersons.adults}</p>
                                <p>{numOfPersons.childs}</p>
                                <p>Rs. {bookingData.total}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="form-group col-12 mt-5">
                    {!onBook ? (
                      <center>
                        <button
                          onClick={submit}
                          type="submit"
                          className="btn btn-success"
                          disabled={!dateRange.from}
                        >
                          Confirm
                        </button>
                      </center>
                    ) : (
                      <center>
                        <button
                          onClick={() => setonBook(false)}
                          type="submit"
                          className="btn btn-danger mr-3"
                          disabled={!dateRange.from}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={bookARoom}
                          type="submit"
                          className="btn btn-success ml-5"
                          disabled={!dateRange.from}
                        >
                          Book
                        </button>
                      </center>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default BookingDayout;
