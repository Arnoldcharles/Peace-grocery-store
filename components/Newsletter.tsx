"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      // Later: hook into Mailchimp, Firebase, or backend
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-green-600 to-green-400 py-12 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-2 text-green-100">
          Get the latest deals, discounts, and fresh grocery updates straight to
          your inbox.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full sm:w-2/3 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="mt-6 text-lg font-medium text-green-50">
            🎉 Thank you for subscribing!
          </p>
        )}
      </motion.div>
    </section>
  );
}
