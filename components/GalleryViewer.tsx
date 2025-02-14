'use client';

import React, { useState, useRef, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImageProp {
    src: string;
    alt: string;
    caption?: string;
}

interface GalleryViewerProps {
    images: GalleryImageProp[];
    onClose: () => void;
    initialIndex?: number;
}

const GalleryViewer: React.FC<GalleryViewerProps> = ({
    images,
    onClose,
    initialIndex = 0,
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    const galleryLength = images.length

    const handlePrevious = (e: React.MouseEvent | TouchEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e: React.MouseEvent | TouchEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleTouchStart = (e: TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const swipeDistance = touchEndX.current - touchStartX.current;
        
        if (Math.abs(swipeDistance) > 50) { // Minimum swipe distance
            if (swipeDistance > 0) {
                handlePrevious(e);
            } else {
                handleNext(e);
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') handlePrevious(e as any);
        if (e.key === 'ArrowRight') handleNext(e as any);
        if (e.key === 'Escape') onClose();
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onClick={onClose} 
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
                <X size={24} />
            </button>

            <button
                onClick={handlePrevious}
                className="absolute left-4 text-white hover:text-gray-300"
            >
                <ChevronLeft size={32} />
            </button>

            <div 
                className="relative max-w-4xl max-h-[80vh] mx-4"
                onClick={handleContentClick}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="max-w-full max-h-[80vh] object-contain"
                    draggable={false}
                />

                <div className='absolute top-4 right-1/2 px-2 py-1 rounded-lg bg-white/50 text-xs text-gray-800 shadow-md'>
                    {currentIndex + 1} / {galleryLength}
                </div>

                {images[currentIndex].caption && (
                    <p className="text-white text-center mt-4">
                        {images[currentIndex].caption}
                    </p>
                )}
            </div>

            <button
                onClick={handleNext}
                className="absolute right-4 text-white hover:text-gray-300"
            >
                <ChevronRight size={32} />
            </button>
        </div>
    );
};

export default GalleryViewer;


// image component
export function GalleryImage({ image }:{ image: GalleryImageProp }) {
    return (
        <div
            className="cursor-pointer overflow-hidden rounded-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>
    )
}