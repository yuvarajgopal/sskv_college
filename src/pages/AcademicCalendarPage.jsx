import { FaDownload, FaFilePdf, FaClock, FaClipboardList, FaGraduationCap, FaExclamationTriangle } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

// ── DATA ──────────────────────────────────────────────────────────────────────
const academicYear = '2025 – 2026';

const timings = [
  { shift: 'Shift I',  hours: '8:30 AM – 1:30 PM' },
  { shift: 'Shift II', hours: '1:40 PM – 6:00 PM' },
];

const studentRules = [
  'Every student must carry her Identity Card and wear it in the College.',
  'College Fees and Examination Fees must be paid within 15 days of re-opening for each semester.',
  'No student shall absent herself from the College without prior permission. Leave letters must be produced on the first day of return.',
  'Students taking leave for more than three days on medical grounds must produce a medical certificate issued by a doctor.',
  'Students are not permitted to leave the campus during College hours without prior permission of the Head of Department or the Principal.',
  '75% attendance is compulsory for appearing in End of Semester Examinations.',
  'Every student shall wear neat and decent dress appropriate for an academic institution.',
  'Prior permission of the Principal and Heads of Departments is required to represent the College in curricular or extracurricular activities at other colleges.',
  'The College campus is to be kept clean. Students littering the campus will be penalised.',
];

const generalInfo = [
  'Periodic continuous assessment tests will be conducted on the dates specified in the College Calendar — students absenting from these tests will not be permitted to write the End of Semester examinations.',
  'Every student on the College Roll is assigned to a staff member whom she can consult on matters requiring guidance.',
  'Timings are subject to change with due notice from the College.',
];

const shiftI = {
  ug: [
    'B.A. (Tamil)',
    'B.A. (English)',
    'B.Sc. (Mathematics)',
    'B.Sc. (Computer Science)',
    'B.C.A.',
    'B.Com. (General)',
    'B.Com. (Accounting & Finance)',
    'B.Com. (Corporate Secretaryship)',
    'B.B.A.',
    'B.Sc. (Computer Science with Artificial Intelligence)',
    'B.Sc. (Criminology and Criminal Justice Science)',
  ],
  pg: ['M.Com.', 'M.A. (Tamil)', 'M.A. (English)'],
};

const shiftII = {
  ug: ['B.Sc. (Computer Science)', 'B.C.A.', 'B.Com. (General)'],
};

const addOnCourses = [
  'Basics in Human Resource Development',
  'Mathematics for Logical Reasoning',
  'Web Designing',
];

const valueAddedCourses = [
  'Carnatic Music',
  'Yoga',
  'Silambam',
];
// ─────────────────────────────────────────────────────────────────────────────

export default function AcademicCalendarPage() {
  return (
    <>
      <Hero
        title="Academic Calendar"
        subtitle={`Calendar & Handbook — Academic Year ${academicYear}`}
        height="medium"
        breadcrumb="Academics › Academic Calendar"
      />

      {/* ── DOWNLOAD BANNER ─────────────────────────────────────────────────── */}
      <div className="bg-primary-900 py-6">
        <div className="container-custom mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <FaFilePdf className="text-2xl text-accent-400" />
            </div>
            <div>
              <p className="text-white font-bold font-heading text-base">College Calendar & Handbook {academicYear}</p>
              <p className="text-white/50 text-xs mt-0.5">Complete handbook including rules, coordinators, and programmes offered</p>
            </div>
          </div>
          <a
            href="/pdfs/academic-calendar-2025-26.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-accent-400 text-primary-900 text-sm font-bold rounded-xl hover:bg-accent-300 transition-colors font-heading whitespace-nowrap flex-shrink-0"
          >
            <FaDownload /> Download PDF
          </a>
        </div>
      </div>

      {/* ── COLLEGE TIMINGS ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="College Timings" subtitle={`Academic Year ${academicYear}`} />
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mx-auto">
              {timings.map((t) => (
                <div key={t.shift} className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-center text-white">
                  <FaClock className="text-3xl text-accent-400 mx-auto mb-3" />
                  <p className="text-accent-400 text-xs font-bold uppercase tracking-wide mb-1">{t.shift}</p>
                  <p className="text-xl font-bold font-heading">{t.hours}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-neutral-400 mt-4">* Timings are subject to change with due notice from the College.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── COURSES OFFERED ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Programmes Offered" subtitle={`Academic Year ${academicYear}`} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Shift I */}
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6 h-full">
                <h3 className="text-sm font-bold text-white bg-primary-800 rounded-lg px-4 py-2 inline-block mb-5 font-heading">
                  Shift I — 8:30 AM to 1:30 PM
                </h3>

                <p className="text-xs font-bold text-primary-700 uppercase tracking-wide mb-2">UG Courses</p>
                <ul className="space-y-1.5 mb-5">
                  {shiftI.ug.map((c, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                      <span className="w-5 h-5 rounded-full bg-primary-50 text-primary-700 text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      {c}
                    </li>
                  ))}
                </ul>

                <p className="text-xs font-bold text-accent-600 uppercase tracking-wide mb-2">PG Courses</p>
                <ul className="space-y-1.5">
                  {shiftI.pg.map((c, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                      <span className="w-5 h-5 rounded-full bg-accent-50 text-accent-700 text-xs font-bold flex items-center justify-center flex-shrink-0">{shiftI.ug.length + i + 1}</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <div className="space-y-5">
              {/* Shift II */}
              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6">
                  <h3 className="text-sm font-bold text-white bg-primary-700 rounded-lg px-4 py-2 inline-block mb-5 font-heading">
                    Shift II — 1:40 PM to 6:00 PM
                  </h3>
                  <ul className="space-y-1.5">
                    {shiftII.ug.map((c, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                        <span className="w-5 h-5 rounded-full bg-primary-50 text-primary-700 text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Add-on & Value Added */}
              <AnimatedSection direction="right" delay={0.1}>
                <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6">
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">Add-On Courses</p>
                  <ul className="space-y-1.5 mb-4">
                    {addOnCourses.map((c, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-bold text-purple-700 uppercase tracking-wide mb-2">Value-Added Courses</p>
                  <ul className="space-y-1.5">
                    {valueAddedCourses.map((c, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── STUDENTS TO NOTE ────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Students to Note" subtitle="Important rules and regulations for all students" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {studentRules.map((rule, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                  <div className="w-7 h-7 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed">{rule}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Attendance highlight */}
          <AnimatedSection delay={0.3}>
            <div className="mt-6 flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <FaExclamationTriangle className="text-amber-500 text-xl flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 font-semibold leading-relaxed">
                <span className="font-bold">75% Attendance Compulsory</span> — Students who fail to maintain 75% attendance will not be permitted to appear in the End of Semester Examinations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── GENERAL INFORMATION ─────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="General Information" />
          <div className="space-y-4 max-w-3xl mx-auto">
            {generalInfo.map((info, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-neutral-100 shadow-sm">
                  <FaClipboardList className="text-primary-600 text-lg flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-700 leading-relaxed">{info}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Plan Your Academic Year"
        subtitle="Download the full Calendar & Handbook for detailed schedules, assessment dates, and college regulations."
        primaryAction={{ label: 'Download Handbook', href: '/pdfs/academic-calendar-2025-26.pdf' }}
        secondaryAction={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
