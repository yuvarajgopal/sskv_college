import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaLaptop, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf, FaCamera } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import DepartmentSectionNav from '../../components/shared/DepartmentSectionNav';
import ActivityGallery from '../../components/shared/ActivityGallery';
import CTABanner from '../../components/sections/CTABanner';
import DepartmentNewsletter from '../../components/shared/DepartmentNewsletter';

const BASE_PHOTO  = '/images/faculty/bcom-cs/';
const BASE_RESUME = '/pdfs/faculty/bcom-cs/';

const faculty = [
  { name: 'Dr. P. Meenakshi', qualification: 'M.Com., M.Phil.,  MBA., Ph.D. NET.,', role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}dr-p-meenakshi.jpg`, resume: `${BASE_RESUME}dr-p-meenakshi.pdf` },
  { name: 'Dr. P.Rubalakshmia', qualification: 'M.B.A., M.Phil.', role: 'Assistant Professor',  photo: `${BASE_PHOTO}r_rublakshmi.JPG`,       resume: `${BASE_RESUME}r-rubalakshmi.pdf` },
  { name: 'Dr. S.Jayashree', qualification: 'M.com (cs), M.phil, SET.,', role: 'Assistant Professor ',  photo: `${BASE_PHOTO}s_jayashree.jpg`, resume: `${BASE_RESUME}s_jayashree.pdf` },
  { name: 'K. Sridevi',        qualification: 'M.Com., M.Phil., SET., B.Ed., (Ph.D)',                     role: 'Assistant Professor',               photo: `${BASE_PHOTO}k-sridevi.jpg`,         resume: `${BASE_RESUME}k-sridevi.pdf` },
];

function FacultyPhoto({ src, name, size = 'md' }) {
  const [failed, setFailed] = useState(false);
  const sizeClass = size === 'lg'
    ? 'w-36 h-36 text-4xl'
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
    <div className={`${sizeClass} rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-sky-400" />
    </div>
  );
}


