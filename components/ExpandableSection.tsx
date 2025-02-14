'use client'
import React, { useState, ReactNode } from 'react';
import { Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  variant?: 'accordion' | 'dropdown';
  expanded?: boolean;
  className?: string;
  children: ReactNode;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  variant = 'accordion',
  expanded = false,
  className = '',
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`border-t border-gray-200 ${className}`}>
        {/* TOGGLE */}
      <button
        onClick={toggleExpansion}
        className="flex items-center justify-between w-full text-left"
      >
        {/* heading */}
        {variant === 'accordion' ? (
          <h2 className="text-xl font-medium text-dark group-hover:text-primaryBright">
            {title}
          </h2>
        ) : (
          <p className="font-sans text-dark">{title}</p>
        )}

        {/* icon */}
        {variant === 'dropdown' ? (
          isExpanded ? (
            <ChevronUp className="size-5 text-dark/60" />
          ) : (
            <ChevronDown className="size-5 text-dark/60" />
          )
        ) : isExpanded ? (
          <Minus className="size-5 text-dark/60" />
        ) : (
          <Plus className="size-5 text-dark/60" />
        )}
      </button>
      
      {/* CONTENT */}
      <div className='drawer block text-gray-700' aria-expanded={isExpanded}>{children}</div>
    </div>
  );
};
