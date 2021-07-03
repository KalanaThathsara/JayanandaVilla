import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../css/loginRegiser.css";

import registerCustomer from "../services/registerCustomerService";

function RegisterCustomer() {
  const [customerData, setcustomerData] = useState({
    name: "",
    gender: "",
    email: "",
    contact: "",
    address: "",
    country: "",
    password: "",
  });
  const [countries, setcountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name;")
      .then((res) => {
        // console.log(res.data);
        // let arr = ["Choose Country"]

        // res.data.forEach(c => {
        //     console.log(c.name)
        //     arr.push(c.name)
        // });
        setcountries(res.data);
      });
  }, []);

  const onchangeCountry = (e) => {
    setcustomerData({
      ...customerData,
      country: e.target.value,
    });
    // console.log(productData)
  };

  const onchange = (e) => {
    setcustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
    // console.log(customerData)
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const jwt = await registerCustomer(customerData);
    localStorage.setItem("token", jwt);
    // addProduct(customerData)
    console.log(customerData);
    setLoading(false);
  };
  const onChangeGender = (e) => {
    setcustomerData({
      ...customerData,
      gender: e.target.value,
    });
  };

  const loginH = {
    backgroundColor: "rgba(0,0, 0, 0.7)",
    color: "white",
    marginTop: "30px",
    padding: "5px",
    borderRadius: "20px",
  };

  return (
    <div className="back" style={{ height: "700px" }}>
      <center>
        <Link to="/user/login">
          <button type="button" className="btn btn-light">
            Already Registered? Login
          </button>
        </Link>
      </center>
      <center>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6" style={loginH}>
            <h5>Customer Registration</h5>{" "}
          </div>
          <div className="col-3"></div>
        </div>
      </center>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form className="container mt-5 form" autoComplete="off">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="form-group col-12">
                    <label htmlFor="name" className="col-5">
                      Customer Name
                    </label>
                    <input
                      onChange={onchange}
                      value={customerData.productNo}
                      className="form-control col-11 ml-3"
                      type="text"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div onChange={onChangeGender} className="form-group col-12">
                    <label htmlFor="gender" className="col-3">
                      Gender
                    </label>
                    <div className="row">
                      <div className="col-3">
                        <input
                          type="radio"
                          className="form-check-input col-3"
                          value="Male"
                          name="gender"
                        />{" "}
                        Male
                      </div>
                      <div className="col-3">
                        <input
                          type="radio"
                          className="form-check-input ml-5"
                          value="Female"
                          name="gender"
                        />{" "}
                        Female
                      </div>
                    </div>
                  </div>

                  <div className="form-group col-12 mt-2">
                    <label htmlFor="email" className="col-5">
                      Email
                    </label>
                    <input
                      onChange={onchange}
                      value={customerData.email}
                      className="form-control col-11 ml-3"
                      type="text"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="form-group col-12 mt-2">
                    <label htmlFor="contact" className="col-5">
                      Contact No
                    </label>
                    <input
                      onChange={onchange}
                      value={customerData.contact}
                      className="form-control col-11 ml-3"
                      type="textarea"
                      rows="4"
                      id="contact"
                      name="contact"
                    />
                  </div>
                  <div className="form-group col-12 mt-2">
                    <label htmlFor="address" className="col-5">
                      Address
                    </label>
                    <input
                      onChange={onchange}
                      value={customerData.address}
                      className="form-control col-11 ml-3"
                      type="text"
                      id="address"
                      name="address"
                    />
                  </div>
                  <div className="form-group col-12">
                    <label htmlFor="country" className="col-5">
                      Country
                    </label>
                    <select
                      onChange={onchangeCountry}
                      value={customerData.country}
                      id="country"
                      name="country"
                      className="form-control col-11 ml-3"
                      style={{ color: "black" }}
                      required
                    >
                      {countries.map((opt) => {
                        console.log(typeof opt.name);
                        return (
                          <option
                            key={opt.name}
                            value={opt.name}
                            style={{ color: "black" }}
                          >
                            {opt.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-group col-12 mt-2">
                    <label htmlFor="password" className="col-5">
                      Password
                    </label>
                    <input
                      onChange={onchange}
                      value={customerData.password}
                      className="form-control col-11 ml-3"
                      type="password"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="form-group col-12 mt-5">
                    <center>
                      <button
                        onClick={submit}
                        type="submit"
                        className="btn btn-success"
                      >
                        Register
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default RegisterCustomer;
