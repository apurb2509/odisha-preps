import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-4xl font-bold neon-text">Contact Us</h1>
        <p className="text-gray-300">Have questions or feedback? We'd love to hear from you.</p>

        {/* Contact Info Box */}
        <div className="text-left bg-black bg-opacity-40 p-6 rounded-2xl border border-purple-700 shadow-lg space-y-2">
          <p><strong>Business Address:</strong> [Need to Provide]</p>
          <p><strong>Phone Number:</strong> +91 63726 11728</p>
          <p><strong>Email Address:</strong> [Need to Provide]</p>
          <p><strong>Business Hours:</strong> 10:00 AM to 7:00 PM, Monday to Saturday</p>
        </div>

        {/* Contact Form */}
        <form className="bg-black bg-opacity-40 text-left p-6 rounded-2xl border border-purple-700 shadow-lg space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-white" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-white" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-white" htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-white" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-purple-700 hover:bg-purple-800 transition duration-200 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
