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
      { label: 'Annual Accounts Report',        path: '/annual-accounts' },
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
      { label: 'CBCS Regulations',              path: '/cbcs-regulations' },
      { label: 'CBCS',                          url: 'https://www.unom.ac.in/index.php?route=academic/cbcs' },
      { label: 'Statutes/Ordinances Pertaining to Admissions/Academics', path: '/statutes-ordinances' },
      {
        label: 'Departments',
        path: '/academics',
        children: [
          { label: 'Tamil',                                    path: '/departments/tamil' },
          { label: 'English',                                  path: '/departments/english' },
          { label: 'Computer Science',                         path: '/departments/computer-science' },
          { label: 'Mathematics',                              path: '/departments/mathematics' },
          { label: 'BCA',                                      path: '/departments/bca' },
          { label: 'B.Com (General)',                           path: '/departments/bcom-general' },
          { label: 'B.Com (CS)',                                path: '/departments/bcom-cs' },
          { label: 'B.Com (A&F)',                               path: '/departments/bcom-af' },
          { label: 'B.B.A',                                    path: '/departments/bba' },
          { label: 'Computer Science with AI',                 path: '/departments/cs-ai' },
          { label: 'Criminology and Criminal Justice Science', path: '/departments/criminology' },
          { label: 'BCA (Shift II)',                            path: '/departments/bca-shift-ii' },
          { label: 'Computer Science (Shift II)',              path: '/departments/computer-science-shift-ii' },
          { label: 'B.Com General (Shift II)',                  path: '/departments/bcom-general-shift-ii' },
        ],
      },
      {
        label: 'IQAC',
        path: '/iqac',
        children: [
          { label: 'AISHE',                    path: '/aishe' },
        ],
      },
      { label: 'NIRF',                          path: '/nirf' },
      {
        label: 'Library',
        path: '/library',
        children: [
          { label: 'About',                 path: '/library/about' },
          { label: 'Faculty',               path: '/library/faculty' },
          { label: 'Annual Report - Library', path: '/library/annual-report' },
        ],
      },
      { label: 'Academic Collaborations',       path: '/academic-collaborations' },
    ],
  },

  {
    label: 'Admissions & Fees',
    path: '/admissions',
    children: [
      { label: 'Prospectus with Fees',          path: '/prospectus' },
      { label: 'Admission Process & Guidelines',path: '/admissions' },
      { label: 'Fee Refund Policy',             path: '/fee-refund-policy' },
      { label: 'Online Application Form',       path: '/apply' },
      { label: 'Download Application',          path: '/download-application' },
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
      { label: 'Value-Added: Music and Arts',      path: '/student-life/music-arts' },
      { label: 'Value-Added: Silambam',            path: '/student-life/silambam' },
      { label: 'Skill Training by Bhumi',          path: '/student-life/skill-training-bhumi' },
      { label: 'Training by Hand in Hand Academy', path: '/student-life/skill-training-hand-in-hand' },
      { label: 'Sports',                           path: '/student-life/sports' },
      { label: 'Placement Cell',                   path: '/student-life/placement-cell' },
      { label: 'Grievance Redressal',              path: '/student-life/grievance-redressal' },
      { label: 'Indian Knowledge System',          path: '/student-life/indian-knowledge-system' },
      { label: 'Health Facilities',                path: '/student-life/health-facilities' },
      { label: 'Anti Ragging Cell',                path: '/student-life/anti-ragging' },
      { label: 'Equal Opportunity Cell',           path: '/student-life/equal-opportunity-cell' },
      { label: 'SEDG Cell',                        path: '/student-life/sedg-cell' },
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
      { label: 'National Events Celebration', path: '/gallery?category=national-events' },
      { label: 'Festival Celebrations',       path: '/gallery?category=festival-celebrations' },
      { label: 'Academic Events',             path: '/gallery?category=academic-events' },
      { label: 'Sports',                      path: '/gallery?category=sports' },
      { label: 'NSS / YRC',                   path: '/gallery?category=nss-yrc' },
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
      { label: 'EVS Club',                        path: '/clubs/evs' },
      { label: 'Rotary Club',                     path: '/clubs/rotary' },
      { label: 'Quiz Club',                       path: '/clubs/quiz' },
      { label: 'Cultural Club',                   path: '/clubs/cultural' },
      { label: 'Literary Club',                   path: '/clubs/literary' },
      { label: 'Electoral Literacy Club',         path: '/clubs/electoral-literacy' },
      { label: 'Fitness Club',                    path: '/clubs/fitness' },
      { label: 'Students Talent Exp Club',        path: '/clubs/talent-exp' },
      { label: 'Student Outreach Club',           path: '/clubs/outreach' },
      { label: 'Student Support Club',            path: '/clubs/support' },
      { label: 'Consumer Club',                   path: '/clubs/consumer' },
      { label: 'Value Education Club',            path: '/clubs/value-education' },
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
  { label: 'NTF — Students Mental Health', url: 'https://ntf.education.gov.in/' },
];
