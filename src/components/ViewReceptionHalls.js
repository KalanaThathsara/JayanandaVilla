import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import getGallery from "../services/getDayoutsGallery";
import ViewDayoutGalleryImage from "./ViewDayoutGalleryImage";
import ViewDayoutPackages from "./ViewDayoutPackages";
import ViewOnePackage from "./ViewOnePackage";
import ViewOneRecepPackage from "./ViewOneRecepPackage";
import ViewReceptionPackages from "./ViewReceptionPackages";

function ViewReceptionHalls() {
  const [images, setimages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const results = await getGallery();
      setimages(results);
    }
    fetchImages();
  }, []);

  const backColor = {
    // backgroundColor: "rgba(169,169,169)",
    color: "white",
    paddingTop: "50px",
    paddingBottom: "50px",
  };

  const backColormain = {
    // backgroundColor: "rgba(70,130,180)",
  };

  const paragraph = {
    color: "rgba(0,0,0)",
  };

  return (
    <div className="dayout" style={backColormain}>
      <div className="jumbotron jumbotron-fluid" style={backColor}>
        <div className="container" style={paragraph}>
          <h1 className="display-4">Reception Halls</h1>
          <p className="lead">
            The Reception Hall Packages of Jayananda Estate Villa offers
            numerous choices that guarantee an eventful and enjoyable day for
            the guests. It will be full of fun and enjoyable environment for
            everyone whether it is a reunion with friends, team outing or family
            get-together, we deliver the ideal packages for your requirement.
          </p>
        </div>
      </div>
      <div>
        <Switch>
          <Route
            exact
            path="/user/receptionhall/:name"
            component={ViewOneRecepPackage}
          />
          <Route
            exact
            path="/user/receptionhall"
            component={ViewReceptionPackages}
          />
          <Route component={Error} />
        </Switch>
        {/* <ViewDayoutPackages /> */}
      </div>

      {/* <div className="card-deck row">
        {images &&
          images.map((i) => (
            <div className="card col-3 m-3" key={i._id}>
              <ViewDayoutGalleryImage name={i.name} height="200" width="200" />
            </div>
          ))}
      </div> */}
    </div>
  );
}

export default ViewReceptionHalls;
