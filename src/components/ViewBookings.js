import React from "react";
import { Switch, Route } from "react-router-dom";
import { BookingsTable } from "../tables/bookings/bookingsTable";
import ViewOneRoomBooking from "./ViewOneRoomBooking";

function ViewBookings() {
  return (
    <div>
      {/* <BookingsTable /> */}
      <Switch>
        <Route path="/admin/view-bookings/:id" component={ViewOneRoomBooking} />
        <Route exact path="/admin/view-bookings" component={BookingsTable} />
      </Switch>
    </div>
  );
}

export default ViewBookings;
