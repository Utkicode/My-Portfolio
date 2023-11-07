import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import {  Link } from '@mui/material';

const ContactMe = () => {
  return (
    <div >
        <h2>Contact Me</h2>
         <Link href="https://github.com/utkicode" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </Link>
    </div>
  )
}

export default ContactMe