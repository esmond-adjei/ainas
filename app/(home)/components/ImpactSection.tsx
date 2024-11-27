'use client';

import { motion } from 'framer-motion';
import ImpactArea from '@/components/ImpactArea';
import { Camera, Users, Activity, Globe } from 'lucide-react';

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
    <motion.section
      className="bg-gray-100 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-semibold text-dark mb-8 text-center">Our Impact</h2>

        <div className="space-y-8">
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={index % 2 === 0 ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <ImpactArea
                icon={area.icon}
                title={area.title}
                description={area.description}
                imageSrc={area.imageSrc}
                className={`flex flex-col lg:flex-row items-start justify-between gap-2 md:gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ImpactSection;