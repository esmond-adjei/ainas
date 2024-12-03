'use client';

import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { 
  Navigation, 
  Pagination, 
  Autoplay, 
  EffectFade 
} from 'swiper/modules';

// Minimal Swiper base styles (only what's absolutely necessary)
import 'swiper/css/bundle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SwiperLayoutProps {
  children: ReactNode[];
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow';
  navigation?: boolean;
  pagination?: boolean;
  className?: string;
}

export const SwiperLayout: React.FC<SwiperLayoutProps> = ({
  children,
  autoplay = false,
  autoplayDelay = 5000,
  loop = true,
  effect = 'slide',
  navigation = true,
  pagination = true,
  className = ''
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={10}
        slidesPerView={1}
        effect={effect}
        navigation={navigation ? {
          prevEl: '.custom-prev-button',
          nextEl: '.custom-next-button'
        } : false}
        pagination={pagination ? { 
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        } : false}
        autoplay={autoplay ? {
          delay: autoplayDelay,
          disableOnInteraction: false
        } : false}
        loop={loop}
        // Custom Tailwind classes for Swiper container
        className="w-full h-full [&>.swiper-wrapper]:flex [&>.swiper-wrapper]:h-full"
      >
        {children.map((child, index) => (
          <SwiperSlide 
            key={index} 
            className="w-full h-full flex items-center justify-center"
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {navigation && (
        <>
          <button 
            className="custom-prev-button absolute left-0 top-1/2 -translate-y-1/2 z-10 
              bg-white/50 hover:bg-white hover:shadow-lg rounded-full p-2 
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft/>
          </button>
          <button 
            className="custom-next-button absolute right-0 top-1/2 -translate-y-1/2 z-10 
              bg-white/50 hover:bg-white rounded-full p-2 
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight/>
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {pagination && (
        <div className="custom-pagination absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {/* Pagination dots will be dynamically added by Swiper */}
          <style jsx global>{`
    .swiper-pagination-bullet {
      @apply w-3 h-3 rounded-full bg-gray-300 opacity-50 transition-all duration-300;
    }
    .swiper-pagination-bullet-active {
      @apply bg-black opacity-100 w-4;
    }
  `}</style>
        </div>
      )}
    </div>
  );
};

// Custom Tailwind CSS for Swiper pagination
const SwiperStyles = () => (
  <style jsx global>{`
    .swiper-pagination-bullet {
      @apply w-3 h-3 rounded-full bg-gray-300 opacity-50 transition-all duration-300;
    }
    .swiper-pagination-bullet-active {
      @apply bg-black opacity-100 w-4;
    }
  `}</style>
);

export default SwiperLayout;