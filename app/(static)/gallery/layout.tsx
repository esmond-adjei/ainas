import { ROUTES } from '@/lib';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AINAS Gallery | Visual Journey of Impact in Africa',
  description:
    'Explore the AINAS gallery: a visual journey showcasing our impact, projects, and the transformative power of nature-based solutions across African communities.',
  keywords: [
    'AINAS',
    'Gallery',
    'photos',
    'images',
    'visuals',
    'impact stories',
    'nature-based solutions Africa',
    'community projects Africa',
    'environmental projects',
    'sustainable development gallery',
  ],
  openGraph: {
    title: 'AINAS Gallery | Visual Journey of Impact',
    description:
      'View photos and images from AINAS projects, showcasing our work in empowering African communities through nature-based solutions.',
    url: `https://www.ainas.org${ROUTES.gallery}`,
    siteName: 'AINAS',
    images: [
      {
        url: '/images/gallery/crocodile.jpg',
        width: 1200,
        height: 630,
        alt: 'AINAS Gallery - Explore our visual journey of impact and transformation across Africa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AINAS Gallery | Visual Journey of Impact in Africa',
    description:
      'Explore photos from AINAS, highlighting our commitment to nature-based solutions and community empowerment in Africa.',
    images: ['/images/gallery/artifacts.jpg', '/images/gallery/crocodile.jpg', '/images/gallery/caleb-selfie.jpg'],
  },
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
