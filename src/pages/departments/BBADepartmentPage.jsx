import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaBriefcase, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf, FaCamera } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import DepartmentSectionNav from '../../components/shared/DepartmentSectionNav';
import ActivityGallery from '../../components/shared/ActivityGallery';
import CTABanner from '../../components/sections/CTABanner';
import DepartmentNewsletter from '../../components/shared/DepartmentNewsletter';

const BASE_PHOTO  = '/images/faculty/bba/';
const BASE_RESUME = '/pdfs/faculty/bba/';

const faculty = [
  { name: 'P. Revathi',      qualification: 'M.Com., M.Phil., M.B.A., Ph.D., B.Ed.,  SET., NET', role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}p-revathi.jpg`,      resume: `${BASE_RESUME}p-revathi.pdf` },
  { name: 'S. Janani',       qualification: 'M.B.A',                                     role: 'Assistant Professor',               photo: `${BASE_PHOTO}s-janani.jpg`,       resume: `${BASE_RESUME}s-janani.pdf` },
  { name: 'S. Kavitha',      qualification: 'M.Com',                                     role: 'Assistant Professor',               photo: `${BASE_PHOTO}s-kavitha.jpg`,      resume: `${BASE_RESUME}s-kavitha.pdf` },
  { name: 'Ms.R.KAYALVIZHI', qualification: 'MBA.,',                                     role: 'Assistant Professor',               photo: `${BASE_PHOTO}kayalizhi.jpg`,      resume: `${BASE_RESUME}kayil_bba.pdf` },
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
    <div className={`${sizeClass} rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-violet-400" />
    </div>
  );
}


const programDetails = [
  { label: 'Degree',        value: 'Bachelor of Business Administration (BBA)' },
  { label: 'Specialisation', value: 'Business Administration' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: '80% Commerce + Accountancy at HSC. 10% (Other) 10% Vocational.' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'bba-syllabus' },
  { label: 'Syllabus',     value: (<a
        href="/pdfs/bba_syllabus.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-600 underline hover:text-orange-800"> UG Syllabus</a>
    )
  },
];

