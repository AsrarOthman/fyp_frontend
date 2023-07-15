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
        <div class="wrapper">
          <div class="box">
            <div class="front-face">
              <div class="icon">
                <i class="fas fa-code"></i>
              </div>
              <span>No Code</span>
            </div>
            <div class="back-face">
              <span>Web Design</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in
                deleniti vitae beatae veritatis aliquid porro perspiciatis
                dolores impedit ad.
              </p>
            </div>
          </div>
          <div class="box">
            <div class="front-face">
              <div class="icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <span>Easy to Generate</span>
            </div>
            <div class="back-face">
              <span>Advertising</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in
                deleniti vitae beatae veritatis aliquid porro perspiciatis
                dolores impedit ad.
              </p>
            </div>
          </div>
          <div class="box">
            <div class="front-face">
              <div class="icon">
                <i class="fas fa-rocket"></i>
              </div>
              <span>Run your business Fast </span>
            </div>
            <div class="back-face">
              <span>Game Design</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in
                deleniti vitae beatae veritatis aliquid porro perspiciatis
                dolores impedit ad.
              </p>
            </div>
          </div>
        </div>
        <div className="home-info-box">
          <div className="home-info">
            <p>
              With our "Easy and Fast Invoice Maker" software, you can
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
