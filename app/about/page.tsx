import React, { ReactNode } from 'react';
import { 
  Globe, 
  Users, 
  Target, 
  Lightbulb, 
  Shield, 
  TreePine, 
  BookOpen, 
  Award 
} from 'lucide-react';
import { PageHero } from '../(home)/components/HeroSection';
import { ExpandableSection } from '@/components/ExpandableSection';
import SiteLoader from '../loading';


interface CoreValueCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface LeadershipProfileProps {
  name: string;
  role: string;
  description: string;
}

// Move constant data to a separate file or constant section
const FAQS = [
  {
    question: 'Where is the fox?',
    answer: 'The quick brown fox jumps over the lazy dog',
  },
  {
    question: 'Where is the fox?',
    answer: 'The quick brown fox jumps over the lazy dog',
  },
  {
    question: 'Where is the fox?',
    answer: 'The quick brown fox jumps over the lazy dog',
  },
  {
    question: 'Where is the fox?',
    answer: 'The quick brown fox jumps over the lazy dog',
  },
];

// Shared styles as constants to improve consistency and reusability
const STYLES = {
  text: 'text-lg leading-relaxed mb-4',
  icon: 'size-12 text-primary mb-4',
  heading: 'text-2xl font-semibold mb-4',
};

// Extract reusable components with clear, single responsibilities
const CoreValueCard: React.FC<CoreValueCardProps> = ({ 
  icon: Icon, 
  title, 
  description 
}) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6">
    <Icon className={STYLES.icon} />
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-foreground">{description}</p>
  </div>
);

const LeadershipProfile: React.FC<LeadershipProfileProps> = ({ 
  name, 
  role, 
  description 
}) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6">
    <h3 className="text-xl font-semibold text-primary mb-2">{name}</h3>
    <h4 className="text-lg text-foreground mb-3">{role}</h4>
    <p className="text-foreground">{description}</p>
  </div>
);

const Section: React.FC<{
  title?: string; 
  children: ReactNode
}> = ({ title, children }) => (
  <section className='section !py-10'>
    <div className="max-w-4xl mx-auto">
      {title && <h2 className='heading-1 mb-4'>{title}</h2>}
      {children}
    </div>
  </section>
);

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      <PageHero 
        title='About Us'
        backgroundImage='/images/visual-impact.jpg'
      />

      {/* Vision and Mission Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Globe className={STYLES.icon} />
            <h2 className={STYLES.heading}>Our Vision</h2>
            <p className={STYLES.text}>
              To see a prosperous and sustainable Africa powered by nature-based solutions, 
              where environmental resilience and community empowerment are interconnected.
            </p>
          </div>
          <div>
            <Target className={STYLES.icon} />
            <h2 className={STYLES.heading}>Our Mission</h2>
            <p className={STYLES.text}>
              Empowering rural and urban African communities to develop and implement 
              sustainable nature-based solutions that improve livelihoods and protect 
              the environment through innovative, inclusive approaches.
            </p>
          </div>
        </div>
      </Section>

      <Section title='Our Story'>
        <p className={`md:text-justify ${STYLES.text}`}>
        AINAS was born out of a deep desire to address some of Africa's most pressing 
        challenges—rapid population growth, environmental degradation, and the 
        devastating effects of climate change. The founders of AINAS witnessed 
        firsthand the resilience of African communities and their connection to nature. 
        However, they also recognized the growing threats to this harmony: 
        deforestation, water scarcity, and unsustainable agricultural practices. 
        With a shared vision of a greener, more sustainable future, AINAS was founded 
        to bridge the gap between community needs and innovative, nature-based solutions.
        At its core, AINAS believes that a prosperous Africa starts with empowering 
        its people. Through reforestation projects, sustainable farming practices, 
        and renewable energy initiatives, AINAS seeks to create a legacy of 
        sustainability, one community at a time. While the organization is in its early 
        stages, AINAS has bold ambitions: to become a leader in driving nature-based 
        solutions across the continent. By partnering with local communities, 
        governments, and international organizations, AINAS is planting the seeds 
        for long-term environmental and social impact.
        </p>
      </Section>

      {/* Core Values Section */}
      <Section title="Our Core Values">
        <div className="grid md:grid-cols-3 gap-6">
          <CoreValueCard 
            icon={TreePine}
            title="Environmental Sustainability"
            description="Committed to promoting nature-based solutions that ensure environmental resilience and protection."
          />
          <CoreValueCard 
            icon={Users}
            title="Inclusive Development"
            description="Fostering an environment that enhances diversity and ensures equal opportunities for all individuals and communities."
          />
          <CoreValueCard 
            icon={Lightbulb}
            title="Innovative Approaches"
            description="Encouraging creative solutions to address complex environmental and social challenges across Africa."
          />
        </div>
      </Section>

      {/* Leadership Highlights */}
      <Section title="Leadership Highlights">
        <div className="grid md:grid-cols-2 gap-6">
          <LeadershipProfile 
            name="Dr. Caleb Melenya Ocansey"
            role="Founder and Strategic Visionary"
            description="Instrumental in founding AINAS, Dr. Ocansey has been pivotal in shaping the organization's strategic direction and commitment to sustainable development."
          />
          <LeadershipProfile 
            name="Executive Leadership Team"
            role="Multidisciplinary Governance"
            description="Our leadership comprises experts in research, technology, environmental sustainability, policy advocacy, and community development, ensuring a comprehensive approach to our mission."
          />
        </div>
      </Section>

      {/* Governance Principles */}
      <Section title='Governance Principles'>
        <div className="space-y-4">
          <GovernancePrinciple 
            icon={Shield}
            title="Strategic Oversight"
            description="Our Board of Directors provides strategic direction, ensuring alignment with our mission and objectives through rigorous governance and collaborative decision-making."
          />
          <GovernancePrinciple 
            icon={BookOpen}
            title="Transparency and Accountability"
            description="We maintain the highest standards of ethical behavior, financial transparency, and organizational accountability through comprehensive reporting and independent auditing."
          />
          <GovernancePrinciple 
            icon={Award}
            title="Continuous Learning"
            description="Our governance model emphasizes continuous professional development, adaptive strategies, and a commitment to learning and improvement across all organizational levels."
          />
        </div>
      </Section>

      <Section title='FAQs'>
        {FAQS.map((faq, idx) => (
          <ExpandableSection 
            key={idx} 
            title={faq.question}
            className='py-4'
          >
            <p className='text-gray-600 pb-4'>{faq.answer}</p>
          </ExpandableSection>
        ))}
      </Section>
    </div>
  );
};

// New component extracted for Governance Principles for better modularity
const GovernancePrinciple: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <Icon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={STYLES.text}>{description}</p>
    </div>
  </div>
);

export default AboutUsPage;