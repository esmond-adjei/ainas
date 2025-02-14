'use client';

import { LucideIcon } from 'lucide-react';

interface ImpactAreaProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

const ImpactArea: React.FC<ImpactAreaProps> = ({ icon: Icon, title, description, imageSrc, className='' }) => {
  return (
    <div className={`p-4 bg-transparent rounded-lg ${className}`}>
      {/* Left: Icon, Title, and Description */}
      <div className="text-left max-w-xl mx-auto">
        <div className='flex gap-2 items-center mb-4'>
          <Icon className='text-4xl text-primaryBright' size="30"/>
          <h3 className="heading-2">{title}</h3>
        </div>
        <p className="text-base text-gray-700">{description}</p>
      </div>

      {/* Right: Image */}
      <div className="mx-auto">
        <img src={imageSrc} alt={title} className="w-auto md:max-w-screen-sm h-[320px] md:h-[400px] object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default ImpactArea;