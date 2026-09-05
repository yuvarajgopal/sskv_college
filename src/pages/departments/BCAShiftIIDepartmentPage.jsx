import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaDesktop, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf, FaCamera } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import DepartmentSectionNav from '../../components/shared/DepartmentSectionNav';
import ActivityGallery from '../../components/shared/ActivityGallery';
import CTABanner from '../../components/sections/CTABanner';
import DepartmentNewsletter from '../../components/shared/DepartmentNewsletter';

const BASE_PHOTO  = '/images/faculty/bca/'; 
const BASE_RESUME = '/pdfs/faculty/bca/';

const faculty = [
  { name: 'Dr. P. Priyadharshini', qualification: 'M.C.A., M.Phil., Ph.D.', role: 'Assistant Professor & HOD (Shift II)', isHod: true, photo: `${BASE_PHOTO}priyadharshini.jpg`, resume: `${BASE_RESUME}priyadharshini.pdf` },
  { name: 'Ms. A. Yazhini',       qualification: 'MCA., NET',               role: 'Assistant Professor',                              photo: `${BASE_PHOTO}yazhini.jpg`,             resume: `${BASE_RESUME}Yazhini.pdf` },
  { name: 'Ms. V.Suganthi',       qualification: 'MCA., M.Phil',               role: 'Assistant Professor',                              photo: `${BASE_PHOTO}v_suganthi.jpg`,             resume: `${BASE_RESUME}v_suganthi.pdf` },
];

