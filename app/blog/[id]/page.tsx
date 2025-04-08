import { PageHero } from '@/components/landing-page/HeroSection';
import { BackButton } from '@/components/BackButton';
import { getAllPostIds, getPostData } from '@/lib/blog';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getPostData(id);
  return {
    title: `${post.title} - Ainas Blog`,
    description: post.excerpt || `Read our blog post about ${post.title}`,
  };
}

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getPostData(id);
  
  return (
    <><PageHero
      title={post.title}
      description={post.excerpt || ''}
      backgroundImage={post.coverImage || ''} 
      />
      
      <div className="container relative mx-auto px-4 py-12">
        <BackButton className="absolute left-10" />

        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            {/* <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{post.title}</h1> */}
            <div className="flex flex-wrap gap-3 items-center text-gray-600">
              <time className="text-sm">{new Date(post.date).toLocaleDateString()}</time>
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

          {/* {post.coverImage && (
            <div className="mb-8">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto rounded-lg" />
            </div>
          )} */}

          <div
            className="prose prose-lg max-w-none font-serif leading-tight"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </div></>
  );
}
