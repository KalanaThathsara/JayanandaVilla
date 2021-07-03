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
              path="/admin/bookings-calendar"
              component={BookingsCalender}
            />
            <Route path="/admin/view-customers" component={ViewCustomers} />
            <Route path="/admin" component={AddRoom} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default AdminPannel;
