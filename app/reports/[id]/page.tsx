import { BackButton } from '@/components/BackButton';
import { PageHero } from '@/components/layout/PageHero';
import { getAllReportIds, getReportData } from '@/lib/data-provider';

export async function generateStaticParams() {
  const paths = getAllReportIds();
  return paths;
}

type Params = Promise<{ id: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const resolvedParams = await params;
  const report = await getReportData(decodeURIComponent(resolvedParams.id));
  return {
    title: `${report.title} - AINAS Reports`,
    description: report.excerpt || `View our detailed report on ${report.title}`,
  };
}

export default async function Report({ params }: { params: Params }) {
  const resolvedParams = await params;
  const report = await getReportData(decodeURIComponent(resolvedParams.id));
  
  return (
        <><PageHero
          title={report.title}
          description={report.excerpt || ''}
          backgroundImage={report.coverImage || ''} 
          />
          
          <div className="container relative mx-auto px-4 py-12">
            <BackButton className="absolute left-10" />
    
            <article className="max-w-3xl mx-auto">
              <header className="mb-8">
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
                dangerouslySetInnerHTML={{ __html: report.contentHtml }} />
            </article>
          </div>
        </>
  );
}
