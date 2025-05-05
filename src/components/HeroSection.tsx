
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Design element in the top right corner */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-70">
        <div className="w-full h-full rounded-full bg-neon-purple/10 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-3/4 h-3/4 rounded-full bg-neon-purple/15 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1/2 h-1/2 rounded-full bg-neon-purple/20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-purple-glow opacity-50"></div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Animated "Odisha Preps" logo */}
          <div className="mb-8 animate-[scale_3s_ease-in-out_infinite]">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-purple to-purple-400 bg-clip-text text-transparent">
              Odisha Preps
            </h2>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-glow">
            <span className="inline-block mr-2">Best</span>
            <span className="text-neon-purple animate-neon-text inline-block mr-2">Companion</span>
            <span className="inline-block">For Your Preparation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-light-gray mb-12 max-w-2xl bg-gradient-to-r from-purple-300/20 to-pink-300/20 p-4 rounded-lg backdrop-blur-sm">
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
          
          <Button className="neon-button group text-lg py-6 px-8 bg-gradient-to-r from-purple-600/50 to-pink-600/50 hover:from-purple-600/70 hover:to-pink-600/70">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Additional gradient overlays */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-neon-purple/5 to-transparent"></div>
      <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-neon-purple/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/4 w-40 h-40 rounded-full bg-neon-purple/10 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
