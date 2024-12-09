'use client';

import { ROUTES } from '@/lib';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <motion.section
      className="relative flex flex-col justify-center h-[720px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/images/hero-bg.webp')` }}
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <motion.div 
        className="relative z-10 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 drop-shadow-lg">
        Promoting Sustainable Development of Africa
        </h1>
        <p className="text-lg md:text-xl text-light mb-8">
          Empowering African communities with sustainable, nature-based solutions for a greener and more prosperous future.
        </p>

        {/* Call-to-Action Button */}
        <div className='w-max space-x-2 rounded-full bg-white/50 p-2 backdrop-blur-md'>
          <Link
            href={ROUTES.about}
            className="inline-block active:scale-95 px-6 py-3 bg-primary text-light hover:text-dark font-semibold rounded-full hover:bg-secondary transition-all duration-300"
          >
            Learn More
          </Link>
          <Link
            href='#contact-us'
            className="inline-block active:scale-95 px-6 py-3 text-dark hover:text-light font-semibold rounded-full transition-all duration-300"
          >
            Get Involved
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}

export function PageHero(
  {title, description, backgroundImage}:
  {title: string, description?: string, backgroundImage: string}
) {
  return (
    <motion.section
      className="relative flex flex-col justify-center h-[400px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 px-4 container mx-auto">
        <h1 className="text-4xl md:text-4xl font-heading font-bold text-white text-center mb-6">
          {title}
        </h1>
        {
          description &&
        <p className="text-lg md:text-xl max-w-2xl text-light mb-8">
          {description}
        </p>
        }
      </div>
    </motion.section>
  );
}
