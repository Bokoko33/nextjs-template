import { useState, useEffect } from 'react';
import { MQ } from '~/libs/constants';

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = (e) => {
      setIsMobile(e.matches);
    };

    const mql = window.matchMedia(MQ);
    mql.addEventListener('change', updateIsMobile);
    updateIsMobile(mql);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return isMobile;
};
