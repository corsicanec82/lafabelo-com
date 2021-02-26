import { useState, useEffect } from 'react';
import { Transition } from 'react-spring/renderprops.cjs.js';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener('scroll', handleVisibleScroll);
    return () => window.removeEventListener('scroll', handleVisibleScroll);
  });

  const handleScrollTo = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Transition
      items={isVisible}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {(show) => show && ((props) => (
        <a href="#top" className="back-to-top" style={{ ...props }} onClick={handleScrollTo}>
          <i className="icofont-simple-up" />
        </a>
      ))}
    </Transition>
  );
};

export default BackToTopButton;
