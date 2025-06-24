import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import BentoGrid from './components/BentoGrid';
import BentoItem from './components/BentoItem';

const backgroundImages = [
  'url("la-vibes.jpg")',
  'url("la-sunset.jpg")',
  'url("los-angleles-palm-trees.jpg")',
];

const skillsImages = [
  { src: 'react.png', alt: 'React' },
  { src: 'jsIconGreen.svg', alt: 'Node.js' },
  { src: 'python-logo-only.svg', alt: 'Python' },
  { src: 'cpp_logo.png', alt: 'C++' },
  { src: 'vscode.png', alt: 'VS Code' },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [cookies, setCookies] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [skillsIndex, setSkillsIndex] = useState(0);

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
  const handleCookieClick = () => setCookies((c) => c + 1);
  const handleSkillsClick = () => setSkillsIndex((i) => (i + 1) % skillsImages.length);

//To Do List: (due by July 04 2025)
//header Example: https://mui.com/material-ui/react-app-bar/ 
//footer Example: find later

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BentoGrid>
        <BentoItem
          title="Juan Ventura-Romero (EE | CS | CE Student)"
          description={
            <>
              Hello there! I'm a Los Angeles-based engineer/developer,
              <br />
              currently studying at El Camino College.
              <br />
              While you're here feel free to click these blocks.
            </>
          }
          image="profile.jpeg"
          imgalt="my face LOL why not work tho?"
          imgstyle={{
            width: 100,
            height: 100,
            borderRadius: 8,
            marginLeft: '0.5rem',
            objectFit: 'cover',
            alignSelf: 'flex-start',
          }}
        />
        <BentoItem
          title="Change Background"
          description="Click this block to cycle through LA background images"
          onClick={cycleBackgroundImage}
          style={{ cursor: 'pointer' }}
        />
        <BentoItem
          image="cookie2.gif"
          imgalt="Cookie Clicker cookie (no work ;w;)"
          imgstyle={{
            width: 60,
            height: 60,
            borderRadius: 8,
            marginLeft: '0.5rem',
            objectFit: 'contain',
            alignSelf: 'flex-start',
          }}
          title={
            <span style={{ fontFamily: "'Oleo Script', cursive", fontSize: 24 }}>
              Cookie Clicker
            </span>
          }
          description={
            <div style={{ fontFamily: "'Oleo Script', cursive", fontSize: 24, marginBottom: 8 }}>
              🍪 Cookies: {cookies}
            </div>
          }
          onClick={handleCookieClick}
          style={{ cursor: 'pointer' }}
        />
        <BentoItem
          title="About Me"
          description={
            <>
              As a versatile engineer and developer, I specialize in multiple areas,
              <br /> primarily electrical, computer, and software engineering.
              <br /> Through my passion for engineering and science, I have gained a variety of skills.
              <br /> I invite you to look at my projects and skill sets.
            </>
          }
        />
        <BentoItem
          image="github.png"
          imgalt="GitHub kitty cat >w< (img no work ;W;)"
          imgstyle={{
            width: 60,
            height: 60,
            borderRadius: 8,
            marginLeft: '0.5rem',
            objectFit: 'contain',
            alignSelf: 'flex-start',
          }}
          title="GitHub"
          description={<>See all my projects <br /> on my GitHub!</>}
          link="https://github.com/Juan-V-Tech"
        />
        <BentoItem
          image="linkedin.png"
          imgalt="LinkedIn logo (also no work ;w;)"
          imgstyle={{
            width: 60,
            height: 60,
            borderRadius: 8,
            marginLeft: '0.5rem',
            objectFit: 'contain',
            alignSelf: 'flex-start',
          }}
          title="LinkedIn"
          description={<>Visit my profile on LinkedIn!<br /> Feel free to connect!</>}
          link="https://www.linkedin.com/in/juan-ventura-romero/"
        />
        <BentoItem
          title="Skills"
          description="Frameworks, Languages, Programs, etc. Click to see what I can do!"
          image={skillsImages[skillsIndex].src}
          imgalt={skillsImages[skillsIndex].alt}
          imgstyle={{
            width: 60,
            height: 60,
            borderRadius: 8,
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto',
          }}
          onClick={handleSkillsClick}
          style={{ cursor: 'pointer' }}
        />
        <BentoItem
          title="Roller Coaster Physics Simulator"
          description={
            <>
              A physics simulator for a loop-de-loop roller coaster.
              <br />
              Built with VPython.
              <br /> 
              Click to see open the Repository!
            </>
          }
          image="family-guy.gif"
          imgalt="Family Guy roller coaster gif (no work ;w;)"
          imgstyle={{
            width: 80,
            height: 80,
            borderRadius: 8,
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto',
          }}
          link="https://github.com/Juan-V-Tech/roller-coaster-loop"
        />
        <BentoItem
          title="Hobbies"
          description={
            <>
              Besides schooling and work I spend my time <br />
              building mechanical keyboards, skateboarding, and playing the eletric guitar!
            </>
          }
        />
        <BentoItem
          title="Resume"
          description={
            <>
              Check out my resume <br />
              to see my experience and more of my skills!
            </>
          }
          link="/juan-ventura-romero.pdf"
        />
      </BentoGrid>
    </ThemeProvider>
  );
};

export default App;
