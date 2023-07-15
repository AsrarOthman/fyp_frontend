import React from "react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Contect = () => {
  return (
    <div className="mother">
      <div className="header-main Fs-main">
        <Logo />
        <div style={{ display: "flex", gap: "4px" }}>
          <button
            className="b-nor"
            onClick={() => handleNavigateSetting("Setting")}
          >
            Setting
          </button>
          <button
            className="b-nor"
            onClick={() => handleNavigateLogout("Logout")}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="bar-1">
        <Nav />

        <p className="txt-1">About Us /Contect </p>
        <p style={{ fontStyle: "italic" }}>
          {" "}
          make your business easy and faster
        </p>
      </div>
      <div className="bar-2">
        <div className="bar-txt-box1">
          <p>
            We are on a mission to develop efficient and affordable systems to
            simplify work processes.
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
    
        </div>
      </div>
      <div className="bar-3 bar-3x">
        <Footer />
      </div>
    </div>
  );
};

export default Contect;
