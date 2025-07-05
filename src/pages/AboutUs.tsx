import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full space-y-10">
        <h1 className="text-4xl font-bold text-center neon-text">About Odisha Preps</h1>

        {/* Company History */}
        <div className="bg-black bg-opacity-40 border border-purple-700 shadow-xl rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-white mb-3">Company History and Mission</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Odisha Preps was founded to address the unique challenges faced by OPSC and UPSC aspirants in Odisha. Our mission is to make civil services preparation accessible, affordable, and personalized for every dedicated aspirant. We offer a scientifically structured, mentorship-driven learning approach designed by educators who’ve cleared Mains/Interviews of OPSC and UPSC.
          </p>
        </div>

        {/* Team Info */}
        <div className="bg-black bg-opacity-40 border border-purple-700 shadow-xl rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-white mb-3">Team Information</h2>
          <p className="text-gray-300 text-base leading-relaxed mb-2">
            Our educator and mentor panel includes individuals who have appeared in OPSC and UPSC Mains/Interviews, bringing firsthand exam experience:
          </p>
          <ul className="list-disc list-inside text-left text-gray-300 ml-4 space-y-1">
            <li>Amit Mohapatra</li>
            <li>Sumit</li>
            <li>Gayatree Pathy</li>
            <li>Manoja Rout</li>
            <li>Leema Mishra</li>
            <li>Adyasha Nanda and others</li>
          </ul>
          <p className="mt-3 text-gray-300">
            <strong className="text-white">Our Student Support Head:</strong> Rajalaxmi Singh
          </p>
        </div>

        {/* Core Values and Vision */}
        <div className="bg-black bg-opacity-40 border border-purple-700 shadow-xl rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-white mb-3">Core Values and Vision</h2>
          <p className="text-lg font-semibold text-gray-200 mb-2">Core Values:</p>
          <ul className="list-disc list-inside text-left text-gray-300 ml-4 space-y-1">
            <li>Aspirant-first approach</li>
            <li>Empathy and support</li>
            <li>Affordability without compromise</li>
            <li>Scientific and strategic teaching</li>
          </ul>
          <p className="text-lg font-semibold text-gray-200 mt-5">Vision:</p>
          <p className="text-gray-300 leading-relaxed">
            To be Odisha’s most trusted and effective civil services preparation platform.
          </p>
        </div>

        {/* Unique Features */}
        <div className="bg-black bg-opacity-40 border border-purple-700 shadow-xl rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-white mb-3">What Makes Us Unique</h2>
          <ul className="list-disc list-inside text-left text-gray-300 ml-4 space-y-1">
            <li>1-1 Personal Mentorship with exam-qualified mentors</li>
            <li>Live Answer Writing Sessions (LAWS)</li>
            <li>Integrated roadmap for Prelims, Mains & Interview</li>
            <li>Affordable EMI options and mobile-first learning</li>
            <li>Support for academic and non-academic issues like anxiety and time management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