const outcomes = [
  'Strong understanding of management principles, organizational behaviour, and leadership',
  'Proficiency in marketing, sales management, and consumer behaviour analysis',
  'Knowledge of financial management, business accounting, and corporate finance basics',
  'Entrepreneurial mindset with skills in business planning and startup development',
  'Human resource management, team building, and workplace communication skills',
  'Career readiness for managerial roles, entrepreneurship, or MBA entrance preparation',
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function BBADepartmentPage() {
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
        title="Department of BBA"
        subtitle="Bachelor of Business Administration — Developing tomorrow's leaders and entrepreneurs"
        height="medium"
        breadcrumb="Academics › BBA"
      />

      {/* Section Nav */}
      <DepartmentSectionNav />

      {/* About the Department */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-violet-50 text-violet-700 text-sm font-semibold rounded-full mb-4">
                Professional — 3 Year Program
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Management education is a transformative journey that builds responsible, globally minded leaders. We nurture personal growth through
                confidence and discipline, leading to career growth marked by adaptability and innovation. True leadership rests on values and balance—integrity,
                empathy, and resilience. With curriculum aligned to global industry needs and enriched by internships and real-world exposure. We are preparing
                students for tomorrow's challenges. Through holistic development in academics, sports, and culture, We shape visionaries, entrepreneurs, and change-makers.
              </p>
              <h3 className="text-xl font-bold text-primary-800 font-heading mb-3 mt-6">
                Vision of the Department
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                "Shaping Leaders, Inspiring Growth, Building Futures"
                Education is the most powerful weapon which you can use to change the world – Nelson Mandela
              </p>
              <h3 className="text-xl font-bold text-primary-800 font-heading mb-3 mt-6">
                Vision
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Personal and Career Growth – Building confidence, adaptability and leadership.
                Virtues and Emotional Balance – Instilling integrity, empathy and resilience.
                Global Industry Relevance – Aligning knowledge with modern industrial needs.
                Holistic Development – Fostering talent through sports, culture, and co-curricular.
                Leadership for Tomorrow – Shaping thinkers, innovators, and global citizens.
              </p>
              <h3 className="text-xl font-bold text-primary-800 font-heading mb-3 mt-6">
                Mission
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Developing leaders who can shape the future with knowledge, values, and vision.
                1. "Beyond Knowledge, Towards Leadership."
                2. "Educating Minds, Shaping Futures."
                3. "From Classrooms to Global Boardrooms."
                4. "Empowering Growth, Inspiring Change."
                5. "Where Learning Meets Leadership."
                6. "Knowledge, Virtue, and Vision for Tomorrow."
              </p>
              <h3 className="text-xl font-bold text-primary-800 font-heading mb-3 mt-6">
                Objectives
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                The Department of BBA at SSKV College of Arts and Science for Women is committed to developing students' management skills,
                communication abilities, and business understanding. The department organizes seminars, workshops, guest lectures,
                and business activities such as case studies, business plan competitions, and management fests to enrich academic learning.
                Through interactive sessions, students are encouraged to improve their confidence and creativity.
                The department also motivates students to participate in intercollegiate competitions and skill-development programs for overall personality development.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section-padding bg-violet-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Faculty"
            subtitle="Business experts and management educators inspiring future leaders"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-violet-400 uppercase tracking-wide mb-1">Head of Department</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 text-xs font-semibold rounded-lg transition-colors"
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
                  <div className="bg-white hover:bg-violet-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <FacultyPhoto src={f.photo} name={f.name} size="md" />
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm font-heading leading-snug">{f.name}</h4>
                        <p className="text-neutral-500 text-xs mt-0.5">{f.qualification}</p>
                        <p className="text-violet-600 text-xs font-medium mt-0.5">{f.role}</p>
                      </div>
                    </div>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-violet-50 hover:bg-violet-100 text-violet-700 text-xs font-semibold rounded-lg border border-violet-100 transition-colors"
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
                { icon: FaBriefcase,     value: '6',                  label: 'Semesters' },
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
              <div className="flex-1 min-w-[200px] bg-violet-50 border border-violet-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <p className="text-sm font-bold text-primary-800">Bachelor of Business Administration (BBA)</p>
                <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
              </div>
   
            </div>
            {/* Programme Details Card */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
                    <FaBriefcase className="text-2xl text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">BBA</h3>
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
                  <div className="flex items-start gap-3 bg-violet-50 rounded-xl p-5 border border-violet-100 shadow-sm h-full">
                    <div className="w-7 h-7 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section id="activities" className="section-padding bg-violet-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Department Activities" subtitle="Developing management skills and business acumen" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-6 max-w-4xl mx-auto">
              The Department of BBA at SSKV College of Arts and Science for Women focuses on developing management skills, entrepreneurial thinking, and business acumen. The department organizes business plan competitions, industrial visits, guest lectures by corporate leaders, workshops on marketing and finance, and management fests. Students participate in case study competitions, role-play exercises, and intercollegiate management events to enhance their leadership and decision-making abilities.
            </p>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <ActivityGallery images={[
              { src: '/images/bba_1/bba_1.jpeg', caption: 'BBA Department Activity' },
              { src: '/images/bba_1/bba_2.jpeg', caption: 'BBA Department Activity' },
              { src: '/images/bba_ass/WhatsApp Image 2025-09-18 at 10.49.22.jpeg', caption: 'BBA Association Activity' },
              { src: '/images/bba_ass/WhatsApp Image 2025-09-18 at 10.49.23.jpeg', caption: 'BBA Association Activity' },
              { src: '/images/bba_ass/WhatsApp Image 2025-09-18 at 10.49.23 (1).jpeg', caption: 'BBA Association Activity' },
              { src: '/images/bba_ass/WhatsApp Image 2025-09-18 at 10.49.24.jpeg', caption: 'BBA Association Activity' },
              { src: '/images/bba_ass/WhatsApp Image 2025-09-18 at 10.49.25.jpeg', caption: 'BBA Association Activity' },
              { src: '/images/bba_ass/WhatsApp Image 2025-09-18 at 10.49.25 (1).jpeg', caption: 'BBA Association Activity' },
              { src: '/images/bba_ass/Copy of WhatsApp Image 2025-09-18 at 10.49.25 (1).jpeg', caption: 'BBA Association Activity' },
            ]} color="violet" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <DepartmentNewsletter
        departmentName="B.B.A"
        pdfHref="/pdfs/newsletter/bba.pdf"
      />

      <CTABanner
        title="Interested in BBA?"
        subtitle="Apply now and start your journey towards becoming a confident business leader."
      />
    </>
  );
}
