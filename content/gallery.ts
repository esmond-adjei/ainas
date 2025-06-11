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


export const getGalleryImages = (start: number=0, end: number=GALLERY_IMAGES.length) => {
    return GALLERY_IMAGES.slice(start, end);
}

export const GALLERY_IMAGES_LENGTH = GALLERY_IMAGES.length;