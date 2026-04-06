import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { navLinks } from '../../data/navigation';

// Primary visible links (flat links shown directly in nav bar)
const primaryLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    children: [
      { label: 'About SSKV', path: '/about' },
      { label: 'Goals & Vision', path: '/about/goals' },
      { label: 'Group of Institutions', path: '/about/institutions' },
      { label: 'College Timeline', path: '/about/timeline' },
      { label: 'Policy Documents', path: '/policy-documents' },
    ],
  },
  {
    label: 'Administration',
    path: '/administration',
    children: [
      { label: 'College Governing Body', path: '/administration/governing-body' },
      { label: 'President', path: '/administration/president' },
      { label: 'Vice-President', path: '/administration/vice-president' },
      { label: "Secretary's Message", path: '/administration/secretary' },
      { label: 'Joint Secretary', path: '/administration/joint-secretary' },
      { label: "Principal's Message", path: '/administration/principal' },
      { label: 'Chief Superintendent of Examination', path: '/administration/chief-superintendent' },
      { label: 'Finance Section', path: '/administration/finance' },
      { label: 'Executive Committee', path: '/administration/executive-committee' },
      { label: 'Internal Complaints Committee', path: '/administration/icc' },
      { label: 'College Organogram', path: '/administration/organogram' },
    ],
  },
  {
    label: 'Academics',
    path: '/academics',
    children: [
      { label: 'Programs Offered', path: '/academics' },
      { label: 'Academic Calendar', path: '/academic-calendar' },
      { label: 'CBCS Regulations', url: 'https://www.unom.ac.in/index.php?route=admission/cbcssyllabus' },
      { label: 'CBCS Statutes/Ordinances', url: 'https://www.unom.ac.in/index.php?route=academic/cbcs' },
      { label: 'Departments', path: '/academics' },
      { label: 'IQAC', path: '/iqac' },
      { label: 'Library', path: '/library' },
      { label: 'Academic Collaborations', path: '/academic-collaborations' },
    ],
  },
  {
    label: 'Admissions',
    path: '/admissions',
    children: [
      { label: 'Prospectus with Fees', path: '/fees' },
      { label: 'Admission Process & Guidelines', path: '/admissions' },
      { label: 'Fee Refund Policy', path: '/fees' },
      { label: 'Online Application Form', path: '/apply' },
      { label: 'Download Application', path: '/apply' },
    ],
  },
];

function DropdownNavItem({ link, isActive }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        to={link.path}
        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium font-body transition-colors duration-200 rounded-lg whitespace-nowrap ${
          isActive ? 'text-accent-400' : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        {link.label}
        <FaChevronDown className={`text-[10px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </Link>
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
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium font-body transition-colors duration-200 rounded-lg whitespace-nowrap text-white/80 hover:text-white hover:bg-white/10"
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
            className="absolute top-full right-0 mt-1 bg-primary-900 border border-white/10 rounded-lg shadow-2xl py-1.5 z-50 flex"
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
                  ?.children?.map((child) =>
                    child.url ? (
                      <a
                        key={child.label}
                        href={child.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => { setOpen(false); setActiveSubmenu(null); }}
                        className="block px-4 py-2.5 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
                      >
                        {child.label} ↗
                      </a>
                    ) : (
                      <Link
                        key={child.label}
                        to={child.path}
                        onClick={() => { setOpen(false); setActiveSubmenu(null); }}
                        className="block px-4 py-2.5 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
                      >
                        {child.label}
                      </Link>
                    )
                  )}
              </div>
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
        className={`block px-6 py-3 text-2xl font-heading font-semibold transition-colors ${
          isActive ? 'text-accent-400' : 'text-white/80 hover:text-white'
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
        className="w-full flex items-center justify-center gap-2 px-6 py-3 text-2xl font-heading font-semibold text-white/80 hover:text-white transition-colors"
      >
        {link.label}
        <FaChevronDown className={`text-sm transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
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
            <div className="pb-2 flex flex-col items-center">
              {link.children.map((child) =>
                child.url ? (
                  <a
                    key={child.label}
                    href={child.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onNavigate}
                    className="block px-4 py-1.5 text-sm text-white/60 hover:text-accent-400 transition-colors"
                  >
                    {child.label} ↗
                  </a>
                ) : (
                  <Link
                    key={child.label}
                    to={child.path}
                    onClick={onNavigate}
                    className="block px-4 py-1.5 text-sm text-white/60 hover:text-accent-400 transition-colors"
                  >
                    {child.label}
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

// Links with dropdowns for "More" menu (everything beyond the 6 primary flat links)
const moreMenuLinks = navLinks.filter(
  (link) => !primaryLinks.some((p) => p.path === link.path) && link.children
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScrollDirection();
  const location = useLocation();
  const isScrolled = scrollY > 50;

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-900/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent-400 flex items-center justify-center">
              <span className="text-primary-900 font-heading font-bold text-lg md:text-xl">S</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-heading font-bold text-lg leading-tight">SSKV College</div>
              <div className="text-white/60 text-xs">Arts & Science for Women</div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryLinks.map((link) =>
              link.children ? (
                <DropdownNavItem
                  key={link.path}
                  link={link}
                  isActive={location.pathname === link.path || location.pathname.startsWith(link.path + '/')}
                />
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium font-body transition-colors duration-200 rounded-lg ${
                    location.pathname === link.path
                      ? 'text-accent-400'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent-400 rounded-full"
                    />
                  )}
                </Link>
              )
            )}
            {moreMenuLinks.length > 0 && <MoreDropdown links={moreMenuLinks} />}
          </div>

          {/* Right side: Apply Now + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/admissions"
              className="hidden md:inline-flex px-5 py-2.5 bg-accent-400 text-primary-900 text-sm font-semibold rounded-lg hover:bg-accent-300 transition-colors duration-200 font-body"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </motion.nav>

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
            <div className="flex flex-col h-full p-6">
              {/* Close button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              {/* Centered nav links */}
              <nav className="flex flex-col items-center justify-center flex-1 gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <MobileAccordionItem
                      link={link}
                      onNavigate={() => setMobileOpen(false)}
                      isActive={location.pathname === link.path}
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-6"
                >
                  <Link
                    to="/admissions"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex px-8 py-3 bg-accent-400 text-primary-900 text-lg font-semibold rounded-lg hover:bg-accent-300 transition-colors font-body"
                  >
                    Apply Now
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
