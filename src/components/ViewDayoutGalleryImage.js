import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { api } from "../services/api";

function ViewGalleryImage(props) {
  const [imagePath, setImagePath] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(async () => {
    axios
      .get(`${api}/admin/dayout-gallery/view/${props.name}`, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        if (typeof response.data == "object") {
          setMsg(response.data.msg);
        }
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        setImagePath("data:;base64," + base64);
      })
      .catch((err) => console.log("Image Error", err));
  }, [props.galleryNo]);

  return (
    <div className="row mb-2">
      {imagePath ? (
        <img
          src={imagePath}
          className="card-img-top"
          style={{ borderRadius: "10px" }}
          // className="pt-2"
          height={props.height}
          width={props.width}
        />
      ) : (
        <p className="align-middle text-center mt-5" style={{ color: "blue" }}>
          No Gallery Image
        </p>
      )}
    </div>
  );
}

export default ViewGalleryImage;
