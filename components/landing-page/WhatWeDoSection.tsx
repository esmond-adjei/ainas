'use client';

import { Sprout, Sun, Heart, Droplets, ChevronRight, Megaphone, Hammer } from 'lucide-react';
import InfoCard from '@/components/InfoCard';
import AnimatedSection from '@/components/AnimatedSection';
import { ROUTES } from '@/lib';
import Link from 'next/link';

const ActivitiesInfo = [
    {
        icon: Hammer,
        title: 'Build Capacity',
        text: "Empower African communities with the skills, tools, knowledge and platforms to design and implement innovative nature-based solutions that restore ecosystems and improve livelihoods."
    },
    {
        icon: Heart,
        title: 'Co-create Livelihoods',
        text: "Collaborate with communities to develop sustainable enterprises and alternative livelihoods tailored to their specific needs, creating lasting economic opportunities."
    },
    {
        icon: Sun,
        title: 'Climate Smart Activities',
        text: "Promote climate-smart practices that improve food security and build resilience in rural and urban communities."
    },
    {
        icon: Sprout,
        title: 'Promote Sustainable Land Use',
        text: "Advance land management, planning, Agroforestry and forest conservation initiatives that protect natural resources and preserve Africa's rich biodiversity."
    },
    {
        icon: Droplets,
        title: 'Expand Access to Water and Energy',
        text: "Improve rural access to clean water and renewable energy to drive sustainable development while reducing environmental impact."
    },
    {
        icon: Megaphone,
        title: 'Raise Awareness',
        text: "Champion nature-based solutions through advocacy, education, community led initiatives and partnerships to inspire action and promote sustainable development across Africa."
    }
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
