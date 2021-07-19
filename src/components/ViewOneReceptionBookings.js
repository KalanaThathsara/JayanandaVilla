import React, { useState, useEffect } from "react";

import getOneBooking from "../services/getOneBooking";
import addRoomRemark from "../services/addRoomRemark";

function ViewOneReceptionBooking(props) {
  const [bookings, setbookings] = useState({});
  const [remarks, setremarks] = useState("");
  const [amount, setamount] = useState("");
  async function fetchData() {
    try {
      let result = await getOneBooking("reception", props.match.params.id);
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
    await addRoomRemark("reception", {
      room: props.match.params.id,
      remark: remarks,
      amount: amount,
    });
    setamount("");
    setremarks("");
    fetchData();
  };

  return (
    <div className="container">
      <h2>Reception Hall Booking Details</h2>
      <div className="row">
        <div className="col-3"></div>
        <>
          <div className="col-3">
            <p>Date</p>
            <p>Customer</p>
            <p>Package No</p>
            <p>Package</p>
            <p>Booked Date</p>
            <p>Number of People</p>
            <p>Total</p>
            <label>Remarks</label>
          </div>
          <div className="col-5">
            <p>
              {bookings.timeStamp &&
                new Date(bookings.timeStamp).toLocaleDateString()}
            </p>
            <p>{bookings.customer && bookings.customer.username}</p>
            <p>{bookings.package && bookings.package.packageNo}</p>
            <p>{bookings.package && bookings.package.packageName}</p>
            <p>{new Date(bookings.date).toLocaleDateString()}</p>
            <p>{bookings.numOfPersons && bookings.numOfPersons.adults}</p>
            <p>Rs. {bookings.total && bookings.total}</p>

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

export default ViewOneReceptionBooking;
