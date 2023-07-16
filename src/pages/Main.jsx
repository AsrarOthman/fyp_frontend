import React, { useState } from "react";
import Logo from "../components/Logo";
import { useEffect } from "react";
import useLocalStorage from "react-use-localstorage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HOST } from "../api";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Token from "../components/Token";
import Logout from "../components/Logout";

const Main = () => {
  const [jwt, setJwt] = useLocalStorage("token", "");
  const [isAdmin, setAdmin] = useState(null);
  const [DataFilter, setDataFilter] = useState(null);
  const [user, setUser] = useLocalStorage("username", "");
  const [rules, setRules] = useLocalStorage("rules", "");
  const navigate = useNavigate();
  const handleNavigateService = () => {
    navigate("/service");
  };
  const handleNavigateToLogin = () => {
    navigate("/");
  };
  const handleLogout = (message) => {
    <Logout />;
    handleNavigateToLogin();
  };
  const fetchUserAccount = async () => {
    try {
      const response = await axios.get(`${HOST}/private`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      // setAdmin(response.data.user.rules);
      console.log("data-filter", response.data.data[0]);
      setDataFilter(response.data.data[0]);
      setUser(response.data.data[0].username);
      setRules(response.data.data[0].rules);
    } catch (error) {
      handleNavigateToLogin();
    }
  };


  useEffect(() => {
    fetchUserAccount();
  }, [jwt]);

  useEffect(() => {
    if (DataFilter?.rules === "admin") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [DataFilter]);
  const AdminControl = () => {
    return (
      <div style={{ display: "inline", marginLeft: "1rem" }}>
        <span
          style={{
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          }}
        >
          Edit
        </span>
        <span
          style={{
            textDecoration: "underline",
            marginLeft: "0.5rem",
            color: "red",
            cursor: "pointer",
          }}
        >
          Delete
        </span>
      </div>
    );
  };
  return (
    <div className="mother">
      <div
        className="header-main"
        style={{
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          {/* <button className="b-nor" onClick={handleNavigateToUsers}>
            List All Users
          </button> */}
          <h4 style={{ color: "white" }}>
            {DataFilter?.username || "no data"}
          </h4>

          <button className="b-nor" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "400px",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <h1>Create your Invoice Here </h1>
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <h3 style={{ marginTop: "3rem" }}>User information</h3>
          <div style={{ marginTop: "1rem" }}>
            <p>Username</p>
            <p style={{ display: "inline", fontWeight: "bold" }}>
              {DataFilter?.username || "no data"}
            </p>
            {isAdmin && <AdminControl />}

          </div>
        </div>
      </div> */}
      <div className="bar-1">
        <Nav />
        <p className="txt-1">Invoice Generator</p>
        <p style={{ fontStyle: "italic" }}>
          Make your business easy and faster
        </p>
      </div>
      <div className="bar-2">
        <div className="bar-txt-box1">
          <p>
            Choose your favorite template to create an experience that suits
            your needs and preferences. By selecting the right template, you can
            speed up the development process, enhance visual quality, and
            provide an engaging experience to users.
          </p>
        </div>

        <div className="bar-2-1 ">
          <div className="bar-2-1A bg-c">
            {" "}
            <button
              className="b-nor"
              onClick={() => handleNavigateService("Service")}
            >
              FREE
            </button>
          </div>
          <div className="bar-2-1A"></div>
          <div className="bar-2-1A"></div>
          <div className="bar-2-1A"></div>
        </div>
      </div>
      <div className="bar-3 bar-3x">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
