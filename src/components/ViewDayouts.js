import React, { useState, useEffect } from "react";

import getGallery from "../services/getDayoutsGallery";
import ViewDayoutGalleryImage from "./ViewDayoutGalleryImage";

function ViewDayouts() {
  const [images, setimages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const results = await getGallery();
      setimages(results);
    }
    fetchImages();
  }, []);

  const backColor = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    paddingTop: "50px",
    paddingBottom: "50px",
  };

  return (
    <div>
      <div class="jumbotron jumbotron-fluid" style={backColor}>
        <div class="container">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>

      <div className="card-deck row">
        {images &&
          images.map((i) => (
            <div className="card col-3 m-3" key={i._id}>
              <ViewDayoutGalleryImage name={i.name} height="200" width="200" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ViewDayouts;
