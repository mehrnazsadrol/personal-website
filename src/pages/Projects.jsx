import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants/ui';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { ITEM_VARIANTS, CONTAINER_VARIANTS } from '../constants/motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const Projects = () => {
  const { ref, headerOpacity, headerScale, headerY } = useScrollProgress();
  return (
    <Box
      ref={ref}
      component="section"
      id="projects"
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
          style={{ opacity: headerOpacity, scale: headerScale, y: headerY }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          variants={CONTAINER_VARIANTS}
        >

          <Box sx={{ maxWidth: '768px', mb: { xs: 6, md: 8 } }}>
            <motion.div variants={ITEM_VARIANTS}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '5rem' },
                  fontWeight: 600,
                  color: 'white',
                  mb: 3
                }}
              >
                Selected Projects
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
                A collection of academic, research, and professional projects that showcase my skills in full-stack development, mobile apps, and game development.
              </Typography>
            </motion.div>
          </Box>

          <Stack spacing={6}>
            {PROJECTS.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </Stack>


          <motion.div
            variants={ITEM_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
          >
            <Box sx={{ mt: 8, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: '#71717a' }}>
                More projects and details available upon request
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;