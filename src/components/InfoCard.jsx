import React from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(24, 24, 27, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    borderColor: 'rgba(20, 240, 200, 0.3)',
    transform: 'translateY(-4px)',
  },
}));

const InfoCard = ({ label, title, subtitle }) => {
  return (
    <StyledPaper elevation={0}>
      <Typography
        variant="caption"
        sx={{
          color: '#14f0c8',
          fontSize: '0.75rem',
          fontFamily: 'monospace',
          mb: 1,
          display: 'block',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          mb: 0.5,
          color: 'white',
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body2"
          sx={{
            color: '#a1a1aa',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </StyledPaper>
  );
};

export default InfoCard;