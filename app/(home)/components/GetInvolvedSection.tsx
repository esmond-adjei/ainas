'use client';

import { motion } from 'framer-motion';
import { Users, Hand, Heart, Briefcase } from 'lucide-react';
import InfoCard from '@/components/InfoCard';

const involvementOptions = [
  {
    icon: Users,
    title: "Become a Member",
    description:
      "Join our community of changemakers and contribute to impactful projects across Africa.",
  },
  {
    icon: Hand,
    title: "Volunteer",
    description:
      "Get hands-on experience by volunteering for various projects and initiatives.",
  },
  {
    icon: Heart,
    title: "Donate",
    description:
      "Your donations help us create lasting change by supporting our projects and initiatives.",
  },
  {
    icon: Briefcase,
    title: "Corporate Sponsorship",
    description:
      "Partner with us as a corporate sponsor to align your brand with sustainable development goals.",
  },
];

const GetInvolved = () => {
  return (
    <motion.section
      className="px-40 py-20 bg-gray-100 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold mb-6">Get Involved</h2>
      <p className="text-lg max-w-2xl mx-auto mb-10">
        Join us in creating a sustainable and prosperous future for Africa through nature-based solutions. Here's how you can contribute:
      </p>

      {/* Grid for the involvement options */}
      <div className="flex flex-wrap justify-center gap-8">
        {involvementOptions.map(({ icon, title, description }, index) => (
          <InfoCard
            key={index}
            icon={icon}
            title={title}
            iconSize="48"
            className="bg-white p-4 hover:bg-secondary rounded-lg transition-colors duration-100"
          >
            <p className="text-gray-700 text-sm">{description}</p>
          </InfoCard>
        ))}
      </div>
    </motion.section>
  );
};

export default GetInvolved;
