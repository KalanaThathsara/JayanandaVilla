import React from "react";
import { Switch, Route } from "react-router-dom";
import { BookingsTable } from "../tables/bookings/bookingsTable";
import { RecepBookingsTable } from "../tables/receptionBookings/recepBookingsTable";
import ViewOneRoomBooking from "./ViewOneRoomBooking";

function ViewReceptionBookings() {
  return (
    <div>
      {/* <BookingsTable /> */}
      <Switch>
        {/* <Route path="/admin/view-bookings/:id" component={ViewOneRoomBooking} /> */}
        <Route
          exact
          path="/admin/view-reception-bookings"
          component={RecepBookingsTable}
        />
      </Switch>
    </div>
  );
}

export default ViewReceptionBookings;
