import React, { useEffect } from "react";
import useLocalStorage from "../hook/useLocalStorage";
import Logo from "./Logo";

const Header = ({ user }) => {
  const [jwt, setJwt] = useLocalStorage("token", "");

  const handleLogoutOut = () => {
    setJwt("");
    location.reload();
  };

  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "#518ECB",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        border: " 3px solid red",
      }}
    >
      <Logo />
      <div
        style={{
          display: "flex",
          gap: "4px",
          alignItems: "center",
          border: " 3px solid red",
        }}
      >
        <h4 style={{ color: "white" }}>{user?.username || "no data"}</h4>
        <button onClick={handleLogoutOut}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
