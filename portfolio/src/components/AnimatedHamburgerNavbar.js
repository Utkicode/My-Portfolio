import React, { useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";
import { useEffect } from 'react';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
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
  background-color: #E5E4E2;
  border-radius: none;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 1rem;
      font-size : 20px;
      color : black;
      font-weight : bold;

      a {
        text-decoration: none;
        color: #333;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: blue; /* Change the color to your desired hover color */
        }
      }

      
    }
  }
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
  background-color: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  transition: opacity 0.2s ease-in-out;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  
`;

function AnimatedHamburgerNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Add event listener to handle hash changes
    const handleHashChange = () => {
      // Get the current hash from the window location
      const currentHash = window.location.hash;

      // Update the active class based on the current hash
      const listItems = document.querySelectorAll('.nav-list-item');
      listItems.forEach((item) => {
        const itemHash = item.querySelector('a').getAttribute('href');
        if (itemHash === currentHash) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    };

    // Attach the event listener
    window.addEventListener('hashchange', handleHashChange);

    // Call the initial check when the component mounts
    handleHashChange();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
        <CloseButton onClick={closeMenu} style={{color:"black", backgroundColor: "blue"}}>X</CloseButton>
        <ul>
          <li><a href="#Home" onClick={() => closeMenu()}>Home</a></li>
          <li><a href="#About" onClick={() => closeMenu()}>About</a></li>
          <li><a href="#whatIdo" onClick={() => closeMenu()}>whatIdo</a></li>
          <li><a href="#Skills" onClick={() => closeMenu()}>Skills</a></li>
          <li><a href="#Contact" onClick={() => closeMenu()}>Contact</a></li>
          
        </ul>
        <div style={{display:'flex', backgroundColor:'red', paddingTop: '15px'}}>
        <Link
          href="https://github.com/utkicode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href= "https://www.linkedin.com/in/utkarsh-gupta-b17a44192/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
          </Link>
        </div>
      </Nav>
      
    </Container>
      </div>
    </>
  );
}

export default AnimatedHamburgerNavbar;
