import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaLaptopCode, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf, FaCamera } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';
import DepartmentNewsletter from '../../components/shared/DepartmentNewsletter';
import DepartmentSectionNav from '../../components/shared/DepartmentSectionNav';
import ActivityGallery from '../../components/shared/ActivityGallery';

const BASE_PHOTO  = '/images/faculty/computer_shift_2/';
const BASE_RESUME = '/pdfs/faculty/computer-science/';

const faculty = [
  { name: 'R,Anitha',           qualification: 'MCA., M.Phil., SET, NET',    role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}aniatha.jpg`,      resume: `${BASE_RESUME}anitha_s2.pdf` },
  { name: 'Dr.C.Sudha',    qualification: 'MCA.,M.Phil.,Ph.D.',   role: 'Assistant Professor',                    photo: `${BASE_PHOTO}sudha.jpg`,   resume: `${BASE_RESUME}sudha.pdf` },
    { name: 'R.Aishwarya',    qualification: 'M.Sc.,BEd.,',   role: 'Assistant Professor',                    photo: `${BASE_PHOTO}Aishwarya.jpg`,   resume: `${BASE_RESUME}r_aishwarya.pdf` }
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
  { label: 'Syllabus',      value: (
    <a
      href="/pdfs/bsc_cs_syllabus.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white-600 underline hover:text-orange-800"
    >
      UG Syllabus
    </a>
  )},
];

const outcomes = [
  'Strong foundation in programming languages — C, C++, Java, and Python',
  'Proficiency in data structures, algorithms, and software engineering principles',
  'Competence in database management systems and SQL',
  'Understanding of computer networks, operating systems, and system architecture',
  'Hands-on experience with web development and modern technologies',
  'Readiness for higher studies (M.Sc., MCA) or careers in IT industry',
];

const activityPhotos = [
  { src: '/images/activities/computer_2/1.jpeg', caption: 'Technical Workshop' },
  { src: '/images/activities/computer_2/2.jpeg', caption: 'Coding Competition' },
  { src: '/images/activities/computer_2/3.jpeg', caption: 'Guest Lecture' },
  { src: '/images/activities/computer_2/4.jpeg', caption: 'Project Exhibition' },
  { src: '/images/activities/computer_2/5.jpeg', caption: 'Hackathon' },
  { src: '/images/activities/computer_2/6.jpeg', caption: 'Web Development Training' },
  { src: '/images/activities/computer_2/7.jpeg', caption: 'Department Day' },
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function CSShiftIIDepartmentPage() {
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
      <Hero
        title="Department of Computer Science (Shift II)"
        subtitle="B.Sc. Computer Science — Evening Programme for flexible learning"
        height="medium"
        breadcrumb="Academics › Computer Science (Shift II)"
      />

      <DepartmentSectionNav />

      {/* ─── About the Department ─── */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
                Shift II — Evening Programme
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h2>
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
          </div>
        </div>
      </section>

      {/* ─── Faculty ─── */}
      <section id="faculty" className="section-padding bg-blue-50">
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
                    <div className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-1">Head of Department (Shift II)</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-xs font-semibold rounded-lg transition-colors"
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
            <div className="flex flex-wrap justify-center gap-5">
              {faculty.filter((f) => !f.isHod).map((f, i) => (
                <AnimatedSection key={f.name} delay={i * 0.05} className="w-full sm:w-72">
                  <div className="bg-white hover:bg-blue-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4 h-full">
                    <div className="flex items-center gap-3">
                      <FacultyPhoto src={f.photo} name={f.name} size="md" />
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm font-heading leading-snug">{f.name}</h4>
                        <p className="text-neutral-500 text-xs mt-0.5">{f.qualification}</p>
                        <p className="text-blue-600 text-xs font-medium mt-0.5">{f.role}</p>
                      </div>
                    </div>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold rounded-lg border border-blue-100 transition-colors"
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
                { icon: FaLaptopCode,    value: '6',                  label: 'Semesters' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-5 text-center border border-blue-100">
                  <stat.icon className="text-2xl text-primary-700 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-800 font-heading">{stat.value}</div>
                  <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Programmes Offered ─── */}
      <section id="programmes" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Programmes Offered"
            subtitle="What students gain from the B.Sc. CS (Shift II) program"
          />

          {/* Programmes List */}
          <div className="flex flex-wrap gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex-1 min-w-[200px] bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <p className="text-sm font-bold text-primary-800">Bachelor of Science (B.Sc.)</p>
              <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
            </div>
            <div className="flex-1 min-w-[200px] bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <p className="text-sm font-bold text-primary-800">Master of Science (M.Sc.)</p>
              <p className="text-xs text-neutral-500 mt-1">Postgraduate Programme</p>
            </div>
          </div>

          {/* Wide dark program card */}
          <AnimatedSection>
            <div className="max-w-4xl mx-auto mb-10">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {programDetails.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">{item.label}</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <FaLaptopCode className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading">M.Sc. Computer Science</h3>
                  <p className="text-white/60 text-sm">Postgraduate Programme Details</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-white/60 text-sm">Degree</span>
                    <span className="text-white font-semibold text-sm text-right ml-4">Master of Science (M.Sc.)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-white/60 text-sm">Specialisation</span>
                    <span className="text-white font-semibold text-sm text-right ml-4">Computer Science</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-white/60 text-sm">Duration</span>
                    <span className="text-white font-semibold text-sm text-right ml-4">2 Years (4 Semesters)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-white/60 text-sm">Eligibility</span>
                    <span className="text-white font-semibold text-sm text-right ml-4">B.Sc. Computer Science from a recognized university</span>
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

          {/* Outcomes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-5 border border-blue-100 shadow-sm h-full">
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

      {/* ─── Department Activities ─── */}
      <section id="activities" className="section-padding bg-blue-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Department Activities"
            subtitle="Workshops, competitions, and events that build practical skills"
          />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto text-center mb-10">
              The Department of Computer Science (Shift II) at SSKV College organizes technical workshops, coding competitions, guest lectures, and hands-on training in programming and web development. Students participate in hackathons, project exhibitions, and intercollegiate tech events to enhance their practical skills.
            </p>
          </AnimatedSection>

          {/* Photo gallery */}
          <ActivityGallery images={activityPhotos} color="blue" />
        </div>
      </section>
      <DepartmentNewsletter
        departmentName="Computer Science (Shift II)"
        pdfHref="/pdfs/newsletter/computer_science_shift_2.pdf"
        pdfHref="/pdfs/newsletter/bsc_comp_2_even.pdf"
      />



      <CTABanner
        title="Interested in B.Sc. CS (Shift II)?"
        subtitle="Apply now for the evening programme in Computer Science."
      />
    </>
  );
}
