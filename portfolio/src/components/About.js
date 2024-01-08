import React from "react";
import "./About.css";

const About = () => {
  return (
    <div style={{ overflowX: "hidden", height: "90vh", width: "100vw", backgroundColor:'#F4F9F4' }} id="About">
      <div>
        <h2>
          <span style={{ fontWeight: "600", fontSize: "2.5rem !important" }}>
            {" "}
            <center>
              <b style={{ fontFamily: "cursive", fontWeight: "bolder" }}>
                Know Me More
              </b>
            </center>
          </span>
        </h2>
      </div>

      <div
        className="row flexbox"
        style={{ marginLeft: "100px", marginRight: "100px" }}
      >
        <div className="col">
          <img className="imgDimension" src="/images/java.jpg" alt="javaImg" />
        </div>
        <div className="col">
          <h1
            style={{ textAlign: "right", marginRight: "4%", marginTop: "5%" }}
          >
            Hi, I'm{" "}
            <b>
              <u style={{ color: "#008080 " }}>
                <i style={{ color: "#008080 " }}>Callum Smith</i>
              </u>
            </b>
          </h1>
          <p
            style={{
              textAlign: "right",
              fontSize: "22px",
              color: "#848884",
              marginRight: "4%",
            }}
          >
            I'm a designer & developer with a passion for web design. I enjoy
            developing simple, clean and slick websites that provide real value
            to the end user. Thousands of clients have procured exceptional
            results while working with me. Delivering work within time and
            budget which meets client’s requirements is our moto
          </p>
        </div>
      </div>

      <div
        class="row"
        style={{ paddingRight: "50px", marginTop: "8%", marginRight: "5%" }}
      >
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