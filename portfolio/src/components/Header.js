import React, { useEffect, useState } from 'react';
import './Header.css'; // Create a CSS file for your header styles
import HamburgerMenu from './HamburgerMenu';


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
      <HamburgerMenu/>
      <span className='name'>Rahul Singh</span>
       
        
    </div>
  );
}

export default Header;
