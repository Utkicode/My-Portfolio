import React from 'react';
import './Footer.css'; // Create a CSS file for your footer styles

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>
          Copyright &copy; {new Date().getFullYear()} Utkarsh. All Rights Reserved.
        </p>
        <p>Designed by Utkarsh Gupta</p>
      </div>
    </div>
  );
}

export default Footer;
