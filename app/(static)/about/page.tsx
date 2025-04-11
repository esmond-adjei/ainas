import React from 'react';
import { 
  Globe, 
  Users, 
  Target, 
  Lightbulb, 
  Shield, 
  TreePine, 
  BookOpen, 
  Award,
  ChevronRight
} from 'lucide-react';
import { PageHero } from '../../../components/landing-page/HeroSection';
import { ExpandableSection } from '@/components/ExpandableSection';
import Section from '@/components/SectionLayout';
import Link from 'next/link';
import { ROUTES } from '@/lib';


interface CoreValueCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}


const FAQS = [
  {
    question: 'What is AINAS?',
    answer: 'AINAS LBG (African Initiative for Nature-Based Solutions) is a non-governmental organization dedicated to empowering African communities to implement innovative nature-based solutions that combat climate change, restore ecosystems, build resilient cities and promote sustainable development.'
  },
  {
    question: 'What are nature-based solutions (NBS)?',
    answer: 'Nature-based solutions are sustainable approaches that use the power of nature to address environmental, social and economic challenges. Examples include reforestation, green infrastructure, sustainable agriculture, agroforestry and water management strategies.'
  },
  {
    question: 'What does AINAS aim to achieve?',
    answer: 'Our goal is to transform African communities through restoring ecosystems, building resilience to climate change and creating sustainable livelihoods. We focus on capacity building, co-creating enterprises, improving agricultural productivity, advocacy, and expanding access to clean water and energy.'
  },
  {
    question: "Who benefits from AINAS's initiatives?",
    answer: "AINAS's primary beneficiaries are rural and urban communities across Africa, especially women, youth, smallholder farmers and vulnerable populations affected by climate change and environmental degradation."
  },
  {
    question: 'How does AINAS engage with local communities?',
    answer: 'AINAS collaborates with communities to co-develop solutions that reflect their unique needs. We provide training, create alternative livelihoods and integrate traditional knowledge with modern innovations to ensure sustainable outcomes.'
  },
  {
    question: 'How can individuals or organizations support AINAS?',
    answer: 'You can support AINAS by donating, volunteering or partnering with us to implement nature-based solutions. Visit our website or contact us directly for more information.'
  },
  {
    question: 'How is AINAS funded?',
    answer: 'AINAS receives funding from a diverse range of sources including grants, private donations, corporate sponsorships and government support. We are committed to transparency and financial accountability.'
  }
];


const Values = [
  {
    icon: TreePine,
    title: 'Environmental Sustainability',
    description: 'Commit to promote and co-implement nature-based solutions that ensure environmental sustainability and resilience of local communities.'
  },
  {
    icon: Users,
    title: 'Inclusive Development', 
    description: 'Foster an inclusive environment that enhances diversity and ensures equal opportunities for all individuals and communities.'
  },
  {
    icon: Lightbulb,
    title: 'Innovative Approaches',
    description: 'Encourage innovative approaches and solutions to address environmental and social challenges tailored to the needs of African communities.'
  }
];


const STYLES = {
  text: 'mb-4',
  icon: 'size-12 text-primary mb-4',
  heading: 'text-2xl font-semibold mb-4',
};

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


const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      <PageHero 
        title='About Us'
        description='The African Initiative for Nature-Based Solutions (AINAS) is a non-governmental organization which is dedicated to promoting sustainable development of Africa through the implementation and advocacy of nature-based solutions (NBS).'
        backgroundImage='/images/visual-impact.webp'
      />

      {/* Vision and Mission Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Globe className={STYLES.icon} />
            <h2 className={STYLES.heading}>Our Vision</h2>
            <p className={STYLES.text}>
              AINAS's vision is to see a prosperous and sustainable Africa powered by nature-based solutions.
            </p>
          </div>
          <div>
            <Target className={STYLES.icon} />
            <h2 className={STYLES.heading}>Our Mission</h2>
            <p className={STYLES.text}> 
              AINAS's mission is to empower rural and urban African communities to develop and implement 
              sustainable nature-based solutions that improve livelihoods and protect 
              the environment for current and future generations.
            </p>
          </div>
        </div>
      </Section>

      <Section title='Our Story'>
        <p className={`md:text-justify ${STYLES.text}`}>
        AINAS was born from a bold vision to confront Africa's mounting challenges of climate change, 
        environmental degradation, unplanned infrastructure and rapid population growth with 
        solutions rooted in nature. 
        The founder, deeply connected to Africa's landscapes and communities, witnessed firsthand 
        the erosion of harmony between people and the environment—deforestation, illegal mining, 
        water scarcity and unsustainable practices threatening livelihoods and ecosystems alike. 
        Determined to act, he brought together a network of like-minded experts, advocates and community leaders. 
        United by a shared belief in a greener and more prosperous Africa, they created AINAS to bridge the gap 
        between community needs and nature-based innovations. AINAS exists to empower communities, 
        restoring ecosystems while promoting livelihood opportunities, cultural preservation, precision farming, 
        renewable energy, agroforestry and reforestation. Though in its early stages, 
        AINAS is driven by bold initiative to become a continental leader in nature-based solutions. 
        AINAS is planting the seeds for a resilient, thriving Africa—one community at a time through 
        working hand in hand with communities, policymakers and global partners.
        </p>
      </Section>

      {/* Core Values Section */}
      <Section title="Our Core Values">
        <div className="grid md:grid-cols-3 gap-6">
          {
            Values.map((value, idx) => (
              <CoreValueCard 
                key={idx}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))
          }
        </div>
      </Section>

      {/* Leadership Highlights */}
      <Section>
        <div className='w-full h-[200px] hcc flex-col rounded-3xl bg-green-50 border border-primaryLight'>
          <Link
            href={ROUTES.team}
            className='hcc gap-0 hover:gap-4 px-4 py-3 rounded-full bg-primaryDark text-xl text-primaryBright transition-all duration-200'
          >Meet the Team <ChevronRight size={30}/></Link>
          <small className='text-gray-600 block text-center mt-2'>Click to view all team members</small>
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