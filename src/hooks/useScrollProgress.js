import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const useScrollProgress = (threshold = 0.5) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  // Card fades in as it enters, fades out as it leaves
  const cardOpacity = useTransform(
    scrollYProgress,
    [0, threshold, 1 - threshold, 1],
    [0, 1, 1, 0]
  );
  
  // Optional: subtle scale effect
  const cardScale = useTransform(
    scrollYProgress,
    [0, threshold, 1 - threshold, 1],
    [0.8, 1, 1, 0.8]
  );
  
  // Optional: y movement
  const cardY = useTransform(
    scrollYProgress,
    [0, threshold, 1 - threshold, 1],
    [50, 0, 0, -50]
  );
  const headerOpacity = useTransform(scrollYProgress, [0.45, 1], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0.45, 1], [1, 0.92]);
  const headerY = useTransform(scrollYProgress, [0.45, 1], [0, -30]);

  return { ref, cardOpacity, cardScale, cardY, headerOpacity, headerScale, headerY };
};