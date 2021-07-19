import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight, FaCentercode } from "react-icons/fa";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

export default class Navbar extends Component {
  state = {
    isOpen: false,
    username: "",
  };

  // componentDidMount = () => {
  //     // Typical usage (don't forget to compare props):
  //     try{
  //         const jwt = localStorage.getItem('token')
  //         const usern = jwtDecode(jwt).name.split(' ')[0]
  //         console.log(usern)
  //         this.setState({
  //             username: usern
  //         })
  //         console.log(this.state.username)
  //     }
  //     catch(err){
  //         console.log(err)
  //     }
  //   }
  logout = () => {
    localStorage.removeItem("token");
    toast.dark("Logged Out Successfully");
    // props.history.push("/");
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const jwt = localStorage.getItem("token");
    let usern;
    let userID;
    if (jwt) {
      usern = jwt ? jwtDecode(jwt).name.split(" ")[0] : "";
      userID = jwt ? jwtDecode(jwt)._id : " ";
    }

    return (
      <nav className="navbar" style={{ marginTop: "0px" }}>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/user">
              {/* {<a href="url">Jayananda Estate Villa</a>} */}
              <h4>Jayananda Estate Villa</h4>
              {/* { <img src={logo} alt="Jayananda Estate Villa"></img>} */}
            </Link>
            <button
              type="box-button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon"></FaAlignRight>
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-linksshow-nav" : "nav-links"}>
            <li>
              <Link to="/user">Home</Link>
            </li>
            <li>
              <Link to="/user/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/user/receptionhall">ReceptionHall</Link>
            </li>
            <li>
              <Link to="/user/dayouts">DayOut</Link>
            </li>
            <li>
              <Link to="/user/gallery">Gallery</Link>
            </li>
            {usern ? (
              <>
                <li>
                  <Link to={`/user/bookings/${userID}`}>{usern}</Link>
                </li>
                <li>
                  <Link onClick={this.logout}>
                    <button className="btn btn-outline-dark">Logout</button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/user/login">LogIn</Link>
                </li>
                <li>
                  <Link to="/user/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
