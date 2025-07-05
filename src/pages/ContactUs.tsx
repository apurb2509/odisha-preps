import React, { useState } from "react";
import axios from "axios";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      alert("✅ Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-4xl font-bold neon-text">Contact Us</h1>
        <p className="text-gray-300">Have questions or feedback? We'd love to hear from you.</p>

        {/* Contact Info Box */}
        <div className="text-left bg-black bg-opacity-40 p-6 rounded-2xl border border-purple-700 shadow-lg space-y-2">
          <p><strong>Business Address:</strong> [Will be provided soon]</p>
          <p><strong>Phone Number:</strong> +91 63726 11728</p>
          <p><strong>Email Address:</strong> [Will be provided soon]</p>
          <p><strong>Business Hours:</strong> 10:00 AM to 7:00 PM, Monday to Saturday</p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-black bg-opacity-40 text-left p-6 rounded-2xl border border-purple-700 shadow-lg space-y-4"
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 font-semibold text-white">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="+91 XXXXX XXXXX"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-white">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold text-white">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your message here..."
              required
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
