'use client';

import { Sprout, Sun, Building, Heart, Droplets, ChevronRight } from 'lucide-react';
import InfoCard from '@/components/InfoCard';
import AnimatedSection from '@/components/AnimatedSection';
import { ROUTES } from '@/lib';
import Link from 'next/link';

const ActivitiesInfo = [
    {
        icon: Sprout,
        title: 'Sustainable Agriculture & Agroforestry',
        text: "AINAS is dedicated to implementing nature-based solutions that address Africa's environmental and social challenges. Below are the key areas where we focus our efforts."
    },
    {
        icon: Droplets,
        title: 'Water Resource Management',
        text: "Supporting sustainable farming practices that improve soil health, increase food security, and generate income for communities."
    },
    {
        icon: Sun,
        title: 'Renewable Energy Solutions',
        text: "Increasing access to solar and biogas energy to power communities sustainably while reducing reliance on fossil fuels."
    },
    {
        icon: Building,
        title: 'Climate-Resilient Infrastructure',
        text: "Building infrastructure such as green roofs and permeable pavements to manage stormwater and reduce climate vulnerability."
    },
    {
        icon: Heart,
        title: 'Health & Well-being',
        text: "Enhancing health outcomes by addressing air quality, water sanitation, and providing community health programs."
    },
]

export default function WhatWeDoSection() {
    return (
        <AnimatedSection className="section relative bg-white text-center space-y-4">
            {/* Heading */}
            <div className="max-w-3xl mx-auto">
                <h2 className="heading-1 text-primary">What We Do</h2>
                <p className="heading-3 text-dark">
                    We are dedicated to implementing nature-based solutions that address Africa's environmental and social challenges. Below are the key areas where we focus our efforts:
                </p>
            </div>

            <Link
              href={ROUTES.about}
              className='mx-auto w-max hcc gap-0 hover:gap-4 px-4 py-2 rounded-full bg-green-200 text-primary transition-all duration-200'
            >
                More About Us <ChevronRight size={24}/>
            </Link>

            {/* Service Cards */}
            <div className="grid-container">
            {
                ActivitiesInfo.map((act, index) => 
                  <InfoCard
                    key={index}
                    icon={act.icon}
                    title={act.title}
                    className='border border-gray-200 rounded-lg p-6'
                  ><p className='text-gray-600'>{act.text}</p>
                 </InfoCard>
                )
            }
            </div>
        </AnimatedSection>
    );
}
