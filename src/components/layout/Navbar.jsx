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
      { label: 'Genesis and Growth', path: '/about?section=genesis' },
      { label: 'Institutional Development Plan', path: '/about?section=devplan' },
      { label: 'Affiliated University', url: 'https://unom.ac.in' },
      { label: 'Annual Reports', path: '/about?section=annual-reports' },
      { label: 'Annual Accounts Reports', path: '/annual-accounts' },
      { label: 'Best Practices', path: '/about?section=best-practices' },
      { label: 'Institutional Distinctiveness', path: '/about?section=distinctiveness' },
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
      { label: 'CBCS Regulations', path: '/cbcs-regulations' },
      { label: 'CBCS', url: 'https://www.unom.ac.in/index.php?route=academic/cbcs' },
      { label: 'Statutes/Ordinances Pertaining to Admissions/Academics', path: '/statutes-ordinances' },
      {
        label: 'Departments',
        path: '/academics',
        children: [
          { label: 'Tamil', path: '/departments/tamil', children: [
            { label: 'About the Department', path: '/departments/tamil?section=about' },
            { label: 'Faculty', path: '/departments/tamil?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/tamil?section=programmes' },
            { label: 'Department Activities', path: '/departments/tamil?section=activities' },
          ]},
          { label: 'English', path: '/departments/english', children: [
            { label: 'About the Department', path: '/departments/english?section=about' },
            { label: 'Faculty', path: '/departments/english?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/english?section=programmes' },
            { label: 'Department Activities', path: '/departments/english?section=activities' },
          ]},
          { label: 'Computer Science', path: '/departments/computer-science', children: [
            { label: 'About the Department', path: '/departments/computer-science?section=about' },
            { label: 'Faculty', path: '/departments/computer-science?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/computer-science?section=programmes' },
            { label: 'Department Activities', path: '/departments/computer-science?section=activities' },
          ]},
          { label: 'Mathematics', path: '/departments/mathematics', children: [
            { label: 'About the Department', path: '/departments/mathematics?section=about' },
            { label: 'Faculty', path: '/departments/mathematics?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/mathematics?section=programmes' },
            { label: 'Department Activities', path: '/departments/mathematics?section=activities' },
          ]},
          { label: 'BCA', path: '/departments/bca', children: [
            { label: 'About the Department', path: '/departments/bca?section=about' },
            { label: 'Faculty', path: '/departments/bca?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/bca?section=programmes' },
            { label: 'Department Activities', path: '/departments/bca?section=activities' },
          ]},
          { label: 'B.Com (General)', path: '/departments/bcom-general', children: [
            { label: 'About the Department', path: '/departments/bcom-general?section=about' },
            { label: 'Faculty', path: '/departments/bcom-general?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/bcom-general?section=programmes' },
            { label: 'Department Activities', path: '/departments/bcom-general?section=activities' },
          ]},
          { label: 'B.Com (CS)', path: '/departments/bcom-cs', children: [
            { label: 'About the Department', path: '/departments/bcom-cs?section=about' },
            { label: 'Faculty', path: '/departments/bcom-cs?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/bcom-cs?section=programmes' },
            { label: 'Department Activities', path: '/departments/bcom-cs?section=activities' },
          ]},
          { label: 'B.Com (A&F)', path: '/departments/bcom-af', children: [
            { label: 'About the Department', path: '/departments/bcom-af?section=about' },
            { label: 'Faculty', path: '/departments/bcom-af?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/bcom-af?section=programmes' },
            { label: 'Department Activities', path: '/departments/bcom-af?section=activities' },
          ]},
          { label: 'B.B.A', path: '/departments/bba', children: [
            { label: 'About the Department', path: '/departments/bba?section=about' },
            { label: 'Faculty', path: '/departments/bba?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/bba?section=programmes' },
            { label: 'Department Activities', path: '/departments/bba?section=activities' },
          ]},
          { label: 'Computer Science with AI', path: '/departments/cs-ai', children: [
            { label: 'About the Department', path: '/departments/cs-ai?section=about' },
            { label: 'Faculty', path: '/departments/cs-ai?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/cs-ai?section=programmes' },
            { label: 'Department Activities', path: '/departments/cs-ai?section=activities' },
          ]},
          { label: 'Criminology and Criminal Justice Science', path: '/departments/criminology', children: [
            { label: 'About the Department', path: '/departments/criminology?section=about' },
            { label: 'Faculty', path: '/departments/criminology?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/criminology?section=programmes' },
            { label: 'Department Activities', path: '/departments/criminology?section=activities' },
          ]},
          { label: 'BCA (Shift II)', path: '/departments/bca-shift-ii', children: [
            { label: 'About the Department', path: '/departments/bca-shift-ii?section=about' },
            { label: 'Faculty', path: '/departments/bca-shift-ii?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/bca-shift-ii?section=programmes' },
            { label: 'Department Activities', path: '/departments/bca-shift-ii?section=activities' },
          ]},
          { label: 'Computer Science (Shift II)', path: '/departments/computer-science-shift-ii', children: [
            { label: 'About the Department', path: '/departments/computer-science-shift-ii?section=about' },
            { label: 'Faculty', path: '/departments/computer-science-shift-ii?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/computer-science-shift-ii?section=programmes' },
            { label: 'Department Activities', path: '/departments/computer-science-shift-ii?section=activities' },
          ]},
          { label: 'B.Com General (Shift II)', path: '/departments/bcom-general-shift-ii', children: [
            { label: 'About the Department', path: '/departments/bcom-general-shift-ii?section=about' },
            { label: 'Faculty', path: '/departments/bcom-general-shift-ii?section=faculty' },
            { label: 'Programmes Offered', path: '/departments/bcom-general-shift-ii?section=programmes' },
            { label: 'Department Activities', path: '/departments/bcom-general-shift-ii?section=activities' },
          ]},
        ],
      },
      {
        label: 'IQAC',
        path: '/iqac',
        children: [
          { label: 'AISHE', path: '/aishe' },
        ],
      },
      { label: 'NIRF', path: '/nirf' },
      {
        label: 'Library',
        path: '/library',
        children: [
          { label: 'About',                 path: '/library/about' },
          { label: 'Faculty',               path: '/library/faculty' },
          { label: 'Annual Report - Library', path: '/library/annual-report' },
        ],
      },
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

