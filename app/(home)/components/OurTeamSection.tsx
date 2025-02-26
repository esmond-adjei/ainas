import AnimatedSection from '@/components/AnimatedSection';
import TeamMember from '@/components/TeamMember';
import { ROUTES } from '@/lib';
import { getMembers } from '@/data/team';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';


export default function OurTeam() {
  const teamMembers = getMembers(4);
  return (
    <AnimatedSection className="section bg-gray-100 text-center space-y-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="heading-1 text-primary">Meet Our Team</h2>
        <p className="heading-3 text-dark">
          A passionate group of professionals dedicated to driving positive change across Africa through sustainable solutions.
        </p>
      </div>

      <Link
            href={ROUTES.team}
            className='mx-auto w-max hcc gap-0 hover:gap-4 px-4 py-2 rounded-full bg-green-200 text-primary transition-all duration-200'
          >Our Team <ChevronRight size={24}/>
      </Link>

      {/* Team Members Grid */}
      <div className="grid-container">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            imageSrc={member.imageSrc}
            name={member.name}
            title={member.title}
            bio={member.bio}
            showSummary={false}
          />
        ))}
      </div>

    </AnimatedSection>
  );
}
