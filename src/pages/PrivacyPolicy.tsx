import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white px-6 py-12 flex items-center justify-center">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-4xl font-bold neon-text">Privacy Policy</h1>

        <div className="bg-black bg-opacity-40 border border-purple-700 shadow-xl rounded-2xl p-6 text-left space-y-4">
          <p className="text-gray-300">
            We collect minimal user data to ensure personalized support. Data collected includes names, emails, contact numbers, and academic preferences.
          </p>
          <p className="text-gray-400">
            We do not sell user data. All data is protected and used only for academic communication.
          </p>
          <p className="text-sm text-gray-500 pt-2">Last updated: July 2025</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
