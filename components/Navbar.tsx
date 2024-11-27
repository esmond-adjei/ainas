"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CustomIcon from './CustomIcon';

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
          : 'bg-transparent text-light'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.nav 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className={`text-2xl font-heading font-bold ${
              isScrolled ? 'text-primary' : 'text-light'
            }`}
          >
            <CustomIcon 
              className="h-12 w-12 text-primary inline-block" 
              style={{fill: `${ isScrolled ? 'var(--primary-color)' : 'white'}`}} 
            />
            AINAS
          </Link>
        </div>

        {/* Nav Links with Icons */}
        <div className={`flex space-x-6  ${isScrolled ? 'text-dark' : 'text-light'}`}>
          <Link href="/" className='hover:text-primary duration-200'>Home</Link>
          <Link href="/about" className='hover:text-primary duration-200'>About</Link>
          <Link href="/impact" className='hover:text-primary duration-200'>Impact</Link>
          <Link href="/contact" className='hover:text-primary duration-200'>Contact</Link>
        </div>
      </motion.nav>
    </motion.header>
  );
}


// navbar version 2
export function NavbarV2() {

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 bg-white`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.nav 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className={`text-2xl font-heading font-bold`}
          >
            <CustomIcon 
              className="h-10 w-10 text-primary inline-block" 
              // style={{fill: `${ 'white'}`}} 
            />
            AINAS
          </Link>
        </div>

        {/* Nav Links with Icons */}
        <div className={`flex space-x-6`}>
          <Link href="/" className='hover:text-primary duration-200'>Home</Link>
          <Link href="/about" className='hover:text-primary duration-200'>About</Link>
          <Link href="/impact" className='hover:text-primary duration-200'>Impact</Link>
          <Link href="/contact" className='hover:text-primary duration-200'>Contact</Link>
        </div>
      </motion.nav>
    </motion.header>
  );
}