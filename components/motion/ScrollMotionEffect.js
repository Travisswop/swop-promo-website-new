'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollMotionEffect = ({ children, effect, duration,className, delay }) => {
  useEffect(() => {
    console.log('Initializing AOS');
    AOS.init();
    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);
if(delay===undefined || delay===null){
  delay=0
}
  return (
    <div
      data-aos={effect}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-once={true}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollMotionEffect;
