import React, { useState, useEffect } from 'react';
import '../../styles/scroll-to-top.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando el usuario hace scroll hacia abajo
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Mover hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div className="scroll-button" onClick={scrollToTop}>
          <i className="bi bi-arrow-up"></i> 
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
