import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Directory constants
const CONTENT_DIR = path.join(process.cwd(), 'content');
const postsDirectory = path.join(CONTENT_DIR, 'blog');
const reportsDirectory = path.join(CONTENT_DIR, 'reports');
const teamDirectory = path.join(CONTENT_DIR, 'team');

const contentCache = new Map<string, any>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export type PostData = {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  coverImage?: string;
  author?: string;
  category?: string;
  contentHtml: string;
  content: string;
  [key: string]: any;
};

export type TeamMemberData = {
  id: string;
  name: string;
  title: string;
  imageSrc: string;
  slug: string;
  summary?: string;
  bio?: string;
  contentHtml: string;
  content: string;
  order?: number;
  isEmpty?: boolean;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  [key: string]: any;
};

type ContentItem = PostData | TeamMemberData;

export class ContentError extends Error {
  constructor(message: string, public readonly cause?: Error) {
    super(message);
    this.name = 'ContentError';
  }
}

function ensureDirectoryExists(directory: string): void {
  try {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
  } catch (error) {
    const errorMsg = `Failed to create directory ${directory}`;
    console.error(errorMsg, error);
    throw new ContentError(errorMsg, error instanceof Error ? error : undefined);
  }
}

function validateId(id: string): boolean {
  return Boolean(id) && !(/[\/\\<>:"|?*]/.test(id));
}

function getCacheKey(type: string, id: string): string {
  return `${type}:${id}`;
}

function getFromCache<T>(type: string, id: string): T | undefined {
  const key = getCacheKey(type, id);
  const cachedItem = contentCache.get(key);
  
  if (cachedItem && Date.now() - cachedItem.timestamp < CACHE_TTL) {
    return cachedItem.data as T;
  }
  
  return undefined;
}

function addToCache<T>(type: string, id: string, data: T): void {
  const key = getCacheKey(type, id);
  contentCache.set(key, { data, timestamp: Date.now() });
}

function clearCache(): void {
  contentCache.clear();
}

async function processMarkdownContent(content: string): Promise<string> {
  try {
    const processedContent = await remark()
      .use(html)
      .process(content);
    return processedContent.toString();
  } catch (error) {
    const errorMsg = 'Error processing markdown content';
    console.error(errorMsg, error);
    throw new ContentError(errorMsg, error instanceof Error ? error : undefined);
  }
}

function processMarkdownContentSync(content: string): string {
  try {
    const processedContent = remark()
      .use(html)
      .processSync(content);
    return processedContent.toString();
  } catch (error) {
    const errorMsg = 'Error processing markdown content synchronously';
    console.error(errorMsg, error);
    throw new ContentError(errorMsg, error instanceof Error ? error : undefined);
  }
}

export function getSortedContentData<T extends ContentItem>(
  directory: string, 
  type: string,
  processContentImmediately = false
): T[] {
  ensureDirectoryExists(directory);
  
  const cached = getFromCache<T[]>(type, 'sortedList');
  if (cached) return cached;
  
  try {
    const fileNames = fs.readdirSync(directory);
    const allContentData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        
        if (!validateId(id)) {
          console.warn(`Skipping file with invalid ID: ${fileName}`);
          return null;
        }
        
        const fullPath = path.join(directory, fileName);
        
        try {
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const matterResult = matter(fileContents);
          
          const contentData = {
            id,
            ...(matterResult.data as Omit<T, 'id' | 'contentHtml' | 'content'>),
            content: matterResult.content
          } as T;
          
          if (processContentImmediately) {
            contentData.contentHtml = processMarkdownContentSync(matterResult.content);
            if (type === 'team') {
              (contentData as any).isEmpty = !contentData.contentHtml?.trim();
            }
          } else {
            contentData.contentHtml = '';
          }
          
          return contentData as T;
        } catch (error) {
          console.error(`Error reading file ${fullPath}:`, error);
          return null;
        }
      })
      .filter((item): item is T => item !== null);

    let sortedData: T[];
    
    if (type === 'team') {
      sortedData = allContentData.sort((a, b) => {
        if ('order' in a && 'order' in b && a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        } else if ('order' in a && a.order !== undefined) {
          return -1;
        } else if ('order' in b && b.order !== undefined) {
          return 1;
        } else if ('name' in a && 'name' in b) {
          return (a.name || '').localeCompare(b.name || '');
        }
        return 0;
      });
    } else {
      sortedData = allContentData.sort((a, b) => {
        if (!('date' in a) || !('date' in b)) return 0;
        if (!a.date || !b.date) return 0;
        return a.date < b.date ? 1 : -1;
      });
    }
    
    addToCache(type, 'sortedList', sortedData);
    
    return sortedData;
  } catch (error) {
    const errorMsg = `Error reading directory ${directory}`;
    console.error(errorMsg, error);
    throw new ContentError(errorMsg, error instanceof Error ? error : undefined);
  }
}

