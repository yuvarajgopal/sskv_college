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
      { label: 'College Timeline', path: '/about/timeline' },
      { label: 'Institutional Development Plan', path: '/about?section=devplan' },
      { label: 'Affiliated University', url: 'https://unom.ac.in' },
      { label: 'Annual Reports', path: '/about?section=annual-reports' },
      { label: 'Annual Accounts Reports', path: '/annual-accounts' },
      { label: 'Policy Documents', path: '/policy-documents' },
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
          {
            label: 'Shift I',
            children: [
              { label: 'Tamil', path: '/departments/tamil' },
              { label: 'English', path: '/departments/english' },
              { label: 'M.A. English', path: '/departments/english?section=programmes-ma' },
              { label: 'Computer Science', path: '/departments/computer-science' },
              { label: 'Mathematics', path: '/departments/mathematics' },
              { label: 'BCA', path: '/departments/bca' },
              { label: 'B.Com (General)', path: '/departments/bcom-general' },
              { label: 'B.Com (CS)', path: '/departments/bcom-cs' },
              { label: 'B.Com (A&F)', path: '/departments/bcom-af' },
              { label: 'B.B.A', path: '/departments/bba' },
              { label: 'Computer Science with AI', path: '/departments/cs-ai' },
              { label: 'Criminology and Criminal Justice Science', path: '/departments/criminology' },
              { label: 'B.A. Economics', path: '/departments/ba-economics' },
              { label: 'M.Sc. Computer Science', path: '/departments/computer-science?section=programmes-msc' },
              { label: 'M.Sc. Mathematics', path: '/departments/mathematics?section=programmes-msc' },
            ],
          },
          {
            label: 'Shift II',
            children: [
              { label: 'BCA', path: '/departments/bca-shift-ii' },
              { label: 'B.Sc. Computer Science', path: '/departments/computer-science-shift-ii' },
              { label: 'B.Com General', path: '/departments/bcom-general-shift-ii' },
            ],
          },
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
      { label: 'Fee Refund Policy', path: '/fee-refund-policy' },
      { label: 'Online Application Form', path: '/apply' },
      { label: 'Download Application', path: '/apply' },
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
  { label: 'NAAC', path: '/naac' },
  { label: 'Placement', path: '/student-life/placement-cell' },
  {
    label: 'Library',
    path: '/library',
    children: [
      { label: 'About',                   path: '/library/about' },
      { label: 'Faculty',                 path: '/library/faculty' },
      { label: 'Annual Report - Library', path: '/library/annual-report' },
    ],
  },
  {
    label: 'Alumnae',
    path: '/alumnae',
    children: [
      { label: 'Alumnae Association & Report', path: '/alumnae' },
      { label: 'Alumnae Registration Form',    url: 'https://forms.gle/7jSgQBW52F3vgGv19' },
      { label: 'Suggestion & Feedback Form',   url: 'https://forms.gle/yQz7exXMn7yWf6928' },
    ],
  },
];

