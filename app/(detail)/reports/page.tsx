import Link from 'next/link';
import { getSortedReportsData, PostData } from '@/lib/blog';

export const metadata = {
  title: 'Reports - Ainas',
  description: 'Access our detailed reports on projects, initiatives, and impact assessment.',
};

export default function Reports() {
  const allReportsData = getSortedReportsData();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Reports</h1>
      
      {allReportsData.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">No reports available yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {allReportsData.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      )}
    </div>
  );
}

function ReportCard({ report }: { report: PostData }) {
  return (
    <Link href={`/reports/${report.id}`} className="block group">
      <article className="border border-borderColor rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h2 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{report.title}</h2>
            <time className="text-sm text-gray-500 mb-3 block">{new Date(report.date).toLocaleDateString()}</time>
            {report.excerpt && <p className="text-gray-600">{report.excerpt}</p>}
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <span className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-primaryDark transition-colors">
              View Report
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
