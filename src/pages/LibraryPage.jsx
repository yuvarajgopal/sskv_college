import { useState } from 'react';
import { FaBook, FaUserTie, FaDownload, FaFilePdf, FaBullseye, FaEye, FaRocket, FaListUl } from 'react-icons/fa';
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
    { title: 'Information Access',   detail: 'Provide seamless access to relevant information resources, including books, journals, and more.' },
    { title: 'Literacy Promotion',   detail: 'Encourage reading and literacy among students through regular reading sessions and curated collections.' },
    { title: 'Research Assistance',  detail: 'Offer guidance and support for students and faculty in finding and using information resources effectively.' },
  ],
  stats: [
    { label: 'Books',    value: '10,600+' },
    { label: 'Students', value: '1,400+' },
  ],
};

// ── FACULTY / STAFF ───────────────────────────────────────────────────────────
const faculty = [
  { name: 'Dr. E. Kalaiselvi',   qualification: 'M.C.A., M.L.I.S., M.Phil., Ph.D.', designation: 'Librarian',        photo: '/images/faculty/library/dr-e-kalaiselvi.jpg' },
  { name: 'Ms. A. Liviya Kumari', qualification: 'B.B.A.',                            designation: 'Clerk',            photo: '/images/faculty/library/ms-a-liviya-kumari.jpg' },
  { name: 'Ms. R. Rajeswari',    qualification: '',                                   designation: 'Library Attender', photo: '/images/faculty/library/ms-r-rajeswari.jpg' },
];

