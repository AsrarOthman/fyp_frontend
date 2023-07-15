import React from "react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Service = () => {
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

        <p className="txt-1">Our Pricing</p>
        <p style={{ fontStyle: "italic" }}>
          {" "}
          make your business easy and faster
        </p>
      </div>
      <div>
        <div className="bar-2">
          <div className="bar-txt-box1" style={{ width: "500px" }}>
            <p>
              Our pricing refers to the cost or fees associated with our
              products or services. It outlines the various pricing options and
              plans available to customers.
            </p>
          </div>

          <div className="bar-2-1 ">
            <div className="bar-2-1A b-txt2">
              {" "}
              <p className="b-txt">
                <button
                  className="b-nor"
                  onClick={() => handleNavigateService("Service")}
                >
                  FREE
                </button>
                <h1>MYR 0</h1>
                You can enjoy free access to our services for a limited access.
                Although the access is limited, you can still benefit from the
                services without any cost.
              </p>
            </div>
            <div className="bar-2-1A b-txt2">
              <p className="b-txt">
                <button
                  className="b-nor premium"
                  onClick={() => handleNavigateService("Service")}
                >
                  PREMIUM
                </button>
                <h1>MYR 10</h1>
                <h4 style={{ fontSize: "20px" }}>per year</h4>
                With a premium subscription, you can enjoy unlimited access to
                our services and unlock another template invoice.
              </p>
            </div>
            <div className="bar-2-1A b-txt2">
              <p className="b-txt">
                <button
                  className="b-nor "
                  onClick={() => handleNavigateService("Service")}
                >
                  COMING SOON
                </button>
                <h4>Quotation Generator</h4>
                With this, you can generate quotes quickly
                and easily. You no longer need to spend a long time creating
                manual quotes.
              </p>
            </div>
            <div className="bar-2-1A b-txt2">
              <p className="b-txt">
                <button
                  className="b-nor "
                  onClick={() => handleNavigateService("Service")}
                >
                  COMING SOON
                </button>
                <h4>Official letters using AI</h4>
                AI will enable us to generate well-structured and professional
                letters, adhering to the highest standards in business
                communication.
              </p>
            </div>
          </div>
        </div>
        <div className="bar-3 bar-3x">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Service;
