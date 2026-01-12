import { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="scroll-indicator">
      <div className="scroll-indicator-icon" />
      <span style={{ color: '#ff1a1a', fontSize: '0.8rem' }}>Scroll</span>
    </div>
  );
};

export default ScrollIndicator;