import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import getOneDayoutPackages from "../services/getOneDayoutPackage";
import ViewDayoutImage from "./ViewDayoutImage";

function ViewOnePackage(props) {
  const [packageD, setpackage] = useState({});
  useEffect(() => {
    async function fetchData() {
      const re = await getOneDayoutPackages(props.match.params.id);
      setpackage(re);
      console.log("one pkg", re);
    }
    fetchData(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div className="container mt-5">
      <h2 className="text-center">{packageD.packageName}</h2>
      <h6 className="mt-4">Package No : {packageD.packageNo}</h6>
      <div className="row mt-5">
        <div className="col-4">
          <ViewDayoutImage
            roomNo={packageD._id}
            no="1"
            height="200"
            width="200"
          />
        </div>
        <div className="col-4">
          <ViewDayoutImage
            roomNo={packageD._id}
            no="2"
            height="200"
            width="200"
          />
        </div>
        <div className="col-4">
          <ViewDayoutImage
            roomNo={packageD._id}
            no="3"
            height="200"
            width="200"
          />
        </div>
      </div>
      <ul className="mt-4">
        Services
        {packageD.services &&
          packageD.services.split(",").map((s, i) => {
            return (
              <li key={i} className="ml-5">
                {s}
              </li>
            );
          })}
      </ul>
      <ul>
        Menu
        {packageD &&
          packageD.menu &&
          packageD.menu.split(",").map((s, i) => {
            return (
              <li key={i} className="ml-5">
                {s}
              </li>
            );
          })}
      </ul>
      <div className="row">
        <div className="col-2">Adults - Rs.{packageD.aprice}</div>
        <div className="col-3">Childs (8-12 Years) - Rs.{packageD.cprice}</div>
      </div>
      {/* <canter> */}
      <div className="row mt-5 mb-5 text-center">
        <div className="col-4"></div>
        <div className="col-4">
          <Link
            to={`/user/dayout/book/${packageD._id}/${packageD.packageName}`}
          >
            <button className="btn btn-outline-dark" width="100%">
              Book Now
            </button>
          </Link>
        </div>
        <div className="col-4"></div>
      </div>
      {/* </canter> */}
    </div>
  );
}

export default ViewOnePackage;
