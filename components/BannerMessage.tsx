"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// 1. Data Structure for Messages
interface Message {
    id: string;
    type: 'image' | 'video';
    src: string;
    altText?: string;
    heading: string;
    subheading?: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    duration: number; // in milliseconds
}

const APP_MESSAGES: Message[] = [
    {
        id: '1',
        type: 'image',
        src: '/images/blog/dr-caleb-ejp.webp',
        heading: "New Summer Collection",
        subheading: "Discover the latest trends in sustainable fashion.",
        primaryButtonText: "Shop Now",
        primaryButtonLink: "/shop",
        duration: 5000,
    },
    {
        id: '2',
        type: 'image',
        src: '/images/blog/dr-caleb-ejp.webp',
        heading: "Pro Features Available",
        subheading: "Upgrade your account to unlock advanced analytics and reports.",
        primaryButtonText: "Upgrade",
        primaryButtonLink: "/pricing",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "/features",
        duration: 7000,
    }
];

export function AppMessageHeader() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Using the static data structure
    const activeMessages = APP_MESSAGES;
    const currentItem = activeMessages[currentIndex];
    const isSingleItem = activeMessages.length <= 1;

    // Check visibility on mount (session storage check only)
    useEffect(() => {
        if (sessionStorage.getItem('appMessageHeaderVisible') !== 'false') {
            setIsVisible(true);
        }
    }, []);

    // Autoplay logic
    useEffect(() => {
        if (isPaused || isSingleItem || !currentItem?.duration || !isVisible) return;

        const timer = setTimeout(() => {
            setCurrentIndex(prev => (prev + 1) % activeMessages.length);
        }, currentItem.duration);

        return () => clearTimeout(timer);
    }, [currentIndex, isPaused, isSingleItem, activeMessages.length, currentItem, isVisible]);

    const handleNavigation = useCallback((direction: 'next' | 'prev') => {
        setCurrentIndex(prev => {
            const offset = direction === 'next' ? 1 : -1;
            return (prev + offset + activeMessages.length) % activeMessages.length;
        });
    }, [activeMessages.length]);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        sessionStorage.setItem('appMessageHeaderVisible', 'false');
    }, []);

    if (!isVisible || !currentItem) {
        return null;
    }

    return (
        <div
            className="relative flex bg-primary text-white h-max md:h-[80px] w-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Media Section (Image or Video) */}
            <div className="absolute lg:relative z-20 inset-y-0 left-0 w-full md:w-3/5 lg:w-1/4">
                <div className="absolute inset-0 bg-gradient-to-l from-primary from-50% lg:from-0% to-transparent z-10" />
                {currentItem.type === 'video' ? (
                    <video
                        key={currentItem.id}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={currentItem.src} type="video/mp4" />
                    </video>
                ) : (
                    <Image
                        key={currentItem.id}
                        src={currentItem.src}
                        alt={currentItem.altText || currentItem.heading}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover"
                        priority={currentIndex === 0}
                    />
                )}
            </div>

            {/* Text & Actions Section */}
            <div className="z-40 flex-1 px-4 py-3 flex flex-col md:flex-row gap-4 md:justify-between md:items-center">
                <div className="max-w-2xl">
                    <h2 className="text-md md:text-lg font-semibold leading-tight">
                        {currentItem.heading}
                    </h2>
                    {currentItem.subheading && (
                        <p className="hidden md:block text-xs text-blue-50 leading-relaxed line-clamp-1">
                            {currentItem.subheading}
                        </p>
                    )}
                </div>

                <div className="shrink-0 flex items-center gap-2 self-start md:self-center">
                    {currentItem.primaryButtonText && (
                        <Link 
                            href={currentItem.primaryButtonLink || '#'} 
                            className="no-underline px-3 py-1.5 bg-white text-primary hover:bg-blue-50 transition-colors duration-200 font-bold text-xs rounded shadow-sm"
                        >
                            {currentItem.primaryButtonText}
                        </Link>
                    )}
                    {currentItem.secondaryButtonText && (
                        <Link 
                            href={currentItem.secondaryButtonLink || '#'} 
                            className="no-underline px-3 py-1.5 bg-blue-700 text-white border border-blue-400 hover:bg-blue-800 transition-colors duration-200 font-medium text-xs rounded"
                        >
                            {currentItem.secondaryButtonText}
                        </Link>
                    )}
                </div>
            </div>

            {/* Controls (Close & Navigation) */}
            <div className="absolute z-50 top-2 right-2 flex items-center bg-black/10 rounded-full px-1 py-0.5 backdrop-blur-sm">
                {!isSingleItem && (
                    <>
                        <button onClick={() => handleNavigation('prev')} className="hidden md:block p-1.5 rounded-full hover:bg-white/20 transition-colors" aria-label="Previous message">
                            <ChevronLeft size={14} />
                        </button>
                        <button onClick={() => handleNavigation('next')} className="hidden md:block p-1.5 rounded-full hover:bg-white/20 transition-colors" aria-label="Next message">
                            <ChevronRight size={14} />
                        </button>
                        <div className="hidden md:flex gap-1 mx-2">
                            {activeMessages.map((_, index) => (
                                <button 
                                    key={index} 
                                    onClick={() => setCurrentIndex(index)} 
                                    className={`size-1.5 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/40'}`} 
                                    aria-label={`Go to message ${index + 1}`} 
                                />
                            ))}
                        </div>
                    </>
                )}
                <button onClick={handleClose} className="p-1.5 rounded-full hover:bg-white/20 transition-colors" aria-label="Close banner">
                    <X size={14} />
                </button>
            </div>
        </div>
    );
}
