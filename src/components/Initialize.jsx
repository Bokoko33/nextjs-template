'use client';
import { useEffect } from 'react';
import { defineViewportUnits } from '~/libs/viewportUnits';

export const Initialize = () => {
  useEffect(() => {
    console.log('init');

    // Re-calcurate 1vh for menu in iOS Safari
    window.addEventListener('resize', defineViewportUnits);
    // Make sure that defineViewportUnits runs after new viewport has been applied
    const timeoutId = setTimeout(defineViewportUnits);

    return () => {
      window.removeEventListener('resize', defineViewportUnits);
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
};
