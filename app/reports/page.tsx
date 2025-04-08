import Link from 'next/link';
import { getSortedReportsData } from '@/lib/data-provider';
import ListPageLayout from '@/components/layout/ListPageLayout';
import { ReportCard } from '@/components/ReportCard';

export const metadata = {
  title: 'Reports - Ainas',
  description: 'Access our detailed reports on projects, initiatives, and impact assessment.',
};

export default function Reports() {
  const allReportsData = getSortedReportsData();
  
  return (
      <ListPageLayout
        title="Reports"
        subtitle=""
        bannerImage="/images/team-banner.webp"
      >
        {allReportsData.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600">No reports available yet. Check back soon!</p>
          </div>
        ) : (
          allReportsData.map((report) => (
            <Link href={`/reports/${report.id}`} key={report.id}>
            <ReportCard key={report.id} report={report} />
            </Link>
          ))
        )}
    </ListPageLayout>
  );
}
