import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import useLocalStorage from "../hook/useLocalStorage";
import useLocalStorage from "react-use-localstorage";
import { HOST } from "../api";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [jwt, setJwt] = useLocalStorage("token", "");
  const navigate = useNavigate();
  const handleSucesssNavigation = () => {
    navigate("/main");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const identifier = event.target[0].value;
    const password = event.target[1].value;
    console.log("indentifier", identifier);
    console.log("password", password);

    // send formObject to api
    setLoading(true);
    // async function then = Promise:resolved, catch = Promise:reject, finally = Promise:fetched
    axios
      .post(`${HOST}/api/login`, {
        identifier,
        password,
      })
      .then(function (response) {
        console.info(response.data);
        // navigate to my account page when success
        setJwt(response.data.jwt);
        console.log("setJwt-data", response.data.jwt);
        handleSucesssNavigation();
      })
      .catch(function (error) {
        console.error(error.response.data);
        alert(" Failed. Please try again."); // display error message
      })
      .finally(function () {
        setLoading(false);
      });
  };
  return (
    <div className="mother">
      <div className="header-main">
        <Logo />
      </div>
      <div className="b-log"></div>
      <div className="log-3">
        <div className="log-3-1">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              alignItems: "center",
              padding: "3rem",
            }}
          >
            <h1 className="f-ig">AO Invoice Maker</h1>
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
                <label htmlFor="identifier">Username / Email</label>
                <input className=" input-box " id="identifier" type="text" />
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
              <button
                type="submit"
                className="login-box mb"
                disabled={isLoading}
              >
                {isLoading ? "Sending request..." : "Login"}
              </button>
              <Link
                to="/register"
                style={{
                  marginTop: "1rem",
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Register as new user
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <p style={{ fontSize: "24px", textAlign: "center" }}>
          Powered by Ao Technology
        </p>
        <p style={{ fontSize: "12px", textAlign: "center" }}>
          Copyright@2023AoTechology
        </p>
      </div>
    </div>
  );
};

export default Login;
