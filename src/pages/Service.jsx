import React from "react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import Invoice from "../invoice/Invoice";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Service = () => {
  return (
    <div className="mother">
      <div className="header-main Fs-main">
        <Logo />
        <div style={{ display: "flex", gap: "4px" }}>
          <button className="b-nor" onClick={() => handleNavigate("login")}>
            Setting
          </button>
          <button className="b-nor" onClick={() => handleNavigate("register")}>
            Logout
          </button>
        </div>
      </div>

      <div className="bar-1">
        <Nav />

        <p className="txt-1">Invoice Generator</p>
        <p style={{ fontStyle: "italic" }}>
          {" "}
          make your business easy and faster
        </p>
        <div>
          <Invoice />
        </div>
        <div className="bar-3 bar-3x">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Service;
