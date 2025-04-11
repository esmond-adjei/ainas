import Link from 'next/link';
import { getSortedPostsData } from '@/lib/data-provider';
import ListPageLayout from '@/components/layout/ListPageLayout';
import { BlogCard } from '@/components/BlogCard';

export const metadata = {
  title: 'Blog - AINAS',
  description: 'Read our latest blog posts on sustainable development and community initiatives.',
};

export default function Blog() {
  const allPostsData = getSortedPostsData();
  
  return (
      <ListPageLayout
      title="Blog"
      subtitle="Read our latest blog posts on sustainable development and community initiatives."
      bannerImage="/images/team-banner.webp"
    >
      {allPostsData.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">No blog posts available yet. Check back soon!</p>
        </div>
      ) : (
        allPostsData.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block">
            <BlogCard key={post.id} post={post} />
          </Link>
        ))
      )}
      </ListPageLayout>
  );
}
