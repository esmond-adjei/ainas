'use client';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Section from '@/components/SectionLayout';
import { ChevronLeft } from 'lucide-react';

const teamMembers = [
  {
    imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Caleb+Melenya+Ocansey",
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
];

const TeamMemberDetail = () => {
  const { name } = useParams();
  const member = teamMembers.find((m) => m.name === decodeURIComponent(name as string));

  if (!member) {
    return notFound();
  }

  return (
    <Section>
    <div className='back-btn border border-borderColor rounded-full p-3 w-max hover:bg-gray-100 cursor-pointer'
        onClick={() => window.history.back()}
    >
        <ChevronLeft size={24} />
    </div>

      <img
        src={member.imageSrc}
        alt={member.name}
        className="w-[600px] h-[400px] object-cover mx-auto mb-8"
      />


      <h1 className="heading-1">{member.name}</h1>
      <h2 className="text-primary font-medium text-lg mb-4">{member.title}</h2>
      
      <p className="md:text-justify text-gray-700 leading-relaxed">{member.bio}</p>
    </Section>
  );
};

export default TeamMemberDetail;
