import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Directory where blog posts will be stored
const postsDirectory = path.join(process.cwd(), 'content/blog');
// Directory where reports will be stored
const reportsDirectory = path.join(process.cwd(), 'content/reports');

export type PostData = {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  coverImage?: string;
  author?: string;
  category?: string;
  contentHtml: string;
  [key: string]: any;
};

export function getSortedPostsData(directory = postsDirectory): PostData[] {
  // Get file names under /content/blog or /content/reports
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    return [];
  }
  
  const fileNames = fs.readdirSync(directory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...(matterResult.data as { 
          date: string; 
          title: string; 
          excerpt?: string;
          coverImage?: string;
          author?: string;
          category?: string;
        }),
        contentHtml: '', // Add empty contentHtml property to satisfy TypeScript
        content: matterResult.content
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(directory = postsDirectory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    return [];
  }
  
  const fileNames = fs.readdirSync(directory);
  return fileNames.filter(fileName => fileName.endsWith('.md')).map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export async function getPostData(id: string, directory = postsDirectory): Promise<PostData> {
  const fullPath = path.join(directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { 
      date: string; 
      title: string;
      excerpt?: string;
      coverImage?: string;
      author?: string;
      category?: string;
    })
  };
}

// Helper functions specifically for reports
export function getSortedReportsData() {
  return getSortedPostsData(reportsDirectory);
}

export function getAllReportIds() {
  return getAllPostIds(reportsDirectory);
}

export async function getReportData(id: string) {
  return getPostData(id, reportsDirectory);
}
