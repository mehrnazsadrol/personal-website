// components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Container, Box, Button } from '@mui/material';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{
        backgroundColor: 'rgba(10, 10, 12, 0.75)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ py: 2.5, justifyContent: 'space-between', minHeight: 'auto' }}>
          
          {/* Logo - goes to Home */}
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              color: 'white',
              fontSize: '1.55rem',
              fontWeight: 500,
              letterSpacing: '-0.02em',
            }}
          >
            Mehrnaz
          </Link>

          {/* Only Contact Button */}
          <Button
            href="mailto:sadrolem@myumanitoba.ca"
            variant="outlined"
            sx={{
              px: 4,
              py: 1.2,
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.25)',
              borderRadius: '9999px',
              textTransform: 'none',
              '&:hover': {
                borderColor: '#14f0c8',
                color: '#14f0c8',
                backgroundColor: 'transparent',
              },
            }}
          >
            Get in touch
          </Button>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;