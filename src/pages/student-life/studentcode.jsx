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
          // (ALL YOUR EXISTING DEPARTMENTS UNCHANGED)
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
          { label: 'About', path: '/library/about' },
          { label: 'Faculty', path: '/library/faculty' },
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

  /* ================= NEW MENU ADDED ================= */
  {
    label: 'Student Life',
    path: '/student-life',
    children: [
      { label: 'ERP', path: '/erpresourse' },
      { label: 'Student Code of Conduct', path: '/studentcode' },
    ],
  },
];