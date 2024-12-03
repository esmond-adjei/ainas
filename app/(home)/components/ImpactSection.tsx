'use client';

import { motion } from 'framer-motion';
import ImpactArea from '@/components/ImpactArea';
import { Camera, Users, Activity, Globe } from 'lucide-react';
import SwiperLayout from '@/components/Carousel';

const ImpactSection = () => {
  const impactAreas = [
    {
      icon: Camera,
      title: 'Visual Impact',
      description: 'Our solutions create beautiful and sustainable landscapes that enhance the visual appeal of any environment.',
      imageSrc: '/images/visual-impact.jpg'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'By involving local communities, we ensure our solutions create positive social and economic impacts.',
      imageSrc: '/images/community-impact.jpg'
    },
    {
      icon: Activity,
      title: 'Ecological Impact',
      description: 'Our nature-based approaches restore and protect ecosystems, promoting biodiversity and environmental health.',
      imageSrc: '/images/ecological-impact.jpg'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We implement our solutions worldwide, contributing to global sustainability and climate change mitigation efforts.',
      imageSrc: '/images/global-impact.jpg'
    }
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 lg:max-w-screen-xl">
        <h2 className="text-3xl font-semibold text-dark mb-8 text-center">Our Impact</h2>
          <SwiperLayout 
          autoplay={true}
          effect="slide"
          navigation={true}
          pagination={true}
        >
          {impactAreas.map((area, index) => (
              <ImpactArea
                key={index}
                icon={area.icon}
                title={area.title}
                description={area.description}
                imageSrc={area.imageSrc}
                className={`flex flex-col lg:flex-row items-start justify-between gap-2 md:gap-8`}
              />
            ))}
        </SwiperLayout>
      </div>
    </section>
  );
};

export default ImpactSection;