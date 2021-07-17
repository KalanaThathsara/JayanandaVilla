import React, { useState, useEffect } from "react";
import getOneBooking from "../services/getOneBooking";

function ViewOneRoomBooking(props) {
  const [bookings, setbookings] = useState({});
  const [remarks, setremarks] = useState("");

  async function fetchData() {
    try {
      let result = await getOneBooking("room", props.match.params.id);
      setbookings(result);
      console.log("One Booking", result);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [props]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <>
          <div className="col-3">
            <p>Date</p>
            <p>Customer</p>
            <p>Room No</p>
            <p>Room</p>
            <p>Booked Dates</p>
            <p>Total</p>
          </div>
          <div className="col-3">
            <p>{new Date(bookings.timeStamp).toLocaleDateString()}</p>
            <p>{bookings.customer.username}</p>
            <p>{bookings.room.roomNo}</p>
            <p>{bookings.room.roomName}</p>
            <p>
              {bookings.dates
                .map((d) => new Date(d).toLocaleDateString())
                .toString()}
            </p>
            <p>{bookings.subtotal}</p>
          </div>
        </>
        <div className="col-3"></div>
      </div>
      <label>Remarks</label>
      <input type="text" onChange={(e) => setremarks(e.target.value)} />
    </div>
  );
}

export default ViewOneRoomBooking;
