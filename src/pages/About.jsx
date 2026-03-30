import React from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import InfoCard from '../components/InfoCard';
import { ABOUT_ME_CARDS, ABOUT_ME_TEXT } from '../constants/ui';
import { ITEM_VARIANTS, CARD_VARIANTS, CONTAINER_VARIANTS } from '../constants/motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

const About = () => {
  const {ref, headerOpacity, headerScale, headerY } = useScrollProgress();



  return (
    <Box
      ref={ref}
      component="section"
      id="about"
      className="section stagger"
      sx={{
        minHeight: '100vh',
        pt: { xs: '96px', md: '120px' },
        pb: { xs: '80px', md: '120px' },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          style={{ 
            opacity: headerOpacity, 
            scale: headerScale, 
            y: headerY 
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-80px' }}
          variants={CONTAINER_VARIANTS}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={10} lg={8}>
              
              <motion.div variants={ITEM_VARIANTS}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '3rem', sm: '3.5rem', md: '4rem' },
                    mb: 6,
                  }}
                >
                  About me
                </Typography>
              </motion.div>

              <Stack spacing={4}>
                {ABOUT_ME_TEXT.map((text, index) => (
                  <motion.div key={index} variants={ITEM_VARIANTS}>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontSize: '1.125rem', 
                        lineHeight: 1.8, 
                        color: '#d4d4d8' 
                      }}
                    >
                      {text}
                    </Typography>
                  </motion.div>
                ))}
              </Stack>

              <Grid container spacing={3} sx={{ mt: 6 }}>
                {ABOUT_ME_CARDS.map((card, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <motion.div variants={CARD_VARIANTS}>
                      <InfoCard
                        label={card.label}
                        title={card.title}
                        subtitle={card.subtitle}
                      />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;