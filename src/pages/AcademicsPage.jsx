import { FaBookOpen, FaLightbulb, FaCertificate, FaMusic, FaDrum, FaPaintBrush, FaLaptop, FaChartBar, FaUsers, FaFilePdf } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';
import { images } from '../data/media';

// ── PROGRAMMES DATA ──────────────────────────────────────────────────────────
const programmes = [
  {
    sl: 1, shift: 'Shift I',
    ug: 'B.Com (General)', pg: 'M.Com (General)', dept: 'Commerce',
    ugElig: 'Must have studied Commerce & Accountancy at HSC. 20% seats reserved for Commerce Vocational Stream.',
    pgElig: 'B.Com or equivalent degree with minimum 50% marks (40% for SC/ST) from UNOM or any recognized university.',
    ugSyllabus: '/pdfs/bcom_general.pdf', pgSyllabus: '/pdfs/mcom_syllabus.pdf',
  },
  {
    sl: 2, shift: 'Shift I',
    ug: 'B.Com (Accounting & Finance)', pg: '–', dept: 'Commerce (A&F)',
    ugElig: 'Must have studied Commerce & Accountancy at HSC.',
    pgElig: '–',
    ugSyllabus: '/pdfs/bcom_af_syllabus.pdf', pgSyllabus: null,
  },
  {
    sl: 3, shift: 'Shift I',
    ug: 'B.Com (Corporate Secretaryship)', pg: '–', dept: 'Commerce (CS)',
    ugElig: 'Must have studied Commerce & Accountancy at HSC.',
    pgElig: '–',
    ugSyllabus: '/pdfs/bcom_cs_syllabus.pdf', pgSyllabus: null,
  },
  {
    sl: 4, shift: 'Shift I',
    ug: 'BBA', pg: '–', dept: 'Business Administration',
    ugElig: '80% Commerce + Accountancy at HSC. 10% Other + 10% Vocational.',
    pgElig: '–',
    ugSyllabus: '/pdfs/bba_syllabus.pdf', pgSyllabus: null,
  },
  {
    sl: 5, shift: 'Shift I',
    ug: 'BCA', pg: '–', dept: 'Computer Applications',
    ugElig: 'Pass HSC with Mathematics / Business Math / CS.',
    pgElig: '–',
    ugSyllabus: '/pdfs/bca_syllabus.pdf', pgSyllabus: null,
  },
  {
    sl: 6, shift: 'Shift I',
    ug: 'B.Sc (Computer Science)', pg: 'M.Sc (Computer Science)', dept: 'Computer Science',
    ugElig: 'Mathematics at +2 required.',
    pgElig: 'B.Sc (Computer Science) or equivalent degree with minimum 50% marks (40% for SC/ST) as per UNOM norms.',
    ugSyllabus: '/pdfs/bsc_cs_syllabus.pdf', pgSyllabus: null,
  },
  {
    sl: 7, shift: 'Shift I',
    ug: 'B.Sc (Mathematics)', pg: 'M.sc(Mathematics)', dept: 'Mathematics',
    ugElig: 'Mathematics at +2 level.',
    pgElig: 'B.Sc (Mathematics) or equivalent degree with minimum 50% marks (40% for SC/ST) as per UNOM norms.',
    ugSyllabus: '/pdfs/bsc_math_syllabus.pdf', pgSyllabus: null,
  },
  {
    sl: 8, shift: 'Shift I',
    ug: 'B.Sc (Criminology & Criminal Justice)', pg: '–', dept: 'Criminology',
    ugElig: 'Pass any group in HSC.',
    pgElig: '–',
    ugSyllabus: '/pdfs/crim_syllabus.pdf', pgSyllabus: null,
  },
  {
    sl: 9, shift: 'Shift I',
    ug: 'B.Sc (CS with AI)', pg: '–', dept: 'Computer Science with AI',
    ugElig: 'Same as B.Sc CS.',
    pgElig: '–',
    ugSyllabus: '/pdfs/bsc_ai_syllabus.pdf', pgSyllabus: null,
  },

    {
    sl: 10, shift: 'Shift I',
    ug: 'BA(Economics)', pg: '–', dept: 'Economics',
    ugElig: 'Pass any group in HSC.',
    pgElig: '–',
    ugSyllabus: '/pdfs/ba_english_syllabus.pdf', pgSyllabus: null,
  },
  {
    sl: 10, shift: 'Shift I',
    ug: 'B.A (English)', pg: 'M.A (English)', dept: 'English',
    ugElig: 'Preference to English at HSC.',
    pgElig: 'B.A English or equivalent degree with minimum 50% marks (40% for SC/ST) as per UNOM norms.',
    ugSyllabus: '/pdfs/ba_english_syllabus.pdf', pgSyllabus: null,
  },
  {
    sl: 11, shift: 'Shift I',
    ug: 'B.A (Tamil)', pg: 'M.A (Tamil)', dept: 'Tamil',
    ugElig: 'Preference to Tamil at HSC.',
    pgElig: 'B.A Tamil or equivalent degree with minimum 50% marks (40% for SC/ST) as per UNOM norms.',
    ugSyllabus: '/pdfs/tamil-syllabus.pdf', pgSyllabus: null,
  },
];

