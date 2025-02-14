'use client';

import { useState } from 'react';
import ListPageLayout from '@/components/ListPageLayout';
import GalleryViewer, { GalleryImage } from '@/components/GalleryViewer';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: '/images/gallery/artifacts-bangles.jpg', alt: 'Artifacts Bangles', caption: 'Traditional artifacts showcasing cultural heritage' },
  { src: '/images/gallery/artifacts.jpg', alt: 'Artifacts', caption: 'Historical artifacts representing African craftsmanship' },
  { src: '/images/gallery/caterpilla.jpg', alt: 'Caterpillar Close-up', caption: 'Nature’s tiny wonders up close' },
  { src: '/images/gallery/cocoa-with-dogs.jpg', alt: 'Cocoa and Dogs', caption: 'A cocoa farm visit with friendly companions' },
  { src: '/images/gallery/crocodile.jpg', alt: 'Crocodile', caption: 'Wildlife conservation efforts in action' },
  { src: '/images/gallery/dark-butterfly.jpg', alt: 'Dark Butterfly', caption: 'A beautiful butterfly resting on a leaf' },
  { src: '/images/gallery/dirty-stream-uphill.jpg', alt: 'Dirty Stream Uphill', caption: 'Environmental challenges in local water sources' },
  { src: '/images/gallery/caleb-selfie.jpg', alt: 'Caleb Selfie', caption: 'A moment captured in the heart of the community' },
  { src: '/images/gallery/dirty-stream.jpg', alt: 'Dirty Stream', caption: 'Community water management and sustainability efforts' },
  { src: '/images/gallery/grasshopper-close.jpg', alt: 'Grasshopper Close-up', caption: 'Macro photography of a grasshopper' },
  { src: '/images/gallery/grasshopper.jpg', alt: 'Grasshopper', caption: 'A grasshopper resting on a green leaf' },
  { src: '/images/gallery/lagoon-resort.jpg', alt: 'Lagoon Resort', caption: 'Serene views from a waterfront resort' },
  { src: '/images/gallery/larabanga-mosque.jpg', alt: 'Larabanga Mosque', caption: 'The historic Larabanga Mosque, a cultural treasure' },
  { src: '/images/gallery/mango-fields.jpg', alt: 'Mango Fields', caption: 'A vast expanse of mango trees under the sun' },
  { src: '/images/gallery/palm-resort.jpg', alt: 'Palm Resort', caption: 'Relaxing getaway surrounded by palm trees' },
  { src: '/images/gallery/pink-petal-large.jpg', alt: 'Large Pink Petal', caption: 'A delicate pink petal in full bloom' },
  { src: '/images/gallery/pink-petals.jpg', alt: 'Pink Petals', caption: 'Vibrant pink petals in the garden' },
  { src: '/images/gallery/rhino-pond.jpg', alt: 'Rhino Pond', caption: 'A rhinoceros cooling off in a pond' },
  { src: '/images/gallery/rhinoceros.jpg', alt: 'Rhinoceros', caption: 'A magnificent rhinoceros in the wild' },
  { src: '/images/gallery/suspension-bridge.jpg', alt: 'Suspension Bridge', caption: 'A scenic suspension bridge in nature' },
  { src: '/images/gallery/statuette.jpg', alt: 'Statuette', caption: 'A beautifully crafted cultural statuette' },
  { src: '/images/gallery/yellow-petals.jpg', alt: 'Yellow Petals', caption: 'Bright yellow petals in a peaceful setting' },
  { src: '/images/gallery/waterfall.jpg', alt: 'Waterfall', caption: 'A breathtaking waterfall in the wilderness' },
];


export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const IMAGES_PER_PAGE = 4 * 2; // row * col
  const totalPages = Math.ceil(GALLERY_IMAGES.length / IMAGES_PER_PAGE);
  const startIndex = currentPage * IMAGES_PER_PAGE;
  const currentImages = GALLERY_IMAGES.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const columns = [0, 1, 2, 3];

  return (
    <ListPageLayout
      title="Gallery"
      subtitle="Explore our visual journey of impact and transformation across Africa"
      bannerImage="/images/gallery/statuette.jpg"
      otherChildren={
        <div className=''>
        {/* Pagination Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <span>
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={currentPage === totalPages - 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      }
    >
        {columns.map((colIndex) => {
          const columnImages = currentImages.filter((_, index) => index % 4 === colIndex);
          return (
            <div className='space-y-4' key={colIndex}>
              {columnImages.map((image, rowIndex) => {
                const imageIndexInPage = colIndex + rowIndex * 4;
                const actualImageIndex = imageIndexInPage; // Now using page-relative index
                return (
                  <div
                    key={startIndex + actualImageIndex}
                    onClick={() => setSelectedImage(actualImageIndex)}
                    className="cursor-pointer"
                  >
                    <GalleryImage image={image} />
                  </div>
                );
              })}
            </div>
          );
        })}

      {selectedImage !== null && (
        <GalleryViewer
          images={currentImages} // Pass only current page images
          initialIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </ListPageLayout>
  );
}
