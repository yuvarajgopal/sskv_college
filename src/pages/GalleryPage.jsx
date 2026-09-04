import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImage, FaCamera, FaUserGraduate, FaTrophy, FaCalendarAlt } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import { images } from '../data/media';

// ✅ CATEGORY IMAGES MAPPED (CORE FIX)
const categoryImages = [
  // Sports
  { id: 1, src: '/images/gallery/sports_1.jpeg', alt: 'Sports Event', category: 'sports' },
  { id: 2, src: '/images/gallery/sports_2.jpeg', alt: 'Sports Event', category: 'sports' },
  { id: 3, src: '/images/gallery/sports_3.jpeg', alt: 'Sports Event', category: 'sports' },
  { id: 4, src: '/images/gallery/sports_4.jpeg', alt: 'Sports Event', category: 'sports' },
  { id: 5, src: '/images/gallery/sports_5.jpeg', alt: 'Sports Event', category: 'sports' },
  { id: 6, src: '/images/gallery/sports_6.jpeg', alt: 'Sports Event', category: 'sports' },
  { id: 7, src: '/images/gallery/sports_7.jpeg', alt: 'Sports Event', category: 'sports' },
  { id: 8, src: '/images/gallery/sports_8.jpg', alt: 'Sports Event', category: 'sports' },
  { id: 9, src: '/images/gallery/sports_9.jpg', alt: 'Sports Event', category: 'sports' },
  { id: 10, src: '/images/gallery/sports_10.jpg', alt: 'Sports Event', category: 'sports' },
  // Festival
  { id: 11, src: '/images/gallery/festival_1.jpeg', alt: 'Festival Celebration', category: 'festival-celebrations' },
  { id: 12, src: '/images/gallery/festival_2.jpeg', alt: 'Festival Celebration', category: 'festival-celebrations' },

  // National
  { id: 13, src: '/images/gallery/national_1.jpeg', alt: 'National Event', category: 'national-events' },
  { id: 14, src: '/images/gallery/national_2.jpeg', alt: 'National Event', category: 'national-events' },
  { id: 15, src: '/images/gallery/national_3.jpeg', alt: 'National Event', category: 'national-events' },
  { id: 16, src: '/images/gallery/national_4.jpeg', alt: 'National Event', category: 'national-events' },
  { id: 17, src: '/images/gallery/national_5.jpeg', alt: 'National Event', category: 'national-events' },

  // Academic
  { id: 18, src: '/images/gallery/academic_1.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 19, src: '/images/gallery/academic_2.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 20, src: '/images/gallery/academic_3.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 21, src: '/images/gallery/academic_4.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 22, src: '/images/gallery/academic_5.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 23, src: '/images/gallery/academic_6.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 24, src: '/images/gallery/academic_7.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 25, src: '/images/gallery/academic_8.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 26, src: '/images/gallery/academic_9.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 27, src: '/images/gallery/academic_10.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 28, src: '/images/gallery/academic_11.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 29, src: '/images/gallery/academic_12.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 30, src: '/images/gallery/academic_13.jpeg', alt: 'Academic Event', category: 'academic-events' },
  { id: 31, src: '/images/gallery/academic_14.jpg', alt: 'Academic Event', category: 'academic-events' },
  { id: 32, src: '/images/gallery/academic_15.jpg', alt: 'Academic Event', category: 'academic-events' },
  

  // NSS / YRC
  { id: 33, src: '/images/gallery/nss_1.jpg', alt: 'NSS Activity', category: 'nss-yrc' },
  { id: 34, src: '/images/gallery/nss_2.jpeg', alt: 'YRC Activity', category: 'nss-yrc' },
  { id: 35, src: '/images/gallery/nss_3.jpeg', alt: 'YRC Activity', category: 'nss-yrc' },
];

const galleryCategories = [
  { id: 'all', label: 'All', icon: FaImage },
  { id: 'national-events', label: 'National Events', icon: FaCamera },
  { id: 'festival-celebrations', label: 'Festivals', icon: FaCalendarAlt },
  { id: 'academic-events', label: 'Academic Events', icon: FaUserGraduate },
  { id: 'sports', label: 'Sports', icon: FaTrophy },
  { id: 'nss-yrc', label: 'NSS / YRC', icon: FaImage },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // ✅ USE NEW IMAGE SOURCE
  const filtered =
    activeCategory === 'all'
      ? categoryImages
      : categoryImages.filter((item) => item.category === activeCategory);

  function openLightbox(index) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prevImage() {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
  }

  function nextImage() {
    setLightboxIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
  }

  return (
    <>
      <Hero
        title="Photo Gallery"
        subtitle="Capturing moments of learning, growth, and celebration"
        height="medium"
        breadcrumb="Gallery"
        bannerImage={images.gallery?.events?.[0]}
      />

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-accent-400 text-primary-900'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                <cat.icon className="text-xs" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openLightbox(index)}
                  className="cursor-pointer group relative overflow-hidden rounded-xl shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all flex items-end">
                    <div className="w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-white text-sm font-semibold">{item.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[70] bg-primary-900/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white p-3">
              <FaTimes />
            </button>

            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 text-white p-3">
              <FaChevronLeft />
            </button>

            <div className="max-w-4xl w-full mx-8" onClick={(e) => e.stopPropagation()}>
              <img src={filtered[lightboxIndex].src} className="w-full rounded-xl" />
              <p className="text-white text-center mt-3">{filtered[lightboxIndex].alt}</p>
            </div>

            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 text-white p-3">
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}