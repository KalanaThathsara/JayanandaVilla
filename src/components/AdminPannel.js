import React from "react";
import AddRoom from "./AddRoom";
import Sidebar from "./Sidebar";
import { Switch, Route } from "react-router-dom";
import AddGallery from "./AddGallery";
import ViewBookings from "./ViewBookings";
import AddPkg from "./AddPkg";
import BookingsCalender from "./BookingsCalender";
import ViewCustomers from "./ViewCustomers";
import AddDayout from "./AddDayout";
import DayoutHome from "./DayoutHome";
import Reports from "./Reports";
import AddReceptionHall from "./AddReceptionHall";
import ViewOneRoomBooking from "./ViewOneRoomBooking";
import ViewDayoutBookings from "./ViewDayoutBookings";
import ViewReceptionBookings from "./ViewReceptionBookings";
import ViewOneDayoutBooking from "./ViewOneDayoutBooking";
import ViewOneReceptionBooking from "./ViewOneReceptionBookings";

function AdminPannel() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="container col-10">
          <Switch>
            <Route path="/admin/addroom" component={AddRoom} />
            <Route path="/admin/addpackage" component={AddPkg} />
            <Route path="/admin/adddayout" component={AddDayout} />
            <Route path="/admin/dayout" component={DayoutHome} />
            <Route path="/admin/addgallery" component={AddGallery} />
            <Route path="/admin/view-bookings" component={ViewBookings} />
            <Route
              path="/admin/view-one-room-book/:id"
              component={ViewOneRoomBooking}
            />
            <Route
              path="/admin/view-dayout-bookings"
              component={ViewDayoutBookings}
            />
            <Route
              path="/admin/view-one-dayout-book/:id"
              component={ViewOneDayoutBooking}
            />
            <Route
              path="/admin/view-reception-bookings"
              component={ViewReceptionBookings}
            />
            <Route
              path="/admin/view-one-reception-book/:id"
              component={ViewOneReceptionBooking}
            />
            <Route
              path="/admin/add-reception-hall"
              component={AddReceptionHall}
            />
            <Route
              path="/admin/bookings-calendar"
              component={BookingsCalender}
            />
            <Route path="/admin/view-customers" component={ViewCustomers} />
            <Route path="/admin/reports" component={Reports} />
            <Route path="/admin" component={AddRoom} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default AdminPannel;
