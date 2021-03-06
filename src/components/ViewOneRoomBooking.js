import React, { useState, useEffect } from "react";

import getOneBooking from "../services/getOneBooking";
import addRoomRemark from "../services/addRoomRemark";

function ViewOneRoomBooking(props) {
  const [bookings, setbookings] = useState({});
  const [remarks, setremarks] = useState("");
  const [amount, setamount] = useState("");
  async function fetchData() {
    try {
      let result = await getOneBooking("room", props.match.params.id);
      setbookings(result);
      console.log("One Booking", result);
    } catch (e) {
      console.log("1 Room Err", e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addRe = async () => {
    await addRoomRemark("room", {
      room: props.match.params.id,
      remark: remarks,
      amount: amount,
    });
  };

  return (
    <div className="container">
      <h4 className="text-center mb-5">Booking Details</h4>
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
            <label>Remarks</label>
          </div>
          <div className="col-5">
            <p>
              {bookings.timeStamp &&
                new Date(bookings.timeStamp).toLocaleDateString()}
            </p>
            <p>{bookings.customer && bookings.customer.username}</p>
            <p>{bookings.room && bookings.room.roomNo}</p>
            <p>{bookings.room && bookings.room.roomName}</p>
            <p>
              {bookings.dates &&
                bookings.dates
                  .map((d) => new Date(d).toLocaleDateString())
                  .toString()}
            </p>
            <p>Rs. {bookings.subtotal && bookings.subtotal}</p>

            <input
              type="text"
              onChange={(e) => setremarks(e.target.value)}
              placeholder="Item"
            />
            <input
              type="text"
              onChange={(e) => setamount(e.target.value)}
              placeholder="Amount"
            />
            <button onClick={addRe} className="ml-2 btn btn-outline-primary">
              Add
            </button>
          </div>
        </>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default ViewOneRoomBooking;
