import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaChartLine, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf, FaCamera } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import DepartmentSectionNav from '../../components/shared/DepartmentSectionNav';
import ActivityGallery from '../../components/shared/ActivityGallery';
import CTABanner from '../../components/sections/CTABanner';
import DepartmentNewsletter from '../../components/shared/DepartmentNewsletter';

const faculty = [];

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
    <div className={`${sizeClass} rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-amber-400" />
    </div>
  );
}


const programDetails = [
  { label: 'Degree',        value: 'B.Com (General)' },
  { label: 'Shift',         value: 'Shift II (Evening)' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: 'Must have studied Commerce & Accountancy at HSC. 20% seats reserved for Commerce Vocational Stream.' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
  { label: 'Syllabus',      value: (<a
      href="/pdfs/bcom_general.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white-600 underline hover:text-amber-800">UG Syllabus</a>
    )
  },
];

const outcomes = [
  'Comprehensive understanding of accounting, finance, and business management',
  'Proficiency in financial reporting, auditing, and taxation',
  'Knowledge of business law, corporate governance, and banking',
  'Practical skills in computerised accounting (Tally) and office automation',
  'Communication and interpersonal skills for the corporate environment',
  'Readiness for higher studies (M.Com, MBA, CA, ICWA) or careers in commerce',
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function BComGeneralShiftIIDepartmentPage() {
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
        title="Department of B.Com General (Shift II)"
        subtitle="Bachelor of Commerce — Evening Programme for flexible learning"
        height="medium"
        breadcrumb="Academics › B.Com General (Shift II)"
      />

      {/* Section Nav */}
      <DepartmentSectionNav />

      {/* About the Department */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 text-sm font-semibold rounded-full mb-4">
                Shift II — Evening Programme
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The B.Com General (Shift II) programme offers the same comprehensive commerce curriculum as the day programme, scheduled in the evening for students who prefer flexible timings. The programme provides a strong foundation in accounting, finance, and business studies.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Students enrolled in Shift II enjoy the same academic rigor, access to library resources, computer labs, and placement support as their Shift I counterparts. The curriculum follows the University of Madras CBCS framework.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Graduates can pursue professional certifications (CA, ICWA, CS), higher studies (M.Com, MBA), or enter the workforce in banking, finance, accounting, and business management roles.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section-padding bg-amber-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Faculty"
            subtitle="Faculty information for Shift II"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wide mb-1">Head of Department</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold rounded-lg transition-colors"
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
                  <div className="bg-white hover:bg-amber-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <FacultyPhoto src={f.photo} name={f.name} size="md" />
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm font-heading leading-snug">{f.name}</h4>
                        <p className="text-neutral-500 text-xs mt-0.5">{f.qualification}</p>
                        <p className="text-amber-600 text-xs font-medium mt-0.5">{f.role}</p>
                      </div>
                    </div>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-semibold rounded-lg border border-amber-100 transition-colors"
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
                { icon: FaChartLine,     value: '6',                  label: 'Semesters' },
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
              <div className="flex-1 min-w-[200px] bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <p className="text-sm font-bold text-primary-800">Bachelor of Commerce (B.Com)</p>
                <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
              </div>
              <div className="flex-1 min-w-[200px] bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-3">
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
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <FaChartLine className="text-2xl text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.Com General (Shift II)</h3>
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
            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <FaChartLine className="text-2xl text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">M.Com</h3>
                    <p className="text-white/60 text-sm">Postgraduate Programme Details</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Degree</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">Master of Commerce (M.Com)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Specialisation</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">Commerce</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Duration</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">2 Years (4 Semesters)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Eligibility</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">B.Com from a recognized university</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Affiliation</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">University of Madras</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Curriculum</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">CBCS — Choice Based Credit System</span>
                    </div>
                </div>
              </div>
            </AnimatedSection>
            {/* Program Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outcomes.map((outcome, i) => (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <div className="flex items-start gap-3 bg-amber-50 rounded-xl p-5 border border-amber-100 shadow-sm h-full">
                    <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section id="activities" className="section-padding bg-amber-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Department Activities" subtitle="Promoting commerce knowledge and professional skills" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-6 max-w-4xl mx-auto">
              The Department of B.Com General (Shift II) at SSKV College organizes commerce-oriented workshops, guest lectures on business and finance, accounting practical sessions, and seminars on banking and taxation. Students participate in business quizzes, commerce fests, and intercollegiate events to develop their professional acumen.
            </p>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <ActivityGallery images={[
              { src: '/images/activities/bcom_2/1.jpeg', caption: 'Commerce Workshop' },
              { src: '/images/activities/bcom_2/2.jpeg', caption: 'Guest Lecture on Finance' },
              { src: '/images/activities/bcom_2/3.jpeg', caption: 'Accounting Practical' },
              { src: '/images/activities/bcom_2/4.jpeg', caption: 'Banking Seminar' },

            ]} color="amber" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <DepartmentNewsletter
        departmentName="B.Com General (Shift II)"
        pdfHref="/pdfs/newsletter/bcom_g_shift_2.pdf"
      />

      <CTABanner
        title="Interested in B.Com General (Shift II)?"
        subtitle="Apply now for the evening programme in Commerce."
      />
    </>
  );
}
