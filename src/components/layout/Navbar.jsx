import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks, quickLinks } from '../../data/navigation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Sticky after scrolling past the LogoBar (~120px on md+)
      setIsSticky(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const allMobileLinks = [
    ...navLinks,
    { label: 'NAAC', path: '/naac' },
    { label: 'Mandatory Disclosures', path: '/mandatory-disclosures' },
  ];

  return (
    <>
      <nav
        className={`bg-primary-800 z-50 transition-shadow duration-300 ${
          isSticky ? 'fixed top-0 left-0 right-0 shadow-lg' : 'relative'
        }`}
      >
        <div className="container-custom mx-auto px-4 md:px-8 flex items-center justify-between h-12">
          {/* Mobile: Logo (only visible on mobile since LogoBar is hidden) */}
          <Link to="/" className="flex items-center gap-2 md:hidden">
            <div className="w-8 h-8 rounded-full bg-accent-400 flex items-center justify-center flex-shrink-0">
              <span className="text-primary-900 font-heading font-bold text-sm">S</span>
            </div>
            <div>
              <div className="text-white font-heading font-bold text-sm leading-tight">SSKV College</div>
              <div className="text-white/60 text-[10px]">Arts & Science for Women</div>
            </div>
          </Link>

          {/* Desktop Nav links */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-1.5 text-sm font-medium font-body transition-colors duration-200 rounded ${
                  location.pathname === link.path
                    ? 'text-accent-400'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent-400 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/admissions"
              className="px-4 py-1.5 bg-accent-400 text-primary-900 text-sm font-semibold rounded-full hover:bg-accent-300 transition-colors duration-200 font-body"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <FaBars className="text-xl" />
          </button>
        </div>
      </nav>

      {/* Spacer when sticky to prevent content jump */}
      {isSticky && <div className="h-12" />}

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-primary-900/98 backdrop-blur-md"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-accent-400 flex items-center justify-center">
                    <span className="text-primary-900 font-heading font-bold">S</span>
                  </div>
                  <span className="text-white font-heading font-bold">SSKV College</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 overflow-y-auto">
                {allMobileLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 text-lg font-heading font-semibold rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? 'text-accent-400 bg-white/10'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-white/10">
                <Link
                  to="/admissions"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-8 py-3 bg-accent-400 text-primary-900 text-lg font-semibold rounded-lg hover:bg-accent-300 transition-colors font-body"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
