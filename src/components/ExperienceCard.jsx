import React from 'react';
import { Box, Grid, Typography, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(24, 24, 27, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  padding: theme.spacing(4),
  transition: 'all 0.3s ease',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

const TechChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(39, 39, 42, 0.8)',
  color: '#a1a1aa',
  fontSize: '0.7rem',
  fontWeight: 500,
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const ExperienceCard = ({ experience }) => {
  const { ref, cardOpacity, cardScale, cardY} = useScrollProgress(0.3);
  
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: cardOpacity,
        scale: cardScale,
        y: cardY,
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
    >
      <StyledCard>
        <Stack direction='column' spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#a1a1aa', mb: 0.5 }}>
              {experience.period}
            </Typography>
            <Typography sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 600, color: 'white', lineHeight: 1.3, mb: 0.5 }}>
              {experience.role}
            </Typography>
            <Typography sx={{ color: '#6366f1', fontWeight: 500 }}>
              {experience.company}
            </Typography>
            <Typography sx={{ color: '#71717a', fontSize: '0.875rem', mt: 0.5 }}>
              {experience.location}
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography sx={{ color: '#d4d4d8', lineHeight: 1.7, mb: 3, fontSize: '1rem' }}>
              {experience.description}
            </Typography>

            <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
              {experience.technologies.map((tech, i) => (
                <TechChip key={i} label={tech} size="small" />
              ))}
            </Stack>
          </Grid>
        </Stack>
      </StyledCard>
    </motion.div>
  );
};

export default ExperienceCard;