'use client';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Section from '@/components/SectionLayout';
import { ChevronLeft } from 'lucide-react';
import { getMember } from '@/data/team';
import { PageHero } from '@/app/(home)/components/HeroSection';

const TeamMemberDetail = () => {
  const { name } = useParams();
  const member = getMember(decodeURIComponent(name as string))

  if (!member) {
    return notFound();
  }

  return (
    <>
      <PageHero
        title={member.name}
        description={member.title}
        backgroundImage="/animated-shapes.svg"
       />
    <Section className='relative'>
    <div 
      className='absolute left-10 back-btn bg-white mb-4 border border-borderColor rounded-full p-3 w-max hover:bg-gray-100 cursor-pointer'
      onClick={() => window.history.back()}
    ><ChevronLeft size={24} /></div>

    <div 
      className='flex gap-10 flex-col md:flex-row'
    >
      <img
        src={member.imageSrc}
        alt={member.name}
        className="w-[600px] h-[400px] object-contain bg-transparent mx-auto mb-8"
        />

      <div>
        <h1 className="heading-2">{member.name}</h1>
        <h2 className="text-primary font-medium text-base mb-2">{member.title}</h2>
        
        <p className="md:text-justify text-gray-700 leading-relaxed">{member.bio}</p>
      </div>
      </div>
    </Section>
    </>
  );
};

export default TeamMemberDetail;