function DropdownChildItem({ child, onClose }) {
  const [subOpen, setSubOpen] = useState(false);
  const subRef = useRef(null);
  const subTimeout = useRef(null);
  const hasNestedSubmenus = child.children?.some((c) => c.children);

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
            className={`absolute left-full top-0 ml-1 bg-primary-900 border border-white/10 rounded-lg shadow-2xl min-w-[260px] py-1.5 z-50 ${
              hasNestedSubmenus ? '' : 'max-h-[70vh] overflow-y-auto'
            }`}
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

// Tracks which top-level dropdown is currently open, so opening a new one
// closes the previous immediately (no overlapping menus when sweeping the navbar).
let activeDropdownCloser = null;

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
    if (activeDropdownCloser && activeDropdownCloser !== setOpen) {
      activeDropdownCloser(false);
    }
    activeDropdownCloser = setOpen;
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      if (activeDropdownCloser === setOpen) activeDropdownCloser = null;
    }, 150);
  };

  const closeAll = () => {
    setOpen(false);
    if (activeDropdownCloser === setOpen) activeDropdownCloser = null;
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        to={link.path}
        className={`flex items-center gap-1 px-2.5 2xl:px-4 py-2 text-[13px] 2xl:text-sm font-medium font-body transition-colors duration-200 rounded-lg whitespace-nowrap ${
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

function FeedbackDropdown() {
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

  const items = [
    { label: 'Student Feedback',   path: '/feedback/student' },
    { label: 'Parent Feedback',    path: '/feedback/parent' },
    { label: 'Employees Feedback', path: '/feedback/employees' },
  ];

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => { clearTimeout(timeoutRef.current); setOpen(true); }}
      onMouseLeave={() => { timeoutRef.current = setTimeout(() => setOpen(false), 150); }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-white/75 hover:text-accent-400 transition-colors"
      >
        Feedback
        <FaChevronDown className={`text-[8px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-1 bg-primary-900 border border-white/10 rounded-lg shadow-2xl min-w-[180px] py-1.5 z-50"
          >
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-[12px] text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
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
        className="flex items-center gap-1 px-2.5 2xl:px-4 py-2 text-[13px] 2xl:text-sm font-medium font-body transition-colors duration-200 rounded-lg whitespace-nowrap text-white/80 hover:text-white hover:bg-white/10"
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
              {links.map((link) => {
                const closeAll = () => { setOpen(false); setActiveSubmenu(null); };
                if (!link.children) {
                  return (
                    <Link
                      key={link.label}
                      to={link.path}
                      onMouseEnter={() => setActiveSubmenu(null)}
                      onClick={closeAll}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
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
                    <FaChevronRight className="text-[10px] ml-2" />
                  </button>
                );
              })}
            </div>
            <div className="w-[280px] py-1 max-h-[70vh] overflow-y-auto">
              {activeSubmenu && links
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
                      className="block px-4 py-2.5 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors leading-snug"
                    >
                      {child.label} ↗
                    </a>
                  ) : (
                    <Link
                      key={child.label}
                      to={child.path}
                      onClick={closeAll}
                      className="block px-4 py-2.5 text-sm text-white/75 hover:text-accent-400 hover:bg-white/5 transition-colors leading-snug"
                    >
                      {child.label}
                    </Link>
                  );
                })}
            </div>
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
          className="block px-4 py-2 text-base text-white/90 hover:text-accent-400 active:text-accent-400 transition-colors"
        >
          {child.label} ↗
        </a>
      );
    }
    return (
      <Link
        to={child.path}
        onClick={onNavigate}
        className="block px-4 py-2 text-base text-white/90 hover:text-accent-400 active:text-accent-400 transition-colors"
      >
        {child.label}
      </Link>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-2 px-4 py-2">
        {child.path ? (
          <Link
            to={child.path}
            onClick={onNavigate}
            className="text-base text-white/90 hover:text-accent-400 active:text-accent-400 transition-colors"
          >
            {child.label}
          </Link>
        ) : (
          <button
            onClick={() => setSubOpen((o) => !o)}
            className="text-base text-white/90 hover:text-accent-400 active:text-accent-400 transition-colors"
          >
            {child.label}
          </button>
        )}
        <button
          onClick={() => setSubOpen((o) => !o)}
          className="text-white/90 hover:text-accent-400 transition-colors p-1"
          aria-label={subOpen ? 'Collapse' : 'Expand'}
        >
          <FaChevronDown className={`text-[11px] transition-transform duration-200 ${subOpen ? 'rotate-180' : ''}`} />
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
        className={`block w-full text-center px-6 py-3 text-xl font-heading font-semibold transition-colors ${
          isActive ? 'text-accent-400' : 'text-white hover:text-accent-400 active:text-accent-400'
        }`}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 text-xl font-heading font-semibold text-white hover:text-accent-400 active:text-accent-400 transition-colors"
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

// Links for "More" menu (everything beyond the primary flat links)
const moreMenuLinks = navLinks.filter(
  (link) => !primaryLinks.some((p) => p.path === link.path)
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
        initial={false}
        className={`fixed top-0 left-0 right-0 z-50 bg-primary-900 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        {/* Top utility strip: Anti-Ragging / Download App / e-Governance / Feedback / Help Desk */}
        <div>
          <div className="w-full px-3 md:px-6 xl:px-8 2xl:px-12 flex flex-wrap justify-center md:justify-end items-center gap-x-3 md:gap-x-5 gap-y-1 pt-2 pb-1 text-[10px] md:text-[11px] font-body">
            <span className="text-white/75">
              Anti-Ragging Helpline:{' '}
              <a href="tel:18001805522" className="text-accent-400 font-semibold hover:text-accent-300 transition-colors">1800-180-5522</a>
            </span>
            <span className="text-white/20">|</span>
            <a href="https://play.google.com/store/apps/details?id=parentsalarm.sskv.womens.arts.college.kanchipuram" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-accent-400 transition-colors">
              Download App
            </a>
            <span className="text-white/20">|</span>
            <a href="https://app.schoolcanvas.com/" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-accent-400 transition-colors">
              e-Governance
            </a>
            <span className="text-white/20">|</span>
            <FeedbackDropdown />
            <span className="text-white/20">|</span>
            <Link to="/help-desk" className="text-white/75 hover:text-accent-400 transition-colors">
              Help Desk
            </Link>
          </div>
        </div>

        <div className="w-full px-4 md:px-6 xl:px-8 2xl:px-12 flex items-center justify-between gap-4 pt-4 pb-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/logo/SSKV.png"
              alt="SSKV College Logo"
              className="h-14 md:h-16 w-auto object-contain flex-shrink-0"
            />
            <div className="hidden sm:block whitespace-nowrap">
              <div className="text-white font-heading font-bold text-xl 2xl:text-2xl leading-tight">SSKV College</div>
              <div className="text-white/60 text-xs 2xl:text-sm">Arts & Science for Women</div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
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
                  className={`relative px-2.5 2xl:px-4 py-2 text-[13px] 2xl:text-sm font-medium font-body transition-colors duration-200 rounded-lg whitespace-nowrap ${
                    location.pathname === link.path
                      ? 'text-accent-400'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-accent-400 rounded-full"
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
              className="hidden md:inline-flex xl:hidden 2xl:inline-flex px-5 py-2.5 bg-accent-400 text-primary-900 text-sm font-semibold rounded-lg hover:bg-accent-300 transition-colors duration-200 font-body"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>

        {/* Golden divider strip between navbar and hero */}
        <div className="h-2.5 bg-accent-400" />
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-primary-900"
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

              {/* Scrollable nav links */}
              <nav className="flex flex-col items-center flex-1 gap-2 overflow-y-auto py-4">
                {navLinks.map((link) => (
                  <div key={link.path} className="w-full">
                    <MobileAccordionItem
                      link={link}
                      onNavigate={() => setMobileOpen(false)}
                      isActive={location.pathname === link.path}
                    />
                  </div>
                ))}
                <div className="mt-6">
                  <Link
                    to="/admissions"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex px-8 py-3 bg-accent-400 text-primary-900 text-lg font-semibold rounded-lg hover:bg-accent-300 transition-colors font-body"
                  >
                    Apply Now
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
