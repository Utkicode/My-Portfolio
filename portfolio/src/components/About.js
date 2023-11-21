import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div>
        <p className="aboutMe">
          <span
            style={{
              backgroundColor: "aqua",
              padding: "5px",
              marginTop: "20px",
            }}
          >
            About me
          </span>
        </p>
        <h2>
          <span style={{ fontWeight: "600", fontSize: "2.5rem !important" }}>
            {" "}
            <b style={{ fontFamily: "cursive", fontWeight: "bolder" }}>
              Know Me More
            </b>
          </span>
        </h2>
      </div>

      <div className="row flexbox">
        <div className="col">
          <img className="imgDimension" src="/images/java.jpg" />
        </div>
        <div className="col">
          <h1 style={{ textAlign: "right" }}>
            Hi, I'm{" "}
            <b>
              <u>
                <i>Callum Smith</i>
              </u>
            </b>
          </h1>
          <p style={{ textAlign: "right", fontSize: "22px", color: "#848884" }}>
            I'm a designer & developer with a passion for web design. I enjoy
            developing simple, clean and slick websites that provide real value
            to the end user. Thousands of clients have procured exceptional
            results while working with me. Delivering work within time and
            budget which meets client’s requirements is our moto
          </p>
        </div>
      </div>

      <div class="row" style={{ paddingRight: "50px" }}>
        <div class="col-sm">
          <p className="lowerpara">:From</p>
          <h5 className="lowerpara2">.Los Angeles, USA</h5>
        </div>
        <div class="col-sm">
          <p className="lowerpara">:Date of birth</p>
          <h5 className="lowerpara2">November, 1987 11</h5>
        </div>
        <div class="col-sm">
          <p className="lowerpara">:Email</p>
          <h5 className="lowerpara2">chat@callum.com</h5>
        </div>
        <div class="col-sm">
          <p className="lowerpara">:Name</p>
          <h5 className="lowerpara2">.Callum Smith</h5>
        </div>
      </div>
    </div>
  );
};

export default About;