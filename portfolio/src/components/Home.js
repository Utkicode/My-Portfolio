import React from "react";
import "./Home.css";
import Typewriter from "./Typewriter";
import { Button } from "@mui/material";


const Home = () => {
    
  

  
  return (
    <div style={{ backgroundColor: "#FFDB58", height: "90vh", width: "100vw" }} id="Home">
      <div className="container">
        <div className="row row-section">
          <div className="col-md-6 left-section">
            <img
              src={require('./images/home.jpg')}
              style={{ maxWidth: "100%", height: "auto" }}
              alt="img"
            />
          </div>
          <div className="col-md-6 right-section">
            <h3 className="tagline">HI, I'M A FREELANCER</h3>
            <span className="typewriter">
              <Typewriter />
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "110px",
        }}
      >
        <a href="#Contact"><Button variant="contained" style={{ marginBottom: "0px", marginRight: '200px' }} >
        Contact ME
        </Button></a>
        
      </div>
    </div>
  );
};

export default Home;
