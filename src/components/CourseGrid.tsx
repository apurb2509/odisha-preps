
import React from 'react';
import { Book, Calculator, Globe, Brain, FileCheck, Award } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CourseCard = ({ title, description, icon }: CourseCardProps) => {
  return (
    <div className="neon-card group cursor-pointer">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-neon-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-glow transition-all">
          {title}
        </h3>
        <p className="text-light-gray text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

const CourseGrid = () => {
  const courses = [
    {
      title: "General Studies",
      description: "Comprehensive modules covering history, polity, geography, and economics.",
      icon: <Book className="h-8 w-8 text-neon-purple" />
    },
    {
      title: "Odia Language",
      description: "Master grammar, comprehension, and writing skills in Odia.",
      icon: <Globe className="h-8 w-8 text-neon-purple" />
    },
    {
      title: "Quantitative Aptitude",
      description: "Sharpen your mathematical skills and problem-solving abilities.",
      icon: <Calculator className="h-8 w-8 text-neon-purple" />
    },
    {
      title: "Current Affairs",
      description: "Stay updated with the latest state, national, and international events.",
      icon: <Globe className="h-8 w-8 text-neon-purple" />
    },
    {
      title: "Reasoning",
      description: "Develop logical thinking and analytical reasoning skills.",
      icon: <Brain className="h-8 w-8 text-neon-purple" />
    },
    {
      title: "Mock Tests",
      description: "Practice with exam-like questions and timed assessments.",
      icon: <FileCheck className="h-8 w-8 text-neon-purple" />
    },
  ];

  return (
    <section id="courses" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-neon-text text-glow">
            Start Your Preparation with the Best
          </h2>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Access structured courses and practice modules tailored for Odisha-based exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              icon={course.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
