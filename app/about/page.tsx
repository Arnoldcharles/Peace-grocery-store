// pages/about.tsx
import React from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  const team = [
    {
      name: "Arnold Charles",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Marketing",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Michael Smith",
      role: "Lead Developer",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Emily Davis",
      role: "Customer Success Manager",
      img: "https://randomuser.me/api/portraits/women/72.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Learn more about who we are, what we do, and why we love serving you.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Welcome to <span className="font-semibold">ShopEase</span>, your
            number one source for all things fashion, electronics, and
            lifestyle. We're dedicated to giving you the very best of products,
            with a focus on quality, affordability, and customer service.
          </p>
          <p className="text-gray-700">
            Founded in 2025, ShopEase has come a long way from its beginnings as
            a small online store. When we first started, our passion for making
            shopping easier and more enjoyable drove us to start this platform.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
            alt="About us"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To provide high-quality products at unbeatable prices while
              ensuring an excellent shopping experience for our customers.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted and loved e-commerce platform, connecting
              millions of buyers with the products they need and love.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{member.role}</p>
              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                <a
                  href={member.twitter}
                  className="text-blue-400 hover:text-blue-500 transition"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href={member.linkedin}
                  className="text-blue-600 hover:text-blue-700 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href={member.instagram}
                  className="text-pink-500 hover:text-pink-600 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to start shopping?
        </h2>
        <p className="text-gray-600 mb-6">
          Discover amazing products and deals today.
        </p>
        <Link href="/shop">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
