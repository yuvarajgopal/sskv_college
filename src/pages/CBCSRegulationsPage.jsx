import { FaBookOpen, FaListOl, FaChartBar, FaClipboardCheck, FaExternalLinkAlt, FaGraduationCap, FaStar, FaLayerGroup, FaBalanceScale } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

// ── DATA ──────────────────────────────────────────────────────────────────────

const objectives = [
  { icon: FaLayerGroup, title: 'Flexible Curriculum', desc: 'Enables students to choose courses from a wide range of electives, including inter-disciplinary and skill-based options.' },
  { icon: FaStar, title: 'Credit-Based Evaluation', desc: 'Each course carries assigned credits reflecting the learning hours required, ensuring a transparent and standardised assessment framework.' },
  { icon: FaChartBar, title: 'Grading System', desc: 'Adopts a 10-point grading scale with Grade Point Average (GPA) and Cumulative GPA, aligning with national and international standards.' },
  { icon: FaBalanceScale, title: 'Uniform Standards', desc: 'Ensures uniformity in academic regulations across all affiliated colleges of the University of Madras.' },
];

const courseCategories = [
  { code: 'Part I', title: 'Language — Tamil / Other Languages', credits: '3 per semester', desc: 'Compulsory language courses prescribed by the University for all UG programmes.' },
  { code: 'Part II', title: 'English', credits: '3 per semester', desc: 'Compulsory English language courses to develop communication and analytical skills.' },
  { code: 'Part III', title: 'Core Courses', credits: '4–5 per course', desc: 'Discipline-specific courses forming the foundation of the chosen programme, including theory and practical components.' },
  { code: 'Part III', title: 'Elective Courses', credits: '3–4 per course', desc: 'Discipline-specific electives offering specialisation within the subject area.' },
  { code: 'Part III', title: 'Allied Courses', credits: '4 per course', desc: 'Supporting courses from related disciplines to broaden the knowledge base.' },
  { code: 'Part IV', title: 'Skill Enhancement Courses (SEC)', credits: '2 per course', desc: 'Skill-based courses aimed at employability, entrepreneurship, and practical competence.' },
  { code: 'Part IV', title: 'Non-Major Elective (NME)', credits: '2 per course', desc: 'Courses chosen from disciplines other than the major, promoting interdisciplinary learning.' },
  { code: 'Part IV', title: 'Value Education & EVS', credits: '2 per course', desc: 'Mandatory courses on environmental studies, ethics, and value-based education.' },
  { code: 'Part V', title: 'Extension Activities', credits: '1', desc: 'NSS, NCC, YRC, or other extension service activities to foster social responsibility.' },
];

const gradingScale = [
  { grade: 'O',  points: 10, range: '91 – 100', desc: 'Outstanding' },
  { grade: 'A+', points: 9,  range: '81 – 90',  desc: 'Excellent' },
  { grade: 'A',  points: 8,  range: '71 – 80',  desc: 'Very Good' },
  { grade: 'B+', points: 7,  range: '61 – 70',  desc: 'Good' },
  { grade: 'B',  points: 6,  range: '51 – 60',  desc: 'Above Average' },
  { grade: 'C',  points: 5,  range: '41 – 50',  desc: 'Average' },
  { grade: 'U',  points: 0,  range: 'Below 40',  desc: 'Re-appear' },
];

const evaluationPattern = [
  { component: 'Continuous Internal Assessment (CIA)', weightage: '25%', details: 'Includes periodic tests, assignments, seminars, and attendance.' },
  { component: 'End Semester Examination (ESE)', weightage: '75%', details: 'University-conducted written examination at the end of each semester.' },
];

const ciaBreakdown = [
  { item: 'Test / Assessment', marks: '15' },
  { item: 'Assignment / Seminar', marks: '5' },
  { item: 'Attendance', marks: '5' },
];

