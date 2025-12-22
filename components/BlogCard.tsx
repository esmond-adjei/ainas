import { PostData } from "@/lib/data-provider";


export function BlogCard({ post }: { post: PostData }) {
    const postDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(new Date(post.date));

    return (
        <article className="group border border-borderColor rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
            <time className="text-sm text-gray-500">{postDate}</time>
            <h2 className="text-xl font-serif font-bold mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-3">{post.title}</h2>
            {post.excerpt && <p className="text-sm text-gray-600 mb-3 line-clamp-3">{post.excerpt}</p>}
            <div className="flex justify-between items-center mt-4">
              {post.category && <span className="text-xs px-2 py-1 bg-primaryLight text-primary rounded-full">{post.category}</span>}
              {post.author && <span className="text-sm text-gray-500">By {post.author}</span>}
            </div>
          </div>
        </article>
    );
  }
  