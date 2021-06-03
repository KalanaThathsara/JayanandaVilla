// import logo from './logo.svg';
 import './App.css';
import React from "react";
 import Home from "./pages/Home";
 import Rooms from "./pages/Rooms";
 import SingleRoom from "./pages/SingleRoom";
 import Error from "./pages/Error";
 import {Switch, Route, Link } from "react-router-dom";
 //import {Route, Switch } from 'react-router-dom';
// import {Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';

 import Navbar from "./components/Navbar";
import RegisterCustomer from './components/RegisterCustomer';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CustomerLogin from './components/CustomerLogin';
import AdminPannel from './components/AdminPannel';
import CustomerView from './components/CustomerView';

function App(props) {
  console.log("Location", props)
  return(
  <>
    <ToastContainer />
   
    <Switch>
      <Route path="/admin" component={AdminPannel} />
      <Route path="/user" component={CustomerView} />
      <Route path="/" component={CustomerView} />
      <Route component={Error} />
    </Switch>
    {/* <RegisterCustomer />
    <CustomerLogin /> */}
  </>
  )
  
}

export default App;
