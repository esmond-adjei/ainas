'use client';

import { motion } from 'framer-motion';
import { Sprout, Droplet, Sun, Building, Heart, Droplets } from 'lucide-react';
import InfoCard from '@/components/InfoCard';

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
        <motion.section
            className="py-20 bg-white text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Heading */}
            <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-semibold text-primary mb-6">What We Do</h2>
                <p className="text-lg text-dark">
                    AINAS is dedicated to implementing nature-based solutions that address Africa’s environmental and social challenges. Below are the key areas where we focus our efforts:
                </p>
            </div>

            {/* Service Cards */}
            <div className="flex flex-wrap justify-center gap-10">
                {
                    ActivitiesInfo.map(
                        (act, index) => 
                        <InfoCard
                            key={index}
                            icon={act.icon}
                            title={act.title}
                            className='border border-gray-200 rounded-lg p-6'
                        >
                            <p className='text-gray-600'>
                                {act.text}
                            </p>
                        </InfoCard>
                    )
                }
            </div>
        </motion.section>
    );
}
