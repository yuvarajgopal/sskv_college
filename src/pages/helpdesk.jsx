import { useState } from 'react';
import { FaBook, FaUserTie, FaDownload, FaFilePdf, FaBullseye, FaEye, FaRocket } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

// ── ABOUT ─────────────────────────────────────────────────────────────────────
const about = {
  description: [
    "A College's attitude toward its library reflects its approach to education. How wonderful it would be if we were all like Prospero, able to view our library as our personal dukedom. Our library, currently home to 10,600 books, is steadily growing. However, what truly matters is not just the number of books, but how many are in circulation and how often students read them.",
    "With 1,400 students, we recognize the need to expand our collection, but our primary focus is on encouraging students to read. In today's world, more than ever, reading empowers students with knowledge — knowledge that is truly invaluable. We have succeeded in fostering an appreciation for reading among our students, and our vision of reaching 20,000 books will soon be realized.",
  ],
  motto: [
    'To facilitate and disseminate information and knowledge',
    'To help faculty and students identify and locate books and journals',
    'To liaise with book sellers and publishers to maximize economic advantage',
    'To popularize reading and make books more accessible',
  ],
  vision: 'To be a vital and trusted partner in learning, supporting the academic pursuits of our students and faculty by providing access to relevant information and fostering a love for reading and learning.',
  mission: 'To provide access to a vast collection of information resources, promoting literacy, reading, and lifelong learning to meet diverse academic needs, while creating a welcoming and inclusive environment for students and faculty.',
  objectives: [
    { title: 'Information Access', detail: 'Provide seamless access to relevant information resources, including books, journals, and more.' },
    { title: 'Literacy Promotion', detail: 'Encourage reading and literacy among students through regular reading sessions and curated collections.' },
    { title: 'Research Assistance', detail: 'Offer guidance and support for students and faculty in finding and using information resources effectively.' },
  ],
  stats: [
    { label: 'Books', value: '10,600+' },
    { label: 'Students', value: '1,400+' },
  ],
};

// ── FACULTY ───────────────────────────────────────────────────────────────────
const faculty = [
  { name: 'Ms. J. Suganthi', designation: 'Head, Department of Mathematics', mobile: '9444759527', photo: '/images/faculty/library/dr-e-kalaiselvi.jpg' },
  { name: 'Mr. T.V. Jaganathan', designation: 'Office Superintendent', mobile: '9381080510', photo: '/images/faculty/library/ms-a-liviya-kumari.jpg' },
];

// ── ANNUAL REPORTS ────────────────────────────────────────────────────────────
const annualReports = [
  { year: '2023–24', file: 'annual-report-2023-24.pdf', available: false, highlights: [] },
  {
    year: '2022–23',
    file: 'annual-report-2022-23.pdf',
    available: false,
    highlights: [
      'Added approximately 315 books — total collection: 9,538 books',
      'New library building inaugurated on 4th December 2022',
    ],
  },
  {
    year: '2021–22',
    file: 'annual-report-2021-22.pdf',
    available: false,
    highlights: [
      'Added approximately 200 books — total collection: 9,219 books',
    ],
  },
];



// ── STAFF PHOTO ──────────────────────────────────────────────────────────────
function StaffPhoto({ src, name }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src={src}
        alt={name}
        onError={() => setFailed(true)}
        className="w-full h-full object-cover object-top"
      />
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-primary-50">
      <FaUserTie className="text-4xl text-primary-300" />
    </div>
  );
}

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function HelpdeskPage() {
  return (
    <>
      <Hero
        title="Helpdesk"
        subtitle="Your first point of contact for support, guidance, and quick resolution of queries."
        height="medium"
        breadcrumb="Academics › Helpdesk"
      />

      {/* ABOUT */}
   

      {/* FACULTY */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Helpdesk Staff" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {faculty.map((member, i) => (
              <AnimatedSection key={i}>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-3">
                    <StaffPhoto src={member.photo} name={member.name} />
                  </div>
                  <h3 className="font-heading font-bold text-primary-800">{member.name}</h3>
                  <p className="text-neutral-600 text-sm">{member.designation}</p>
                  {member.mobile && <p className="text-neutral-500 text-sm mt-1">Mobile: {member.mobile}</p>}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>




      <CTABanner
        title="Explore. Learn. Grow."
        subtitle="Visit the SSKV College Library and unlock a world of knowledge."
      />
    </>
  );
}