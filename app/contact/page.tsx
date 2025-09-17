// pages/contact.tsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-500 to-lime-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Have questions, feedback, or need help? We’d love to hear from you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Whether you have a question about products, pricing, or anything
            else, our team is ready to answer all your questions.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-green-600" />
              <span className="text-gray-700">+234 812 345 6789</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-green-600" />
              <span className="text-gray-700">support@shopease.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-green-600" />
              <span className="text-gray-700">
                123 Market Street, Lagos, Nigeria
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.679216319363!2d3.379205514758223!3d6.524379324124998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b4d5f71f7b3%3A0xa0f8f3d68a87c4b!2sLagos!5e0!3m2!1sen!2sng!4v1678625243874!5m2!1sen!2sng"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="border-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
