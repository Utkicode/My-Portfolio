import React from "react";
import { Button, Input } from "reactstrap";
import "./Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";

const Contact = () => {
  return (
    <div
      className="contact"
      style={{ overflowX: "hidden", backgroundColor: "beige" }}
    >
      <h2 style={{ paddingTop: "2%" , fontFamily : 'Arial'}}>Contact Me</h2>
      <div style={{ display: "flex", textAlign: "right" }}>
        <div outline className="container">
          <h2 style={{textAlign: 'right', marginBottom : '5%'}}>Estimate your Project</h2>

          <h6 className="text">:What is Your Name</h6>
          <div>
            <Input type="text" className="inputBox spacing" />
          </div>

          <h6 className="">:Your Email Address</h6>
          <div>
            <Input type="text" className="inputBox spacing" />
          </div>

          <h6 className="text">:How can I Help you ?</h6>
          <div>
            <Input type="text" className="inputBox spacing" />
          </div>

          <div>
            <Button color="primary">Send</Button>
          </div>
        </div>

        <div outline className="container" style={{paddingRight: '10%'}}>
          <h2 style={{textAlign: 'right', marginBottom : '5%'}}>Let's get in touch</h2>
          <p style={{fontSize : '1.1rem', paddingLeft : '20%'}}>
            I enjoy discussing new projects and design challenges. Please share
            as much info, as possible so we can get the most out of our first
            catch-up
          </p>
          <br />
          <br />
          <h6 style={{paddingTop: '5%'}}>:Living In</h6>
          <p> .Shacham street, Los Angeles, USA.</p>
          <h6 style={{paddingTop: '5%'}}>:Call</h6>
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

export default Contact;
