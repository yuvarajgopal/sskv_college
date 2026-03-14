import { useState } from 'react';
import { FaBook, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const BASE_PHOTO  = '/images/faculty/tamil/';
const BASE_RESUME = '/pdfs/faculty/tamil/';

const faculty = [
  { name: 'Dr. B. Valli',    qualification: 'MA., M.Phil., BEd., Ph.D', role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}dr-b-valli.jpg`,    resume: `${BASE_RESUME}dr-b-valli.pdf` },
  { name: 'M. Arulambigai',  qualification: 'MA., M.Phil., NET',         role: 'Assistant Professor',               photo: `${BASE_PHOTO}m-arulambigai.jpg`,  resume: `${BASE_RESUME}m-arulambigai.pdf` },
  { name: 'K. Priya',        qualification: 'MA., M.Phil., SET., NET',   role: 'Assistant Professor',               photo: `${BASE_PHOTO}k-priya.jpg`,        resume: `${BASE_RESUME}k-priya.pdf` },
  { name: 'Dr. D. Ammu',     qualification: 'MA., M.Phil., NET., Ph.D',  role: 'Assistant Professor',               photo: `${BASE_PHOTO}dr-d-ammu.jpg`,      resume: `${BASE_RESUME}dr-d-ammu.pdf` },
  { name: 'Dr. R. Kannagi',  qualification: 'MA., M.Phil., NET., Ph.D',  role: 'Assistant Professor',               photo: `${BASE_PHOTO}dr-r-kannagi.jpg`,   resume: `${BASE_RESUME}dr-r-kannagi.pdf` },
  { name: 'Dr. P. Latha',    qualification: 'MA., M.Phil., SET., NET',   role: 'Assistant Professor',               photo: `${BASE_PHOTO}dr-p-latha.jpg`,     resume: `${BASE_RESUME}dr-p-latha.pdf` },
  { name: 'T. Indrani',      qualification: 'MA., NET, MEd',             role: 'Assistant Professor',               photo: `${BASE_PHOTO}t-indrani.jpg`,      resume: `${BASE_RESUME}t-indrani.pdf` },
  { name: 'U. Revathi',      qualification: 'MA., M.Phil., NET, BEd',    role: 'Assistant Professor',               photo: `${BASE_PHOTO}u-revathi.jpg`,      resume: `${BASE_RESUME}u-revathi.pdf` },
  { name: 'D. Chithra',      qualification: 'MA., M.Phil., NET, B.Ed.',  role: 'Assistant Professor',               photo: `${BASE_PHOTO}d-chithra.jpg`,      resume: `${BASE_RESUME}d-chithra.pdf` },
  { name: 'G. Pavithra',     qualification: 'MA., NET',                  role: 'Assistant Professor',               photo: `${BASE_PHOTO}g-pavithra.jpg`,     resume: `${BASE_RESUME}g-pavithra.pdf` },
  { name: 'B. Bharathi',     qualification: 'MA., NET',                  role: 'Assistant Professor',               photo: `${BASE_PHOTO}b-bharathi.jpg`,     resume: `${BASE_RESUME}b-bharathi.pdf` },
  { name: 'V. Yuvalakshmi',  qualification: 'MA., NET',                  role: 'Assistant Professor',               photo: `${BASE_PHOTO}v-yuvalakshmi.jpg`,  resume: `${BASE_RESUME}v-yuvalakshmi.pdf` },
  { name: 'R. Shenbagam',    qualification: 'MA., NET',                  role: 'Assistant Professor',               photo: `${BASE_PHOTO}r-shenbagam.jpg`,    resume: `${BASE_RESUME}r-shenbagam.pdf` },
  { name: 'K. Sangeetha',    qualification: 'MA., NET',                  role: 'Assistant Professor',               photo: `${BASE_PHOTO}k-sangeetha.jpg`,    resume: `${BASE_RESUME}k-sangeetha.pdf` },
];

function FacultyPhoto({ src, name, size = 'md' }) {
  const [failed, setFailed] = useState(false);
  const sizeClass = size === 'lg'
    ? 'w-24 h-24 text-4xl'
    : 'w-14 h-14 text-2xl';

  if (!failed) {
    return (
      <img
        src={src}
        alt={name}
        onError={() => setFailed(true)}
        className={`${sizeClass} rounded-full object-cover flex-shrink-0`}
      />
    );
  }
  return (
    <div className={`${sizeClass} rounded-full bg-red-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-red-400" />
    </div>
  );
}

