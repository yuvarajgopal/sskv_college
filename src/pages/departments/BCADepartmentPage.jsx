import { useState } from 'react';
import { FaDesktop, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const BASE_PHOTO  = '/images/faculty/bca/';
const BASE_RESUME = '/pdfs/faculty/bca/';

const faculty = [
  // Shift I
  { name: 'R.K. Ramya',           qualification: 'M.Sc., M.Phil.',           role: 'Assistant Professor & HOD',           isHod: true, photo: `${BASE_PHOTO}rk-ramya.jpg`,              resume: `${BASE_RESUME}rk-ramya.pdf` },
  { name: 'Dr. V. Priya',         qualification: 'M.C.A., M.Phil., Ph.D.',   role: 'Assistant Professor',                              photo: `${BASE_PHOTO}dr-v-priya.jpg`,            resume: `${BASE_RESUME}dr-v-priya.pdf` },
  // Shift II
  { name: 'Dr. P. Priyadharshini', qualification: 'M.C.A., M.Phil., Ph.D.',  role: 'Assistant Professor & HOD (Shift II)',   isHod: true,   photo: `${BASE_PHOTO}priyadharshini.jpg`,   resume: `${BASE_RESUME}priyadharshini.pdf` },
  { name: 'Ms. A. Yazhini',       qualification: 'MCA., NET',                role: 'Assistant Professor (Shift II)',                              photo: `${BASE_PHOTO}yazhini.jpg`,             resume: `${BASE_RESUME}Yazhini.pdf` },
];

function FacultyPhoto({ src, name, size = 'md' }) {
  const [failed, setFailed] = useState(false);
  const sizeClass = size === 'lg'
    ? 'w-24 h-24 text-4xl'
    : 'w-24 h-24 text-2xl';

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
    <div className={`${sizeClass} rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-teal-400" />
    </div>
  );
}

const programDetails = [
  { label: 'Degree',        value: 'Bachelor of Computer Applications (BCA)' },
  { label: 'Specialisation', value: 'Computer Applications' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: 'Pass HSC with Mathematics / Business Math / CS.' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
  { label: 'Syllabus',     value: (<a href="/pdfs/bca_syllabus.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-600 underline hover:text-orange-800"> UG Syllabus</a>
    )
  },
];

const outcomes = [
  'Proficiency in programming languages including C, C++, Java, and web technologies',
  'Practical skills in software development, testing, and project management',
  'Understanding of database management, SQL, and data-driven application design',
  'Knowledge of computer networks, operating systems, and IT security basics',
  'Hands-on experience with web development, mobile apps, and cloud computing',
  'Industry readiness for roles in software development, IT services, and digital business',
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function BCADepartmentPage() {
  return (
    <>
      <Hero
        title="Department of BCA"
        subtitle="Bachelor of Computer Applications — Bridging technology and business for the digital age"
        height="medium"
        breadcrumb="Academics › BCA"
      />

      {/* Program Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 text-sm font-semibold rounded-full mb-4">
                Professional — 3 Year Program
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Next to the Industrial Revolution the revolution that has changed our whole perception of the world, knowledge 
                and consciousness and which has changed the global economic scene is computer revolution. Here in our college we 
                understand the value of this new dimension and bring that understanding to our thinking and living. The departments 
                of Computer Application and Computer Science were established when the college was founded in 2007. The two departments, 
                though different in the sense pure science and applied science are different, work cohesively as one unit not withstanding 
                the fact that the ontological status of each department is maintained. “Where success is concerned, people are not 
                measured in inches, or pounds, or college degrees, or family background, they are measured by the size of their 
                thinking,” said J.M. Cupello, the quality management expert and six zigma masterBlack Belt. The development 
                in computer science is so fast that we have to be on our toes not to lose ourselves in obsolescence. Taking this 
                into consideration the faculty of the two departments strive to be at the cutting edge of knowledge and sensitize 
                our students to the impartance of analytical and application of acquired knowledge. 
              </p>
              <br></br>
              <p className="text-neutral-600 leading-relaxed mb-4">
               The course typically spans three years, divided into six semesters, covering topics like programming languages, 
               database management, web development, and computer networks. BCA prepares students for careers in software development, 
               system analysis, and IT consulting. It also offers a solid foundation for pursuing higher studies like 
               MCA or MBA in IT-related fields. The program emphasizes both theoretical knowledge and practical skills 
               through projects and internships. Graduates of BCA can find employment in IT companies, tech startups, banks, 
               and government agencies. The curriculum is regularly updated to include the latest industry trends and technologies. 
               BCA is ideal for students who want to build a strong career in the rapidly evolving tech industry. Overall, 
               it is a valuable degree for those aspiring to become IT professionals, software engineers, or entrepreneurs 
               in the digital space.or 
              </p>
              <br></br>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                Vision
              </h2>
              <p className="text-neutral-600 leading-relaxed">
               The Department aims to foster a dynamic teaching and learning environment that empowers students to become 
               competent professionals, ready to serve the computing industry and contribute meaningfully to the socio-economic 
               development of the nation.
              </p>
              <br></br>

               <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                Mission
              </h2>
              <p className="text-neutral-600 leading-relaxed">
               We provide high-quality education in computer applications through a curriculum aligned with industry needs.
               Preparing students for successful careers in IT and allied sectors.
               Encouraging students in academic excellence and innovation. 	
               <br></br>
              </p>
               <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                Objectives
              </h2>
              <p className="text-neutral-600 leading-relaxed">
               To ensure students graduate with strong technical and analytical skills, ready to face real-world challenges.<br></br>
               To achieve consistent academic excellence through mentoring and performance tracking.<br></br>
               To support students in securing placements in reputed IT companies and 	organizations.<br></br>
               To motivate students to achieve top university ranks and gold medals.<br></br>
               To foster soft skills, leadership abilities, and a lifelong learning mindset.<br></br>
               To create an environment that encourages creativity, collaboration, and a sense of social responsibility.<br></br>
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                Department Activities
              </h2>
               <p className="text-neutral-600 leading-relaxed">
               The Department of BCA at SSKV College of Arts and Science for Women focuses on developing students computing skills, 
               programming knowledge, and application-oriented learning. The department organizes seminars, workshops, guest lectures, 
               and hands-on training programs in areas such as programming, web development, and emerging technologies. Various activities 
               like coding contests, project exhibitions, and technical quizzes help enhance students practical skills and innovation.
              The department also encourages participation in intercollegiate technical events, internships, and career guidance programs 
              to prepare students for the IT industry. 
               <br></br>
              </p>
            </AnimatedSection>

            {/* Program details card */}
            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                    <FaDesktop className="text-2xl text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">BCA</h3>
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
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/50 text-xs">Available in Shift I &amp; Shift II</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="section-padding bg-teal-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Program Outcomes"
            subtitle="What students gain from the BCA program"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-teal-100 shadow-sm h-full">
                  <div className="w-7 h-7 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
            subtitle="Industry-experienced educators shaping skilled technology professionals"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-teal-400 sentence case tracking-wide mb-1">Head of Department</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 text-xs font-semibold rounded-lg transition-colors"
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
                  <div className="bg-neutral-50 hover:bg-teal-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <FacultyPhoto src={f.photo} name={f.name} size="md" />
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm font-heading leading-snug">{f.name}</h4>
                        <p className="text-neutral-500 text-xs mt-0.5">{f.qualification}</p>
                        <p className="text-teal-600 text-xs font-medium mt-0.5">{f.role}</p>
                      </div>
                    </div>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-700 text-xs font-semibold rounded-lg border border-teal-100 transition-colors"
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
                { icon: FaDesktop,       value: '6',                  label: 'Semesters' },
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
        title="Interested in BCA?"
        subtitle="Apply now and begin your journey into the world of computer applications and IT."
      />
    </>
  );
}
