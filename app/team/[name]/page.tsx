import { notFound } from 'next/navigation';
import Section from '@/components/SectionLayout';
import { getTeamMemberBySlug } from '@/lib/data-provider';
import { BackButton } from '@/components/BackButton';
import { PageHero } from '@/components/layout/PageHero';


type Params = Promise<{ name: string }>


export async function generateMetadata({ params }: { params: Params }) {
  const resolvedParams = await params;
  const member = getTeamMemberBySlug(decodeURIComponent(resolvedParams.name));

  if (!member) {
    return {
      title: 'Team Member Not Found - AINAS',
      description: 'The team member you are looking for could not be found.',
    };
  }

  const pageTitle = `${member.name} | Team | AINAS`;
  const pageDescription = member.bio || `${member.name}, ${member.title} at AINAS.`;
  const pageUrl = `https://www.ainas.org/team/${encodeURIComponent(member.slug || resolvedParams.name)}`;
  const imageUrl = member.imageSrc.startsWith('http') ? member.imageSrc : `https://www.ainas.org${member.imageSrc}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      member.name,
      member.title,
      'AINAS team',
      'African Initiative for Nature-Based Solutions',
      'expert',
    ],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: 'AINAS',
      images: [
        {
          url: imageUrl,
          alt: member.name,
        },
      ],
      locale: 'en_US',
      type: 'profile',
      profile: {
        firstName: member.name.split(' ')[0],
        lastName: member.name.split(' ').slice(1).join(' '),
        username: member.slug || resolvedParams.name,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
  };
}


const TeamMemberDetail = async ({ params }: { params: Params }) => {
  const resolvedParams = await params;
  const member = getTeamMemberBySlug(decodeURIComponent(resolvedParams.name));

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
      <Section className="relative">
        <BackButton className="absolute left-10" />

        <div className="flex gap-10 flex-col md:flex-row">
          <img
            src={member.imageSrc}
            alt={member.name}
            className="h-[400px] object-contain bg-transparent mb-8"
          />

          <div>
            <h1 className="heading-2">{member.name}</h1>
            <h2 className="text-primary font-medium text-base mb-2">
              {member.title} <a className="underline text-secondary" href='https://www.ainas.org'>@AINAS</a>
            </h2>

            <div
              className="md:text-justify text-gray-700 leading-relaxed prose"
              dangerouslySetInnerHTML={{ __html: member.contentHtml }}
            />
            {member.socialLinks && (
              <div className="mt-8 flex gap-4">
                {member.socialLinks.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primaryBright"
                  >
                    LinkedIn
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primaryBright"
                  >
                    Twitter
                  </a>
                )}
                {member.socialLinks.email && (
                  <a
                    href={`mailto:${member.socialLinks.email}`}
                    className="text-primary hover:text-primaryBright"
                  >
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
