import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import ScrollTop from './ScrollTop'; // You'll need to create the ScrollTop component

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 'auto', // Push the footer to the bottom of the page
    backgroundColor: '#333',
    color: '#fff',
  },
  copyright: {
    flex: 1, // Pushes the Designed by and Copyright text to the left and right, respectively
  },
  arrowButton: {
    backgroundColor: '#444',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#555',
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.footer}>
      <Toolbar>
        <div className={classes.copyright}>
          <Typography variant="body2" color="inherit">
            Designed by Your Name
          </Typography>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Your Company
          </Typography>
        </div>
        <IconButton className={classes.arrowButton} onClick={() => ScrollTop()}>
          <KeyboardArrowUpIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
