import React from "react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const Setting = () => {
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

        <p className="txt-1">Invoice Generator</p>
        <p style={{ fontStyle: "italic" }}>
          {" "}
          make your business easy and faster
        </p>
      </div>
    </div>
  );
};

export default Setting;
