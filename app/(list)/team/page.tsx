import ListPageLayout from "@/components/ListPageLayout";
import TeamMember from "@/components/TeamMember";
import { getMembers } from "@/data/team";

const TeamPage = () => {
    const teamMembers = getMembers();
    return (
        <ListPageLayout
            title="Meet Our Team"
            subtitle="A passionate group of professionals dedicated to driving positive change across Africa through sustainable solutions."
            bannerImage="/images/team-banner.webp"
        >
            {
            teamMembers.map((member, index) => (
                // <Link href={`/team/${encodeURIComponent(member.name)}`} key={index}>
                <TeamMember
                    key={index}
                    showSummary={true}
                    imageSrc={member.imageSrc}
                    name={member.name}
                    title={member.title}
                    bio={member.bio}
                    />
                // </Link>
          ))}
        </ListPageLayout>
    );
};

export default TeamPage;