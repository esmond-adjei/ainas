'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <motion.section
      className="relative flex flex-col justify-center h-[720px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 px-4 container mx-auto">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 drop-shadow-lg">
          Welcome to AINAS
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-light mb-8">
          Empowering African communities with sustainable, nature-based solutions for a greener and more prosperous future.
        </p>

        {/* Call-to-Action Button */}
        <div className=' p-2 rounded-full w-max space-x-2'>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-primary text-light hover:text-dark font-semibold rounded-full hover:bg-secondary transition-all duration-300"
          >
            Learn More
          </Link>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-secondary text-dark hover:text-light font-semibold rounded-full hover:bg-primary transition-all duration-300"
          >
            Become a member
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
