'use client';

import React, { useState, useEffect, memo } from 'react';
import { ROUTES } from '@/lib';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/hero-bg.webp',
    title: "Nature's Power, \n Africa's Future",
    description: "Promoting sustainable development of Africa through the implementation and advocacy of nature-based solutions for a greener and more prosperous future.",
    primaryCta: { label: "Learn More", href: ROUTES.about },
    secondaryCta: { label: "Get Involved", href: ROUTES.contact }
  },
  {
    id: 0,
    image: '/images/blog/dr-caleb-ejp.webp',
    title: "President's End-of-year Message",
    primaryCta: { label: "Read Message", href: '/reports/end-of-year-2025-presidential-message' },
    secondaryCta: { label: "Join Us", href: ROUTES.contact }
  },
  {
    id: 2,
    image: '/images/blog/carbonxtra-workshop-2.jpg',
    title: "Protecting Our Ecosystems",
    description: "Collaborating with local communities to restore biodiversity and safeguard the natural heritage of the African continent.",
    primaryCta: { label: "Meet the Team", href: ROUTES.team },
    secondaryCta: { label: "Partner with US", href: ROUTES.contact }
  },
  {
    id: 3,
    image: '/images/blog/carbonxtra-2.jpg',
    title: "Sustainable Innovations",
    description: "Empowering the next generation with green technology and sustainable practices for a resilient tomorrow.",
    primaryCta: { label: "Read Blog", href: ROUTES.blog },
    secondaryCta: { label: "Volunteer", href: ROUTES.contact }
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

function Hero() {
  const [[page, direction], setPage] = useState([0, 0]);
  const current = Math.abs(page % HERO_SLIDES.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <section className="relative flex flex-col justify-center h-[720px] text-white overflow-hidden bg-black group">
      {/* Background Slides */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 150, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[current].image}
              alt="Hero Background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 px-4 w-full max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg whitespace-pre-line">
              {HERO_SLIDES[current].title}
            </h1>
            <p className="text-xl font-serif font-thin md:text-2xl text-light mb-8">
              {HERO_SLIDES[current].description}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="w-max space-x-2 rounded-full bg-white/50 p-2 backdrop-blur-md">
              <Link
                href={HERO_SLIDES[current].primaryCta.href}
                className="inline-block active:scale-95 px-6 py-3 bg-primary text-light hover:text-dark font-semibold rounded-full hover:bg-secondary transition-all duration-300"
              >
                {HERO_SLIDES[current].primaryCta.label}
              </Link>
              <Link
                href={HERO_SLIDES[current].secondaryCta.href}
                className="inline-block active:scale-95 px-6 py-3 text-dark hover:text-light font-semibold rounded-full transition-all duration-300"
              >
                {HERO_SLIDES[current].secondaryCta.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-primary text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-primary text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const dir = index > current ? 1 : -1;
              setPage([index, dir]);
            }}
            className={`h-2 transition-all duration-500 rounded-full ${
              current === index ? 'w-8 bg-white' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(Hero);