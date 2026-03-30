import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Link,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';


const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(24, 24, 27, 0.7)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    borderColor: 'rgba(20, 240, 200, 0.3)',
    transform: 'translateY(-4px)',
    '& .project-title': {
      color: '#14f0c8',
    },
  },
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#14f0c8',
  fontSize: '0.7rem',
  letterSpacing: '0.1em',
  fontWeight: 500,
  fontFamily: 'monospace',
  padding: 0,
  marginBottom: theme.spacing(1.5),
  '& .MuiChip-label': {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const TechChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(39, 39, 42, 0.8)',
  color: '#d4d4d8',
  fontSize: '0.7rem',
  fontWeight: 500,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(20, 240, 200, 0.1)',
    borderColor: 'rgba(20, 240, 200, 0.3)',
  },
}));

const ProjectLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  color: '#14f0c8',
  fontSize: '0.875rem',
  fontWeight: 500,
  textDecoration: 'none',
  marginTop: 'auto',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: 'white',
  },
}));

const ProjectCard = ({ project }) => {
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
      <StyledCard elevation={0}>
        <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
          <CategoryChip label={project.category} size="small" />

          <Typography
            className="project-title"
            variant="h3"
            sx={{
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              fontWeight: 600,
              color: 'white',
              mb: 2,
              transition: 'color 0.3s ease',
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#a1a1aa',
              lineHeight: 1.7,
              mb: 3,
            }}
          >
            {project.description}
          </Typography>

          <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1} sx={{ mb: 3 }}>
            {project.technologies.map((tech, i) => (
              <TechChip key={i} label={tech} size="small" />
            ))}
          </Stack>

          {project.link && (
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
              <i className="fas fa-external-link-alt" style={{ fontSize: '0.75rem' }}></i>
            </ProjectLink>
          )}
        </CardContent>
      </StyledCard>
    </motion.div>
  );
};

export default ProjectCard;