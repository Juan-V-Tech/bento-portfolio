import React, { useState, useEffect } from 'react';

const PageTransition = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const transitionStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.95)',
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    willChange: 'transform, opacity',
  };

  return (
    <div style={transitionStyle}>
      {children}
    </div>
  );
};

export default PageTransition;
