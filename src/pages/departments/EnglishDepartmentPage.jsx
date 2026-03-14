import { useState } from 'react';
import { FaLanguage, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const BASE_PHOTO  = '/images/faculty/english/';
const BASE_RESUME = '/pdfs/faculty/english/';

const faculty = [
  { name: 'H. Anusha',        qualification: 'MA., M.Phil., SET',  role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}h-anusha.jpg`,        resume: `${BASE_RESUME}h-anusha.pdf` },
  { name: 'M. Arulmozhi',     qualification: 'MA., M.Ed',          role: 'Assistant Professor',               photo: `${BASE_PHOTO}m-arulmozhi.jpg`,     resume: `${BASE_RESUME}m-arulmozhi.pdf` },
  { name: 'S. Anitha',        qualification: 'MA',                 role: 'Assistant Professor',               photo: `${BASE_PHOTO}s-anitha.jpg`,        resume: `${BASE_RESUME}s-anitha.pdf` },
  { name: 'S. Banupriya',     qualification: 'MA., M.Phil',        role: 'Assistant Professor',               photo: `${BASE_PHOTO}s-banupriya.jpg`,     resume: `${BASE_RESUME}s-banupriya.pdf` },
  { name: 'S. Girivardhini',  qualification: 'MA., B.Ed',          role: 'Assistant Professor',               photo: `${BASE_PHOTO}s-girivardhini.jpg`,  resume: `${BASE_RESUME}s-girivardhini.pdf` },
  { name: 'B. Sowmiya Durga', qualification: 'MA., NET',           role: 'Assistant Professor',               photo: `${BASE_PHOTO}b-sowmiya-durga.jpg`, resume: `${BASE_RESUME}b-sowmiya-durga.pdf` },
  { name: 'B. Kokila',        qualification: 'MA',                 role: 'Assistant Professor',               photo: `${BASE_PHOTO}b-kokila.jpg`,        resume: `${BASE_RESUME}b-kokila.pdf` },
  { name: 'V. Aswini',        qualification: 'MA',                 role: 'Assistant Professor',               photo: `${BASE_PHOTO}v-aswini.jpg`,        resume: `${BASE_RESUME}v-aswini.pdf` },
  { name: 'B. Mohanapriya',   qualification: 'MA',                 role: 'Assistant Professor',               photo: `${BASE_PHOTO}b-mohanapriya.jpg`,   resume: `${BASE_RESUME}b-mohanapriya.pdf` },
  { name: 'K. Pooja',         qualification: 'MA',                 role: 'Assistant Professor',               photo: `${BASE_PHOTO}k-pooja.jpg`,         resume: `${BASE_RESUME}k-pooja.pdf` },
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
    <div className={`${sizeClass} rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-blue-400" />
    </div>
  );
}

const programDetails = [
  { label: 'Degree',        value: 'Bachelor of Arts (B.A.)' },
  { label: 'Specialisation', value: 'English Language & Literature' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: '+2 in any stream' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
];

const outcomes = [
  'Proficiency in written and spoken English for professional and academic contexts',
  'Critical analysis of literary texts spanning British, American, and World literature',
  'Strong communication, presentation, and interpersonal skills',
  'Understanding of linguistics, phonetics, and the history of the English language',
  'Research and writing skills for journalism, content creation, and academia',
  'Career readiness for teaching, media, corporate communication, and civil services',
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function EnglishDepartmentPage() {
  return (
    <>
      <Hero
        title="Department of English"
        subtitle="B.A. English — Cultivating language, literature, and communication excellence"
        height="medium"
        breadcrumb="Academics › B.A. English"
      />

      {/* Program Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
                Arts — 3 Year Program
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The Department of English at SSKV College of Arts and Science for Women is committed to
                developing students into confident, articulate communicators and discerning literary scholars.
                English, as a global language, opens doors to international careers, higher education,
                and rich intellectual discourse.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The curriculum spans classical and contemporary literature, linguistics, phonetics, creative
                writing, and communication skills. Students explore works from British, American, Indian, and
                World literary traditions, developing the analytical and expressive tools needed in today's
                knowledge economy.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our faculty bring both academic depth and practical experience, guiding students through
                seminars, literary events, language labs, and research activities that prepare them for
                diverse and rewarding careers.
              </p>
            </AnimatedSection>

            {/* Program details card */}
            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <FaLanguage className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.A. English</h3>
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
      <section className="section-padding bg-blue-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Program Outcomes"
            subtitle="What students gain from the B.A. English program"
          />
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

      {/* Faculty */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Our Faculty"
            subtitle="10 dedicated educators committed to academic and communicative excellence"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-1">Head of Department</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-xs font-semibold rounded-lg transition-colors"
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
                  <div className="bg-neutral-50 hover:bg-blue-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
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
                { icon: FaLanguage,      value: '6',                  label: 'Semesters' },
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
        title="Interested in B.A. English?"
        subtitle="Apply now and begin your journey into the world of language, literature, and communication."
      />
    </>
  );
}
