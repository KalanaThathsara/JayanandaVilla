// import logo from './logo.svg';
import React from "react";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import SingleRoom from "../pages/SingleRoom";
import Error from "../pages/Error";
import { Switch, Route, Link } from "react-router-dom";
//import {Route, Switch } from 'react-router-dom';
// import {Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';

import Navbar from "./Navbar";
import RegisterCustomer from "./RegisterCustomer";
import "react-toastify/dist/ReactToastify.css";
import CustomerLogin from "./CustomerLogin";
import Gallery from "./Gallery";
import BookingRoom from "./BookingRoom";
import ViewDayouts from "./ViewDayouts";
import BookingDayout from "./BookingDayout";
import ChatBot from "./chatbot/Chatbot";
import ViewReceptionHalls from "./ViewReceptionHalls";
import UserBookings from "./UserBookings";
import ViewOneReceptionPDF from "./ViewOneReceptionPDF";
import BookingReception from "./BookingReception";
import RegisterCustomerWValid from "./RegisterCustomerWValid";

function CustomerView(props) {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/user/rooms/" component={Rooms} />
        <Route path="/user/rooms/book/:id/:name" component={BookingRoom} />
        <Route path="/user/rooms/:slug" component={SingleRoom} />
        <Route path="/user/login/" component={CustomerLogin} />
        <Route path="/user/register/" component={RegisterCustomerWValid} />
        <Route path="/user/dayouts" component={ViewDayouts} />
        <Route path="/user/receptionhall" component={ViewReceptionHalls} />
        <Route
          path="/user/receptionhalls/book/:id/:name"
          component={BookingReception}
        />
        {/* <Route path="/user/receptionhall/one" component={ViewOneReceptionPDF} /> */}
        <Route path="/user/dayout/book/:id/:name" component={BookingDayout} />
        <Route exact path="/user/gallery" component={Gallery} />
        <Route exact path="/user/bookings/:id" component={UserBookings} />
        <Route exact path="/user/gallery" component={Home} />
        <Route component={Error} />
      </Switch>
      <ChatBot />
      {/* <RegisterCustomer />
    <CustomerLogin /> */}
    </>
  );
}

export default CustomerView;
