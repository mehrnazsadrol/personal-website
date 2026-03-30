// src/hooks/useVanta.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Correct import - no .js extension
import FOG from 'vanta/dist/vanta.fog.min';

const useVanta = () => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current || effectRef.current) return;

    effectRef.current = FOG({
      el: vantaRef.current,
      THREE: THREE,
      highlightColor: 0x14f0c8,
      midtoneColor:   0x6366f1,
      lowlightColor:  0x1e3a8a,
      baseColor:      0x0a0a0a,
      blurFactor: 0.70,
      speed: 0.75,
      zoom: 0.74,
      minHeight: 200,
      minWidth: 200,
    });

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return vantaRef;
};

export default useVanta;