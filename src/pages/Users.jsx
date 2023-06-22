import React, { useState } from "react";
import Logo from "../components/Logo";
import { useEffect } from "react";
// import useLocalStorage from "../hook/useLocalStorage";
import useLocalStorage from "react-use-localstorage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HOST } from "../api";

const Users = () => {
  const [jwt, setJwt] = useLocalStorage("token", "");
  const [isAdmin, setAdmin] = useState(null);
  const [DataFilter, setDataFilter] = useState([]);
  const navigate = useNavigate();
  const handleNavigateToLogin = () => {
    // alert("tak berjaya patah balik ke login");
    navigate("/login");
  };
  const fetchUserAccount = async () => {
    try {
      const response = await axios.get(`${HOST}/api/users`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("data-filter", response.data.data);
      setDataFilter(response.data.data);
    } catch (error) {
      handleNavigateToLogin();
    }
  };

  const handleLogoutOut = () => setJwt("");
  useEffect(() => {
    fetchUserAccount();
  }, [jwt]);

  // if (DataFilter && DataFilter.length > 0) {
  //   console.log("DataFilter22:");
  //   for (let i = 0; i < DataFilter.length; i++) {
  //     console.log(DataFilter[i].username);
  //   }
  // } else {
  //   console.log("No data available");
  // }
  const dataControl = () => {
    console.log("addasa", DataFilter);
    DataFilter.map((id, i) => {
      return <dataControl key={i} {...id} />;
    });
  };
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "#171A21",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Logo />
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <button onClick={handleLogoutOut}>Logout</button>
        </div>
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
        <h1>List of All Users in This System</h1>
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <h3 style={{ marginTop: "3rem" }}>User information</h3>
          <div style={{ marginTop: "1rem" }}>
            <p>Username</p>
            {DataFilter.map((param) => (
              <p key={param.id}>{param.username}</p>
            ))}

            {DataFilter.map((param, index) => (
              <UserCardx key={index} param={param} />
            ))}

            {isAdmin && <AdminControl />}
          </div>
        </div>
      </div>
    </div>
  );
};

const UserCardx = ({ param }) => {
  const handleClickUser = () => {
    console.log(param);
  };
  return (
    <div
      style={{
        position: "relative",
        borderStyle: "solid",
        borderColor: "gray",
        borderRadius: "0.5rem",
        padding: "1rem",
        marginTop: "1rem",
      }}
    >
      <button
        onClick={handleClickUser}
        style={{
          unset: "all",
          position: "absolute",
          right: "1rem",
          top: "1rem",
          borderStyle: "solid",
          borderColor: "gray",
          borderRadius: "0.3rem",
          padding: "0.3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ height: "1.2rem", width: "1.2rem" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </button>
      <div>
        <p>Username</p>
        <p style={{ display: "inline", fontWeight: "bold" }}>
          {param?.username || "no data"}
        </p>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <p>Email</p>
        <p style={{ display: "inline", fontWeight: "bold" }}>
          {param?.email ||       "no data"}
        </p>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <p>Date registered</p>
        <p style={{ display: "inline", fontWeight: "bold" }}>
          {param?.created_at}
        </p>
      </div>
    </div>
  );
};

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

export default Users;