const programDetails = [
  { label: 'Degree',        value: 'Bachelor of Computer Applications (BCA)' },
  { label: 'Shift',         value: 'Shift II (Evening)' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: 'Pass HSC with Mathematics / Business Math / CS.' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
  { label: 'Syllabus',      value: (
    <a
      href="/pdfs/bca_syllabus.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white-600 underline hover:text-orange-800"
    >
      UG Syllabus
    </a>
  )},
];

const outcomes = [
  'Proficiency in programming languages including C, C++, Java, and web technologies',
  'Practical skills in software development, testing, and project management',
  'Understanding of database management, SQL, and data-driven application design',
  'Knowledge of computer networks, operating systems, and IT security basics',
  'Hands-on experience with web development, mobile apps, and cloud computing',
  'Industry readiness for roles in software development, IT services, and digital business',
];

const activityPhotos = [
  { src: '/images/activities/bca-shift-ii/1.jpg', caption: 'Technical Workshop' },
  { src: '/images/activities/bca-shift-ii/2.jpg', caption: 'Coding Session' },
  { src: '/images/activities/bca-shift-ii/3.jpg', caption: 'Guest Lecture' },
  { src: '/images/activities/bca-shift-ii/4.jpg', caption: 'Project Exhibition' },
  { src: '/images/activities/bca-shift-ii/5.jpg', caption: 'Tech Quiz' },
  { src: '/images/activities/bca-shift-ii/6.jpg', caption: 'Hands-on Training' },
  { src: '/images/activities/bca-shift-ii/7.jpg', caption: 'Department Day' },
  { src: '/images/activities/bca-shift-ii/8.jpg', caption: 'Intercollegiate Event' },
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

function FacultyPhoto({ src, name, size = 'md' }) {
  const [failed, setFailed] = useState(false);
  const sizeClass = size === 'lg'
    ? 'w-24 h-24 text-4xl'
    : 'w-24 h-24 text-2xl';

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
    <div className={`${sizeClass} rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-teal-400" />
    </div>
  );
}


export default function BCAShiftIIDepartmentPage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      const el = document.getElementById(section);
      if (el) setTimeout(() => { const top = el.getBoundingClientRect().top + window.pageYOffset - 130; window.scrollTo({ top, behavior: 'smooth' }); }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchParams]);

  return (
    <>
      {/* Hero */}
      <Hero
        title="Department of BCA (Shift II)"
        subtitle="Bachelor of Computer Applications — Evening Programme for flexible learning"
        height="medium"
        breadcrumb="Academics › BCA (Shift II)"
      />

      {/* Section Nav */}
      <DepartmentSectionNav />

      {/* About the Department */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 text-sm font-semibold rounded-full mb-4">
                Shift II — Evening Programme
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The BCA (Shift II) programme at SSKV College provides an evening schedule option for students who prefer flexible timings. The curriculum, evaluation, and degree awarded are identical to the Shift I programme, ensuring the same quality education.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                This programme is ideal for students who may have other commitments during the day. The department has dedicated faculty and offers the same lab facilities, library access, and placement support as the day programme.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Graduates are well-equipped to pursue careers in software companies, IT services, or continue their studies through MCA, MBA (IT), or related postgraduate programs.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-4">
                Vision
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                The Department aims to foster a dynamic teaching and learning environment that empowers students to become competent professionals, ready to serve the computing industry and contribute meaningfully to the socio-economic development of the nation.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-4">
                Mission
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                We provide high-quality education in computer applications through a curriculum aligned with industry needs. Preparing students for successful careers in IT and allied sectors. Encouraging students in academic excellence and innovation.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section-padding bg-teal-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Faculty"
            subtitle="Dedicated educators for the Shift II programme"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-teal-400 Sentencecase tracking-wide mb-1">Head of Department (Shift II)</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 text-xs font-semibold rounded-lg transition-colors"
                    >
                      <FaFilePdf className="text-xs" /> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Faculty grid */}
          {faculty.filter((f) => !f.isHod).length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {faculty.filter((f) => !f.isHod).map((f, i) => (
                <AnimatedSection key={f.name} delay={i * 0.05}>
                  <div className="bg-neutral-50 hover:bg-teal-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <FacultyPhoto src={f.photo} name={f.name} size="md" />
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm font-heading leading-snug">{f.name}</h4>
                        <p className="text-neutral-500 text-xs mt-0.5">{f.qualification}</p>
                        <p className="text-teal-600 text-xs font-medium mt-0.5">{f.role}</p>
                      </div>
                    </div>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-700 text-xs font-semibold rounded-lg border border-teal-100 transition-colors"
                    >
                      <FaFilePdf className="text-xs" /> View Profile
                    </a>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Stats row */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
              {[
                { icon: FaUsers,         value: facultyCount || '—', label: 'Faculty Members' },
                { icon: FaAward,         value: phdCount || '—',     label: 'Ph.D Holders' },
                { icon: FaGraduationCap, value: '3',                  label: 'Years Duration' },
                { icon: FaDesktop,       value: '6',                  label: 'Semesters' },
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

      {/* Programmes Offered */}
      <section id="programmes" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Programmes Offered"
            subtitle="What students gain from the BCA (Shift II) program"
          />

          {/* Programmes List */}
          <div className="flex flex-wrap gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex-1 min-w-[200px] bg-teal-50 border border-teal-200 rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mx-auto mb-3">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <p className="text-sm font-bold text-primary-800">Bachelor of Computer Applications (BCA)</p>
              <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
            </div>
            <div className="flex-1 min-w-[200px] bg-teal-50 border border-teal-200 rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mx-auto mb-3">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <p className="text-sm font-bold text-primary-800">Master of Computer Applications (MCA)</p>
              <p className="text-xs text-neutral-500 mt-1">Postgraduate Programme</p>
            </div>
          </div>

          {/* Wide dark program card */}
          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white max-w-4xl mx-auto mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                  <FaDesktop className="text-2xl text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading">BCA (Shift II)</h3>
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
          

          {/* Outcomes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-teal-100 shadow-sm h-full">
                  <div className="w-7 h-7 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed">{outcome}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Department Activities */}
      <section id="activities" className="section-padding bg-teal-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Department Activities"
            subtitle="Workshops, events, and hands-on learning experiences"
          />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto text-center mb-10">
              The Department of BCA (Shift II) at SSKV College organizes technical workshops, coding sessions, guest lectures on IT trends, and hands-on training programs. Students participate in project exhibitions, tech quizzes, and intercollegiate events to strengthen their computing skills and industry readiness.
            </p>
          </AnimatedSection>

          <ActivityGallery images={activityPhotos} color="teal" />
        </div>
      </section>

      {/* CTA */}
      <DepartmentNewsletter
        departmentName="BCA (Shift II)"
        pdfHrefOdd="/pdfs/newsletter/bca_shift_2.pdf"
        pdfHrefEven="/pdfs/newsletter/bca_2_even.pdf"
      />


      <CTABanner
        title="Interested in BCA (Shift II)?"
        subtitle="Apply now for the evening programme and begin your journey into IT."
      />
    </>
  );
}
