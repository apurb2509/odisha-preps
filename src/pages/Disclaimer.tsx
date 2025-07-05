import React from "react";

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white px-6 py-12 flex items-center justify-center">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-4xl font-bold neon-text">Disclaimer</h1>

        <div className="bg-black bg-opacity-40 border border-purple-700 shadow-xl rounded-2xl p-6 text-left space-y-4">
          <p className="text-gray-300">
            Odisha Preps is an independent educational platform and is not affiliated with the OPSC or UPSC.
          </p>
          <p className="text-gray-400">
            Course content is for educational purposes only and does not guarantee selection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
