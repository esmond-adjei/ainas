'use client';

import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { 
  Navigation, 
  Pagination, 
  Autoplay, 
  EffectFade 
} from 'swiper/modules';

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
          el: '.custom-pagination',
          type: 'progressbar',
          progressbarFillClass: 'bg-primaryLight'
        } : false}
        autoplay={autoplay ? {
          delay: autoplayDelay,
        } : false}
        loop={loop}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {navigation && (
        <>
          <button 
            className="custom-prev-button absolute left-0 top-1/2 -translate-y-1/2 z-10 
              bg-white/50 hover:bg-white text-dark hover:shadow-lg rounded-full p-2 
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft/>
          </button>
          <button 
            className="custom-next-button absolute right-0 top-1/2 -translate-y-1/2 z-10 
              bg-white/50 hover:bg-white text-dark rounded-full p-2 
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight/>
          </button>
        </>
      )}
    </div>
  );
};

export default SwiperLayout;