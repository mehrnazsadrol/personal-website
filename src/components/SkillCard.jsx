import React from 'react';
import {
  Typography,
  Chip,
  Stack,
  Box,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

const SkillCategory = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(24, 24, 27, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  padding: theme.spacing(4),
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(99, 102, 241, 0.3)',
    transform: 'translateY(-4px)',
  },
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(39, 39, 42, 0.8)',
  color: '#d4d4d8',
  fontSize: '0.875rem',
  fontWeight: 500,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '8px 0',
  '&:hover': {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderColor: 'rgba(99, 102, 241, 0.3)',
  },
}));

const SkillCard = ({ skill, index }) => {
  const { ref, cardOpacity, cardScale, cardY } = useScrollProgress(0.3);
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
      <Grid item xs={12} md={6} key={`skill-card-${index}`}>
        <SkillCategory className='card'>
          <Typography variant='h3' sx={{ fontSize: '1.5rem', mb: 3, pb: 2, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            {skill.title}
          </Typography>
          <Stack direction='row' flexWrap='wrap' useFlexGap spacing={1.5}>
            {skill.items.map((skill, i) => (
              <SkillChip key={i} label={skill} />
            ))}
          </Stack>
        </SkillCategory>
      </Grid>
    </motion.div>
  );
};

export default SkillCard;