import { BackButton } from '@/components/BackButton';
import { PageHero } from '@/components/layout/PageHero';
import { getAllPostIds, getPostData } from '@/lib/data-provider';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

type Params = Promise<{ id: string}>

export async function generateMetadata({ params }: { params: Params }) {
  const resolvedParams = await params;
  const post = await getPostData(decodeURIComponent(resolvedParams.id));
  return {
    title: `${post.title} - AINAS Blog`,
    description: post.excerpt || `Read our blog post about ${post.title}`,
  };
}


export default async function Post({ params }: { params: Params }) {
  const resolvedParams = await params;
  const post = await getPostData(decodeURIComponent(resolvedParams.id));
  const postDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
  }).format(new Date(post.date));
  return (
    <><PageHero
      title={post.title}
      description={post.excerpt || ''}
      backgroundImage={post.coverImage || ''} 
      />
      
      <div className="container relative mx-auto px-4 py-12">
        <BackButton className="hidden md:block absolute left-10" />

        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <div className="flex flex-wrap gap-1 md:gap-3 items-center text-gray-600">
              <time className="text-sm">{postDate}</time>
              {post.author && (
                <>
                  <span className="text-sm">•</span>
                  <span className="text-sm">By {post.author}</span>
                </>
              )}
              {post.category && (
                <>
                  <span className="text-sm">•</span>
                  <span className="text-xs px-2 py-1 bg-primaryLight text-primary rounded-full">{post.category}</span>
                </>
              )}
            </div>
          </header>

          <div
            className="prose md:prose-lg max-w-none font-serif leading-tight"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </div>
    </>
  );
}
