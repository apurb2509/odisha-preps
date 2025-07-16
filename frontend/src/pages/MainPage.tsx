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
    <div className="bg-black text-white min-h-screen">
      {/* Background overlay - now non-blocking */}
      <div
        className="fixed inset-0 geometric-mesh opacity-30 z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none', // 🔥 Fix: Allow scroll through this layer
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        <Header />

        {/* Scrollable Sections */}
        <div className="pt-16"> {/* Padding to offset fixed header */}
          <section id="hero" className="animate-on-scroll opacity-0 min-h-screen">
            <HeroSection />
          </section>

          <section id="courses" className="animate-on-scroll opacity-0">
            <CourseGrid />
          </section>

          <section id="featured" className="animate-on-scroll opacity-0">
            <FeaturedCourses />
          </section>

          <section id="download" className="animate-on-scroll opacity-0">
            <DownloadApp />
          </section>

          <section id="faq" className="animate-on-scroll opacity-0">
            <FAQSection />
          </section>

          <section id="footer" className="animate-on-scroll opacity-0">
            <Footer />
          </section>
        </div>
      </div>

      {/* Inline Fade-In Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default MainPage;