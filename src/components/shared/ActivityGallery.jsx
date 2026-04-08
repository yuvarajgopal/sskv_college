import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaCamera } from 'react-icons/fa';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

function SlideImage({ src, caption, color }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`w-full h-full bg-${color}-50 flex flex-col items-center justify-center gap-3`}>
        <FaCamera className={`text-5xl text-${color}-300`} />
        <p className={`text-${color}-400 text-sm font-medium`}>{caption}</p>
        <p className="text-neutral-400 text-xs">Photo coming soon</p>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={caption}
      onError={() => setFailed(true)}
      className="w-full h-full object-cover"
    />
  );
}

export default function ActivityGallery({ images = [], color = 'blue' }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoPlay, setAutoPlay] = useState(true);

  const slideIndex = ((page % images.length) + images.length) % images.length;

  const paginate = useCallback(
    (dir) => setPage(([prev]) => [prev + dir, dir]),
    []
  );

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [autoPlay, paginate, images.length]);

  if (images.length === 0) return null;

  const current = images[slideIndex];

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-100"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Slide area */}
      <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <SlideImage src={current.src} caption={current.caption} color={color} />
          </motion.div>
        </AnimatePresence>

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
          <p className="text-white font-semibold text-sm md:text-base">{current.caption}</p>
          <p className="text-white/60 text-xs mt-1">
            {slideIndex + 1} / {images.length}
          </p>
        </div>

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => paginate(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 py-3 bg-white">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > slideIndex ? 1 : -1])}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === slideIndex
                  ? `bg-${color}-500 scale-110`
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
