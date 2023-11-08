import React from "react";
import { Button, Input } from "reactstrap";
import "./ContactMe.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";
const ContactMe = () => {
  return (
    <div className="contact">
      <h2 style={{ paddingTop: "2%" }}>ContactMe</h2>
      <div style={{ display: "flex" }}>
        <div outline className="container">
          <h2>Estimate your Project</h2>
 
          <h5 className="text">:What is Your Name</h5>
          <div>
            <Input type="text" className="bottomBorder" />
          </div>
 
          <h5 className="text">:Your Email Address</h5>
          <div>
            <Input type="text" className="bottomBorder" />
          </div>
 
          <h5 className="text">:How can I Help you ?</h5>
          <div>
            <Input type="text" className="bottomBorder" />
          </div>
 
          <div>
            <Button color="primary">Send</Button>
          </div>
        </div>
 
        <div outline className="container">
          <h2>Let's get in touch</h2>
          <p>
            I enjoy discussing new projects and design challenges. Please share
            as much info, as possible so we can get the most out of our first
            catch-up
          </p>
          <br />
          <br />
          <h6>:Living In</h6>
          <p> .Shacham street, Los Angeles, USA.</p>
          <h6>:Call</h6>
          <p className="iconStyling">
            <CallIcon fontSize="medium" />
            &nbsp;&nbsp; (+060) 444 434 444
          </p>
          <Link
            href="https://github.com/utkicode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </Link>
          &nbsp;&nbsp;
          <Link
            href="https://github.com/utkicode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
};
 
export default ContactMe;