// ── ANNUAL REPORTS ────────────────────────────────────────────────────────────
// Set available: true once you upload the PDF to public/pdfs/library/
const annualReports = [
  {
    year: '2023–24',
    file: 'annual-report-2023-24.pdf',
    available: false,
    highlights: [],
  },
  {
    year: '2022–23',
    file: 'annual-report-2022-23.pdf',
    available: false,
    highlights: [
      'Added approximately 315 books — total collection: 9,538 books',
      'New library building inaugurated on 4th December 2022 — more spacious with lift facility',
      'Librarian attended Refresher Course in Library Sciences (Teaching Learning Centre, Ramanujan College, University of Delhi)',
      'Participated in National Workshop on "Implementation of User Footfall Tracking Module in Libraries Using Koha"',
      'Participated in National Workshop on "Do\'s and Don\'ts in Developing Institutional Repositories using Dspace"',
      'Participated in Virtual Workshop on "Scholarly Publishing: Tools and Tips" (Bangalore Institute of Technology, Feb 2023)',
      'Participated in National Webinar "Manifesto for Library Professionals" (Balani Infotech, Feb 2023)',
      'Participated in five-day FDP "Challenging Role of Library and Information Centers in Digital Era"',
    ],
  },
  {
    year: '2021–22',
    file: 'annual-report-2021-22.pdf',
    available: false,
    highlights: [
      'Added approximately 200 books — total collection: 9,219 books',
      'Added The Economic Times and DT Next newspapers to the library',
      'Increased student library visits and book borrowing throughout the year',
      'Faculty continued 45-minute reading sessions in the library',
      'Librarian attended 110 webinars, 20 e-workshops, 18 online FDPs, 4 training programmes, and 2 e-conferences',
      '1 seminar attended and 1 paper published in a journal',
    ],
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function StaffPhoto({ src, name }) {
  const [failed, setFailed] = useState(false);
  if (!failed) {
    return (
      <img src={src} alt={name} onError={() => setFailed(true)}
        className="w-full h-full object-cover object-top" />
    );
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary-50">
      <FaUserTie className="text-4xl text-primary-300" />
    </div>
  );
}

export default function LibraryPage() {
  return (
    <>
      <Hero
        title="Library"
        subtitle="A gateway to knowledge — supporting academic excellence at SSKV College"
        height="medium"
        breadcrumb="Academics › Library"
      />

      {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading title="About the Library" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {/* Description */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <div className="space-y-4 mb-8">
                  {about.description.map((para, i) => (
                    <p key={i} className="text-neutral-600 leading-relaxed">{para}</p>
                  ))}
                </div>

                {/* Objectives */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-primary-800 font-heading mb-4">Objectives</h3>
                  <div className="space-y-3">
                    {about.objectives.map((obj, i) => (
                      <div key={i} className="flex items-start gap-3 bg-neutral-50 rounded-lg px-4 py-3 border border-neutral-100">
                        <span className="w-2 h-2 rounded-full bg-accent-400 flex-shrink-0 mt-2" />
                        <div>
                          <span className="font-semibold text-primary-800 text-sm">{obj.title}: </span>
                          <span className="text-sm text-neutral-600">{obj.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Stats + Vision/Mission/Motto sidebar */}
            <AnimatedSection direction="right">
              <div className="space-y-5">

                {/* Stats */}
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white">
                  <h3 className="text-sm font-semibold text-accent-400 uppercase tracking-wide mb-4">Library at a Glance</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {about.stats.map((s) => (
                      <div key={s.label} className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-accent-400 font-heading">{s.value}</div>
                        <div className="text-white/60 text-xs mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Motto */}
                <div className="bg-accent-50 rounded-2xl p-5 border border-accent-100">
                  <h3 className="text-sm font-bold text-primary-800 font-heading mb-3 flex items-center gap-2">
                    <FaBullseye className="text-accent-600" /> Motto
                  </h3>
                  <ul className="space-y-2">
                    {about.motto.map((m, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0 mt-1.5" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vision */}
                <div className="bg-primary-50 rounded-2xl p-5 border border-primary-100">
                  <h3 className="text-sm font-bold text-primary-800 font-heading mb-2 flex items-center gap-2">
                    <FaEye className="text-primary-600" /> Vision
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{about.vision}</p>
                </div>

                {/* Mission */}
                <div className="bg-primary-50 rounded-2xl p-5 border border-primary-100">
                  <h3 className="text-sm font-bold text-primary-800 font-heading mb-2 flex items-center gap-2">
                    <FaRocket className="text-primary-600" /> Mission
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{about.mission}</p>
                </div>

              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FACULTY / STAFF ────────────────────────────────────────────────── */}
      <section id="faculty" className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Library Staff"
            subtitle="Dedicated professionals committed to supporting your academic journey"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {faculty.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.08}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-neutral-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[3/4] overflow-hidden bg-primary-50 max-h-56">
                    <StaffPhoto src={member.photo} name={member.name} />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-bold text-primary-800 font-heading text-base leading-snug">{member.name}</h3>
                    <p className="text-accent-600 text-xs font-semibold mt-1">{member.designation}</p>
                    {member.qualification && (
                      <p className="text-neutral-500 text-xs mt-1">{member.qualification}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANNUAL REPORTS ─────────────────────────────────────────────────── */}
      <section id="annual-report" className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-3xl">
          <SectionHeading
            title="Library Annual Reports"
            subtitle="Year-wise documentation of library growth, activities, and achievements"
          />

          <div className="space-y-6">
            {annualReports.map((report, i) => (
              <AnimatedSection key={report.year} delay={i * 0.08}>
                <div className="bg-neutral-50 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                  {/* Header row */}
                  <div className="flex items-center justify-between gap-4 px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <FaFilePdf className="text-2xl text-primary-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 font-heading">Library Annual Report</h4>
                        <p className="text-neutral-500 text-sm mt-0.5">Academic Year {report.year}</p>
                      </div>
                    </div>

                    {report.available ? (
                      <a
                        href={`/pdfs/library/${report.file}`}
                        download
                        className="flex items-center gap-2 px-5 py-2.5 bg-primary-800 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors font-heading whitespace-nowrap flex-shrink-0"
                      >
                        <FaDownload className="text-xs" /> Download
                      </a>
                    ) : (
                      <span className="px-4 py-2.5 bg-neutral-100 text-neutral-400 text-sm font-semibold rounded-lg whitespace-nowrap flex-shrink-0">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Highlights */}
                  {report.highlights.length > 0 && (
                    <div className="px-6 pb-5 border-t border-neutral-100 pt-4">
                      <p className="text-xs font-semibold text-primary-700 uppercase tracking-wide mb-3">Highlights</p>
                      <ul className="space-y-1.5">
                        {report.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-neutral-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0 mt-2" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
