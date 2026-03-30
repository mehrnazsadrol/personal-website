import React from 'react';
import { Box } from '@mui/material';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Hobbies from './Hobbies';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <Box component="main" sx={{ overflowX: 'hidden', position: 'relative', zIndex: 1 }}>
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Hobbies />
    </Box>
  );
};

export default Home;