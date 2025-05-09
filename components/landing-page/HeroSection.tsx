'use client';

import React, { memo } from 'react';
import { ROUTES } from '@/lib';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const BACKGROUND_IMAGE = '/images/hero-bg.webp';

function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center h-[720px] text-white"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={BACKGROUND_IMAGE}
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
          Nature's Power, <br /> Africa's Future
        </h1>
        <p className="text-xl font-serif font-thin md:text-2xl text-light mb-8">
          Promoting sustainable development of Africa through the implementation and advocacy of nature-based solutions for a greener and more prosperous future.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="w-max space-x-2 rounded-full bg-white/50 p-2 backdrop-blur-md">
          <Link
            href={ROUTES.about}
            className="inline-block active:scale-95 px-6 py-3 bg-primary text-light hover:text-dark font-semibold rounded-full hover:bg-secondary transition-all duration-300"
          >
            Learn More
          </Link>
          <Link
            href="#contact-us"
            className="inline-block active:scale-95 px-6 py-3 text-dark hover:text-light font-semibold rounded-full transition-all duration-300"
          >
            Get Involved
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default memo(Hero);


type PageHeroProps = {
  title: string;
  description?: string;
  backgroundImage: string;
};

export function PageHero({ title, description, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative flex flex-col justify-center h-[380px] text-white bg-primary">
      {/* Background Image */}
      {
        backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={`${title} Background`}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        )
      }

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 px-4 container mx-auto max-w-2xl">
        <h1 className="heading-1 text-white text-center mb-6">{title}</h1>
        {description && (
          <p className="heading-3 text-center text-wrap text-light">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
