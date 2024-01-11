import React from "react";
import Navbar from "../navbar/navbar";
import "./homepage.css";

function Homepage() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="homepage">
        <div className="hero-header-div">
          <h1>Discover Your Dream Real Estate Properties</h1>
          <h4>
            Explore our collection of prime real estate properties and find your
            perfect home today.
          </h4>
          <div className="buttons">
            <button className="view-button">View</button>
            <button className="signup-button">Sign Up</button>
          </div>
          <img
            className="img"
            alt="real"
            src="https://wallpaperboat.com/wp-content/uploads/2020/10/23/57974/real-estate-10.jpg"
          />
        </div>
      </div>
      <div className="secondsection">
        <div className="discover">
          <strong>Find Your Dream Home Today</strong>
          <p>
            At our real estate company, we provide exceptional 24/7 customer
            support and offer free property valuation services to help you make
            informed decisions.
          </p>
          <div className="discover2">
            <div discover2-1>
              <strong>24/7 Support</strong>
              <p>
                Get expert advice and assistance from our dedicated team of
                professionals.
              </p>
            </div>
            <div discover2-2>
              <strong>Free Valuation</strong>
              <p>
                Know the true value of your property with our complimentary
                valuation services.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            className="img2"
            alt="real2"
            src="https://wallpapercave.com/wp/wp4110653.jpg"
          />
        </div>
      </div>
      <div className="discover3">
        <button className="learnbtn">Learn more</button>
        <button className="signbtn">Sign Up &#8594; </button>
      </div>
    </>
  );
}

export default Homepage;
