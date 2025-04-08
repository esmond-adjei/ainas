import { notFound } from 'next/navigation';
import Section from '@/components/SectionLayout';
import { getTeamMemberBySlug } from '@/lib/data-provider';
import { PageHero } from '@/components/landing-page/HeroSection';
import { BackButton } from '@/components/BackButton';

const TeamMemberDetail = async (
  { params }: { params: { name: string } }
) => {
  const { name } = await params;
  const member = getTeamMemberBySlug(decodeURIComponent(name));

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
        className="h-[400px] object-contain bg-transparent mb-8"
        />

      <div>
        <h1 className="heading-2">{member.name}</h1>
        <h2 className="text-primary font-medium text-base mb-2">{member.title}</h2>
        
        <div 
          className="md:text-justify text-gray-700 leading-relaxed prose"
          dangerouslySetInnerHTML={{ __html: member.contentHtml }}
        />
        
        {member.socialLinks && (
          <div className="mt-8 flex gap-4">
            {member.socialLinks.linkedin && (
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primaryBright">
                LinkedIn
              </a>
            )}
            {member.socialLinks.twitter && (
              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primaryBright">
                Twitter
              </a>
            )}
            {member.socialLinks.email && (
              <a href={`mailto:${member.socialLinks.email}`} className="text-primary hover:text-primaryBright">
                Email
              </a>
            )}
          </div>
        )}
      </div>
      </div>
    </Section>
    </>
  );
};

export default TeamMemberDetail;
