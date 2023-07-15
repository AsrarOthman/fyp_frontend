import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import axios from "axios";
import { HOST } from "../api";

const Register = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const username = event.target[1].value;
    const password = event.target[2].value;
    const password_confirmation = event.target[3].value;
    const formObject = { email, username, password, password_confirmation };

    // send formObject to api
    try {
      const response = await axios.post(`${HOST}/api/register`, formObject);
      console.log(response.data); // handle response from server
      alert("Registration successful!"); // display success message
    } catch (error) {
      console.error(error); // handle error from server

      alert("Registration failed. Please try again."); // display error message
    }
  };
  return (
    <div className="mother">
      <div className="header-main">
        <Logo />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "400px",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <h1>Free Registration</h1>
        <form
          style={{ width: "100%", maxWidth: "400px" }}
          onSubmit={handleSubmit}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "3rem",
            }}
          >
            <label htmlFor="email">Email</label>
            <input className="input-box" id="email" type="text" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <label htmlFor="username">Username</label>
            <input className="input-box" id="username" type="text" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <label htmlFor="password">Password</label>
            <input className="input-box" id="password" type="password" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <label htmlFor="passwordConfirmation">Repeat password</label>
            <input
              className="input-box"
              id="passwordConfirmation"
              type="password"
            />
          </div>
          <button className="login-box" type="submit">
            Register
          </button>

          <Link
            to="/login"
            style={{
              marginTop: "1rem",
              display: "block",
              width: "100%",
              textAlign: "center",
            }}
          >
            Return as existing user
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
