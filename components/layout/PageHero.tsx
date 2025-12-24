import React from 'react';
import Image from 'next/image';

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
        <h1 className="heading-1 text-white text-center mb-6 line-clamp-2">{title}</h1>
        {description && (
          <p className="heading-3 text-center text-wrap text-light line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
