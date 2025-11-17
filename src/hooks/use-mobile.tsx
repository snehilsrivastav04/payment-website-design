"use client";

import { useState, useEffect } from 'react';

export const useIsMobile = (maxWidth = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < maxWidth);
    };

    // Check on initial load
    checkScreenSize();

    // Add event listener for screen size changes
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [maxWidth]);

  return isMobile;
};