function DropdownChildItem({ child, onClose }) {
  const [subOpen, setSubOpen] = useState(false);
  const subRef = useRef(null);
  const subTimeout = useRef(null);

  if (!child.children) {
    if (child.url) {
      return (
        <a
          key={child.label}
          href={child.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="block px-4 py-2 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
        >
          {child.label} ↗
        </a>
      );
    }
    return (
      <Link
        key={child.label}
        to={child.path}
        onClick={onClose}
        className="block px-4 py-2 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
      >
        {child.label}
      </Link>
    );
  }

  return (
    <div
      ref={subRef}
      className="relative"
      onMouseEnter={() => { clearTimeout(subTimeout.current); setSubOpen(true); }}
      onMouseLeave={() => { subTimeout.current = setTimeout(() => setSubOpen(false), 150); }}
    >
      {child.path ? (
        <Link
          to={child.path}
          onClick={onClose}
          className="w-full flex items-center justify-between px-4 py-2 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
        >
          {child.label}
          <FaChevronRight className="text-[10px] ml-2" />
        </Link>
      ) : (
        <button
          className="w-full flex items-center justify-between px-4 py-2 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
          onClick={() => setSubOpen((s) => !s)}
        >
          {child.label}
          <FaChevronRight className="text-[10px] ml-2" />
        </button>
      )}
      <AnimatePresence>
        {subOpen && (
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-full top-0 ml-1 bg-primary-900 border border-white/10 rounded-lg shadow-2xl min-w-[260px] py-1.5 z-50 max-h-[70vh] overflow-y-auto"
          >
            {child.children.map((sub) => (
              <DropdownChildItem key={sub.label} child={sub} onClose={onClose} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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

  const closeAll = () => setOpen(false);

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
            {link.children.map((child) => (
              <DropdownChildItem key={child.label} child={child} onClose={closeAll} />
            ))}
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
              <div className="min-w-[210px] py-1 max-h-[70vh] overflow-y-auto">
                {links
                  .find((l) => l.label === activeSubmenu)
                  ?.children?.map((child) => {
                    const closeAll = () => { setOpen(false); setActiveSubmenu(null); };
                    if (child.children) {
                      return (
                        <DropdownChildItem key={child.label} child={child} onClose={closeAll} />
                      );
                    }
                    return child.url ? (
                      <a
                        key={child.label}
                        href={child.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeAll}
                        className="block px-4 py-2.5 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
                      >
                        {child.label} ↗
                      </a>
                    ) : (
                      <Link
                        key={child.label}
                        to={child.path}
                        onClick={closeAll}
                        className="block px-4 py-2.5 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
                      >
                        {child.label}
                      </Link>
                    );
                  })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileChildItem({ child, onNavigate }) {
  const [subOpen, setSubOpen] = useState(false);

  if (!child.children) {
    if (child.url) {
      return (
        <a
          href={child.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onNavigate}
          className="block px-4 py-1.5 text-sm text-white/60 hover:text-accent-400 transition-colors"
        >
          {child.label} ↗
        </a>
      );
    }
    return (
      <Link
        to={child.path}
        onClick={onNavigate}
        className="block px-4 py-1.5 text-sm text-white/60 hover:text-accent-400 transition-colors"
      >
        {child.label}
      </Link>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-1 px-4 py-1.5">
        <Link
          to={child.path}
          onClick={onNavigate}
          className="text-sm text-white/60 hover:text-accent-400 transition-colors"
        >
          {child.label}
        </Link>
        <button
          onClick={() => setSubOpen((o) => !o)}
          className="text-white/60 hover:text-accent-400 transition-colors p-1"
        >
          <FaChevronDown className={`text-[9px] transition-transform duration-200 ${subOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <AnimatePresence>
        {subOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-1 flex flex-col items-center pl-4">
              {child.children.map((sub) => (
                <MobileChildItem key={sub.label} child={sub} onNavigate={onNavigate} />
              ))}
            </div>
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
              {link.children.map((child) => (
                <MobileChildItem key={child.label} child={child} onNavigate={onNavigate} />
              ))}
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
