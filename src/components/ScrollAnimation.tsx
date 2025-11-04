import React, { useState, useEffect, useRef, ReactNode } from 'react';

// Assume you have these images in your public folder
const groomImage = '/br3.png';
const brideImage = '/gr3.png';

interface ScrollAnimationProps {
  children: ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!sectionRef.current) return;

    const { top, height } = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const scrollableDistance = height - windowHeight;

    if (top <= 0 && top >= -scrollableDistance) {
      const scrollProgress = -top / scrollableDistance;
      setProgress(Math.min(1, scrollProgress));
    } else if (top > 0) {
      setProgress(0);
    } else {
      setProgress(1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- Dynamic Styles for Animation ---
  const brideStyle = {
    transform: `translate(${progress * 34}vw, ${progress * 25}vh) scale(${1 - progress * 0.5})`,
  };
  
  const groomStyle = {
    transform: `translate(${-progress * 34}vw, ${progress * 25}vh) scale(${1 - progress * 0.5})`,
  };

  return (
    <section ref={sectionRef} className="relative">
      
      {/* This sticky container holds the images.
        FIXED: Added z-20 to ensure this layer is on top.
        FIXED: Added pointer-events-none so you can interact with the content behind it.
      */}
      <div className="sticky top-0 h-screen z-20 pointer-events-none">
        <div style={brideStyle} className="absolute top-0 left-0 p-10 transition-transform duration-100 ease-linear">
          <img src={brideImage} alt="Bride" className="max-h-[45vh] w-auto object-contain" />
        </div>
        <div style={groomStyle} className="absolute top-0 right-0 p-10 transition-transform duration-100 ease-linear">
          <img src={groomImage} alt="Groom" className="max-h-[45vh] w-auto object-contain" />
        </div>
      </div>

      {/* This container holds the actual content (the About section).
        FIXED: Added a lower z-index (z-10) to ensure it's behind the animation layer.
      */}
      <div className="relative z-10 -mt-[100vh]">
        {children}
      </div>
    </section>
  );
};

export default ScrollAnimation;