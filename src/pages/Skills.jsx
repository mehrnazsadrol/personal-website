import React from 'react';
import { Box, Container, Typography, Grid, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../constants/ui';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { CONTAINER_VARIANTS } from '../constants/motion';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';



const Skills = () => {
  const {ref, headerOpacity, headerScale, headerY } = useScrollProgress();



  return (
    <Box
      ref={ref}
      component='section'
      id='skills'
      className='section stagger'
      sx={{
        minHeight: '100vh',
        pt: { xs: '96px', md: '120px' },
        pb: { xs: '80px', md: '120px' },
        position: 'relative',
      }}
    >
      <Container maxWidth='lg'>
        <motion.div
          style={{ opacity: headerOpacity, scale: headerScale, y: headerY }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          variants={CONTAINER_VARIANTS}
        >
          <Box sx={{ maxWidth: '768px', mb: { xs: 6, md: 8 } }}>
            <Typography variant='h2' sx={{ fontSize: { xs: '3rem', md: '4rem' }, mb: 3 }}>
              Skills & Expertise
            </Typography>
            <Typography variant='body1' sx={{ fontSize: { xs: '1.125rem', md: '1.25rem' }, color: '#a1a1aa' }}>
              Technical skills I've developed through education, internships, research, and hands-on projects.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard skill={category} key={index} />
          ))}
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant='h3' sx={{ fontSize: '2rem', mb: 4 }}>
            Certifications
          </Typography>
          <Grid container spacing={2}>
            {CERTIFICATIONS.map((cert, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box sx={{ width: 8, height: 8, mt: 1.5, borderRadius: '50%', bgcolor: '#6366f1', flexShrink: 0 }} />
                  <Typography sx={{ color: '#d4d4d8' }}>{cert}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 8, maxWidth: '672px' }}>
          <Typography sx={{ color: '#a1a1aa', fontSize: '1.125rem', lineHeight: 1.7 }}>
            I'm continuously learning and expanding my skill set, particularly in areas like cloud architecture,
            AI/ML applications in agriculture, and modern frontend frameworks.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;