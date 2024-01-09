import React, { useEffect, useState } from 'react';
import './Header.css'; // Create a CSS file for your header styles
import Navbar_menu from './AnimatedHamburgerNavbar';
import CallIcon from "@mui/icons-material/Call";


function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isSticky ? 'sticky' : ''}`}>
      
      
      <span className='name'><a href="#Home" style={{color:'rgb(0, 128, 128)', textDecoration: 'none', fontSize: '30px'}} >Utkarsh Gupta</a></span>
      <p style={{alignItems:'right', marginLeft: '65%',paddingTop: '26px', fontWeight: 'bold'}}>
            <CallIcon fontSize="medium" />
            &nbsp;&nbsp; (+91) 90122 36502
          </p>
       <Navbar_menu/>
       
    </div>
  );
}

export default Header;