const externalLinks = [
  { label: 'CBCS Regulations & Syllabus', url: 'https://www.unom.ac.in/index.php?route=admission/cbcssyllabus', desc: 'Official CBCS syllabus and regulations from the University of Madras.' },
  { label: 'CBCS — Academic Information', url: 'https://www.unom.ac.in/index.php?route=academic/cbcs', desc: 'Detailed academic information on CBCS implementation and guidelines.' },
  { label: 'University of Madras — Home', url: 'https://www.unom.ac.in', desc: 'Official website of the University of Madras for latest updates and notifications.' },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function CBCSRegulationsPage() {
  return (
    <>
      <Hero
        title="CBCS Regulations"
        subtitle="Choice Based Credit System — Framework, Grading & Evaluation"
        height="medium"
        breadcrumb="Academics › CBCS Regulations"
      />

      {/* ── INTRODUCTION ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="What is CBCS?" subtitle="Choice Based Credit System" />
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <p className="text-neutral-600 leading-relaxed mb-4">
                The <strong>Choice Based Credit System (CBCS)</strong> is an innovative academic framework introduced by the University Grants Commission (UGC) and adopted by the University of Madras. SSKV College of Arts & Science for Women, as an affiliated institution, follows the CBCS regulations prescribed by the University of Madras for all undergraduate and postgraduate programmes.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                CBCS provides flexibility in designing curriculum and assigning credits based on course content and learning hours. It enables students to choose from a range of core, elective, and skill-based courses, fostering holistic development and employability.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── KEY OBJECTIVES ────────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Key Features" subtitle="Objectives of the CBCS framework" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <obj.icon className="text-3xl text-primary-700 mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2">{obj.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{obj.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE STRUCTURE ──────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Course Structure" subtitle="Components of the CBCS curriculum" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
              The CBCS curriculum is organised into five parts encompassing language, core, elective, skill-based, and extension courses. Each course carries a defined number of credits.
            </p>
          </AnimatedSection>

          <div className="space-y-3">
            {courseCategories.map((cat, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-neutral-50 rounded-xl p-5 border border-neutral-100 hover:bg-neutral-100 transition-colors">
                  <span className="text-xs font-bold text-white bg-primary-800 rounded-lg px-3 py-1 flex-shrink-0 font-heading">
                    {cat.code}
                  </span>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <h4 className="font-heading font-bold text-primary-800 text-sm">{cat.title}</h4>
                      <span className="text-xs text-accent-600 font-semibold">{cat.credits}</span>
                    </div>
                    <p className="text-neutral-600 text-sm mt-1">{cat.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRADING SYSTEM ────────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Grading System" subtitle="10-Point grading scale as per University of Madras" />

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100">
                <thead>
                  <tr className="bg-primary-900 text-white text-sm">
                    <th className="px-6 py-4 text-left font-heading">Grade</th>
                    <th className="px-6 py-4 text-left font-heading">Grade Point</th>
                    <th className="px-6 py-4 text-left font-heading">Marks Range</th>
                    <th className="px-6 py-4 text-left font-heading">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {gradingScale.map((g, i) => (
                    <tr key={i} className={`text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'} ${g.grade === 'U' ? 'text-red-600 font-semibold' : 'text-neutral-700'}`}>
                      <td className="px-6 py-3 font-bold font-heading">{g.grade}</td>
                      <td className="px-6 py-3">{g.points}</td>
                      <td className="px-6 py-3">{g.range}</td>
                      <td className="px-6 py-3">{g.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="mt-8 max-w-2xl mx-auto bg-white rounded-xl border border-neutral-200 p-6">
              <h4 className="font-heading font-bold text-primary-800 mb-3 flex items-center gap-2">
                <FaGraduationCap className="text-accent-500" /> GPA & CGPA Calculation
              </h4>
              <div className="text-sm text-neutral-600 space-y-2">
                <p><strong>GPA (Grade Point Average)</strong> = Sum of (Credit × Grade Point) / Total Credits in a Semester</p>
                <p><strong>CGPA (Cumulative Grade Point Average)</strong> = Sum of (Credit × Grade Point) across all Semesters / Total Credits of the Programme</p>
                <p className="text-xs text-neutral-500 mt-3">* The CGPA is converted to percentage using the formula: <strong>Percentage = (CGPA − 0.75) × 10</strong></p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── EVALUATION PATTERN ────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Evaluation Pattern" subtitle="Continuous assessment and end-semester examinations" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {evaluationPattern.map((ep, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white h-full">
                  <FaClipboardCheck className="text-3xl text-accent-400 mb-3" />
                  <p className="text-accent-400 text-xs font-bold uppercase tracking-wide mb-1">{ep.weightage}</p>
                  <h4 className="font-heading font-bold text-lg mb-2">{ep.component}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{ep.details}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.25}>
            <div className="mt-8 max-w-xl mx-auto">
              <h4 className="font-heading font-bold text-primary-800 mb-4 text-center">CIA Marks Distribution (out of 25)</h4>
              <div className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden">
                {ciaBreakdown.map((c, i) => (
                  <div key={i} className={`flex items-center justify-between px-6 py-3 text-sm ${i < ciaBreakdown.length - 1 ? 'border-b border-neutral-200' : ''}`}>
                    <span className="text-neutral-700">{c.item}</span>
                    <span className="font-bold text-primary-800 font-heading">{c.marks}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between px-6 py-3 text-sm bg-primary-50 border-t border-primary-100">
                  <span className="font-bold text-primary-800">Total</span>
                  <span className="font-bold text-primary-800 font-heading">25</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── IMPORTANT REGULATIONS ─────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Important Regulations" subtitle="Key academic rules under CBCS" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              'A minimum of 75% attendance is mandatory to appear for the End Semester Examinations.',
              'Students must pass both CIA and ESE components separately to clear a course.',
              'The minimum pass mark is 40% in aggregate (CIA + ESE) for each course.',
              'Students are permitted to improve their marks by re-appearing in subsequent examinations.',
              'Credits once earned are accumulated and are transferable across semesters.',
              'Each UG programme spans 6 semesters (3 years) and each PG programme spans 4 semesters (2 years).',
              'A student must earn the minimum required total credits to be eligible for the degree.',
              'Medium of instruction is English for all programmes unless specified otherwise by the University.',
            ].map((rule, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-neutral-100">
                  <div className="w-7 h-7 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed">{rule}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNIVERSITY LINKS ──────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="University of Madras — CBCS Resources" subtitle="Official links for detailed regulations and syllabus" />
          <div className="space-y-4">
            {externalLinks.map((link, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-primary-50 border border-primary-100 rounded-xl px-6 py-4 hover:bg-primary-100 transition-colors group"
                >
                  <div>
                    <h4 className="font-heading font-bold text-primary-800 mb-1">{link.label}</h4>
                    <p className="text-neutral-600 text-sm">{link.desc}</p>
                  </div>
                  <FaExternalLinkAlt className="text-primary-400 group-hover:text-primary-600 flex-shrink-0 ml-4" />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Academic Excellence through CBCS"
        subtitle="Empowering students with flexible, credit-based learning aligned with University of Madras standards."
        primaryAction={{ label: 'View Programmes', href: '/#/academics' }}
        secondaryAction={{ label: 'Contact Us', href: '/#/contact' }}
      />
    </>
  );
}
