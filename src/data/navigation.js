export const navLinks = [
  { label: 'Home', path: '/' },

  {
    label: 'About Us',
    path: '/about',
    children: [
      { label: 'About SSKV',                    path: '/about' },
      { label: 'Goals & Visions',               path: '/about/goals' },
      { label: 'Group of Institutions',         path: '/about/institutions' },
      { label: 'Best Practices',                path: '/about?section=best-practices' },
      { label: 'Policy Documents',              path: '/policy-documents' },
      { label: 'Institutional Distinctiveness', path: '/about?section=distinctiveness' },
      { label: 'Institutional Development Plan',path: '/about?section=devplan' },
      { label: 'College Timeline',              path: '/about/timeline' },
      { label: 'Affiliated University',         url: 'https://unom.ac.in' },
    ],
  },

  {
    label: 'Administration',
    path: '/administration',
    children: [
      { label: 'College Governing Body',              path: '/administration/governing-body' },
      { label: 'President',                           path: '/administration/president' },
      { label: 'Vice-President',                      path: '/administration/vice-president' },
      { label: "Secretary's Message",                 path: '/administration/secretary' },
      { label: 'Joint Secretary',                     path: '/administration/joint-secretary' },
      { label: "Principal's Message",                 path: '/administration/principal' },
      { label: 'Chief Superintendent of Examination', path: '/administration/chief-superintendent' },
      { label: 'Finance Section',                     path: '/administration/finance' },
      { label: 'Executive Committee',                 path: '/administration/executive-committee' },
      { label: 'Internal Complaints Committee',       path: '/administration/icc' },
      { label: 'College Organogram',                  path: '/administration/organogram' },
    ],
  },

  {
    label: 'Academics',
    path: '/academics',
    children: [
      { label: 'Programs Offered',              path: '/academics' },
      { label: 'Academic Calendar',             path: '/academic-calendar' },
      { label: 'CBCS Regulations',              url: 'https://www.unom.ac.in/index.php?route=admission/cbcssyllabus' },
      { label: 'CBCS Statutes/Ordinances',      url: 'https://www.unom.ac.in/index.php?route=academic/cbcs' },
      { label: 'Departments',                   path: '/academics' },
      { label: 'IQAC',                          path: '/iqac' },
      { label: 'Library',                       path: '/library' },
      { label: 'Academic Collaborations',       path: '/academic-collaborations' },
    ],
  },

  {
    label: 'Admissions & Fees',
    path: '/admissions',
    children: [
      { label: 'Prospectus with Fees',          path: '/fees' },
      { label: 'Admission Process & Guidelines',path: '/admissions' },
      { label: 'Fee Refund Policy',             path: '/fees' },
      { label: 'Online Application Form',       path: '/apply' },
      { label: 'Download Application',          path: '/apply' },
    ],
  },

  {
    label: 'Research and Development Cell',
    path: '/research-development',
    children: [
      { label: 'Research & Development', path: '/research-development' },
      { label: 'Projects',               path: '/projects' },
      { label: 'Entrepreneurship Cell',  path: '/entrepreneurship-cell' },
    ],
  },

  {
    label: 'Students Life',
    path: '/student-life/culturals',
    children: [
      { label: 'Culturals',                        path: '/student-life/culturals' },
      { label: 'Add On Courses',                   path: '/student-life/add-on-courses' },
      { label: 'Sports',                           path: '/student-life/sports' },
      { label: 'Placement Cell',                   path: '/student-life/placement-cell' },
      { label: 'Grievance Redressal',              path: '/student-life/grievance-redressal' },
      { label: 'Indian Knowledge System',          path: '/student-life/indian-knowledge-system' },
      { label: 'Health Facilities',                path: '/student-life/health-facilities' },
      { label: 'Anti Ragging Cell',                path: '/student-life/anti-ragging' },
      { label: 'Equal Opportunity Cell',           path: '/student-life/equal-opportunity-cell' },
      { label: 'Facilities for Differently Abled', path: '/student-life/differently-abled' },
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

  {
    label: 'Information and Notices',
    path: '/notices/circulars',
    children: [
      { label: 'Circular & Notices',    path: '/notices/circulars' },
      { label: 'Announcements',         path: '/notices/announcements' },
      { label: 'Newsletters',           path: '/notices/newsletters' },
      { label: 'News & Events',         path: '/notices/news-events' },
      { label: 'Reservation Roster',    path: '/notices/reservation-roster' },
    ],
  },

  {
    label: 'Picture Gallery',
    path: '/gallery',
    children: [
      { label: 'National Events',        path: '/gallery' },
      { label: 'Festival Celebrations',  path: '/gallery' },
      { label: 'Academic Events',        path: '/gallery' },
      { label: 'Sports',                 path: '/gallery' },
      { label: 'NSS / YRC',              path: '/gallery' },
    ],
  },

  {
    label: 'Contact Us',
    path: '/contact',
    children: [
      { label: 'Contact Information',    path: '/contact' },
    ],
  },

  {
    label: 'Units',
    path: '/student-life/ncc-nss',
    children: [
      { label: 'NCC / NSS',             path: '/student-life/ncc-nss' },
      { label: 'YRC',                   path: '/student-life/yrc' },
    ],
  },

  {
    label: 'Infrastructure & Facilities',
    path: '/infrastructure',
    children: [
      { label: 'Infrastructure & Facilities', path: '/infrastructure' },
      { label: 'College Transport',           path: '/transport' },
    ],
  },

  {
    label: 'Co-curricular Activities',
    path: '/industry-academia',
    children: [
      { label: 'Industry Academia Collaboration', path: '/industry-academia' },
      { label: 'Clubs',                           path: '/clubs' },
    ],
  },
];

export const quickLinks = [
  { label: 'NAAC',                   path: '/naac' },
  { label: 'IQAC',                   path: '/iqac' },
  { label: 'Mandatory Disclosures',  path: '/mandatory-disclosures' },
  { label: 'Anti-Ragging',           path: '/student-life/anti-ragging' },
];

export const externalLinks = [
  { label: 'UGC',                url: 'https://www.ugc.ac.in' },
  { label: 'MHRD',               url: 'https://www.education.gov.in' },
  { label: 'SWAYAM',             url: 'https://swayam.gov.in' },
  { label: 'e-PG Patshala',      url: 'https://epgp.inflibnet.ac.in' },
  { label: 'University of Madras', url: 'https://www.unom.ac.in' },
  { label: 'NDLI',               url: 'https://ndl.iitkgp.ac.in' },
  { label: 'Digital India',      url: 'https://www.digitalindia.gov.in' },
];