const highlights = [
  {
    icon: FaBookOpen,
    title: 'CBCS Curriculum',
    description: 'Choice Based Credit System aligned with University of Madras standards for flexible learning.',
  },
  {
    icon: FaLightbulb,
    title: 'Value-Added Courses',
    description: '7 specialized courses including music, arts, and silambam for holistic skill development.',
  },
  {
    icon: FaUsers,
    title: 'Industry-Academia Collaboration',
    description: '5 MOUs with industry partners providing real-world exposure and training opportunities.',
  },
];

const valueAddedCourses = [
  { icon: FaMusic, title: 'Music', description: 'Traditional and contemporary music training to develop artistic expression.', color: '#e74c3c' },
  { icon: FaPaintBrush, title: 'Arts & Crafts', description: 'Creative arts programs fostering imagination and fine motor skills.', color: '#3498db' },
  { icon: FaDrum, title: 'Silambam', description: 'Traditional martial arts training promoting physical fitness and discipline.', color: '#2ecc71' },
  { icon: FaLaptop, title: 'Computer Skills', description: 'Practical computing skills for the digital world.', color: '#9b59b6' },
  { icon: FaChartBar, title: 'Tally & Accounting', description: 'Professional accounting software training for commerce students.', color: '#e67e22' },
  { icon: FaCertificate, title: 'Soft Skills', description: 'Communication, leadership, and personality development training.', color: '#1abc9c' },
];

const facilities = [
  { title: 'College Library', description: 'Well-stocked library with thousands of books, journals, and digital resources.' },
  { title: 'Computer Labs', description: 'Modern computer laboratories with latest hardware and software for hands-on learning.' },
  { title: 'Smart Classrooms', description: 'Technology-enabled classrooms with projectors and interactive teaching aids.' },
  { title: 'Internet Connectivity', description: 'High-speed internet access across campus for research and learning.' },
];

function SyllabusLink({ href, label }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs font-semibold text-primary-700 hover:text-accent-600 transition-colors"
    >
      <FaFilePdf className="text-red-500" /> {label}
    </a>
  );
}

