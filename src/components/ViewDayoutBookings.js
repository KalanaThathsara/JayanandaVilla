import React from "react";
import { Switch, Route } from "react-router-dom";
import { DayoutsBookingsTable } from "../tables/dayoutBookings/dayoutsBookingsTable";
// import ViewOneRoomBooking from "./ViewOneRoomBooking";

function ViewDayoutBookings() {
  return (
    <div>
      {/* <BookingsTable /> */}
      <Switch>
        {/* <Route path="/admin/view-bookings/:id" component={ViewOneRoomBooking} /> */}
        <Route
          exact
          path="/admin/view-dayout-bookings"
          component={DayoutsBookingsTable}
        />
      </Switch>
    </div>
  );
}

export default ViewDayoutBookings;
