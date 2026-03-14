import { useState } from 'react';
import { FaCalculator, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const BASE_PHOTO  = '/images/faculty/mathematics/';
const BASE_RESUME = '/pdfs/faculty/mathematics/';

const faculty = [
  { name: 'J. Suganthi',      qualification: 'M.Sc., M.Phil., M.Ed.',        role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}j-suganthi.jpg`,      resume: `${BASE_RESUME}j-suganthi.pdf` },
  { name: 'N. Ramya',         qualification: 'M.Sc., M.Phil.',               role: 'Assistant Professor',               photo: `${BASE_PHOTO}n-ramya.jpg`,         resume: `${BASE_RESUME}n-ramya.pdf` },
  { name: 'A. Ezhilarasi',    qualification: 'M.Sc., M.Phil., B.Ed.',        role: 'Assistant Professor',               photo: `${BASE_PHOTO}a-ezhilarasi.jpg`,    resume: `${BASE_RESUME}a-ezhilarasi.pdf` },
  { name: 'S. Komala',        qualification: 'M.Sc., M.Phil.',               role: 'Assistant Professor',               photo: `${BASE_PHOTO}s-komala.jpg`,        resume: `${BASE_RESUME}s-komala.pdf` },
  { name: 'B. Premalatha',    qualification: 'M.Sc., M.Phil., B.Ed.',        role: 'Assistant Professor',               photo: `${BASE_PHOTO}b-premalatha.jpg`,    resume: `${BASE_RESUME}b-premalatha.pdf` },
  { name: 'Dr. B. Amudha',    qualification: 'M.Sc., M.Phil., B.Ed., Ph.D', role: 'Assistant Professor',               photo: `${BASE_PHOTO}dr-b-amudha.jpg`,     resume: `${BASE_RESUME}dr-b-amudha.pdf` },
  { name: 'Ms. M. Lavanya',   qualification: 'M.Sc., M.Phil., SET',          role: 'Assistant Professor',               photo: `${BASE_PHOTO}m-lavanya.jpg`,       resume: `${BASE_RESUME}m-lavanya.pdf` },
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
    <div className={`${sizeClass} rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-amber-400" />
    </div>
  );
}

const programDetails = [
  { label: 'Degree',        value: 'Bachelor of Science (B.Sc.)' },
  { label: 'Specialisation', value: 'Mathematics' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: '+2 with Mathematics' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
];

const outcomes = [
  'Deep understanding of calculus, algebra, analysis, and number theory',
  'Strong analytical and logical reasoning skills applicable across disciplines',
  'Proficiency in statistics, probability theory, and applied mathematics',
  'Ability to formulate and solve complex mathematical problems systematically',
  'Foundation for advanced studies in mathematics, physics, and data science',
  'Career readiness for roles in teaching, research, banking, and civil services',
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function MathematicsDepartmentPage() {
  return (
    <>
      <Hero
        title="Department of Mathematics"
        subtitle="B.Sc. Mathematics — Developing analytical minds and problem-solving excellence"
        height="medium"
        breadcrumb="Academics › B.Sc. Mathematics"
      />

      {/* Program Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 text-sm font-semibold rounded-full mb-4">
                Science — 3 Year Program
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The Department of Mathematics at SSKV College of Arts and Science for Women provides a
                rigorous and comprehensive education in pure and applied mathematics. Mathematics is the
                universal language of science and technology, and this department ensures students build
                a deep, lasting mastery of its principles.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The curriculum spans classical branches such as algebra, calculus, and analysis as well
                as applied areas including statistics, operations research, and numerical methods.
                Students are encouraged to approach problems creatively and reason with precision,
                skills that are invaluable across virtually every profession.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our dedicated faculty inspire intellectual curiosity and academic ambition, preparing
                students for careers in education, research, finance, and government services, or for
                advanced postgraduate studies.
              </p>
            </AnimatedSection>

            {/* Program details card */}
            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <FaCalculator className="text-2xl text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.Sc. Mathematics</h3>
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

      {/* Program Outcomes */}
      <section className="section-padding bg-amber-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Program Outcomes"
            subtitle="What students gain from the B.Sc. Mathematics program"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-amber-100 shadow-sm h-full">
                  <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed">{outcome}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Our Faculty"
            subtitle="Passionate mathematicians and educators inspiring the next generation"
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
                      <FaFilePdf className="text-xs" /> View Resume
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
                  <div className="bg-neutral-50 hover:bg-amber-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
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
                      <FaFilePdf className="text-xs" /> View Resume
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
                { icon: FaCalculator,    value: '6',                  label: 'Semesters' },
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

      <CTABanner
        title="Interested in B.Sc. Mathematics?"
        subtitle="Apply now and develop the analytical skills that drive science, technology, and beyond."
      />
    </>
  );
}
