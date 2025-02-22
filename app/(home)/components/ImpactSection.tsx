'use client';

import { Camera, Users, Activity, Globe, LucideIcon } from 'lucide-react';
import SwiperLayout from '@/components/Carousel';

const IMPACT_AREAS = [
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
const ImpactSection = () => {

  return (
    <section className="section bg-primaryDark bg-cover text-light"
    style={{
      backgroundImage: `url(/cornered-stairs.svg)`
    }}
    >
      <div className="container mx-auto px-4 lg:max-w-screen-xl">
        <h2 className="heading-1 text-center">Our Impact</h2>

        <SwiperLayout 
          autoplay={true}
          effect="slide"
          navigation={true}
          pagination={true}
          className='bg-primaryDark rounded-lg shadow-lg'
        >
          {IMPACT_AREAS.map((area, index) => (
              <ImpactArea
                key={index}
                icon={area.icon}
                title={area.title}
                description={area.description}
                imageSrc={area.imageSrc}
                className={`flex flex-col lg:flex-row text-light items-start justify-between gap-2 xl:gap-8`}
              />
            ))}
        </SwiperLayout>
      </div>
    </section>
  );
};

export default ImpactSection;


/**
 * impact component
 */
interface ImpactAreaProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

const ImpactArea: React.FC<ImpactAreaProps> = ({ icon: Icon, title, description, imageSrc, className='' }) => {
  return (
    <div className={`p-4 m-4 rounded-lg ${className}`}>
      {/* Left: Icon, Title, and Description */}
      <div className="text-left max-w-xl mx-auto py-6">
        <Icon className='text-primaryBright mb-4' size="40"/>
        <h3 className="heading-2">{title}</h3>
        <p className="text-base text-slate-400 mt-2">{description}</p>
      </div>

      {/* Right: Image */}
      <div className="mx-auto">
        <img src={imageSrc} alt={title} className="max-w-full xl:max-w-screen-sm h-[320px] xl:h-[380px] object-cover rounded-lg" />
      </div>
    </div>
  );
};
