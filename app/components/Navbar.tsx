"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm text-dark'
          : 'bg-transparent text-light border-b border-gray-300 border-opacity-40'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/"
            className={`text-2xl font-heading font-bold ${
              isScrolled ? 'text-primary' : 'text-light'
            }`}
          >
            AINAS
          </Link>
        </motion.div>

        {/* Nav Links with Icons */}
        <motion.div
          className="flex space-x-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/"
            className={`nav-link ${isScrolled ? 'text-dark' : 'text-light'}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`nav-link ${isScrolled ? 'text-dark' : 'text-light'}`}
          >
            About
          </Link>
          <Link
            href="/impact"
            className={`nav-link ${isScrolled ? 'text-dark' : 'text-light'}`}
          >
            Impact
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${isScrolled ? 'text-dark' : 'text-light'}`}
          >
            Contact
          </Link>
        </motion.div>
      </nav>
    </motion.header>
  );
}