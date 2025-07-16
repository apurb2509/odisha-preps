
import React from 'react';
import { Book, Calculator, Globe, Brain, FileCheck, Award, BookOpen, Tv, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

const CourseCard = ({ title, description, icon, image }: CourseCardProps) => {
  return (
    <div className="neon-card group cursor-pointer relative overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <div className="flex flex-col items-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-neon-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-glow transition-all">
          {title}
        </h3>
        <p className="text-light-gray text-center">
          {description}
        </p>
        <Button className="mt-4 bg-transparent border border-neon-purple/50 hover:bg-neon-purple/20 text-white">
          View Courses
        </Button>
      </div>
    </div>
  );
};

const CourseGrid = () => {
  const courses = [
    {
      title: "Full Courses",
      description: "Comprehensive modules covering all subjects for OPSC and OSSC exams.",
      icon: <BookOpen className="h-8 w-8 text-neon-purple" />,
      image: "https://placekitten.com/600/400" // Replace with actual image
    },
    {
      title: "Optional Courses",
      description: "Specialized subjects for higher scores in mains examination.",
      icon: <GraduationCap className="h-8 w-8 text-neon-purple" />,
      image: "https://placekitten.com/601/401" // Replace with actual image
    },
    {
      title: "Current Affairs",
      description: "Stay updated with the latest state, national, and international events.",
      icon: <Globe className="h-8 w-8 text-neon-purple" />,
      image: "https://placekitten.com/602/402" // Replace with actual image
    },
    {
      title: "Test Series",
      description: "Practice with exam-like questions and timed assessments.",
      icon: <FileCheck className="h-8 w-8 text-neon-purple" />,
      image: "https://placekitten.com/603/403" // Replace with actual image
    },
    {
      title: "Modular Courses",
      description: "Topic-focused modules for targeted preparation.",
      icon: <Book className="h-8 w-8 text-neon-purple" />,
      image: "https://placekitten.com/604/404" // Replace with actual image
    },
    {
      title: "Free Resources",
      description: "Access free study materials, daily updates, and guidance.",
      icon: <Tv className="h-8 w-8 text-neon-purple" />,
      image: "https://placekitten.com/605/405" // Replace with actual image
    },
  ];

  return (
    <section id="courses" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-neon-text text-glow">
            Start Your Preparation Today
          </h2>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Access structured courses and practice modules tailored for Odisha-based competitive exams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              icon={course.icon}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
