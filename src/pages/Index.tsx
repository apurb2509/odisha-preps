
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Landing from '@/components/Landing';
import CourseGrid from '@/components/CourseGrid';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-dark-texture min-h-screen">
      <Header />
      <div className="pt-16"> {/* Add padding to account for fixed header height */}
        <Landing />
        <div className="animate-on-scroll opacity-0">
          <CourseGrid />
        </div>
        <div className="animate-on-scroll opacity-0">
          <FAQSection />
        </div>
        <div className="animate-on-scroll opacity-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
