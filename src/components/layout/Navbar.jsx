import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { navLinks } from '../../data/navigation';

// First 5 links shown directly (Home + 4 main menus); items 5–11 go in "More"; last is Contact
const primaryLinks = navLinks.slice(0, 5);
const moreLinks = navLinks.slice(5, 12);
const contactLink = navLinks[navLinks.length - 1];

function DropdownNavItem({ link, isActive }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold font-heading transition-colors duration-200 rounded whitespace-nowrap ${
          isActive ? 'text-accent-400' : 'text-white/90 hover:text-white hover:bg-white/10'
        }`}
      >
        {link.label}
        <FaChevronDown className={`text-[10px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 bg-primary-900 border border-white/10 rounded-lg shadow-2xl min-w-[220px] py-1.5 z-50"
          >
            {link.children.map((child) =>
              child.url ? (
                <a
                  key={child.label}
                  href={child.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
                >
                  {child.label} ↗
                </a>
              ) : (
                <Link
                  key={child.label}
                  to={child.path}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
                >
                  {child.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordionItem({ link, onNavigate, isActive }) {
  const [open, setOpen] = useState(false);

  if (!link.children) {
    return (
      <Link
        to={link.path}
        onClick={onNavigate}
        className={`block px-4 py-2.5 text-sm font-heading font-semibold rounded-lg transition-colors ${
          isActive ? 'text-accent-400 bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-heading font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
      >
        {link.label}
        <FaChevronDown className={`text-xs transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-1 border-l border-white/10 ml-4 mt-0.5">
              {link.children.map((child) =>
                child.url ? (
                  <a
                    key={child.label}
                    href={child.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onNavigate}
                    className="block px-3 py-1.5 text-xs text-white/60 hover:text-accent-400 transition-colors rounded"
                  >
                    › {child.label} ↗
                  </a>
                ) : (
                  <Link
                    key={child.label}
                    to={child.path}
                    onClick={onNavigate}
                    className="block px-3 py-1.5 text-xs text-white/60 hover:text-accent-400 transition-colors rounded"
                  >
                    › {child.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MoreDropdown({ links }) {
  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setActiveSubmenu(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-semibold font-heading transition-colors duration-200 rounded whitespace-nowrap text-white/90 hover:text-white hover:bg-white/10"
      >
        More
        <FaChevronDown className={`text-[10px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 bg-primary-900 border border-white/10 rounded-lg shadow-2xl py-1.5 z-50 flex"
          >
            <div className="min-w-[210px] border-r border-white/10">
              {links.map((link) => (
                <button
                  key={link.label}
                  onMouseEnter={() => setActiveSubmenu(link.label)}
                  onClick={() => setActiveSubmenu((s) => (s === link.label ? null : link.label))}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors whitespace-nowrap ${
                    activeSubmenu === link.label
                      ? 'text-accent-400 bg-white/5'
                      : 'text-white/75 hover:text-accent-400 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {link.children && <FaChevronRight className="text-[10px] ml-2" />}
                </button>
              ))}
            </div>
            {activeSubmenu && (
              <div className="min-w-[210px] py-1">
                {links
                  .find((l) => l.label === activeSubmenu)
                  ?.children?.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      onClick={() => { setOpen(false); setActiveSubmenu(null); }}
                      className="block px-4 py-2.5 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
                    >
                      {child.label}
                    </Link>
                  ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 120);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`bg-primary-800 z-50 transition-shadow duration-300 ${
          isSticky ? 'fixed top-0 left-0 right-0 shadow-lg' : 'relative'
        }`}
      >
        <div className="container-custom mx-auto px-4 md:px-6 flex items-center justify-between min-h-14 py-2">
          {/* Mobile logo */}
          <Link to="/" className="flex items-center gap-2 lg:hidden">
            <div className="w-7 h-7 rounded-full bg-accent-400 flex items-center justify-center flex-shrink-0">
              <span className="text-primary-900 font-heading font-bold text-xs">S</span>
            </div>
            <div>
              <div className="text-white font-heading font-bold text-sm leading-tight">SSKV College</div>
              <div className="text-white/60 text-[9px]">Arts & Science for Women</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 justify-center flex-1">
            {primaryLinks.map((link) =>
              link.children ? (
                <DropdownNavItem
                  key={link.label}
                  link={link}
                  isActive={location.pathname === link.path}
                />
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-semibold font-heading transition-colors duration-200 rounded whitespace-nowrap ${
                    location.pathname === link.path
                      ? 'text-accent-400'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
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
              )
            )}
            <MoreDropdown links={moreLinks} />
            <Link
              to={contactLink.path}
              className={`relative px-3 py-2 text-sm font-semibold font-heading transition-colors duration-200 rounded whitespace-nowrap ${
                location.pathname === contactLink.path
                  ? 'text-accent-400'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {contactLink.label}
            </Link>
          </div>

          {/* Desktop Apply Now */}
          <Link
            to="/apply"
            className="hidden lg:block ml-2 px-4 py-2 bg-accent-400 text-primary-900 text-sm font-semibold rounded-full hover:bg-accent-300 transition-colors duration-200 font-heading whitespace-nowrap flex-shrink-0"
          >
            Apply Now
          </Link>

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

      {isSticky && <div className="h-11" />}

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-primary-900/98 backdrop-blur-md"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent-400 flex items-center justify-center">
                    <span className="text-primary-900 font-heading font-bold text-sm">S</span>
                  </div>
                  <span className="text-white font-heading font-bold">SSKV College</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Scrollable nav list */}
              <nav className="flex-1 overflow-y-auto px-4 py-3 space-y-0.5">
                {navLinks.map((link) => (
                  <MobileAccordionItem
                    key={link.label}
                    link={link}
                    onNavigate={() => setMobileOpen(false)}
                    isActive={location.pathname === link.path}
                  />
                ))}
              </nav>

              {/* Footer CTA */}
              <div className="px-6 py-4 border-t border-white/10">
                <Link
                  to="/apply"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-8 py-3 bg-accent-400 text-primary-900 text-base font-semibold rounded-lg hover:bg-accent-300 transition-colors font-body"
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
