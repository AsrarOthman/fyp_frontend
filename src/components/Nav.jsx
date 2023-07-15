import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const handleNavigateMain = () => navigate("/main");
  const handleNavigateService = () => navigate("/service");
  const handleNavigatePricing = () => navigate("/pricing");
  const handleNavigateContect = () => navigate("/contect");
  return (
    <div>
      <div className="Fs-head">
        <button className="b-nor" onClick={() => handleNavigateMain("Main")}>
          Home
        </button>
        <button
          className="b-nor"
          onClick={() => handleNavigateService("Service")}
        >
          Service
        </button>
        <button
          className="b-nor"
          onClick={() => handleNavigatePricing("Pricing")}
        >
          Pricing
        </button>
        <button
          className="b-nor"
          onClick={() => handleNavigateContect("Contect")}
        >
          Contect
        </button>
      </div>
    </div>
  );
};

export default Nav;
