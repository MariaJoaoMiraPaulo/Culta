import { useEffect, useState } from 'react';

const useLogoSlidedownAnimation = () => {
  const [isSticky, setIsLogoStikcy] = useState(false);

  useEffect(() => {
    const calculateLogoPosition = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 20) {
        setIsLogoStikcy(true);
      }
      if (scrollTop === 0) {
        setIsLogoStikcy(false);
      }
    };

    window.addEventListener('scroll', calculateLogoPosition);

    return () => {
      window.removeEventListener('scroll', calculateLogoPosition);
    };
  });

  return { isLogoSticky: isSticky };
};

export default useLogoSlidedownAnimation;
