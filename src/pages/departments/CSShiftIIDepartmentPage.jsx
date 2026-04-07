import { useState } from 'react';
import { FaLaptopCode, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const BASE_PHOTO  = '/images/faculty/cs/';
const BASE_RESUME = '/pdfs/faculty/cs/';

const faculty = [
  { name: 'Faculty details will be updated soon', qualification: '', role: 'Shift II Faculty', isHod: false, photo: '', resume: '' },
];

function FacultyPhoto({ src, name, size = 'md' }) {
  const [failed, setFailed] = useState(false);
  const sizeClass = size === 'lg' ? 'w-24 h-24 text-4xl' : 'w-14 h-14 text-2xl';
  if (!failed && src) {
    return <img src={src} alt={name} onError={() => setFailed(true)} className={`${sizeClass} rounded-full object-cover flex-shrink-0`} />;
  }
  return <div className={`${sizeClass} rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0`}><FaUserTie className="text-blue-400" /></div>;
}

const programDetails = [
  { label: 'Degree',        value: 'B.Sc. Computer Science' },
  { label: 'Shift',         value: 'Shift II (Evening)' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: 'Mathematics at +2 required.' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
   { label: 'Syllabus',     value: (<a
        href="/pdfs/bsc_cs_syllabus.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-600 underline hover:text-orange-800">UG Syllabus</a>
    )
  },
];

const outcomes = [
  'Strong foundation in programming languages — C, C++, Java, and Python',
  'Proficiency in data structures, algorithms, and software engineering principles',
  'Competence in database management systems and SQL',
  'Understanding of computer networks, operating systems, and system architecture',
  'Hands-on experience with web development and modern technologies',
  'Readiness for higher studies (M.Sc., MCA) or careers in IT industry',
];

export default function CSShiftIIDepartmentPage() {
  return (
    <>
      <Hero
        title="Department of Computer Science (Shift II)"
        subtitle="B.Sc. Computer Science — Evening Programme for flexible learning"
        height="medium"
        breadcrumb="Academics › Computer Science (Shift II)"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
                Shift II — Evening Programme
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">About the Department</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The B.Sc. Computer Science (Shift II) programme offers the same rigorous curriculum as the day programme, delivered in the evening for students who prefer flexible scheduling. The programme covers core areas of computer science with a strong emphasis on practical skills.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Students have access to fully equipped computer labs, the college library, and benefit from the same placement support and training programmes available to Shift I students. The curriculum follows the University of Madras CBCS framework.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Graduates are well-prepared for careers in software development, IT services, data analytics, or for pursuing higher studies in computer science and related fields.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <FaLaptopCode className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.Sc. CS (Shift II)</h3>
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

      <section className="section-padding bg-blue-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Program Outcomes" subtitle="What students gain from the B.Sc. CS (Shift II) program" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-blue-100 shadow-sm h-full">
                  <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed">{outcome}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading title="Our Faculty" subtitle="Faculty information for Shift II" />
          <p className="text-center text-neutral-400 py-8 text-sm">Faculty information will be updated soon.</p>

          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 max-w-3xl mx-auto">
              {[
                { icon: FaUsers,         value: '—', label: 'Faculty Members' },
                { icon: FaAward,         value: '—', label: 'Ph.D Holders' },
                { icon: FaGraduationCap, value: '3', label: 'Years Duration' },
                { icon: FaLaptopCode,    value: '6', label: 'Semesters' },
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

      <CTABanner title="Interested in B.Sc. CS (Shift II)?" subtitle="Apply now for the evening programme in Computer Science." />
    </>
  );
}
