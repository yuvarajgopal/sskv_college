import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaRobot, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf, FaCamera } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';
import DepartmentNewsletter from '../../components/shared/DepartmentNewsletter';
import DepartmentSectionNav from '../../components/shared/DepartmentSectionNav';
import ActivityGallery from '../../components/shared/ActivityGallery';

const BASE_PHOTO  = '/images/faculty/cs-ai/';
const BASE_RESUME = '/pdfs/faculty/cs-ai/';

const faculty = [
  { name: 'Dr. J. Seethalakshmi', qualification: 'M.C.A., M.Phil., Ph.D.',      role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}seetha_lakshmi.jpeg`, resume: `${BASE_RESUME}dr-j-seethalakshmi.pdf` },
  { name: 'Dr. V. Vanitha',       qualification: 'MCA.,MPhil.,PhD.,NET.,SET.', role: 'Assistant Professor',               photo: `${BASE_PHOTO}dr-v-vanitha.jpg`,        resume: `${BASE_RESUME}dr-v-vanitha.pdf` },
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
    <div className={`${sizeClass} rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-purple-400" />
    </div>
  );
}


const programDetails = [
  { label: 'Degree',        value: 'Bachelor of Science (B.Sc.)' },
  { label: 'Specialisation', value: 'Computer Science with Artificial Intelligence' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: 'Same as B.Sc CS.' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
  { label: 'Syllabus',      value: (
    <a
      href="/pdfs/bsc_ai_syllabus.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white-600 underline hover:text-orange-800"
    >
      UG Syllabus
    </a>
  )},
];

const outcomes = [
  'Solid programming foundations in Python, Java, and AI-focused languages',
  'Understanding of machine learning algorithms, neural networks, and deep learning',
  'Ability to design and implement AI-driven solutions for real-world problems',
  'Proficiency in data science, data visualization, and statistical analysis',
  'Exposure to natural language processing, computer vision, and robotics concepts',
  'Career readiness for roles in AI research, data science, and software engineering',
];

const activityPhotos = [
  { src: '/images/activities/computer_ai/1.jpeg', caption: 'AI Workshop' },
  { src: '/images/activities/computer_ai/2.jpeg', caption: 'Machine Learning Seminar' },
  { src: '/images/activities/computer_ai/3.jpeg', caption: 'Coding Challenge' },
  { src: '/images/activities/computer_ai/4.jpeg', caption: 'AI Project Exhibition' },

];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function CSAIDepartmentPage() {
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
      <Hero
        title="Computer Science with AI"
        subtitle="B.Sc. CS with AI — Shaping the future through Artificial Intelligence and innovation"
        height="medium"
        breadcrumb="Academics › B.Sc. CS with AI"
      />

      <DepartmentSectionNav />

      {/* ─── About the Department ─── */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-purple-50 text-purple-700 text-sm font-semibold rounded-full mb-4">
                Science — 3 Year Program
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The Artificial Intelligence (AI) Department at SSKV College was inaugurated in 2024 with the vision to nurture
                future-ready professionals equipped to excel in the rapidly evolving field of artificial intelligence. Committed
                to academic excellence and innovative research, the department aims to provide undergraduate students with a solid
                foundation in AI, data science, machine learning, and related disciplines.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                With dedicated faculty members who are experts in their fields, modern infrastructure, and strategic industry
                collaborations, the AI Department at SSKV College aims to become a leading center for undergraduate education
                and research in artificial intelligence. The department envisions producing competent AI professionals who contribute
                positively to society and drive technological advancement.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 font-heading mb-3">
                Vision
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                To empower undergraduate students with a strong foundation in artificial intelligence, inspiring them to
                become innovative thinkers and responsible professionals who can contribute to technological progress and societal betterment.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 font-heading mb-3">
                Mission
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Our mission is to provide undergraduate students with comprehensive AI education that combines theoretical knowledge and practical skills.
                We aim to foster curiosity, critical thinking, and creativity through hands-on projects, industry exposure, and collaborative learning.
                We are committed to preparing students to excel in the rapidly evolving field of AI, with a focus on ethical practices and real-world problem-solving.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 font-heading mb-3">
                Objectives
              </h3>
              <ul className="list-disc list-inside text-neutral-600 leading-relaxed space-y-1">
                <li>To design and deliver an engaging curriculum that introduces core AI concepts, programming, and data analysis suitable for undergraduates.</li>
                <li>To provide practical training through labs, projects, and internships that enable students to apply AI techniques to real-world problems.</li>
                <li>To promote teamwork, innovation, and critical thinking among students through competitions, hackathons, and research opportunities.</li>
                <li>To build industry partnerships for internships, guest lectures, and project collaborations.</li>
                <li>To instill ethical awareness and social responsibility in the development and deployment of AI solutions.</li>
                <li>To inspire students to pursue further studies or careers in AI, research, or related fields.</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Faculty ─── */}
      <section id="faculty" className="section-padding bg-purple-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Faculty"
            subtitle="Specialists in AI and computer science guiding the next generation"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-purple-400 uppercase tracking-wide mb-1">Head of Department</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-xs font-semibold rounded-lg transition-colors"
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
                  <div className="bg-white hover:bg-purple-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <FacultyPhoto src={f.photo} name={f.name} size="md" />
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm font-heading leading-snug">{f.name}</h4>
                        <p className="text-neutral-500 text-xs mt-0.5">{f.qualification}</p>
                        <p className="text-purple-600 text-xs font-medium mt-0.5">{f.role}</p>
                      </div>
                    </div>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-semibold rounded-lg border border-purple-100 transition-colors"
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
                { icon: FaRobot,         value: '6',                  label: 'Semesters' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-5 text-center border border-purple-100">
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
            subtitle="What students gain from the B.Sc. CS with AI program"
          />

          {/* Programmes List */}
          <div className="flex flex-wrap gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex-1 min-w-[200px] bg-purple-50 border border-purple-200 rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-3">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <p className="text-sm font-bold text-primary-800">Bachelor of Science — CS with AI (B.Sc.)</p>
              <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
            </div>
          </div>

          {/* Wide dark program card */}
          <AnimatedSection>
            <div className="max-w-4xl mx-auto mb-10">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <FaRobot className="text-2xl text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.Sc. CS with AI</h3>
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
            </div>
          </AnimatedSection>


          {/* Outcomes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 bg-purple-50 rounded-xl p-5 border border-purple-100 shadow-sm h-full">
                  <div className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section id="activities" className="section-padding bg-purple-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Department Activities"
            subtitle="Workshops, competitions, and events that build practical skills"
          />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto text-center mb-10">
              The Department of Computer Science with AI at SSKV College organizes workshops on artificial intelligence, machine learning, and data science. Students participate in coding challenges, AI project exhibitions, guest lectures by industry experts, and hands-on training in Python, neural networks, and deep learning technologies.
            </p>
          </AnimatedSection>

          {/* Photo gallery */}
          <ActivityGallery images={activityPhotos} color="purple" />
        </div>
      </section>
      <DepartmentNewsletter
        departmentName="Computer Science with AI"
        pdfHref="/pdfs/newsletter/SSKV_Newsletter_2026.pdf"
         pdfHref="/pdfs/newsletter/ai_even.pdf"
      />

      <CTABanner
        title="Interested in B.Sc. CS with AI?"
        subtitle="Apply now and step into the future of artificial intelligence and intelligent systems."
      />
    </>
  );
}
