
import React from 'react';
import Clock from './Clock';
import { Button } from '@/components/ui/button';
import { User, UserPlus } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-neon-purple/20 border border-neon-purple flex items-center justify-center animate-glow-pulse">
              <span className="text-xl font-bold text-white">OP</span>
            </div>
          </a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'Courses', 'Contact', 'FAQ'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Clock />
          </div>
          <div className="flex space-x-2">
            <Button className="neon-button" variant="ghost">
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Button>
            <Button className="neon-button">
              <UserPlus className="mr-2 h-4 w-4" />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
