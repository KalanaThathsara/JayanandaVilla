import React, { useState, useEffect } from "react";
import axios from "axios";
// import ProductImageUpload from './ProductImageUpload'
import { toast } from "react-toastify";
// import addProduct from '../services/addProductService.js'
// import addProductImage from '../services/addProductImageService'
// import getSuppliers from '../services/getSupplierForProduct'
import DayPicker from "./DayPicker";
import RoomImageUpload from "./RoomImageUpload";

import addDayout from "../services/addDayout";
import addDayoutImage from "../services/addDayoutImage";

function AddDayout() {
  const [packageData, setpackageData] = useState({
    packageNo: "",
    packageName: "",
    services: "",
    menu: "",
    aprice: "",
    cprice: "",
    discount: "",
  });
  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState("");
  const [filePreview, setFilePreview] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [nameOfImage, setNameOfImage] = useState("");

  const [productSaved, setproductSaved] = useState(false);
  const [imageSaved, setimagesaved] = useState(false);
  const [savedSize, setsavedSize] = useState("");

  const [file2, setFile2] = useState("");
  const [filePreview2, setFilePreview2] = useState("");
  const [filename2, setFilename2] = useState("Choose File");
  const [nameOfImage2, setNameOfImage2] = useState("");

  const [productSaved2, setproductSaved2] = useState(false);
  const [imageSaved2, setimagesaved2] = useState(false);
  const [savedSize2, setsavedSize2] = useState("");

  const [file3, setFile3] = useState("");
  const [filePreview3, setFilePreview3] = useState("");
  const [filename3, setFilename3] = useState("Choose File");
  const [nameOfImage3, setNameOfImage3] = useState("");

  const [productSaved3, setproductSaved3] = useState(false);
  const [imageSaved3, setimagesaved3] = useState(false);
  const [savedSize3, setsavedSize3] = useState("");

  const onchange = (e) => {
    setpackageData({
      ...packageData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(packageData);
    setLoading(true);
    setNameOfImage(packageData.packageNo + 1);
    setNameOfImage2(packageData.packageNo + 2);
    setNameOfImage3(packageData.packageNo + 3);
    // console.log("Name of image", nameOfImage)
    // console.log("Product Data", roomData)
    await addDayout(packageData);
    console.log("NOI1", nameOfImage);
    console.log("NOI2", nameOfImage2);
    console.log("NOI3", nameOfImage3);

    setTimeout(function () {
      addDayoutImage(file, packageData.packageNo + 1, 1).then(() => {
        addDayoutImage(file2, packageData.packageNo + 2, 2).then(() => {
          addDayoutImage(file3, packageData.packageNo + 3, 3);
        });
      });
    }, 1000);

    // submitImage();

    // console.log(file, filename, filePreview, nameOfImage)
    // addProductImage(file, nameOfImage)
    setLoading(false);
    // setproductSaved(true);
    // setTimeout(function(){ reload() }, 3000);
  };
  //   const submitImage = async () => {
  //     // e.preventDefault();
  //     await addDayoutImage(file, nameOfImage, 1);
  //     await addDayoutImage(file2, nameOfImage2, 2);
  //     await addDayoutImage(file3, nameOfImage3, 3);
  //     setimagesaved(true);
  //   };

  return (
    <div>
      <form className="container" autoComplete="off">
        <h6
          style={{
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
          }}
          className="pl-5 pt-1 pb-1 mb-5"
        >
          Add Dayout Package
        </h6>

        <div className="row">
          <div className="col-6">
            <RoomImageUpload
              // onImageSubmit={onImageSubmit}
              file={file}
              setFile={setFile}
              filePreview={filePreview}
              setFilePreview={setFilePreview}
              filename={filename}
              setFilename={setFilename}
              nameOfImage={nameOfImage}
            />
            <RoomImageUpload
              // onImageSubmit={onImageSubmit}
              file={file2}
              setFile={setFile2}
              filePreview={filePreview2}
              setFilePreview={setFilePreview2}
              filename={filename2}
              setFilename={setFilename2}
              nameOfImage={nameOfImage2}
            />
            <RoomImageUpload
              // onImageSubmit={onImageSubmit}
              file={file3}
              setFile={setFile3}
              filePreview={filePreview3}
              setFilePreview={setFilePreview3}
              filename={filename3}
              setFilename={setFilename3}
              nameOfImage={nameOfImage3}
            />
          </div>

          <div className="col-6">
            <div className="row">
              <div className="form-group col-12">
                <label htmlFor="packageNo" className="col-5">
                  Package No
                </label>
                <input
                  onChange={onchange}
                  value={packageData.packageNo}
                  className="form-control col-11 ml-3"
                  type="text"
                  id="packageNo"
                  name="packageNo"
                />
              </div>
              <div className="form-group col-12">
                <label htmlFor="packageName" className="col-5">
                  Package Name
                </label>
                <input
                  onChange={onchange}
                  value={packageData.packageName}
                  className="form-control col-11 ml-3"
                  type="text"
                  id="packageName"
                  name="packageName"
                />
              </div>
              <div className="form-group col-12">
                <label htmlFor="services" className="col-5">
                  Services
                </label>
                <textarea
                  onChange={onchange}
                  value={packageData.services}
                  className="form-control col-11 ml-3"
                  type="textarea"
                  rows="8"
                  id="services"
                  name="services"
                />
              </div>
              <div className="form-group col-12">
                <label htmlFor="menu" className="col-5">
                  Menu
                </label>
                <textarea
                  onChange={onchange}
                  value={packageData.menu}
                  className="form-control col-11 ml-3"
                  type="textarea"
                  rows="8"
                  id="menu"
                  name="menu"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="aprice" className="col-5">
                  Adult Price
                </label>
                <input
                  onChange={onchange}
                  value={packageData.aprice}
                  className="form-control col-11 ml-3"
                  type="number"
                  id="aprice"
                  name="aprice"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="cprice" className="col-5">
                  Child Price
                </label>
                <input
                  onChange={onchange}
                  value={packageData.cprice}
                  className="form-control col-11 ml-3"
                  type="number"
                  id="cprice"
                  name="cprice"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="discount" className="col-5">
                  Discount
                </label>
                <input
                  onChange={onchange}
                  value={packageData.discount}
                  className="form-control col-11"
                  type="number"
                  id="discount"
                  name="discount"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={submit}
          type="submit"
          className="btn btn-primary float-right m-1 col-12"
        >
          {productSaved ? `Package Saved` : "Save Package"}
        </button>
        {/* <div>
          {!imageSaved && productSaved && (
            <>
              <h6 style={{ backgroundColor: "red" }} className="p-2 rounded">
                {" "}
                Image hasn't been saved yet
              </h6>
              <button
                onClick={submitImage}
                className="btn btn-success float-right m-1 col-12"
                type="submit"
              >
                Save Image
              </button>
            </>
          )}
        </div> */}

        {/* <button type="submit" className="btn btn-primary float-right m-1">Next</button> */}
        {/* <button type="submit" onClick={() => setStep(1)} className="btn btn-primary float-right m-1">Back</button> */}
      </form>
    </div>
  );
}

export default AddDayout;
