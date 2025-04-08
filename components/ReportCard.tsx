import { PostData } from "@/lib/data-provider"

export function ReportCard({ report }: { report: PostData }) {
  return (
      <article className="group border border-borderColor rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
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
  );
}
