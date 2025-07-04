import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import ResponsiveAppBar from './components/AppBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import ElectricTemple from './pages/electric-temple';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: { mode: darkMode ? 'dark' : 'light' },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/electric-temple" element={<ElectricTemple />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
