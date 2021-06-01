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

function App() {
  return <>

  <Navbar /> 
  <Switch>

    <Route exact path="/" component={Home} />
    <Route exact path="/rooms/" component={Rooms} />
    <Route exact path="/rooms/:slug" component={SingleRoom} />
    <Route component={Error} />
    </Switch>
    </>
  
}

export default App;
