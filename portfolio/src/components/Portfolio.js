import React, { useState } from 'react';
import { CssBaseline, Container, Button, Link } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lightBlue, teal } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';

function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: darkMode ? teal : lightBlue,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
        <Link href="https://github.com/utkicode" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </Link>
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio website!</p>
        {/* Add your portfolio content here */}
      </Container>
    </ThemeProvider>
  );
}

export default Portfolio;