const programDetails = [
  { label: 'Degree',        value: 'Bachelor of Arts (B.A.)' },
  { label: 'Specialisation', value: 'Tamil Language & Literature' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: '+2 in any stream' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
];

const outcomes = [
  'In-depth knowledge of classical and modern Tamil literature',
  'Strong command of Tamil language, grammar, and linguistics',
  'Ability to analyze and interpret literary texts critically',
  'Research and writing skills for academic and professional pursuits',
  'Cultural understanding of Tamil heritage, history, and traditions',
  'Career readiness for teaching, writing, translation, and civil services',
];

export default function TamilDepartmentPage() {
  return (
    <>
      <Hero
        title="Department of Tamil"
        subtitle="B.A. Tamil — Preserving and advancing the richness of Tamil language, literature, and culture"
        height="medium"
        breadcrumb="Academics › B.A. Tamil"
      />

      {/* Program Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-red-50 text-red-700 text-sm font-semibold rounded-full mb-4">
                Arts — 3 Year Program
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The Department of Tamil at SSKV College of Arts and Science for Women is dedicated to
                nurturing a deep love and scholarly understanding of the Tamil language and its vast
                literary heritage. Tamil, one of the world's oldest classical languages, forms the
                cultural backbone of the region, and this department ensures that tradition is carried
                forward with academic rigour.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Students are trained in classical Tamil literature (Sangam, Bhakti, and medieval
                texts), modern prose and poetry, linguistics, and grammar. The department actively
                encourages research, cultural expression, and participation in literary competitions
                that bring recognition to both students and the institution.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                With a dedicated team of 14 qualified faculty members — including four Ph.D holders —
                the department provides a rich academic environment where language, culture, and
                scholarship flourish together.
              </p>
            </AnimatedSection>

            {/* Program details card */}
            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <FaBook className="text-2xl text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.A. Tamil</h3>
                    <p className="text-white/60 text-sm">Program Details</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {programDetails.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">{item.label}</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="section-padding bg-red-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Program Outcomes"
            subtitle="What students gain from the B.A. Tamil program"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-red-100 shadow-sm h-full">
                  <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed">{outcome}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Our Faculty"
            subtitle="14 dedicated educators committed to academic and cultural excellence"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-1">Head of Department</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-semibold rounded-lg transition-colors"
                    >
                      <FaFilePdf className="text-xs" /> View Resume
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Faculty grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {faculty.filter((f) => !f.isHod).map((f, i) => (
              <AnimatedSection key={f.name} delay={i * 0.05}>
                <div className="bg-neutral-50 hover:bg-red-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <FacultyPhoto src={f.photo} name={f.name} size="md" />
                    <div>
                      <h4 className="font-bold text-primary-800 text-sm font-heading leading-snug">{f.name}</h4>
                      <p className="text-neutral-500 text-xs mt-0.5">{f.qualification}</p>
                      <p className="text-red-600 text-xs font-medium mt-0.5">{f.role}</p>
                    </div>
                  </div>
                  <a
                    href={f.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold rounded-lg border border-red-100 transition-colors"
                  >
                    <FaFilePdf className="text-xs" /> View Resume
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Stats row */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
              {[
                { icon: FaUsers,      value: '14', label: 'Faculty Members' },
                { icon: FaAward,      value: '4',  label: 'Ph.D Holders' },
                { icon: FaGraduationCap, value: '3', label: 'Years Duration' },
                { icon: FaBook,       value: '6',  label: 'Semesters' },
              ].map((stat) => (
                <div key={stat.label} className="bg-primary-50 rounded-xl p-5 text-center">
                  <stat.icon className="text-2xl text-primary-700 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-800 font-heading">{stat.value}</div>
                  <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="Interested in B.A. Tamil?"
        subtitle="Apply now and begin your journey into the world's oldest classical language."
      />
    </>
  );
}
