import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaGraduationCap } from 'react-icons/fa';
import { images } from '../../data/media';

const slides = [
  {
    image: images.home.hero,
    title: 'SSKV College of Arts & Science for Women',
    subtitle: 'Empowering Women Through Quality Education — Affiliated to University of Madras, Kanchipuram',
    cta1: { label: 'Explore Programs', href: '/academics' },
    cta2: { label: 'Contact Us', href: '/contact' },
  },
  {
    image: images.home.welcomeSection,
    title: 'Shaping Future Leaders Since Inception',
    subtitle: 'Quality education across 11 UG programs in Arts, Science, Commerce & Professional streams',
    cta1: { label: 'Our Departments', href: '/academics' },
    cta2: { label: 'About SSKV', href: '/about' },
  },
  {
    image: images.home.students,
    title: 'A Campus That Nurtures Excellence',
    subtitle: 'State-of-the-art facilities, experienced faculty, and a vibrant campus life for holistic development',
    cta1: { label: 'Gallery', href: '/gallery' },
    cta2: { label: 'Contact Us', href: '/contact' },
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

export default function HeroCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoPlay, setAutoPlay] = useState(true);

  const slideIndex = ((page % slides.length) + slides.length) % slides.length;

  const paginate = useCallback((newDirection) => {
    setPage(([prev]) => [prev + newDirection, newDirection]);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [autoPlay, paginate]);

  const handleManual = (direction) => {
    setAutoPlay(false);
    paginate(direction);
    // Resume auto-play after 10s of inactivity
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goTo = (index) => {
    const dir = index > slideIndex ? 1 : -1;
    setAutoPlay(false);
    setPage([index, dir]);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const slide = slides[slideIndex];

  return (
    <div className="relative w-full h-[75vh] min-h-[500px] overflow-hidden bg-primary-900">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Slide image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.opacity = 0; }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-900/60 to-primary-900/30" />

          {/* Slide content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom mx-auto px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-2xl"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-400/20 border border-accent-400/40 text-accent-300 text-sm font-semibold rounded-full mb-5">
                  <FaGraduationCap />
                  Affiliated to University of Madras
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={slide.cta1.href}
                    className="px-6 py-3 bg-accent-400 text-primary-900 font-semibold rounded-lg hover:bg-accent-300 transition-colors font-body"
                  >
                    {slide.cta1.label}
                  </Link>
                  <Link
                    to={slide.cta2.href}
                    className="px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors font-body"
                  >
                    {slide.cta2.label}
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrow controls */}
      <button
        onClick={() => handleManual(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => handleManual(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === slideIndex
                ? 'w-8 h-2.5 bg-accent-400'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
