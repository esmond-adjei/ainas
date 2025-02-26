'use client';

import { useState } from 'react';
import ListPageLayout from '@/components/ListPageLayout';
import GalleryViewer, { GalleryImage } from '@/components/GalleryViewer';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getGalleryImages, GALLERY_IMAGES_LENGTH } from '@/data/gallery';


export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const IMAGES_PER_PAGE = 4 * 2; // row * col
  const totalPages = Math.ceil(GALLERY_IMAGES_LENGTH / IMAGES_PER_PAGE);
  const startIndex = currentPage * IMAGES_PER_PAGE;
  const currentImages = getGalleryImages(startIndex, startIndex + IMAGES_PER_PAGE);

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
