import React from "react";
import "./Home.css";
import Typewriter from "./Typewriter";
import { Button } from "@mui/material";


const Home = () => {
    
  

  
  return (
    <div style={{ backgroundColor: "#ef8a8a", height: "90vh", width: "100vw" }}>
      <div className="container">
        <div className="row row-section">
          <div className="col-md-6 left-section">
            <img
              src="/images/web.jpg"
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
        <Button variant="contained" style={{ marginBottom: "0px" }} >
        Contact ME
        </Button>
      </div>
    </div>
  );
};

export default Home;
