import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      })
    );

    const response = await fetch("http://localhost:7000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));

      navigate("/");
    }
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
          className="border rounded p-5 d-flex justify-content-center align-items-center shadow-lg"
          style={{ backgroundColor: "#f0ffff" }}
        >
          <form onSubmit={handleSubmit} style={{ width: "400px" }}>
            <h1 className="mb-3">Login</h1>
            <div className="mb-3 ">
              <label htmlFor="exampleInputEmail1" className="form-label fs-5 ">
                Email address :
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={onChange}
                placeholder="example@xyz.com"
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
                value={credentials.password}
                onChange={onChange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to="/createuser" className="m-3 btn btn-primary">
              I'am a new user
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
