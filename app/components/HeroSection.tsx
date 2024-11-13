'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6 drop-shadow-lg">
          Welcome to AINAS
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-light mb-8">
          Empowering African communities with sustainable, nature-based solutions for a greener and more prosperous future.
        </p>

        {/* Call-to-Action Button */}
        <Link
          href="/about"
          className="inline-block px-6 py-3 bg-primary text-dark font-semibold rounded-full shadow-lg hover:bg-secondary transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
    </motion.section>
  );
}
