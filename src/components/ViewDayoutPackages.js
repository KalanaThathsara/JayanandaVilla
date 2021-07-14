import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";
import "../css/loginRegiser.css";

import getDayoutPackages from "../services/getDayoutPackages";
import ViewRoomImage from "../components/ViewRoomImage";
import ViewDayoutImage from "./ViewDayoutImage";

const ViewDayoutPackages = () => {
  const [packages, setpackages] = useState([]);

  useEffect(() => {
    // setIsLoading(true)
    async function fetchAllRooms() {
      const result = await getDayoutPackages();
      console.log("products", result);
      setpackages(result);
      console.log("All products", result);
    }
    fetchAllRooms();

    // setIsLoading(false)
  }, []);

  const dayoutview = {
    backgroundColor: "rgba(245,245,245)",
  };

  return (
    <div className="card-deck row">
      {packages &&
        packages.map((r) => (
          <div
            className="card col-3 m-5 p-3 rounded"
            style={dayoutview}
            key={r._id}
          >
            {/* <img className="card-img-top" src={r.image} alt={r.roomName} /> */}
            <ViewDayoutImage roomNo={r._id} no="1" height="200" width="200" />
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <h5 className="card-title">{r.packageName}</h5>
                  {/* <p>{r.description}</p> */}
                  <small>{r.packageNo}</small>
                </div>
                <div className="col-6">
                  <p className="card-text">Child - Rs. {r.cprice}</p>
                  <p className="card-text">Adult - Rs. {r.aprice}</p>
                  {/* <Link to={`/user/rooms/book/${r._id}`}>
                                    <button className="btn btn-outline-dark">Book Now</button>
                                </Link> */}
                </div>
                <div className="col-12">
                  <p>{r.description}</p>
                </div>
                <div className="col-12">
                  <Link to={`/user/dayouts/${r._id}`}>
                    <button className="btn btn-outline-dark float-right">
                      View
                    </button>
                  </Link>
                </div>
              </div>
              {/* <h5 className="card-title">{r.roomName}</h5> */}
              {/* <small>{r.combinations[0].size}</small> */}
              {/* <p className="card-text">{r.description}</p> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ViewDayoutPackages;
