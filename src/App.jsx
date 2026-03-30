import { StrictMode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Background from './components/Background';
import Home from './pages/Home';
import { theme } from './constants/index';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Background />
        <SmoothScroll />
        <Home />
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;