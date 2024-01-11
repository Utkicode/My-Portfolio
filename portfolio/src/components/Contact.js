import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";
import axios from "axios";
import GoogleCloudLogo from "./googlecloud.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      const fixedEmail = "Utkarshgupta2255@gmail.com";

      // Send the form data using Axios
      const response = await axios.post("http://localhost:8082/sendEmail", {
        toEmail: fixedEmail,
        subject,
        body: message,
        name,
      });

      console.log(response.data);

      // Clear the form data after successful submission
      setFormData({ name: "", subject: "", message: "" });

      // Show success notification
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error("Error sending the form data:", error);
      // You can handle errors here (e.g., show an error message)
      toast.error('Error sending the form data');
    }
  };

  // Check if any of the input fields is empty
  const isFormEmpty = Object.values(formData).some((value) => value === "");

  return (
    <div className="contact" style={{ overflowX: "hidden", backgroundColor: "beige" }} id="Contact">
      <h2 style={{ paddingTop: "2%", fontFamily: "Arial", textAlign: "center" }}>Contact Me</h2>
      <div style={{ display: "flex", textAlign: "right" }}>
        <div outline className="container">
          <h2 style={{ textAlign: "right", marginBottom: "5%" }}>Estimate your Project</h2>

          <h6 style={{marginTop: '2%'}}>:What is Your Name</h6>
          <div>
            <Input
              type="text"
              style={{border: 'none', borderBottom: '1px solid #000', borderRadius: '0px',  marginLeft: 'auto',  padding: '5px',width: '550px', background: 'transparent'}}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <h6 style={{marginTop: '2%'}}>:Email</h6>
          <div>
            <Input
              type="text"
              style={{border: 'none', borderBottom: '1px solid #000', borderRadius: '0px',  marginLeft: 'auto',  padding: '5px',width: '550px',background: 'transparent',}}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <h6 style={{marginTop: '2%'}}>:How can I Help you ?</h6>
          <div>
            <Input
              type="text"
              style={{border: 'none', borderBottom: '1px solid #000', borderRadius: '0px',  marginLeft: 'auto',  padding: '5px', width: '550px',background: 'transparent', }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Button type="submit" backgroundColor="#F4F9F4" onClick={handleSubmit} disabled={isFormEmpty} style={{marginTop: '5%'}}>
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
          <p>.Gurugram .India</p>
          <h6 style={{ paddingTop: "5%" }}>:Call</h6>
          <p className="iconStyling">
            <CallIcon fontSize="medium" />
            &nbsp;&nbsp; (+91) 90122 36502
          </p>
          <Link href="https://github.com/utkicode" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large" style={{ color: 'black' }} />

          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="https://github.com/utkicode" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="https://www.cloudskillsboost.google/public_profiles/b64beb0e-2487-4b07-a08b-f03c0210c67e" target="_blank" rel="noopener noreferrer">
            <img src={GoogleCloudLogo} alt="Google Cloud Logo" style={{ width: '40px', height: '40px' }} />
          </Link>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Contact;