export function getAllContentIds(directory: string, type: string) {
  ensureDirectoryExists(directory);
  
  const cached = getFromCache<Array<{params: {id: string}}>>(type, 'allIds');
  if (cached) return cached;
  
  try {
    const fileNames = fs.readdirSync(directory);
    const ids = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        if (!validateId(id)) {
          console.warn(`Skipping file with invalid ID: ${fileName}`);
          return null;
        }
        return {
          params: { id }
        };
      })
      .filter(item => item !== null) as Array<{params: {id: string}}>;
    
    addToCache(type, 'allIds', ids);
    
    return ids;
  } catch (error) {
    const errorMsg = `Error getting content IDs from ${directory}`;
    console.error(errorMsg, error);
    throw new ContentError(errorMsg, error instanceof Error ? error : undefined);
  }
}

export async function getContentData<T extends ContentItem>(
  id: string, 
  directory: string, 
  type: string
): Promise<T> {
  if (!validateId(id)) {
    throw new ContentError(`Invalid content ID: ${id}`);
  }
  
  const cached = getFromCache<T>(type, id);
  if (cached) return cached;
  
  try {
    const fullPath = path.join(directory, `${id}.md`);
    if (!fs.existsSync(fullPath)) {
      throw new ContentError(`File not found: ${fullPath}`);
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const contentHtml = await processMarkdownContent(matterResult.content);

    const contentData = {
      id,
      contentHtml,
      content: matterResult.content,
      ...(matterResult.data as Omit<T, 'id' | 'contentHtml' | 'content'>)
    } as T;
    
    if (type === 'team') {
      (contentData as any).isEmpty = !contentHtml.trim();
    }
    
    addToCache(type, id, contentData);
    
    return contentData;
  } catch (error) {
    if (error instanceof ContentError) {
      throw error;
    }
    const errorMsg = `Error getting content data for ID ${id}`;
    console.error(errorMsg, error);
    throw new ContentError(errorMsg, error instanceof Error ? error : undefined);
  }
}

export function getSortedPostsData(): PostData[] {
  return getSortedContentData<PostData>(postsDirectory, 'posts');
}

export function getAllPostIds() {
  return getAllContentIds(postsDirectory, 'posts');
}

export async function getPostData(id: string): Promise<PostData> {
  return getContentData<PostData>(id, postsDirectory, 'posts');
}

export function getSortedReportsData(): PostData[] {
  return getSortedContentData<PostData>(reportsDirectory, 'reports');
}

export function getAllReportIds() {
  return getAllContentIds(reportsDirectory, 'reports');
}

export async function getReportData(id: string): Promise<PostData> {
  return getContentData<PostData>(id, reportsDirectory, 'reports');
}

export function getSortedTeamMembersData(): TeamMemberData[] {
  return getSortedContentData<TeamMemberData>(teamDirectory, 'team', true);
}

export function getAllTeamMemberIds() {
  return getAllContentIds(teamDirectory, 'team');
}

export async function getTeamMemberData(id: string): Promise<TeamMemberData> {
  return getContentData<TeamMemberData>(id, teamDirectory, 'team');
}

export function getTeamMemberBySlug(slug: string): TeamMemberData | undefined {
  if (!slug) return undefined;
  
  const members = getSortedTeamMembersData();
  return members.find(member => member.slug === slug);
}

export function getTeamMemberCount(count?: number): TeamMemberData[] {
  const members = getSortedTeamMembersData();
  if (count && count > 0) {
    return members.slice(0, count);
  }
  return members;
}

export function __clearContentCache() {
  clearCache();
}
