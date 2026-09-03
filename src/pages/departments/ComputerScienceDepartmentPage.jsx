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

const BASE_PHOTO  = '/images/faculty/computer-science/';
const BASE_RESUME = '/pdfs/faculty/computer-science/';

const faculty = [
  // Shift I
  { name: 'K.R. Ramya',           qualification: 'M.Sc., M.Phil., (Computer Science) ',    role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}r_ramya.jpg`,      resume: `${BASE_RESUME}r-ramya.pdf` },
  { name: 'Ms. V. Suganthi',    qualification: 'M.C.A., M.Phil.',   role: 'Assistant Professor',                    photo: `${BASE_PHOTO}v-suganthi.jpg`,   resume: `${BASE_RESUME}v-suganthi.pdf` },
  // Shift II
  { name: 'U.Aishwarya',        qualification: 'M.C.A., NET',             role: 'Assistant Professor',                    photo: `${BASE_PHOTO}u_ashiwarya.jpg`,  resume: `${BASE_RESUME}u_ashiwarya.pdf` },
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
    <div className={`${sizeClass} rounded-full bg-green-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-green-400" />
    </div>
  );
}


const programDetails = [
  { label: 'Degree',        value: 'Bachelor of Science (B.Sc.)' },
  { label: 'Specialisation', value: 'Computer Science' },
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

const mscProgramDetails = [
  { label: 'Degree',        value: 'Master of Science (M.Sc.)' },
  { label: 'Specialisation', value: 'Computer Science' },
  { label: 'Duration',      value: '2 Years (4 Semesters)' },
  { label: 'Eligibility',   value: 'B.Sc. Computer Science / B.C.A. or equivalent.' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
  { label: 'Syllabus',      value: (
    <a
      href="/pdfs/msc_cs_syllabus.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white-600 underline hover:text-orange-800"
    >
      PG Syllabus
    </a>
  )},
];

const outcomes = [
  'Strong foundation in programming using C, C++, Java, and Python',
  'Understanding of data structures, algorithms, and software engineering principles',
  'Hands-on skills in database design, management, and SQL',
  'Knowledge of operating systems, computer networks, and web technologies',
  'Ability to design and develop software applications for real-world problems',
  'Industry readiness for roles in software development, IT support, and data analytics',
];

const activityPhotos = [
  { src: '/images/activities/computer_1/1.jpg', caption: 'Technical Workshop' },
  { src: '/images/activities/computer_1/2.jpg', caption: 'Coding Competition' },
  { src: '/images/activities/computer_1/3.jpg', caption: 'Guest Lecture' },
  { src: '/images/activities/computer_1/4.jpg', caption: 'Project Exhibition' },
  { src: '/images/activities/computer_1/5.jpg', caption: 'Hackathon' },
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function ComputerScienceDepartmentPage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      const el = document.getElementById(section);
      if (el) setTimeout(() => {
        const offset = section === 'programmes-msc' ? 220 : 130;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchParams]);

  return (
    <>
      <Hero
        title="Department of Computer Science"
        subtitle="B.Sc. Computer Science — Building the next generation of technology professionals"
        height="medium"
        breadcrumb="Academics › B.Sc. Computer Science"
      />

      <DepartmentSectionNav />

      {/* ─── About the Department ─── */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-sm font-semibold rounded-full mb-4">
                Science — 3 Year Program
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The Department of Computer Science at SSKV College of Arts and Science for Women offers a
                rigorous and industry-aligned B.Sc. Computer Science program. With a strong emphasis on
                both theoretical foundations and practical application, students are prepared for the
                ever-evolving world of technology.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 font-heading mb-3">
                Vision
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                To be at the forefront of Computer Science ensuring to produce highly competent graduates who uphold strong ethical values and are committed to contributing to the development of a vibrant nation.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 font-heading mb-3">
                Mission
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-2">
                To strengthen the core competence in Computer Science technology through logical and analytical learning.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-2">
                To familiarize students with the state of art technologies within the realm of Computer Science.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                To produce successful graduates with personal and professional responsibilities and commitment.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Faculty ─── */}
      <section id="faculty" className="section-padding bg-green-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Faculty"
            subtitle="Experienced educators driving technical and academic excellence"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-green-400 uppercase tracking-wide mb-1">Head of Department</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-green-500/20 hover:bg-green-500/30 text-green-300 text-xs font-semibold rounded-lg transition-colors"
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
                  <div className="bg-white hover:bg-green-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <FacultyPhoto src={f.photo} name={f.name} size="md" />
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm font-heading leading-snug">{f.name}</h4>
                        <p className="text-neutral-500 text-xs mt-0.5">{f.qualification}</p>
                        <p className="text-green-600 text-xs font-medium mt-0.5">{f.role}</p>
                      </div>
                    </div>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-green-50 hover:bg-green-100 text-green-700 text-xs font-semibold rounded-lg border border-green-100 transition-colors"
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
                <div key={stat.label} className="bg-white rounded-xl p-5 text-center border border-green-100">
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
            subtitle="What students gain from the B.Sc. Computer Science program"
          />

          {/* Programmes List */}
          <div className="flex flex-wrap gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex-1 min-w-[200px] bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <p className="text-sm font-bold text-primary-800">Bachelor of Science (B.Sc.)</p>
              <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
            </div>
            <div className="flex-1 min-w-[200px] bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <p className="text-sm font-bold text-primary-800">Master of Science (M.Sc.)</p>
              <p className="text-xs text-neutral-500 mt-1">Postgraduate Programme</p>
            </div>
          </div>

          {/* Wide dark program card — B.Sc. */}
          <AnimatedSection>
            <div className="max-w-4xl mx-auto mb-10">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <FaLaptopCode className="text-2xl text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.Sc. Computer Science</h3>
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
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/50 text-xs">Available in Shift I &amp; Shift II</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Wide dark program card — M.Sc. */}
          <AnimatedSection>
            <div id="programmes-msc" className="max-w-4xl mx-auto mb-10 scroll-mt-32">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <FaLaptopCode className="text-2xl text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">M.Sc. Computer Science</h3>
                    <p className="text-white/60 text-sm">Program Details</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {mscProgramDetails.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">{item.label}</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/50 text-xs">Postgraduate Programme</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          

          {/* Outcomes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 bg-green-50 rounded-xl p-5 border border-green-100 shadow-sm h-full">
                  <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section id="activities" className="section-padding bg-green-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Department Activities"
            subtitle="Workshops, competitions, and events that build practical skills"
          />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto text-center mb-10">
              The Department of Computer Science at SSKV College of Arts and Science for Women actively organizes technical workshops, coding competitions, guest lectures by industry experts, and hands-on training sessions in emerging technologies. Students participate in hackathons, project exhibitions, and intercollegiate technical events to enhance their practical skills and industry readiness.
            </p>
          </AnimatedSection>

          {/* Photo gallery */}
          <ActivityGallery images={activityPhotos} color="green" />
        </div>
      </section>
      <DepartmentNewsletter
        departmentName="Computer Science"
        pdfHref="/pdfs/newsletter/computer_s1.pdf"
        pdfHref="/pdfs/newsletter/computer_s2.pdf"
      />




      <CTABanner
        title="Interested in B.Sc. Computer Science?"
        subtitle="Apply now and launch your career in the world of technology and software."
      />
    </>
  );
}
