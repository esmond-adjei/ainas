'use client';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Section from '@/components/SectionLayout';
import { getMember } from '@/data/team';
import { PageHero } from '@/components/landing-page/HeroSection';
import { BackButton } from '@/components/BackButton';

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
    <BackButton className="absolute left-10" />

    <div className='flex gap-10 flex-col md:flex-row'>
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
