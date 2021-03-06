import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { faPlusCircle ,faImages, faBoxes, faHandshake, faHandHoldingUsd, faBell} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/sideBar.css";

function Sidebar() {
  const [clicked, setclicked] = useState("");

  const onClickStyle = {
    backgroundColor: "white",
    opacity: "0.7",
    color: "black",
    fontWeight: "bold",
  };
  const s = {};
  const onClick = (e) => {
    setclicked(e.target.id);
    console.log(clicked);
  };

  return (
    <div className="sidenav">
      <Link to="/admin/bookings-calendar">
        <p
          onClick={onClick}
          id="calendar"
          style={clicked == "calendar" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            {/* <FontAwesomeIcon icon={faPlusCircle} size="2x"/> */}
          </span>
          Bookings Calender
        </p>
      </Link>
      <Link to="/admin/view-bookings">
        <p
          onClick={onClick}
          id="view-books"
          style={clicked == "view-books" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            {/* <FontAwesomeIcon icon={faPlusCircle} size="2x"/> */}
          </span>
          Room Bookings
        </p>
      </Link>
      <Link to="/admin/view-dayout-bookings">
        <p
          onClick={onClick}
          id="view-d-books"
          style={clicked == "view-d-books" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            {/* <FontAwesomeIcon icon={faPlusCircle} size="2x"/> */}
          </span>
          Dayout Bookings
        </p>
      </Link>
      <Link to="/admin/view-reception-bookings">
        <p
          onClick={onClick}
          id="view-r-books"
          style={clicked == "view-r-books" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            {/* <FontAwesomeIcon icon={faPlusCircle} size="2x"/> */}
          </span>
          Reception Bookings
        </p>
      </Link>

      {/* <Link to="/admin/CustomerDetails">
        <p
          onClick={onClick}
          id="add-rehall"
          style={clicked == "add-rehall" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
          </span>
          Add ReceptionHall
        </p>
      </Link> */}

      <Link to="/admin/dayout">
        <p
          onClick={onClick}
          id="dayout"
          style={clicked == "dayout" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            {/* <FontAwesomeIcon icon={faPlusCircle} size="2x"/> */}
          </span>
          Dayout Gallery
        </p>
      </Link>

      <Link to="/admin/adddayout">
        <p
          onClick={onClick}
          id="add-dayout"
          style={clicked == "add-dayout" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            {/* <FontAwesomeIcon icon={faPlusCircle} size="2x"/> */}
          </span>
          Add Dayout Package
        </p>
      </Link>

      <Link to="/admin/addroom">
        <p
          onClick={onClick}
          id="add-room"
          style={clicked == "add-room" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            {/* <FontAwesomeIcon icon={faPlusCircle} size="2x"/> */}
          </span>
          Add Room
        </p>
      </Link>

      {/* <Link to="/admin/addpackage">
        <p
          onClick={onClick}
          id="add-pkg"
          style={clicked == "add-pkg" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}></span>
          Add Package
        </p>
      </Link> */}

      <Link to="/admin/add-reception-hall">
        <p
          onClick={onClick}
          id="add-rec"
          style={clicked == "add-rec" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}></span>
          Add Reception Hall
        </p>
      </Link>

      <Link to="/admin/addgallery">
        <p
          onClick={onClick}
          id="add-gallery"
          style={clicked == "add-gallery" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            {/* <FontAwesomeIcon icon={faPlusCircle} size="2x"/> */}
          </span>
          Add Gallery
        </p>
      </Link>

      <Link to="/admin/view-customers">
        <p
          onClick={onClick}
          id="view-customers"
          style={clicked == "view-customers" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            {/* <FontAwesomeIcon icon={faPlusCircle} size="2x"/> */}
          </span>
          View Customers
        </p>
      </Link>
      <Link to="/admin/reports">
        <p
          onClick={onClick}
          id="reports"
          style={clicked == "reports" ? onClickStyle : s}
        >
          <span style={{ marginRight: 10 }}>
            {/* <FontAwesomeIcon icon={faPlusCircle} size="2x"/> */}
          </span>
          Reports
        </p>
      </Link>
    </div>
  );
}

export default Sidebar;
