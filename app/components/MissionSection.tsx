'use client';

import { motion } from 'framer-motion';
import { Leaf, Globe, Lightbulb } from 'lucide-react';
import InfoCard from './InfoCard';

export default function MissionSection() {
    return (
        <motion.section
            className="py-20 bg-gray-100 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Mission */}
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-semibold text-primary mb-6">Our Mission</h2>
                <p className="text-lg text-dark mb-8">
                    At AINAS, we are committed to empowering both rural and urban African communities by implementing sustainable, nature-based solutions that enhance livelihoods, restore ecosystems, and build resilience against climate change.
                </p>
            </div>

            {/* Values */}
            <div className="flex flex-wrap justify-center gap-10">
                <InfoCard
                    icon={Leaf}
                    iconSize="60"
                    title="Sustainability"
                >
                    <p className="text-gray-600">
                        We promote long-term solutions that ensure the health of both the environment and the communities we serve.
                    </p>
                </InfoCard>
                <InfoCard
                    icon={Globe}
                    iconSize="60"
                    title="Inclusivity"
                >
                    <p className="text-gray-600">
                        We embrace diversity and work towards equal opportunities, ensuring no community is left behind.
                    </p>
                </InfoCard>
                <InfoCard
                    icon={Lightbulb}
                    iconSize="60"
                    title="Innovation"
                >
                    <p className="text-gray-600">
                        Leveraging technology and local knowledge, we design tailored solutions that tackle Africa’s unique challenges.
                    </p>
                </InfoCard>
            </div>
        </motion.section>
    );
}