const programDetails = [
  { label: 'Degree',        value: 'Bachelor of Commerce (B.Com)' },
  { label: 'Specialisation', value: 'Commerce with Computer Science' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: 'Must have studied Commerce & Accountancy at HSC.' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
  { label: 'Syllabus',     value: (<a
        href="/pdfs/bcom_cs_syllabus.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-600 underline hover:text-orange-800">UG Syllabus</a>
    )
  },
];

const outcomes = [
  'Solid grounding in commerce, accounting, and business management principles',
  'Practical programming and software skills including C, Java, and web development',
  'Ability to build and manage computer-based accounting and business systems',
  'Knowledge of e-commerce, digital marketing, and IT-driven business solutions',
  'Proficiency in tally, ERP systems, and accounting software used in industry',
  'Career readiness for roles in IT-enabled commerce, fintech, and digital business',
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function BComCSDepartmentPage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      const el = document.getElementById(section);
      if (el) setTimeout(() => {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 130;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchParams]);

  return (
    <>
      {/* Hero */}
      <Hero
        title="Commerce with Corporate Secretaryship"
        subtitle="B.Com (CS) — Combining the power of commerce and technology for the digital economy"
        height="medium"
        breadcrumb="Academics › B.Com (CS)"
      />

      {/* Section Nav */}
      <DepartmentSectionNav />

      {/* About the Department */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 text-sm font-semibold rounded-full mb-4">
                Commerce — 3 Year Program
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                As there has been a growing demand for the B.Com Course this year we introduced B.com ( Corporate Secretaryship ) and the response has been good. The advantage this stream has over other streams of B.Com is that this is internship oriented and as such has a wider scope of employment in the industry
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section-padding bg-sky-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Faculty"
            subtitle="Dual-domain experts in commerce and technology shaping future-ready graduates"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-sky-400 Sentencecase tracking-wide mb-1">Head of Department</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-xs font-semibold rounded-lg transition-colors"
                    >
                      <FaFilePdf className="text-xs" /> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Faculty grid */}
          {faculty.filter((f) => !f.isHod).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {faculty.filter((f) => !f.isHod).map((f, i) => (
                <AnimatedSection key={f.name} delay={i * 0.05}>
                  <div className="bg-white hover:bg-sky-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <FacultyPhoto src={f.photo} name={f.name} size="md" />
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm font-heading leading-snug">{f.name}</h4>
                        <p className="text-neutral-500 text-xs mt-0.5">{f.qualification}</p>
                        <p className="text-sky-600 text-xs font-medium mt-0.5">{f.role}</p>
                      </div>
                    </div>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold rounded-lg border border-sky-100 transition-colors"
                    >
                      <FaFilePdf className="text-xs" /> View Profile
                    </a>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            faculty.filter((f) => f.isHod).length === 0 && (
              <p className="text-center text-neutral-400 py-8 text-sm">Faculty information will be updated soon.</p>
            )
          )}

          {/* Stats row */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
              {[
                { icon: FaUsers,         value: facultyCount || '—', label: 'Faculty Members' },
                { icon: FaAward,         value: phdCount || '—',     label: 'Ph.D Holders' },
                { icon: FaGraduationCap, value: '3',                  label: 'Years Duration' },
                { icon: FaLaptop,        value: '6',                  label: 'Semesters' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-5 text-center">
                  <stat.icon className="text-2xl text-primary-700 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-800 font-heading">{stat.value}</div>
                  <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Programmes Offered */}
      <section id="programmes" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading title="Programmes Offered" subtitle="Academic programmes and learning outcomes" />
          <div className="max-w-5xl mx-auto">
            {/* Programmes List */}
            <div className="flex flex-wrap gap-4 mb-8 max-w-5xl mx-auto">
              <div className="flex-1 min-w-[200px] bg-sky-50 border border-sky-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <p className="text-sm font-bold text-primary-800">Bachelor of Commerce — Corporate Secretaryship (B.Com CS)</p>
                <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
              </div>
              <div className="flex-1 min-w-[200px] bg-sky-50 border border-sky-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <p className="text-sm font-bold text-primary-800">Master of Commerce (M.Com)</p>
                <p className="text-xs text-neutral-500 mt-1">Postgraduate Programme</p>
              </div>
            </div>
            {/* Programme Details Card */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center">
                    <FaLaptop className="text-2xl text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.Com (CS)</h3>
                    <p className="text-white/60 text-sm">Program Details</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {programDetails.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">{item.label}</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Program Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outcomes.map((outcome, i) => (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <div className="flex items-start gap-3 bg-sky-50 rounded-xl p-5 border border-sky-100 shadow-sm h-full">
                    <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-neutral-700 text-sm leading-relaxed">{outcome}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Department Activities */}
      <section id="activities" className="section-padding bg-sky-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Department Activities" subtitle="Blending commerce with technology skills" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-6 max-w-4xl mx-auto">
              The Department of B.Com (Corporate Secretaryship) at SSKV College organizes workshops on corporate governance, company law seminars, guest lectures by industry professionals, and hands-on training in computerized accounting. Students participate in quiz competitions, mock board meetings, and intercollegiate events to develop their corporate and secretarial skills.
            </p>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <ActivityGallery images={[
              { src: '/images/activities/bcom_cs/1.jpg', caption: 'Corporate Governance Workshop' },
              { src: '/images/activities/bcom_cs/2.jpg', caption: 'Seminar on Company Law' },
              { src: '/images/activities/bcom_cs/3.jpg', caption: 'Guest Lecture' },
              { src: '/images/activities/bcom_cs/4.jpg', caption: 'Computerized Accounting Training' },
              { src: '/images/activities/bcom_cs/5.jpg', caption: 'Mock Board Meeting' },
              { src: '/images/activities/bcom_cs/6.jpg', caption: 'Quiz Competition' },
              { src: '/images/activities/bcom_cs/7.jpg', caption: 'Department Association Day' },
              { src: '/images/activities/bcom_cs/8.jpg', caption: 'Intercollegiate Event' },
            ]} color="sky" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <DepartmentNewsletter
        departmentName="B.Com (CS)"
        pdfHref="/pdfs/newsletter/bcom_cs.pdf"
      />

      <CTABanner
        title="Interested in B.Com (CS)?"
        subtitle="Apply now and become a commerce professional powered by technology."
      />
    </>
  );
}
