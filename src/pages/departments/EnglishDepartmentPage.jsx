import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaBook, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import DepartmentSectionNav from '../../components/shared/DepartmentSectionNav';
import ActivityGallery from '../../components/shared/ActivityGallery';
import CTABanner from '../../components/sections/CTABanner';
import DepartmentNewsletter from '../../components/shared/DepartmentNewsletter';

const BASE_PHOTO  = '/images/faculty/english/';
const BASE_RESUME = '/pdfs/faculty/english/';

const faculty = [
  { name: 'H. Anusha',              qualification: 'MA., M.Phil., SET',              role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}h-anusha.jpg`,        resume: `${BASE_RESUME}h-anusha.pdf` },
  { name: 'M. Arulmozhi',           qualification: 'MA., M.Ed',                      role: 'Assistant Professor',               photo: `${BASE_PHOTO}m-arulmozhi.jpg`,     resume: `${BASE_RESUME}m-arulmozhi.pdf` },
  { name: 'S. Anitha',              qualification: 'MA',                             role: 'Assistant Professor',               photo: `${BASE_PHOTO}s-anitha.jpg`,        resume: `${BASE_RESUME}s-anitha.pdf` },
  { name: 'S. Girivardhini',        qualification: 'MA., B.Ed',                      role: 'Assistant Professor',               photo: `${BASE_PHOTO}s-girivardhini.jpg`,  resume: `${BASE_RESUME}s-girivardhini.pdf` },
  { name: 'V. Aswini',              qualification: 'MA',                             role: 'Assistant Professor',               photo: `${BASE_PHOTO}v-aswini.jpg`,        resume: `${BASE_RESUME}v-aswini.pdf` },
  { name: 'B. Mohanapriya',         qualification: 'MA',                             role: 'Assistant Professor',               photo: `${BASE_PHOTO}b-mohanapriya.jpg`,   resume: `${BASE_RESUME}mohanapriya.pdf` },
  { name: 'K. Pooja',               qualification: 'MA',                             role: 'Assistant Professor',               photo: `${BASE_PHOTO}k-pooja.jpg`,         resume: `${BASE_RESUME}k-pooja.pdf` },
  { name: 'M. Badhma',              qualification: 'MA',                             role: 'Assistant Professor',               photo: `${BASE_PHOTO}m_badhma.JPG`,        resume: `${BASE_RESUME}m_badhma.pdf` },
  { name: 'Dr. M. Maragadhashrruthi', qualification: 'M.A., Ph.D.',                 role: 'Assistant Professor',               photo: `${BASE_PHOTO}dr_martha.JPG`,       resume: `${BASE_RESUME}dr_maragatha.pdf` },
  { name: 'R. Mirnalini',           qualification: 'MA., M.Phil., B.Ed., SET., NET', role: 'Assistant Professor',               photo: `${BASE_PHOTO}r_mMirnalini.JPG`,   resume: `${BASE_RESUME}r. mirnalini.pdf` },
  { name: 'Ms. Jayapriya',          qualification: 'MA., M.Phil., NET',              role: 'Assistant Professor',               photo: `${BASE_PHOTO}jayapriya_p.JPG`,     resume: `${BASE_RESUME}Jayapriya.pdf` },
  { name: 'K. Bavani',              qualification: 'M.A., B.Ed., M.Phil.',           role: 'Assistant Professor',               photo: `${BASE_PHOTO}k_bavani.JPG`,        resume: `${BASE_RESUME}bhavani_k.pdf` },
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
  { label: 'Degree',         value: 'Bachelor of Arts (B.A.)' },
  { label: 'Specialisation', value: 'English Language & Literature' },
  { label: 'Duration',       value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',    value: 'Preference to English at HSC.' },
  { label: 'Affiliation',    value: 'University of Madras' },
  { label: 'Curriculum',     value: 'CBCS — Choice Based Credit System' },
  { label: 'Syllabus',       value: (
      <a href="/pdfs/ba_english_syllabus.pdf" target="_blank" rel="noopener noreferrer"
        className="text-white-600 underline hover:text-orange-800">UG Syllabus</a>
    )
  },
];

const outcomes = [
  'Proficiency in written and spoken English for professional and academic contexts',
  'Critical analysis of literary texts spanning British, American, and World literature',
  'Strong communication, presentation, and interpersonal skills',
  'Understanding of linguistics, phonetics, and the history of the English language',
  'Research and writing skills for journalism, content creation, and academia',
  'Career readiness for teaching, media, corporate communication, and civil services',
];

const maProgramDetails = [
  { label: 'Degree',         value: 'Master of Arts (M.A.)' },
  { label: 'Specialisation', value: 'English Language & Literature' },
  { label: 'Duration',       value: '2 Years (4 Semesters)' },
  { label: 'Eligibility',    value: 'B.A. English from a recognized university' },
  { label: 'Affiliation',    value: 'University of Madras' },
  { label: 'Curriculum',     value: 'CBCS — Choice Based Credit System' },
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function EnglishDepartmentPage() {
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
        title="Department of English"
        subtitle="B.A. & M.A. English — Cultivating language, literature, and communication excellence"
        height="medium"
        breadcrumb="Academics › Department of English"
      />

      {/* Section Nav */}
      <DepartmentSectionNav />

      {/* About the Department */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading title="About the Department" subtitle="Cultivating language, literature, and communication excellence" />
          <AnimatedSection direction="left">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Arts — 3 Year UG &amp; 2 Year PG Program
            </span>
            <p className="text-neutral-600 leading-relaxed mb-4">
              The Department of English came into being in 2007 along with the founding of the college in the same year. It attained the status of a full-fledged department in the year 2014 when BA English was introduced. Thanks to the initiative of the then Joint Secretary of the College, Mrs. Umadevi, who was herself a student of English Literature and a product of Ethiraj College, Chennai. The next step, a natural corollary, was the introduction of the MA Programme in the year 2024. Under the mentorship of the Dean, Dr. V. Rajagopalan, the department flourished. He had a profound impact on both students and faculty members, enriching their minds. Today we are a strong 15 faculty catering to the language and life needs of Part II English students, apart from our own, of 11 departments in Shift I and 3 departments in Shift II.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Our literary forum for major students is called Hippocrene and for Part II students it is called Pegasus. Both provide scope for literary activities which include inaugural of the association, poetry reading, and oratorical competitions. Slowly and steadily, we wish to march on disseminating literary values which are fundamentally life values.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Our faculty are young, vibrant, and energetic. They know the value of literature — as Nabokov once famously said, literature was born on the day when a boy came crying wolf and there was no wolf behind him. Between the wolf in tall grass and the wolf in the tall story there is a shimmering go-between: the Prism of Literature. We the teachers are the go-between the text and the students. As Browning said, &lsquo;Less is More.&rsquo;
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              <strong>Vision:</strong> Sensitizing students to the values of literary aesthetics — the department envisions bright careers for its major students in diverse fields of human endeavour, producing citizens of the world who break the narrow walls of religion, caste, and creed.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              <strong>Mission:</strong> To facilitate the communicative competence of every student through interactive classes, periodic screening of quality films, YouTube lectures, and weekly writing sessions — so that each student becomes fluent in spoken and written discourse and fit for any post in her future career.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              <strong>Objectives:</strong> Improving language skills is the primary objective. We strive to develop reading, writing, speaking, and listening skills with a focus on practical communication and critical thinking. We promote literary appreciation by introducing students to a diverse range of texts and equip them with the confidence needed to access better opportunities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section-padding bg-blue-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Faculty"
            subtitle={`${facultyCount} dedicated educators committed to academic and communicative excellence`}
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-blue-400 tracking-wide mb-1">Head of Department</div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {faculty.filter((f) => !f.isHod).map((f, i) => (
              <AnimatedSection key={f.name} delay={i * 0.05}>
                <div className="bg-white hover:bg-blue-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
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

          {/* Stats row */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
              {[
                { icon: FaUsers,       value: facultyCount, label: 'Faculty Members' },
                { icon: FaAward,       value: phdCount,     label: 'Ph.D Holders' },
                { icon: FaGraduationCap, value: '3',        label: 'Years UG Duration' },
                { icon: FaBook,        value: '6',          label: 'Semesters' },
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
            {/* Programme mini-cards */}
            <div className="flex flex-wrap gap-4 mb-8 max-w-5xl mx-auto">
              <div className="flex-1 min-w-[200px] bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <p className="text-sm font-bold text-primary-800">Bachelor of Arts (B.A.)</p>
                <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
              </div>
              <div className="flex-1 min-w-[200px] bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <p className="text-sm font-bold text-primary-800">Master of Arts (M.A.)</p>
                <p className="text-xs text-neutral-500 mt-1">Postgraduate Programme</p>
              </div>
            </div>

            {/* B.A. English details */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <FaBook className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.A. English</h3>
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

            {/* M.A. English details */}
            <AnimatedSection delay={0.1}>
              <div id="programmes-ma" className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <FaBook className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">M.A. English</h3>
                    <p className="text-white/60 text-sm">Postgraduate Programme Details</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {maProgramDetails.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">{item.label}</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Programme Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
      </section>

      {/* Department Activities */}
      <section id="activities" className="section-padding bg-blue-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Department Activities" subtitle="Events, seminars, and literary engagements" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-4 max-w-4xl mx-auto">
              The Department of English at SSKV College of Arts and Science for Women actively promotes language and literary culture through various academic and co-curricular activities. The department organizes seminars, guest lectures, workshops, literary competitions, and cultural programmes to enhance students&rsquo; linguistic skills and literary appreciation. Activities such as Hippocrene (English Association for major students), Pegasus (for Part II students), poetry reading, elocution, essay writing, and drama enrich academic learning. The department also encourages participation in intercollegiate competitions and skill-development programmes for overall personality development.
            </p>
          </AnimatedSection>
          <ActivityGallery images={[
            { src: '/images/activities/english/1.jpeg', caption: 'English Department Activity' },
            { src: '/images/activities/english/2.jpeg', caption: 'English Department Activity' },
            { src: '/images/activities/english/3.jpeg', caption: 'English Department Activity' },
          ]} color="indigo" />
        </div>
      </section>

      <DepartmentNewsletter
        departmentName="English"
        pdfHref="/pdfs/newsletter/english_newletter.pdf"
      />

      <CTABanner
        title="Interested in B.A. / M.A. English?"
        subtitle="Apply now and begin your journey into the world of language, literature, and communication."
      />
    </>
  );
}
