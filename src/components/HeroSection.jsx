import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'motion/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HeroSection = () => {
  const ref = useScrollReveal();
  const name = "Mehrnaz Sadroleslami".split(" ");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.7], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 0.65], [1, 0.85]);

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        pt: { xs: 16, md: 20 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: '680px',
            mx: { xs: 'auto', md: '0' },
            ml: { xs: 'auto', md: 8 }
          }}
        >
          <motion.div
            style={{
              opacity,
              y,
              scale,
              originX: 0,
              originY: 0.5,
            }}
          >
            {name.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.0,
                  delay: index * 0.22,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  display: 'inline-block',
                  marginRight: index === 0 ? '0.55em' : '0'
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.1rem', md: '2.9rem' },
                    fontWeight: 200,
                    letterSpacing: '-0.02em',
                    color: '#ffffff',
                    fontFamily: 'Space Grotesk, system-ui, sans-serif',
                    display: 'inline-block',
                  }}
                >
                  {word}
                </Typography>
              </motion.span>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;