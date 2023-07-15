import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const handleNavigateHome = () => navigate("/");
  return (
    <h1
      onClick={handleNavigateHome}
      style={{ fontSize: "24px", color: "white", cursor: "pointer" }}
    >
      AO Technology
    </h1>
  );
};

export default Logo;
