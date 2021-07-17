import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

import getUserBookings from "../services/getUserBookings";
import cancelDayout from "../services/cancelDayoutBook";

function UserBookings(props) {
  const [bookings, setbookings] = useState({});
  async function fetchData() {
    let result = await getUserBookings(props.match.params.id);
    setbookings(result);
    console.log("user Bookings", result);
  }

  useEffect(() => {
    fetchData();
  }, [props.match.params.id]);

  const cancelDayoutBook = async (id) => {
    await cancelDayout("dayout", id);
  };
  const cancelRoomBook = async (id) => {
    await cancelDayout("room", id);
  };

  return (
    <div className="container mt-5">
      <h5 className="text-center font-weight-bold mt-5">Room Bookings</h5>
      <Table striped className="text-center">
        <thead>
          <tr>
            <th>Date</th>
            <th>Room</th>
            <th>Booked Dates</th>
            <th>Total</th>
            <th>Status</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {bookings.roomBookings &&
            bookings.roomBookings.map((b) => {
              return (
                <tr>
                  <th>{new Date(b.timeStamp).toLocaleDateString()}</th>
                  <td>{b.room.roomName}</td>
                  <td>
                    {b.dates
                      .map((d) => new Date(d).toLocaleDateString())
                      .toString()}
                  </td>
                  <td>Rs. {b.subtotal}</td>
                  <td className={b.status == "Canceled" && "text-danger"}>
                    {b.status && b.status}
                  </td>
                  <td>{b.reamrks && b.reamrks}</td>
                  <td>
                    {b.status != "Canceled" && (
                      <button
                        onClick={() => cancelRoomBook(b._id)}
                        className="btn btn-outline-danger"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <h5 className="text-center font-weight-bold mt-5">Dayout Bookings</h5>
      <Table striped className="text-center">
        <thead>
          <tr>
            <th>Date</th>
            <th>Package</th>
            <th>Booked Date</th>
            <th>Adults</th>
            <th>Childs</th>
            <th>Total</th>
            <th>Status</th>
            <th>Remarks</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.dayoutBookings &&
            bookings.dayoutBookings.map((b) => {
              return (
                <tr>
                  <th>{new Date(b.timeStamp).toLocaleDateString()}</th>
                  <td>{b.package.packageName}</td>
                  <td>{new Date(b.date).toLocaleDateString()}</td>
                  <td>{b.numOfPersons.adults}</td>
                  <td>{b.numOfPersons.childs}</td>
                  <td>Rs. {b.total}</td>
                  <td className={b.status == "Canceled" && "text-danger"}>
                    {b.status && b.status}
                  </td>
                  <td>{b.reamrks && b.reamrks}</td>
                  <td>
                    {b.status != "Canceled" && (
                      <button
                        onClick={() => cancelDayoutBook(b._id)}
                        className="btn btn-outline-danger"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default UserBookings;
