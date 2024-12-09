import ListPageLayout from "@/components/ListPageLayout";
import TeamMember from "@/components/TeamMember";
import Link from "next/link";

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

const TeamPage = () => {
    return (
        <ListPageLayout
            title="Meet Our Team"
            subtitle="A passionate group of professionals dedicated to driving positive change across Africa through sustainable solutions."
            bannerImage="/images/team-banner.webp"
        >
            {
            teamMembers.map((member, index) => (
                <Link href={`/team/${encodeURIComponent(member.name)}`} key={index}>
                    <TeamMember
                    key={index}
                    showSummary={false}
                    imageSrc={member.imageSrc}
                    name={member.name}
                    title={member.title}
                    bio={member.bio}
                    />
                </Link>
          ))}
        </ListPageLayout>
    );
};

export default TeamPage;