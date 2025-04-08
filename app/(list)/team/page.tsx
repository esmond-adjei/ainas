import ListPageLayout from "@/components/ListPageLayout";
import TeamMember from "@/components/TeamMember";
import { getMembers } from "@/data/team";
// import Link from "next/link";

const TeamPage = () => {
    const teamMembers = getMembers();
    return (
        <ListPageLayout
            title="Meet Our Team"
            subtitle="A passionate group of professionals dedicated to driving positive change across Africa through sustainable solutions."
            bannerImage="/images/team-banner.webp"
        >
            {
            teamMembers.map((member, _) => (
                // <Link href={`/team/${member.slug}`} key={member.slug}>
                <TeamMember
                    key={member.slug}
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