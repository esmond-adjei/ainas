import Link from 'next/link';
import { getSortedPostsData, PostData } from '@/lib/blog';

export const metadata = {
  title: 'Blog - Ainas',
  description: 'Read our latest blog posts on sustainable development and community initiatives.',
};

export default function Blog() {
  const allPostsData = getSortedPostsData();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Blog</h1>
      
      {allPostsData.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">No blog posts available yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPostsData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

function BlogCard({ post }: { post: PostData }) {
  return (
    <Link href={`/blog/${post.id}`} className="block group">
      <article className="border border-borderColor rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {post.coverImage && (
          <div className="aspect-w-16 aspect-h-9 w-full relative">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="object-cover w-full h-48"
            />
          </div>
        )}
        <div className="p-5">
          <time className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</time>
          <h2 className="text-xl font-serif font-bold mt-2 mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
          {post.excerpt && <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>}
          <div className="flex justify-between items-center mt-4">
            {post.category && <span className="text-xs px-2 py-1 bg-primaryLight text-primary rounded-full">{post.category}</span>}
            {post.author && <span className="text-sm text-gray-500">By {post.author}</span>}
          </div>
        </div>
      </article>
    </Link>
  );
}
