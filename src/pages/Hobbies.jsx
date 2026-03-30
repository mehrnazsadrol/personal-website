import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { CONTAINER_VARIANTS, CARD_VARIANTS, ITEM_VARIANTS } from '../constants/motion';
import { motion } from 'framer-motion';
import { HOBBIES } from '../constants/ui';

const Hobbies = () => {
  const { ref, headerOpacity, headerScale, headerY } = useScrollProgress();

  return (
    <Box
      ref={ref}
      component="section"
      id="hobbies"
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
          <Box sx={{ maxWidth: '768px', mb: { xs: 6, md: 8 } }}>
            <motion.div variants={ITEM_VARIANTS}>
              <Typography variant="h2" sx={{ fontSize: { xs: '3rem', md: '4rem' }, mb: 3 }}>
                Beyond the Screen
              </Typography>
            </motion.div>
            <motion.div variants={ITEM_VARIANTS}>
              <Typography variant="body1" sx={{ fontSize: { xs: '1.125rem', md: '1.25rem' }, color: '#a1a1aa', mb: 4 }}>
                When I'm not coding, I love spending time outdoors and staying active.
                These activities help me stay balanced, creative, and energized.
              </Typography>
            </motion.div>
          </Box>

          <Stack spacing={6}>
            {HOBBIES.map((hobby, index) => (
              <motion.div key={index} variants={CARD_VARIANTS}>
                <Typography key={index} variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, color: '#d4d4d8' }}>
                  {hobby}
                </Typography>
              </motion.div>
            ))}

          </Stack>
        </motion.div >
      </Container >
    </Box >
  );
};

export default Hobbies;