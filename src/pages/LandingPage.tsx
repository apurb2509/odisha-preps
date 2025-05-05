
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cube = () => {
  return (
    <div className="perspective-1000 mx-auto mb-12">
      <div className="cube animate-rotate-cube">
        <div className="cube-face front">OP</div>
        <div className="cube-face back">Success</div>
        <div className="cube-face left">Learn</div>
        <div className="cube-face right">Prepare</div>
        <div className="cube-face top">Study</div>
        <div className="cube-face bottom">Excel</div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    
    const taglineTimer = setTimeout(() => {
      if (taglineRef.current) {
        taglineRef.current.classList.add('animate-fade-in');
      }
    }, 500);

    const subtitleTimer = setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in');
      }
    }, 1000);

    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(subtitleTimer);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-hidden relative">
      <div className="absolute inset-0 bg-purple-glow bg-fixed opacity-20 z-0" />
      
      <div className="geometric-mesh absolute inset-0 z-0 opacity-30" />
      
      <div className="flex flex-col items-center justify-center h-screen px-4 z-10 relative">
        <Cube />
        
        <h1 
          ref={titleRef} 
          className="text-6xl md:text-7xl font-bold mb-4 opacity-0 animate-neon-text text-glow"
        >
          Odisha Preps
        </h1>
        
        <p 
          ref={taglineRef} 
          className="text-xl md:text-2xl text-light-gray mb-6 opacity-0"
        >
          Learn. Prepare. Succeed with Odisha Preps.
        </p>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-neon-purple mb-10 opacity-0 max-w-xl text-center"
        >
          Your ultimate companion for OSSC, OPSC, and other Odisha competitive exams
        </p>
        
        <Button 
          className="neon-button group text-lg py-6 px-8 transition-all duration-300 shadow-neon-glow hover:scale-105"
          onClick={() => navigate('/main')}
        >
          Explore
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
