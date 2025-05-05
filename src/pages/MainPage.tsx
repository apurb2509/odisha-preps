
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import CourseGrid from '@/components/CourseGrid';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FeaturedCourses from '@/components/FeaturedCourses';
import DownloadApp from '@/components/DownloadApp';
import HeroSection from '@/components/HeroSection';

const MainPage = () => {
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
    <div className="bg-black">
      <div className="absolute inset-0 bg-fixed geometric-mesh opacity-30 z-0" />
      <Header />
      <div className="pt-16 relative z-10"> {/* Add padding to account for fixed header height */}
        <div className="animate-on-scroll opacity-0">
          <HeroSection />
        </div>
        <div className="animate-on-scroll opacity-0">
          <CourseGrid />
        </div>
        <div className="animate-on-scroll opacity-0">
          <FeaturedCourses />
        </div>
        <div className="animate-on-scroll opacity-0">
          <DownloadApp />
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

export default MainPage;
