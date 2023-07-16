import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "#518ECB",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Logo />
        <div style={{ display: "flex", gap: "4px" }}>
          <button className="b-nor" onClick={() => handleNavigate("login")}>
            Login
          </button>
          <button className="b-nor" onClick={() => handleNavigate("register")}>
            Register
          </button>
        </div>
      </div>
      <div className="home-1">
        <h1>Welcome to AOT Invoice Generator</h1>
      </div>
      <div className="home-2">
        <div className="wrapper">
          <div className="box">
            <div className="front-face">
              <div className="icon">
                <i className="fas fa-code"></i>
              </div>
              <span>No Code</span>
            </div>
            <div className="back-face">
              <span>No Code</span>
              <p>
                Our system doesn't require coding. Our system can generate
                ready-to-use invoices that can be downloaded in PDF format or
                sent directly to customers via email..
              </p>
            </div>
          </div>
          <div className="box">
            <div className="front-face">
              <div className="icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <span>Easy to Generate</span>
            </div>
            <div className="back-face">
              <span>Easy to Generate</span>
              <p>
                Users can easily generate invoices without the need for complex
                technical skills or coding knowledge.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="front-face">
              <div className="icon">
                <i className="fas fa-rocket"></i>
              </div>
              <span>Run your business Fast </span>
            </div>
            <div className="back-face">
              <span>Run your business Fast</span>
              <p>
                Our system provides user-friendly interfaces and intuitive
                workflows, making it easy for you and your team to navigate and
                utilize its features.
              </p>
            </div>
          </div>
        </div>
        <div className="home-info-box">
          <div className="home-info">
            <p>
              With our "Easy and Fast Invoice Generator" software, you can
              effortlessly create high-quality invoices in no time, eliminating
              the need for hours of manual work or struggling with the
              complexities of invoice formatting.
            </p>
          </div>
        </div>
      </div>
      <div className="home-3 " style={{ height: "290px" }}>
        <div className="home-3-1 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
