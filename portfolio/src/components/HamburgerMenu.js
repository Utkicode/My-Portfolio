import React, { useState } from 'react';
import styled from 'styled-components';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <HamburgerMenuContainer>
      <HamburgerIcon onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </HamburgerIcon>
      {open && (
        <MenuOverlay>
          <CloseButton onClick={toggleMenu}>
            <i className="fa fa-times"></i>
          </CloseButton>
          <MenuItems>
            <MenuItem href="#">Home</MenuItem>
            <MenuItem href="#">About</MenuItem>
            <MenuItem href="#">Contact</MenuItem>
          </MenuItems>
        </MenuOverlay>
      )}
    </HamburgerMenuContainer>
  );
};

const HamburgerMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: none;
  align-items: center;
  justify-content: center;
`;

const HamburgerIcon = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

const MenuOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
`;

const MenuItems = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
`;

const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

export default HamburgerMenu;