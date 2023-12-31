import React, { useEffect, useState } from 'react';
import './Header.css'; // Create a CSS file for your header styles
import Navbar_menu from './AnimatedHamburgerNavbar';



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
      
      <span className='name'>Utkarsh Gupta</span>
       <Navbar_menu/>
       
    </div>
  );
}

export default Header;
