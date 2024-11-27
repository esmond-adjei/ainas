'use client';

import { motion } from 'framer-motion';
import { Sprout, Droplet, Sun, Building, Heart } from 'lucide-react';
import InfoCard from '@/components/InfoCard';

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
                <InfoCard
                    icon={Sprout}
                    title="Sustainable Agriculture & Agroforestry"
                >
                    <p className="text-gray-600">
                        Supporting sustainable farming practices that improve soil health, increase food security, and generate income for communities.
                    </p>
                </InfoCard>
                <InfoCard
                    icon={Droplet}
                    title="Water Resource Management"
                >
                    <p className="text-gray-600">
                        Implementing innovative solutions such as rainwater harvesting, wetland restoration, and water purification to ensure clean water access.
                    </p>
                </InfoCard>
                <InfoCard
                    icon={Sun}
                    title="Renewable Energy Solutions"
                >
                    <p className="text-gray-600">
                        Increasing access to solar and biogas energy to power communities sustainably while reducing reliance on fossil fuels.
                    </p>
                </InfoCard>
                <InfoCard
                    icon={Building}
                    title="Climate-Resilient Infrastructure"
                >
                    <p className="text-gray-600">
                        Building infrastructure such as green roofs and permeable pavements to manage stormwater and reduce climate vulnerability.
                    </p>
                </InfoCard>
                <InfoCard
                    icon={Heart}
                    title="Health & Well-being"
                >
                    <p className="text-gray-600">
                        Enhancing health outcomes by addressing air quality, water sanitation, and providing community health programs.
                    </p>
                </InfoCard>
            </div>
        </motion.section>
    );
}
