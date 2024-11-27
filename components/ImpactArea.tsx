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
    <div
      className={`p-4 bg-transparent rounded-lg ${className}`}>
      {/* Left: Icon, Title, and Description */}
      <div className="text-left lg:w-1/2 lg:mb-0">
        <Icon className='text-4xl text-primary mb-4' size="40"/>
        <h3 className="text-2xl font-semibold text-dark mb-4">{title}</h3>
        <p className="text-base text-gray-700">{description}</p>
      </div>

      {/* Right: Image */}
      <div className="lg:w-1/2">
        <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default ImpactArea;