import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaCalculator, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf, FaCamera } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import DepartmentSectionNav from '../../components/shared/DepartmentSectionNav';
import ActivityGallery from '../../components/shared/ActivityGallery';
import CTABanner from '../../components/sections/CTABanner';
import DepartmentNewsletter from '../../components/shared/DepartmentNewsletter';

const BASE_PHOTO  = '/images/faculty/mathematics/';
const BASE_RESUME = '/pdfs/faculty/mathematics/';

const faculty = [
  { name: 'J. Suganthi',      qualification: 'M.Sc., M.Phil., M.Ed.',        role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}j-suganthi.jpg`,      resume: `${BASE_RESUME}j-suganthi.pdf` },
  { name: 'N. Ramya',         qualification: 'M.Sc., M.Phil.',               role: 'Assistant Professor',               photo: `${BASE_PHOTO}n-ramya.jpg`,         resume: `${BASE_RESUME}n-ramya.pdf` },
  { name: 'A. Ezhilarasi',    qualification: 'M.Sc., M.Phil., B.Ed.',        role: 'Assistant Professor',               photo: `${BASE_PHOTO}a-ezhilarasi.jpg`,    resume: `${BASE_RESUME}a-ezhilarasi.pdf` },
  { name: 'S. Komala',        qualification: 'M.Sc., M.Phil.',               role: 'Assistant Professor',               photo: `${BASE_PHOTO}s-komala.jpg`,        resume: `${BASE_RESUME}s-komala.pdf` },
  { name: 'B. Premalatha',    qualification: 'M.Sc., M.Phil., B.Ed.',        role: 'Assistant Professor',               photo: `${BASE_PHOTO}b-premalatha.jpg`,    resume: `${BASE_RESUME}b-premalatha.pdf` },
   { name: 'Ms. M. Lavanya',   qualification: 'M.Sc., M.Phil., SET',          role: 'Assistant Professor',               photo: `${BASE_PHOTO}ms-m-lavanya.jpg`,       resume: `${BASE_RESUME}m-lavanya.pdf` },
  { name: 'D.Saraswathi',     qualification: 'M.Sc., M.Phil., SET',          role: 'Assistant Professor',               photo: `${BASE_PHOTO}d_saraswathi.jpg`,     resume: `${BASE_RESUME}d_saraswathi.pdf` },
  { name: 'S.Gayathri',       qualification: 'MSc.,',                        role: 'Assistant Professor',               photo: `${BASE_PHOTO}s_gayathri.jpg`,     resume: `${BASE_RESUME}gayathri.pdf` },
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
  { label: 'Eligibility',   value: 'Mathematics at +2 level.' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
  { label: 'Syllabus',      value: (<a
        href="/pdfs/bsc_math_syllabus.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-600 underline hover:text-orange-800">UG Syllabus</a>
    )
  },
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
      {/* Hero */}
      <Hero
        title="Department of Mathematics"
        subtitle="B.Sc. Mathematics — Developing analytical minds and problem-solving excellence"
        height="medium"
        breadcrumb="Academics › B.Sc. Mathematics"
      />

      {/* Section Nav */}
      <DepartmentSectionNav />

      {/* About the Department */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading title="About the Department" subtitle="Developing analytical minds and problem-solving excellence" />
          <div className="max-w-4xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 text-sm font-semibold rounded-full mb-4">
                Science — 3 Year Program
              </span>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Galileo averred that the great book of Nature is written in the language of Mathematics. This has been the perception of Mathematics in the academia both in the East and the West all these years. However, the articles written by Professor C.I Raju in the Hindu exhorting us to decolonize Mathematics education in the country set us all thinking. Professor Raju set the dialectical ball rolling on the tussle between Metaphysics and Empiricism and since reading those articles we have started reflecting on the issue of Mathematics education. Whatever may be the debate it is arguably true that today mathematics underpins all branches of knowledge. We in S.S.K.V college recognize the value of mathematics and as such we try to motivate our students to love Mathematics and to understand the aesthetics of Mathematics. Our Mathematics Association, "Mathematica" organizes every year events and we try to get the best Mathematics faculty around either to inaugurate the association or to give talks on Mathematics. We have an MOU with SCSVMV University, Enathur, Kanchipuram.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Our students fare well in the University examinations with several of them scoring centum in several papers. Faculty whose average age is 30, know that we have miles to go before we can leap. Our priorities are first to clear NET and then make the department vie with the best for a place with them.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                Vision
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                The Department of Mathematics aims to cultivate a passion for Mathematical thinking and discovery, empowering learners to apply analytical, logical and creative problem-solving skills for academic excellence and real-world challenges.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                Mission
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                The Department of Mathematics offers programs that build students conceptual understanding, computational skills, and persistence in applying quantitative reasoning to personal and professional contexts. We provide stimulating experiences for the Students that prepare them for careers in teaching, research and practical applications of mathematics.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                Objectives
              </h2>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed space-y-1">
                <li>Foster creativity, critical thinking, and active learning.</li>
                <li>Promote equity, inclusion, and diversity, especially among underrepresented groups in mathematics.</li>
                <li>Support faculty growth as teachers and scholars through research and professional engagement.</li>
                <li>Encourage close student faculty interaction through mentoring and research opportunities.</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section-padding bg-amber-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Faculty"
            subtitle="Passionate mathematicians and educators inspiring the next generation"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-amber-400 Sentence Case tracking-wide mb-1">Head of Department</div>
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

          {/* Stats row */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
              {[
                { icon: FaUsers,         value: facultyCount || '—', label: 'Faculty Members' },
                { icon: FaAward,         value: phdCount || '—',     label: 'Ph.D Holders' },
                { icon: FaGraduationCap, value: '3',                  label: 'Years Duration' },
                { icon: FaCalculator,    value: '6',                  label: 'Semesters' },
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
                <p className="text-sm font-bold text-primary-800">Bachelor of Science (B.Sc.)</p>
                <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
              </div>
              <div className="flex-1 min-w-[200px] bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <p className="text-sm font-bold text-primary-800">Master of Science (M.Sc.)</p>
                <p className="text-xs text-neutral-500 mt-1">Postgraduate Programme</p>
              </div>
            </div>
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <FaCalculator className="text-2xl text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.Sc. Mathematics</h3>
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
              <div id="programmes-msc" className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8 scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <FaCalculator className="text-2xl text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">M.Sc. Mathematics</h3>
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
                      <span className="text-white font-semibold text-sm text-right ml-4">Mathematics</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Duration</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">2 Years (4 Semesters)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Eligibility</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">B.Sc. Mathematics from a recognized university</span>
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
          <SectionHeading title="Department Activities" subtitle="Strengthening analytical and logical reasoning abilities" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-4 max-w-4xl mx-auto">
              The Department of Mathematics at SSKV College of Arts and Science for Women organizes various academic and co-curricular activities including mathematical quiz competitions, problem-solving workshops, guest lectures by eminent mathematicians, and seminars on applied mathematics. Students actively participate in intercollegiate math competitions, model presentations, and skill development programs to strengthen their analytical and logical reasoning abilities.
            </p>
          </AnimatedSection>
          <ActivityGallery images={[
                { src: '/images/activities/mathematics/1.jpg', caption: 'Mathematics Quiz Competition' },
                { src: '/images/activities/mathematics/2.jpg', caption: 'Problem-Solving Workshop' },
                { src: '/images/activities/mathematics/3.jpg', caption: 'Guest Lecture' },
                { src: '/images/activities/mathematics/4.jpg', caption: 'Math Model Exhibition' },
                { src: '/images/activities/mathematics/5.jpg', caption: 'Seminar on Applied Mathematics' },
                { src: '/images/activities/mathematics/6.jpg', caption: 'Pi Day Celebration' },
                { src: '/images/activities/mathematics/7.jpg', caption: 'Intercollegiate Competition' },
                { src: '/images/activities/mathematics/8.jpg', caption: 'Mathematics Association Inauguration' },
              ]} color="amber" />
        </div>
      </section>

      {/* CTA */}
      <DepartmentNewsletter
        departmentName="Mathematics"
        pdfHref="/pdfs/newsletter/maths.pdf"
      />

      <CTABanner
        title="Interested in B.Sc. Mathematics?"
        subtitle="Apply now and develop the analytical skills that drive science, technology, and beyond."
      />
    </>
  );
}
