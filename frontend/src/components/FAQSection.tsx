
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div 
      className={`mb-4 border border-neon-purple/30 rounded-lg overflow-hidden transition-all duration-300 ${
        isOpen ? 'shadow-neon-glow' : ''
      }`}
    >
      <button
        className="w-full text-left p-4 flex justify-between items-center bg-neon-purple/10"
        onClick={onClick}
      >
        <span className="font-medium text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-neon-purple" />
        ) : (
          <ChevronDown className="h-5 w-5 text-neon-purple" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 text-light-gray">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Odisha Preps?",
      answer: "Odisha Preps is a comprehensive educational platform designed specifically for students preparing for competitive exams in Odisha. We provide structured courses, practice materials, and resources tailored to various examinations conducted by OSSC, OPSC, OJEE, and other state-level bodies."
    },
    {
      question: "How do I access free content?",
      answer: "You can access our free content by navigating to the Free Resources section at the bottom of our homepage. These resources include daily practice questions, basic PDF notes, and selected video lessons. No registration is required for free content."
    },
    {
      question: "Is registration mandatory?",
      answer: "Registration is not mandatory to browse the website or access free resources. However, creating an account gives you access to premium content, personalized learning paths, progress tracking, and participation in live classes and mock tests."
    },
    {
      question: "Will mock tests be updated?",
      answer: "Yes, our mock tests are regularly updated to reflect the latest exam patterns and syllabus changes. We typically update our question banks monthly and add new mock tests before major examination seasons."
    },
    {
      question: "Are there daily classes?",
      answer: "Yes, we conduct daily live classes on specific subjects according to our monthly schedule. The live class schedule is posted at the beginning of each month and registered users receive notifications before classes start."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-neon-text text-glow">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-light-gray">
            Find answers to common questions about Odisha Preps.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
