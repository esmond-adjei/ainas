import AnimatedSection from '@/components/AnimatedSection';
import TeamMember from '@/components/TeamMember';
import { ROUTES } from '@/lib';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    imageSrc: "/images/profiles/caleb.jpg",
    name: "Dr. Caleb Melenya Ocansey",
    title: "Founder & President",
    bio: "Dr. Ocansey founded AINAS to address Africa's most pressing environmental challenges. With expertise in sustainable development, he leads the organization's mission to empower African communities.",
  },
  {
    imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Eric+Tutu+Tchao",
    name: "Dr. Eric Tutu Tchao",
    title: "Executive Director",
    bio: "Dr. Tchao oversees AINAS's operations and strategic direction. His focus is on implementing sustainable solutions and promoting community engagement across Africa.",
  },
  {
    imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Enock+Bessah",
    name: "Dr. Enock Bessah",
    title: "Director of Research & Development",
    bio: "Dr. Bessah leads AINAS's research initiatives, ensuring that the solutions we implement are scientifically sound and tailored to local needs."
},
{
    imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Andrew+Selasi+Agbemenu",
    name: "Dr. Andrew Selasi Agbemenu",
    title: "Director of Technology & Innovation",
    bio: "Dr. Agbemenu drives AINAS's technological innovations, integrating renewable energy, sustainable agriculture, and smart technologies into our projects."
}
];

export default function OurTeam() {
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
          />
        ))}
      </div>

    </AnimatedSection>
  );
}
