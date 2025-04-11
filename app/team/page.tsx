import ListPageLayout from "@/components/layout/ListPageLayout";
import TeamMember from "@/components/TeamMember";
import { getSortedTeamMembersData } from "@/lib/data-provider";

const TeamPage = () => {
    const teamMembers = getSortedTeamMembersData();

    return (
        <ListPageLayout
            title="Meet Our Team"
            subtitle="A passionate group of professionals dedicated to driving positive change across Africa through sustainable solutions."
            bannerImage="/images/team-banner.webp"
        >
            {
            teamMembers.map((member) => (
                <TeamMember
                    key={member.slug}
                    showSummary={true}
                    data={member}
                />
          ))}
        </ListPageLayout>
    );
};

export default TeamPage;