import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, subject, message } = formData;

      // Fixed email value
      const fixedEmail = "Utkarshgupta2255@gmail.com";

      // Send the form data using Axios
      const response = await axios.post("http://localhost:8082/sendEmail", {
        toEmail: fixedEmail,
        subject,
        body: message,
        name,
      });

      console.log(response.data); // Log the server response

      // You can handle success here (e.g., show a success message)
    } catch (error) {
      console.error("Error sending the form data:", error);
      // You can handle errors here (e.g., show an error message)
    }
  };

  return (
    <div className="contact" style={{ overflowX: "hidden", backgroundColor: "beige" }} id="Contact">
      <h2 style={{ paddingTop: "2%", fontFamily: "Arial", textAlign: "center" }}>Contact Me</h2>
      <div style={{ display: "flex", textAlign: "right" }}>
        <div outline className="container">
          <h2 style={{ textAlign: "right", marginBottom: "5%" }}>Estimate your Project</h2>

          <h6 className="text">:What is Your Name</h6>
          <div>
            <Input
              type="text"
              className="inputBox spacing"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <h6 className="text">:Subject</h6>
          <div>
            <Input
              type="text"
              className="inputBox spacing"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <h6 className="text">:How can I Help you ?</h6>
          <div>
            <Input
              type="text"
              className="inputBox spacing"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div>
            <Button type="submit" backgroundColor="#F4F9F4" onClick={handleSubmit}>
              Send
            </Button>
          </div>
        </div>

        <div outline className="container" style={{ paddingRight: "10%" }}>
          <h2 style={{ textAlign: "right", marginBottom: "5%" }}>Let's get in touch</h2>
          <p style={{ fontSize: "1.1rem", paddingLeft: "20%" }}>
            I enjoy discussing new projects and design challenges. Please share
            as much info as possible so we can get the most out of our first catch-up
          </p>
          <br />
          <br />
          <h6 style={{ paddingTop: "5%" }}>:Living In</h6>
          <p>.Shacham street, Los Angeles, USA.</p>
          <h6 style={{ paddingTop: "5%" }}>:Call</h6>
          <p className="iconStyling">
            <CallIcon fontSize="medium" />
            &nbsp;&nbsp; (+060) 444 434 444
          </p>
          <Link href="https://github.com/utkicode" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="large" />
          </Link>
          &nbsp;&nbsp;
          <Link href="https://github.com/utkicode" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
