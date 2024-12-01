'use client';

import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  icon: LucideIcon;
  iconSize?: string;
  children: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, iconSize = '40', title, className = '', children }) => {
  return (
    <div className={`text-left w-full sm:w-1/2 lg:w-1/4 group ${className}`}>
      <Icon className="text-5xl text-primary mb-4 transition-colors" size={iconSize} />
      <h3 className="text-xl font-semibold text-dark mb-2 transition-colors">{title}</h3>
      {children}
    </div>
  );
};

export default InfoCard;
