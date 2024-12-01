import React from 'react';
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
import SwiperLayout from '@/components/Carousel';
import { PageHero } from '../(home)/components/HeroSection';

const AboutUsPage = () => {
  const sectionStyle = "bg-white py-12 px-4 sm:px-6 lg:px-8";
  const titleStyle = "text-3xl font-bold text-primary-color mb-6";
  const textStyle = "text-foreground text-lg leading-relaxed mb-4";
  const iconStyle = "w-12 h-12 text-primary-color mb-4";

  interface CoreValueCardProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }

  const CoreValueCard: React.FC<CoreValueCardProps> = ({ icon: Icon, title, description }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <Icon className={iconStyle} />
      <h3 className="text-xl font-semibold text-primary-color mb-3">{title}</h3>
      <p className="text-foreground">{description}</p>
    </div>
  );

  interface LeadershipProfileProps {
    name: string;
    role: string;
    description: string;
  }

  const LeadershipProfile: React.FC<LeadershipProfileProps> = ({ name, role, description }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-primary-color mb-2">{name}</h3>
      <h4 className="text-lg text-foreground mb-3">{role}</h4>
      <p className="text-foreground">{description}</p>
    </div>
  );

  return (
    <div className="bg-background text-foreground">
        <PageHero 
          title='About Us'
          backgroundImage='/images/visual-impact.jpg'
        />
      {/* Vision and Mission Section */}
      <section className={sectionStyle}>
        <div className="max-w-4xl mx-auto">
          <h1 className={titleStyle}>About AINAS</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Globe className={iconStyle} />
              <h2 className="text-2xl font-semibold text-primary-color mb-4">Our Vision</h2>
              <p className={textStyle}>
                To see a prosperous and sustainable Africa powered by nature-based solutions, where environmental resilience and community empowerment are interconnected.
              </p>
            </div>
            <div>
              <Target className={iconStyle} />
              <h2 className="text-2xl font-semibold text-primary-color mb-4">Our Mission</h2>
              <p className={textStyle}>
                Empowering rural and urban African communities to develop and implement sustainable nature-based solutions that improve livelihoods and protect the environment through innovative, inclusive approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionStyle}>
      <SwiperLayout 
      autoplay={true}
      effect="slide"
      navigation={true}
      pagination={true}
    >
      <div className="bg-red-100 h-[200px] flex items-center justify-center">
        Slide 1 Content
      </div>
      <div className="bg-blue-100 h-[200px] flex items-center justify-center">
        Slide 2 Content
      </div>
      <div className="bg-green-100 h-[200px] flex items-center justify-center">
        Slide 3 Content
      </div>
    </SwiperLayout>
     </section>

      {/* Core Values Section */}
      <section className={`${sectionStyle} bg-secondary-color bg-opacity-10`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={titleStyle}>Our Core Values</h2>
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
        </div>
      </section>

      {/* Leadership Highlights */}
      <section className={sectionStyle}>
        <div className="max-w-4xl mx-auto">
          <h2 className={titleStyle}>Leadership Highlights</h2>
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
        </div>
      </section>

      {/* Governance Principles */}
      <section className={`${sectionStyle} bg-gray-50`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={titleStyle}>Governance Principles</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-primary-color mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-primary-color mb-2">Strategic Oversight</h3>
                <p className={textStyle}>
                  Our Board of Directors provides strategic direction, ensuring alignment with our mission and objectives through rigorous governance and collaborative decision-making.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <BookOpen className="w-8 h-8 text-primary-color mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-primary-color mb-2">Transparency and Accountability</h3>
                <p className={textStyle}>
                  We maintain the highest standards of ethical behavior, financial transparency, and organizational accountability through comprehensive reporting and independent auditing.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-primary-color mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-primary-color mb-2">Continuous Learning</h3>
                <p className={textStyle}>
                  Our governance model emphasizes continuous professional development, adaptive strategies, and a commitment to learning and improvement across all organizational levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;