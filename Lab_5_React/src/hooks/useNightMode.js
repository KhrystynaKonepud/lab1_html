import { useEffect } from 'react';

export const useNightMode = () => {
  useEffect(() => {
    const applyNightMode = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 21 || currentHour < 6) {
        document.body.classList.add('night-mode');
      } else {
        document.body.classList.remove('night-mode');
      }
    };

    applyNightMode();
    const interval = setInterval(applyNightMode, 3600000);

    return () => clearInterval(interval);
  }, []);
};
