import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import { EXPERIENCES } from '../constants/ui';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ITEM_VARIANTS, CONTAINER_VARIANTS } from '../constants/motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Experience = () => {
  const { ref, headerOpacity, headerScale, headerY } = useScrollProgress();

  return (
    <Box
      ref={ref}
      component="section"
      id="experience"
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
          variants={CONTAINER_VARIANTS}
          style={{
            opacity: headerOpacity,
            scale: headerScale,
            y: headerY
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-80px' }}
        >
          <Box sx={{ maxWidth: '768px', mb: { xs: 6, md: 8 } }}>
            <motion.div variants={ITEM_VARIANTS}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '3rem', md: '4rem' },
                  mb: 3
                }}
              >
                Experience
              </Typography>
            </motion.div>
            <motion.div variants={ITEM_VARIANTS}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  color: '#a1a1aa'
                }}
              >
                My professional journey in software development, from enterprise systems to impactful agritech solutions.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        <Stack spacing={6}>
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard experience={exp} key={index} />
          ))}
        </Stack>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: '#71717a' }}>
              Additional experience includes other research assistant roles, TA/grader roles,
              student leadership positions, and iOS development.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;