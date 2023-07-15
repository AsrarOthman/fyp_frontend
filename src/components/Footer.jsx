import React from "react";


const Footer = () => {
  return (
    <div>
      <div className="home-3-2">
        <div class="fwrapper">
          <div class="button">
            <div class="icon">
              <i class="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
          </div>
          <div class="button">
            <div class="icon">
              <i class="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
          </div>
          <div class="button">
            <div class="icon">
              <i class="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </div>
          <div class="button">
            <div class="icon">
              <i class="fab fa-github"></i>
            </div>
            <span>Github</span>
          </div>
          <div class="button">
            <div class="icon">
              <i class="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
          </div>
        </div>
      </div>
      <p style={{ fontSize: "12px", textAlign: "center", color:"white" }}>
        Copyright@2023AoTechology
      </p>
    </div>
  );
};

export default Footer;
