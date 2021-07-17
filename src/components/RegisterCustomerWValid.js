import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../css/loginRegiser.css";

import registerCustomer from "../services/registerCustomerService";

function RegisterCustomerWValid() {
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name;")
      .then((res) => {
        setcountries(res.data);
      });
  }, []);

  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      email: "",
      contact: "",
      address: "",
      country: "",
      password: "",
      repeatpassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Mininum 3 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      gender: Yup.string().required("Required!"),
      email: Yup.string().email("Invalid Email").required("Required!"),
      contact: Yup.string().matches(phoneRegex, "Invalid phone."),
      //   Yup.string()
      //     .length(10, "Should be 10 Numbers")
      //     .required("Required!"),
      address: Yup.string().required("Required!"),
      country: Yup.string().required("Required!"),
      password: Yup.string()
        .min(5, "Minimum 5 Characters")
        .required("Required!"),
      repeatpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's Not Match")
        .required("Required!"),
    }),
    onSubmit: async (values) => {
      console.log("F USer Data", values);
      const jwt = await registerCustomer(values);
      localStorage.setItem("token", jwt);
    },
  });

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
          <form
            onSubmit={formik.handleSubmit}
            className="container mt-5 form"
            autoComplete="off"
          >
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="form-group col-12">
                    <label htmlFor="name" className="col-5">
                      Name
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      className="form-control col-11 ml-3"
                      type="text"
                      id="name"
                      name="name"
                    />
                    {formik.errors.name && formik.touched.name && (
                      <p className="ml-5 mt-2 text-danger">
                        {formik.errors.name}
                      </p>
                    )}
                  </div>
                  <div
                    onChange={formik.handleChange}
                    className="form-group col-12"
                  >
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
                          id="gender"
                        />{" "}
                        Male
                      </div>
                      <div className="col-3">
                        <input
                          type="radio"
                          className="form-check-input ml-5"
                          value="Female"
                          name="gender"
                          id="gender"
                        />{" "}
                        Female
                      </div>
                    </div>
                    {formik.errors.gender && formik.touched.gender && (
                      <p className="ml-5 mt-2 text-danger">
                        {formik.errors.gender}
                      </p>
                    )}
                  </div>
                  {/* <div className="form-group col-12">
                    <label htmlFor="gender" className="col-5">
                      Gender
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.gender}
                      className="form-control col-11 ml-3"
                      type="text"
                      id="gender"
                      name="gender"
                    />
                    {formik.errors.gender && formik.touched.gender && (
                      <p className="ml-5 mt-2 text-danger">
                        {formik.errors.gender}
                      </p>
                    )}
                  </div> */}
                  <div className="form-group col-12">
                    <label htmlFor="email" className="col-5">
                      Email
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="form-control col-11 ml-3"
                      type="text"
                      id="email"
                      name="email"
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p className="ml-5 mt-2 text-danger">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="contact" className="col-5">
                      Contact No
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.contact}
                      className="form-control col-11 ml-3"
                      type="text"
                      id="contact"
                      name="contact"
                    />
                    {formik.errors.contact && formik.touched.contact && (
                      <p className="ml-5 mt-2 text-danger">
                        {formik.errors.contact}
                      </p>
                    )}
                  </div>

                  <div className="form-group col-6">
                    <label htmlFor="country" className="col-5">
                      Country
                    </label>
                    <select
                      onChange={formik.handleChange}
                      value={formik.values.country}
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
                  <div className="form-group col-12">
                    <label htmlFor="address" className="col-5">
                      Address
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.address}
                      className="form-control col-11 ml-3"
                      type="text"
                      id="address"
                      name="address"
                    />
                    {formik.errors.address && formik.touched.address && (
                      <p className="ml-5 mt-2 text-danger">
                        {formik.errors.address}
                      </p>
                    )}
                  </div>
                  {/* <div className="form-group col-12">
                    <label htmlFor="country" className="col-5">
                      Country
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.country}
                      className="form-control col-11 ml-3"
                      type="text"
                      id="country"
                      name="country"
                    />
                    {formik.errors.country && formik.touched.country && (
                      <p className="ml-5 mt-2 text-danger">
                        {formik.errors.country}
                      </p>
                    )}
                  </div> */}

                  <div className="form-group col-6">
                    <label htmlFor="password" className="col-5">
                      Password
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      className="form-control col-11 ml-3"
                      type="password"
                      id="password"
                      name="password"
                    />
                    {formik.errors.password && formik.touched.password && (
                      <p className="ml-5 mt-2 text-danger">
                        {formik.errors.password}
                      </p>
                    )}
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="repeatpassword" className="col-8">
                      Repeat Password
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.repeatpassword}
                      className="form-control col-10 ml-3"
                      type="password"
                      id="repeatpassword"
                      name="repeatpassword"
                    />
                    {formik.errors.repeatpassword &&
                      formik.touched.repeatpassword && (
                        <p className="ml-5 mt-2 text-danger">
                          {formik.errors.repeatpassword}
                        </p>
                      )}
                  </div>
                  <div className="form-group col-12 mt-3">
                    <center>
                      <button
                        // onClick={submit}
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

export default RegisterCustomerWValid;
