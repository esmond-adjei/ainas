import TeamMember from '@/components/TeamMember';

const teamMembers = [
  {
    imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Caleb+Melenya+Ocansey",
    name: "Dr. Caleb Melenya Ocansey",
    title: "Founder & President",
    bio: "Dr. Ocansey founded AINAS to address Africa\'s most pressing environmental challenges. With expertise in sustainable development, he leads the organization's mission to empower African communities."
  },
  {
    imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Eric+Tutu+Tchao",
    name: "Dr. Eric Tutu Tchao",
    title: "Executive Director",
    bio: "Dr. Tchao oversees AINAS's operations and strategic direction. His focus is on implementing sustainable solutions and promoting community engagement across Africa."
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
  },
  {
    imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Kofi+Konadu",
    name: "Dr. Kofi Konadu",
    title: "Director of Environmental Sustainability",
    bio: "Dr. Konadu oversees AINAS's environmental sustainability programs, working to restore ecosystems and promote climate resilience across Africa."
  }
];

export default function OurTeam() {
  return (
    <section className="section bg-gray-100 text-center">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-semibold text-primary mb-6">Meet Our Team</h2>
        <p className="text-lg text-dark">
          A passionate group of professionals dedicated to driving positive change across Africa through sustainable solutions.
        </p>
      </div>

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
    </section>
  );
}
