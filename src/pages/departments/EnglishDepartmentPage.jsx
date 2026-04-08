import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaLanguage, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf } from 'react-icons/fa';
 
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';
import { images } from '../../data/media';

 
 
 

const BASE_PHOTO = '/images/faculty/english/';
const BASE_RESUME = '/pdfs/faculty/english/';

const faculty = [
  { name: 'H. Anusha', qualification: 'MA., M.Phil., SET', role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}h-anusha.jpg`, resume: `${BASE_RESUME}h-anusha.pdf` },
  { name: 'M. Arulmozhi', qualification: 'MA., M.Ed', role: 'Assistant Professor', photo: `${BASE_PHOTO}m-arulmozhi.jpg`, resume: `${BASE_RESUME}m-arulmozhi.pdf` },
  { name: 'S. Anitha', qualification: 'MA', role: 'Assistant Professor', photo: `${BASE_PHOTO}s-anitha.jpg`, resume: `${BASE_RESUME}s-anitha.pdf` },
  { name: 'R. Revathi', qualification: 'MA., M.Phil.,', role: 'Assistant Professor', photo: `${BASE_PHOTO}r_reavathi.jpg`, resume: `${BASE_RESUME}r_reavathi.pdf` },
  { name: 'S. Banupriya', qualification: 'MA., M.Phil', role: 'Assistant Professor', photo: `${BASE_PHOTO}s-banupriya.jpg`, resume: `${BASE_RESUME}s-banupriya.pdf` },
  { name: 'S. Girivardhini', qualification: 'MA., B.Ed', role: 'Assistant Professor', photo: `${BASE_PHOTO}s-girivardhini.jpg`, resume: `${BASE_RESUME}s-girivardhini.pdf` },
  { name: 'B. Sowmiya Durga', qualification: 'MA., NET', role: 'Assistant Professor', photo: `${BASE_PHOTO}b-sowmiya-durga.jpg`, resume: `${BASE_RESUME}b-sowmiyadurga.pdf` },
  { name: 'B. Kokila', qualification: 'MA', role: 'Assistant Professor', photo: `${BASE_PHOTO}b-kokila.jpg`, resume: `${BASE_RESUME}b-Kokila.pdf` },
  { name: 'V. Aswini', qualification: 'MA', role: 'Assistant Professor', photo: `${BASE_PHOTO}v-aswini.jpg`, resume: `${BASE_RESUME}v-aswini.pdf` },
  { name: 'B. Mohanapriya', qualification: 'MA', role: 'Assistant Professor', photo: `${BASE_PHOTO}b-mohanapriya.jpg`, resume: `${BASE_RESUME}b-mohanapriya.pdf` },
  { name: 'K. Pooja', qualification: 'MA', role: 'Assistant Professor', photo: `${BASE_PHOTO}k-pooja.jpg`, resume: `${BASE_RESUME}k-pooja.pdf` },
  { name: 'M.Badhma', qualification: 'MA', role: 'Assistant Professor', photo: `${BASE_PHOTO}m_badhma.JPG`, resume: `${BASE_RESUME}m_badhma.pdf` },
  { name: 'Dr.M.Maragadhashrruthi', qualification: 'M.A., Ph.D.', role: 'Assistant Professor', photo: `${BASE_PHOTO}dr_martha.JPG`, resume: `${BASE_RESUME}dr_maragatha.pdf` },
  { name: 'R. Mirnalini', qualification: 'MA', role: 'Assistant Professor', photo: `${BASE_PHOTO}r_mMirnalini.JPG`, resume: `${BASE_RESUME}r. mirnalini.pdf` },
  { name: 'K.Pavithra', qualification: 'MA', role: 'Assistant Professor', photo: `${BASE_PHOTO}k_pavithra.JPG`, resume: `${BASE_RESUME}k_pavithra.pdf` },
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
    <div className={`${sizeClass} rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-blue-400" />
    </div>
  );
}

