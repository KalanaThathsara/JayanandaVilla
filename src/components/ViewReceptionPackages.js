import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";
import "../css/loginRegiser.css";

import getReceptionPackages from "../services/getReceptionHalls";
import ViewRoomImage from "../components/ViewRoomImage";
import ViewDayoutImage from "./ViewDayoutImage";

const ViewReceptionPackages = () => {
  const [packages, setpackages] = useState([]);

  useEffect(() => {
    // setIsLoading(true)
    async function fetchAllRooms() {
      const result = await getReceptionPackages();
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
            {/* <ViewDayoutImage roomNo={r._id} no="1" height="200" width="200" /> */}
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <h5 className="card-title">{r.name}</h5>
                  <small>{r.packageNo}</small>
                </div>
                <div className="col-6">
                  {/* <p className="card-text">Price - Rs. {r.price}</p> */}
                </div>
                <div className="col-12">
                  <p>{r.description}</p>
                </div>
                <div className="col-12 text-center">
                  {/* <a
                    href={`D:/Projects/Development%20Project/jayanandavilla-backend/packagesPDFs/${r.name}.pdf`}
                    target="_blank"
                  >
                    <p>View</p>
                  </a> */}
                  <a
                    href="http://file:///D:/Projects/Development%20Project/jayanandavilla-backend/packagesPDFs/ddddddddddddds.pdf"
                    target="_blank"
                  >
                    <h5>SLAAS Main Site</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ViewReceptionPackages;
