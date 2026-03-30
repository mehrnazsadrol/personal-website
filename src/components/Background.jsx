import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const Background = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaInstance = null;

    const initVanta = () => {
      if (!window.VANTA || !vantaRef.current) return;

      vantaInstance = window.VANTA.FOG({
        el: vantaRef.current,
        THREE: window.THREE,
        highlightColor: 0x00d4ff,
        midtoneColor: 0x1e9cff,
        lowlightColor: 0x1a6ab3,
        baseColor: 0x010101,
        blurFactor: 0.74,
        speed: 0.65,
        zoom: 0.3,
        minHeight: 200,
        minWidth: 200
      });
    };

    const loadThree = () => {
      if (window.THREE) {
        loadVanta();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      script.async = true;
      script.onload = loadVanta;
      document.body.appendChild(script);
    };

    const loadVanta = () => {
      if (window.VANTA) {
        initVanta();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js';
      script.async = true;
      script.onload = initVanta;
      document.body.appendChild(script);
    };

    loadThree();

    const handleResize = () => {
      if (vantaInstance && vantaRef.current) {
        vantaInstance.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (vantaInstance) {
        vantaInstance.destroy();
      }
    };
  }, []);

  return (
    <Box
      ref={vantaRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.25,
      }}
    />
  );
};

export default Background;