const programDetails = [
  { label: 'Degree', value: 'Bachelor of Arts (B.A.)' },
  { label: 'Specialisation', value: 'English Language & Literature' },
  { label: 'Duration', value: '3 Years (6 Semesters)' },
  { label: 'Eligibility', value: 'Preference to English at HSC.' },
  { label: 'Affiliation', value: 'University of Madras' },
  { label: 'Curriculum', value: 'CBCS — Choice Based Credit System' },
  {
    label: 'Syllabus', value: (<a
      href="/pdfs/ba_english_syllabus.pdf"
      target="_blank"
      rel="noopener noreferrer"
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
              <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The Department of English came into being in 2007 along with the founding of the college in the same year. It attained the status of a full-fledged department in the year 2014 when BA English was introduced. Thanks to the initiative of the then Joint Secretary of the College, Mrs. Umadevi, who was herself a student of English Literature and a product of Ethiraj College, Chennai. The next step, a natural corollary, was the introduction of the MA Programme in the year 2024. Under the mentorship of the Dean, Dr.V.Rajagopalan, the department flourished. He had a profound impact on both students and faculty members, enriching their minds. Today we are a strong 15 faculty catering to the language and life needs of Part II English students, apart from our own, of 11 departments in shift I and 3 departments in shift II. Not daunted by the fact that there are not many takers for the major course of English, we have been creating an awareness for the value of Literature not only in the minds of our major students but also in those of our Part II students. And there by we have succeeded cultivating a love for Literature.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Our literary forum for major is called Hippocrene and for Part II students it is called Pegasus and both provide scope for literary activities which include, among other things, inaugural of the association, poetry reading and oratorical competitions et,al. Slowly and steadily, we wish to march on disseminating literary values which are fundamentally life values.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our faculty are young but vibrant and energetic who know the value of literature which gives a make-believe world as Nabokov once famously said literature was born on the day when a boy came crying wolf, wolf and there was no wolf behind him. The story is incidental but what is important to Nabokov is this: “between the wolf and tall grass and wolf in the tall story there is a shimmering a-go-between. The go between, the Prism, is the art of Literature.” We the teachers are the go between the text and the students. Our students’ strength may be small but as Browing said ‘Less is More.’
              </p>
              <br></br>
              
              
              
              <br></br>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                Objectives
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Improving language skills is the primary objective of the department.
                We strive to develop students’ reading, writing, speaking and listening skills in English with a focus on practical communication and critical thinking.
                We also try to promote literary appreciation by introducing students to a diverse range of literary texts, fostering a love for reading and understanding of the cultural significance of literature.
                The faculty members equip the students with the language skills and confidence needed to access better job opportunities.
                By focusing on these objectives, the department of English can make a positive impact on empowering students to communicate effectively, think critically, and access new opportunities.
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                Department Activities
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The Department of English at SSKV College of Arts and Science for Women is committed to developing students’ language proficiency, communication skills,
                and literary understanding. The department organizes seminars, workshops, guest lectures, and literary activities such as debates, elocution, essay
                writing, and drama to enrich academic learning. Through English Club activities and interactive sessions, students are encouraged to improve their
                confidence and creativity. The department also motivates students to participate in intercollegiate competitions and skill-development programs
                for overall personality development.
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


    <section id="" className="section-padding bg-accent-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Vision & Mission" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      
              <p className="text-neutral-600 leading-relaxed mb-4">
                “The best portions of a good man’s life” are for Wordsworth man’s “little, nameless, unremembered acts/ Of kindness and of love.” This is what great literature is all about and great literature humanizes us as it detoxicates our mind off such human weaknesses as Pride, Greed, Lust, Wrath, Gluttony, Envy, and Sloth (The “seven deadly sins”). A voyage through the writings of great minds is an invitation to reflection & introspection. It is with this vision to sensitizing our students to the values of literary aesthetics that the department of English with the mix of the young, and the very young, and the not too old, in perpetual academic motion, deliberates to translate the written vision into praxis and, therefore, envisions bright careers for its major students in diverse fields of human endeavor and these students at the end of either three years or five will have become fair women without solipsism and the citizens of the world breaking the narrow walls of religion, caste and creed.
              </p>
            
              <p className="text-neutral-600 leading-relaxed mb-4">
                The infinite fecundity of the English Language coupled with the complexity of teaching a foreign language notwithstanding, the department of English strives to facilitate the communicative competence of students particularly at the Part II and unobtrusively at the major level. Today, the importance of communication as a veritable tool for success in employment cannot be gainsaid. Communication includes the three pillars of linguistic, social, and cultural competencies. It is the mission of the department to make every student, who passes through its classrooms, fluent in spoken and written discourses as she spends four semesters with us. Classes are interactive in nature. Periodic screening of quality movies, YouTube lectures on relevant topics, an hour weekly writing classes are activities that inform the philosophy of the department’s pedagogy. This does not mean we treat students as automated robots but as one who are made up of flesh and blood beings who will enjoy a voyage of self sustained diurnal existence in the college and who in the long run will have become competent individuals who will both fill and fit any post that they may seek in their future careers.
              </p>
         
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
            subtitle="14 dedicated educators committed to academic and communicative excellence"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-blue-400 Sentence Case tracking-wide mb-1">Head of Department</div>
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
                { icon: FaUsers, value: facultyCount || '—', label: 'Faculty Members' },
                { icon: FaAward, value: phdCount || '—', label: 'Ph.D Holders' },
                { icon: FaGraduationCap, value: '3', label: 'Years Duration' },
                { icon: FaLanguage, value: '6', label: 'Semesters' },
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
