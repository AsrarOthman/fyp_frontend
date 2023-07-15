import { useEffect } from "react";
import useLocalStorage from "../hook/useLocalStorage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Token = () => {
  const [jwt] = useLocalStorage("token");
  const navigate = useNavigate();

  if (jwt === "") {
    navigate("/"); // Replace '/home' with the desired home page route
  }

  return; // Make sure to return something from the component (e.g., null)
};

export default Token;
