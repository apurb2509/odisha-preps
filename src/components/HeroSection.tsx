
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-glow">
            <span className="block">Best</span>
            <span className="text-neon-purple animate-neon-text">Companion</span>
            <span className="block">For Your Preparation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-light-gray mb-12 max-w-2xl">
            Empowering students across Odisha with comprehensive study materials, 
            practice tests, and expert guidance for all competitive exams.
          </p>
          
          <div className="w-40 h-40 mb-12">
            <img 
              src="/lovable-uploads/d1c303f6-86ef-4288-ace3-bbb9451161e7.png" 
              alt="Handshake" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
            />
          </div>
          
          <Button className="neon-button group text-lg py-6 px-8">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
