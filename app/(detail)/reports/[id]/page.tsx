import { getAllReportIds, getReportData } from '@/lib/blog';
import Link from 'next/link';

export async function generateStaticParams() {
  const paths = getAllReportIds();
  return paths;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const report = await getReportData(params.id);
  return {
    title: `${report.title} - Ainas Reports`,
    description: report.excerpt || `View our detailed report on ${report.title}`,
  };
}

export default async function Report({ params }: { params: { id: string } }) {
  const report = await getReportData(params.id);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/reports" className="text-primary hover:underline mb-8 inline-block">
        ← Back to all reports
      </Link>
      
      <article className="max-w-4xl mx-auto">
        <header className="mb-8 border-b pb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{report.title}</h1>
          <div className="flex flex-wrap gap-3 items-center text-gray-600">
            <time className="text-sm">{new Date(report.date).toLocaleDateString()}</time>
            {report.author && (
              <>
                <span className="text-sm">•</span>
                <span className="text-sm">By {report.author}</span>
              </>
            )}
            {report.category && (
              <>
                <span className="text-sm">•</span>
                <span className="text-xs px-2 py-1 bg-primaryLight text-primary rounded-full">{report.category}</span>
              </>
            )}
          </div>
        </header>
        
        <div 
          className="prose prose-lg max-w-none font-serif leading-tight"
          dangerouslySetInnerHTML={{ __html: report.contentHtml }} 
        />
      </article>
    </div>
  );
}
