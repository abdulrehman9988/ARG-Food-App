import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  let navigate=useNavigate()
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:7000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
   navigate("/login")
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100vh", backgroundColor: "#f0f0f0" }}
      >
        <div
          className="border rounded p-3 d-flex justify-content-center align-items-center shadow-lg"
          style={{ backgroundColor: "#f0ffff" }}
        >
          <form onSubmit={handleSubmit} style={{ width: "400px" }}>
            <h1 className="mb-3">SignUp</h1>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fs-5">
                Name :
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={credentials.name}
                onChange={onChange}
                placeholder="enter your full name"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fs-5">
                Email address :
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={credentials.email}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={onChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label fs-5"
              >
                Password :
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={credentials.password}
                onChange={onChange}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label fs-5"
              >
                Address :
              </label>
              <input
                type="text"
                name="geolocation"
                placeholder="enter your address"
                value={credentials.geolocation}
                onChange={onChange}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to="/login" className="m-3 btn btn-primary">
              Already a user
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
