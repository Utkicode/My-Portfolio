import React, { useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 10;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transition: visibility 0.2s ease-in-out;
`;

const Nav = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HamburgerButton = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 11;

  span:nth-child(1) {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 30px;
    height: 4px;
    background-color: #333;
    transition: transform 0.3s ease-in-out;
  }

  span:nth-child(2) {
    position: absolute;
    top: 30px;
    left: 15px;
    width: 30px;
    height: 4px;
    background-color: #333;
    transition: transform 0.3s ease-in-out;
  }

  span:nth-child(3) {
    position: absolute;
    top: 45px;
    left: 15px;
    width: 30px;
    height: 4px;
    background-color: #333;
    transition: transform 0.3s ease-in-out;
  }

  span.open {
    transform: translateY(-50%) rotate(45deg);
  }

  span.close {
    transform: translateY(50%) rotate(-45deg);
  }

  .online {
    position: absolute;
    top: 12px;
    left: 25px;
    color: #333;
    font-weight: bold;
    transition: transform 0.3s ease-in-out 0.1s;
    visibility: hidden;
  }

  span.open + .online {
    visibility: visible;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  transition: opacity 0.2s ease-in-out;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  
`;

function AnimatedHamburgerNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div >
      <HamburgerButton onClick={toggleMenu} >
      <span></span>
      <span></span>
      <span></span>
      <span className={`online ${isOpen ? 'open' : 'close'}`}>Online</span>
    </HamburgerButton>

    <Container isOpen={isOpen}>
      <Nav>
        <CloseButton onClick={closeMenu}>×</CloseButton>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#whatIdo">whatIdo</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Contact">Contact</a></li>
          
        </ul>
        <Link
          href="https://github.com/utkicode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </Link>
      </Nav>
      
    </Container>
      </div>
    </>
  );
}

export default AnimatedHamburgerNavbar;
//style={{overflowX: 'hidden', overflowY: 'hidden',  position: "sticky", top: 0, zIndex: 1000 }}