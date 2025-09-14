import React, { useState, useEffect } from 'react';
import BentoGrid from '../components/BentoGrid';
import BentoItem from '../components/BentoItem';

const skillsImages = [
  { src: 'react.png', alt: 'React' },
  { src: 'jsIconGreen.svg', alt: 'Node.js' },
  { src: 'python-logo-only.svg', alt: 'Python' },
  { src: 'cpp_logo.png', alt: 'C++' },
  { src: 'vscode.png', alt: 'VS Code' },
];

const Home = ({ cycleBackgroundImage }) => {
  const [cookies, setCookies] = useState(0);
  const [skillsIndex, setSkillsIndex] = useState(0);

  const handleCookieClick = () => setCookies((c) => c + 1);
  const handleSkillsClick = () => setSkillsIndex((i) => (i + 1) % skillsImages.length);

  return (
    <>
      <BentoGrid>
        <BentoItem
          title="Juan Ventura-Romero (EE | CS | CE Student)"
          description={
            <>
              Los Angeles-based
              <br />
              engineer & developer studying
              <br />
              at El Camino College.
              <br />
              Click these blocks to explore!
            </>
          }
          image="JuanV.JPG"
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
              Versatile engineer specializing in electrical,
              <br />
              computer, and software engineering.
              <br />
              Explore my projects and skills.
              <br />
              click to learn more!
            </>
          }
          onClick={() => window.location.href = '/about'}
        />
        <BentoItem
          title="Skills"
          description={<>Languages, frameworks & tools. <br /> Click to explore!</>}
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
          title="Change Background"
          description="Cycle through LA background images"
          onClick={cycleBackgroundImage}
          style={{ cursor: 'pointer' }}
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
          description={<>View my projects<br />and repositories</>}
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
          description={<>Professional profile<br />Let's connect!</>}
          link="https://www.linkedin.com/in/juan-ventura-romero/"
        />
        <BentoItem
          image="Handshake_avatar_square.png"
          imgalt="Handshake Logo (no work ;w;)"
          imgstyle={{
            width: 60,
            height: 60,
            borderRadius: 8,
            marginLeft: '0.5rem',
            objectFit: 'contain',
            alignSelf: 'flex-start',
          }}
          title="Handshake"
          description={<>Follow me on Handshake!</>}
          link="https://elcamino.joinhandshake.com/profiles/juan-ventura-romero"
        />
        <BentoItem
          title="Roller Coaster Physics Simulator"
          description={
            <>
              Physics simulation of a loop-de-loop
              <br />
              roller coaster built with VPython.
              <br />
              Click to run online!
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
          link="https://glowscript.org/#/user/Juan%5fV%5fAyro/folder/MyPrograms/program/rollercoastersim"
        />
        <BentoItem
          title="Resume"
          description={
            <>
              View my experience,<br />
              education & skills
            </>
          }
          link="/Juan_Ventura_Resume_August_2025.pdf"
        />
      </BentoGrid>
    </>
  );
};

export default Home;
