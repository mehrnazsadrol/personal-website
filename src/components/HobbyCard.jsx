// components/HobbyCard.jsx
import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(24, 24, 27, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    borderColor: 'rgba(20, 240, 200, 0.3)',
    transform: 'translateY(-4px)',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '320px',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
  [theme.breakpoints.down('sm')]: {
    height: '240px',
  },
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const ImageWrapper = styled(Box)({
  overflow: 'hidden',
  position: 'relative',
});

const HobbyCard = ({ image, alt, title, description }) => {
  return (
    <StyledCard elevation={0}>
      <ImageWrapper>
        <StyledCardMedia
          component="img"
          image={image}
          alt={alt}
        />
      </ImageWrapper>
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 600,
            mb: 1.5,
            color: 'white',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#a1a1aa',
            lineHeight: 1.7,
            fontSize: '0.95rem',
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default HobbyCard;