export default function AcademicsPage() {
  return (
    <>
      <Hero
        title="Programmes Offered"
        subtitle="UG & PG Courses Offered (2025–26) with Eligibility & Syllabus"
        height="medium"
        breadcrumb="Academics › Programmes Offered"
        bannerImage={images.academics.banner}
      />

      {/* ── PROGRAMMES TABLE ──────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="UG & PG Courses Offered (2025–26)"
            subtitle="Eligibility criteria and syllabus links for all programmes"
          />

          <AnimatedSection>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-900 text-white text-xs">
                    <th className="px-4 py-3 text-left font-heading whitespace-nowrap">Sl. No</th>
                    <th className="px-4 py-3 text-left font-heading whitespace-nowrap">Shift</th>
                    <th className="px-4 py-3 text-left font-heading whitespace-nowrap">Course (UG)</th>
                    <th className="px-4 py-3 text-left font-heading whitespace-nowrap">PG Course</th>
                    <th className="px-4 py-3 text-left font-heading whitespace-nowrap">Department</th>
                    <th className="px-4 py-3 text-left font-heading min-w-[200px]">UG Eligibility</th>
                    <th className="px-4 py-3 text-left font-heading min-w-[200px]">PG Eligibility (as per UNOM)</th>
                    <th className="px-4 py-3 text-left font-heading whitespace-nowrap">Syllabus</th>
                  </tr>
                </thead>
                <tbody>
                  {programmes.map((p, i) => (
                    <tr key={p.sl} className={`border-t border-neutral-100 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'} hover:bg-primary-50/50 transition-colors`}>
                      <td className="px-4 py-3 text-neutral-500 font-heading font-bold">{p.sl}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="inline-block px-2 py-0.5 bg-primary-100 text-primary-800 text-xs font-semibold rounded">{p.shift}</span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-primary-800">{p.ug}</td>
                      <td className="px-4 py-3 text-neutral-600">{p.pg}</td>
                      <td className="px-4 py-3 text-neutral-600 whitespace-nowrap">{p.dept}</td>
                      <td className="px-4 py-3 text-neutral-600 text-xs leading-relaxed">{p.ugElig}</td>
                      <td className="px-4 py-3 text-neutral-600 text-xs leading-relaxed">{p.pgElig}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col gap-1">
                          <SyllabusLink href={p.ugSyllabus} label="UG Syllabus" />
                          <SyllabusLink href={p.pgSyllabus} label="PG Syllabus" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SHIFT II ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Shift II Programs"
            subtitle="Flexible evening programs for working students and those seeking additional schedule options"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { degree: 'B.Sc. Computer Science', color: '#2ecc71' },
              { degree: 'BCA', color: '#1abc9c' },
              { degree: 'B.Com (General)', color: '#e67e22' },
            ].map((program, index) => (
              <AnimatedSection key={program.degree} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4" style={{ borderColor: program.color }}>
                  <div className="inline-block px-3 py-1 bg-accent-50 text-accent-700 text-xs font-semibold rounded-full mb-3">
                    Shift II Available
                  </div>
                  <h3 className="text-lg font-bold text-primary-800 font-heading">{program.degree}</h3>
                  <p className="text-neutral-500 text-sm mt-2">3 Year Program — Evening Session</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMIC HIGHLIGHTS ───────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="container-custom mx-auto">
          <SectionHeading title="Academic Excellence" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full">
                  <item.icon className="text-3xl text-accent-400 mb-3" />
                  <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE-ADDED COURSES ───────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Value-Added Courses"
            subtitle="Beyond academics — programs designed to develop well-rounded individuals"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {valueAddedCourses.map((course, index) => (
              <AnimatedSection key={course.title} delay={index * 0.08}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-neutral-50 hover:shadow-md transition-all duration-300">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${course.color}15` }}
                  >
                    <course.icon className="text-xl" style={{ color: course.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 text-sm">{course.title}</h3>
                    <p className="text-neutral-500 text-sm mt-1 leading-relaxed">{course.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMIC FACILITIES ───────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Academic Facilities" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {facilities.map((facility, index) => (
              <AnimatedSection key={facility.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent-400">
                  <h3 className="text-lg font-bold text-primary-800 font-heading mb-2">{facility.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{facility.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Begin Your Academic Journey?"
        subtitle="Explore our programs and find the perfect path for your career goals."
      />
    </>
  );
}
