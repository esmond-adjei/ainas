'use client';

import { Sprout, Sun, Building, Heart, Droplets } from 'lucide-react';
import InfoCard from '@/components/InfoCard';
import AnimatedSection from '@/components/AnimatedSection';

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
        <AnimatedSection className="section relative bg-white text-center">

        {/* <img 
            className='size-40 hidden lg:block absolute bottom-[40px] left-0 transform -translate-x-1/2 -translate-y-1/2'
            src='cross-circle-bloat.svg'
            />
        <img 
            className='size-40 hidden lg:block absolute top-[40px] right-0 transform -translate-x-1/2 -translate-y-1/2'
            src='mix-circle-half.svg'
            /> */}

            {/* Heading */}
            <div className="max-w-3xl mx-auto mb-16">
                <h2 className="heading-1 text-primary">What We Do</h2>
                <p className="text-lg text-dark">
                    We are dedicated to implementing nature-based solutions that address Africa's environmental and social challenges. Below are the key areas where we focus our efforts:
                </p>
            </div>

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
