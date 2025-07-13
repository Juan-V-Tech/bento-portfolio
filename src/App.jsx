import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import GooeyNav from './components/GooeyNav';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import ElectricTemple from './pages/electric-temple';
import DotGrid from './components/DotGrid';
import Footer from './components/Footer';

const backgroundImages = [
  'url("la-vibes.jpg")',
  'url("la-sunset.jpg")',
  'url("los-angleles-palm-trees.jpg")',
];

const App = () => {
  const [darkMode] = useState(true);
  const [bgIndex, setBgIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const getInitialActiveIndex = () => {
    const currentPath = location.pathname;
    const index = navItems.findIndex(item => item.href === currentPath);
    return index !== -1 ? index : 0;
  };

  const theme = createTheme({
    palette: { mode: darkMode ? 'dark' : 'light' },
  });

  useEffect(() => {
    document.body.style.backgroundImage = backgroundImages[bgIndex];
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundPosition = '';
    };
  }, [bgIndex]);

  const cycleBackgroundImage = () => setBgIndex((i) => (i + 1) % backgroundImages.length);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
      >
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="rgba(59, 130, 246, 0.15)"
          activeColor="rgba(147, 197, 253, 1.0)"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          height: '60px'
        }}
      >
        <GooeyNav
          items={navItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={getInitialActiveIndex()}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </Box>

      <Box sx={{ paddingTop: '100px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home cycleBackgroundImage={cycleBackgroundImage} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/electric-temple" element={<ElectricTemple />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
