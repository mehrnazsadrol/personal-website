import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;