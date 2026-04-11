import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaChartLine, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf, FaCamera } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import DepartmentSectionNav from '../../components/shared/DepartmentSectionNav';
import ActivityGallery from '../../components/shared/ActivityGallery';
import CTABanner from '../../components/sections/CTABanner';

const BASE_PHOTO  = '/images/faculty/bcom-general/';
const BASE_RESUME = '/pdfs/faculty/bcom-general/';

const faculty = [
  // Shift I
  { name: 'P. Anandhalakshmi', qualification: 'M.Com., M.Phil.',                                          role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}p-anandhalakshmi.jpg`, resume: `${BASE_RESUME}p-anandhalakshmi.pdf` },
  { name: 'K. Thenmozhi',      qualification: 'M.Com., MBA., M.Phil., MA (PM&IR), PG AGM (IIM), NET',     role: 'Assistant Professor',               photo: `${BASE_PHOTO}k-thenmozhi.jpg`,       resume: `${BASE_RESUME}k-thenmozhi.pdf` },
  { name: 'Dr. G. Rajathi',    qualification: 'M.Com., MBA., Ph.D.',                                      role: 'Assistant Professor',               photo: `${BASE_PHOTO}dr-g-rajathi.jpg`,      resume: `${BASE_RESUME}dr-g-rajathi.pdf` },
  { name: 'K. Vijayalakshmi',  qualification: 'M.Com',                                                    role: 'Assistant Professor',               photo: `${BASE_PHOTO}k-vijayalakshmi.jpg`,   resume: `${BASE_RESUME}k-vijayalakshmi.pdf` },
  { name: 'R. Ponmani',        qualification: 'M.Com',                                                    role: 'Assistant Professor',               photo: `${BASE_PHOTO}r-ponmani.jpg`,         resume: `${BASE_RESUME}r-ponmani.pdf` },
  // Shift II
  { name: 'K. Sridevi',        qualification: 'M.Com., M.Phil., SET., B.Ed., (Ph.D)',                     role: 'Assistant Professor',               photo: `${BASE_PHOTO}k-sridevi.jpg`,         resume: `${BASE_RESUME}k-sridevi.pdf` },
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
    <div className={`${sizeClass} rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-orange-400" />
    </div>
  );
}


const programDetails = [
  { label: 'Degree',        value: 'Bachelor of Commerce (B.Com)' },
  { label: 'Specialisation', value: 'Commerce (General)' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: 'Must have studied Commerce & Accountancy at HSC. 20% seats reserved for Commerce Vocational Stream.' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
  { label: 'Syllabus',      value: (<a
      href="/pdfs/bcom_general.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white-600 underline hover:text-orange-800">UG Syllabus</a>
    )
  },
];

const outcomes = [
  'Comprehensive knowledge of accounting, auditing, and financial reporting',
  'Understanding of business law, taxation, and corporate governance',
  'Proficiency in economics, business management, and entrepreneurship',
  'Ability to analyze financial statements and support business decision-making',
  'Foundation for professional certifications such as CA, CS, and CMA',
  'Career readiness for roles in banking, finance, corporate accounting, and civil services',
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function BComGeneralDepartmentPage() {
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
        title="Department of Commerce"
        subtitle="B.Com (General) — Building the foundation for commerce, finance, and business excellence"
        height="medium"
        breadcrumb="Academics › B.Com (General)"
      />

      {/* Section Nav */}
      <DepartmentSectionNav />

      {/* About the Department */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-700 text-sm font-semibold rounded-full mb-4">
                Commerce — 3 Year Program
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                When Thomas Jefferson famously said "Commerce with all nations, alliance with none, should be our motto" he made a subtle
                distinction between economics and politics. Much water has flowed in the river James in Charlottesville (Jefferson's birth place)
                since then. Today alliance or no alliance commerce forms the major inducement to any meeting of Heads of two States.
                Within the context of liberal education in Arts &amp; Science colleges grew commerce education. Commerce education provides
                for a proper handling of trade, commerce &amp; industry. But today with globalization becoming the mantra commerce education
                gives leverage to the students to opt for several areas when they go for post graduation. And this is one course whose
                validity will remain as long as mankind lives on mother earth.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                So, we give education in commerce with two streams. The department of commerce (General) was established in 2007 with the
                founding of the college and since year one we always received full complement of students. And thanks to our management
                till 2011 the course fee for a semester was only 4,000/- we believe in giving a holistic commerce education so that
                students can choose their career and we give them a proper base. Our sister department, The Accounting and Finance stream
                established in 2011 is our strength too in the sense that there is a healthy competition between the two streams and each
                stream complements the other in good measure. Till 2013 the association activities of the departments were held along with
                B.Com Accounting and Finance and Business Administration. This year (2014) we added a new feather on our cap by introducing M.Com.
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                Vision
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-8">
                To emerge as a centre of excellence in commerce education, nurturing skilled, ethical, and innovative graduates who contribute meaningfully to the business world and society.
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                Mission
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-8">
                To provide quality commerce education that integrates theoretical knowledge with practical application, preparing students for successful careers in commerce, finance, and entrepreneurship while instilling values of integrity and social responsibility.
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                Objectives
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Our primary goal is to develop competent, confident, and capable graduates who are ready to take on leadership roles in the business world. We aim to:
                Offer an in-depth understanding of commerce and its various branches.
                Enhance students creativity, analytical thinking, and decision-making abilities.
                Familiarize students with digital tools, financial software, and industry-relevant technologies.
                Conduct regular assessments to help students measure their progress and achieve academic goals.
                Encourage students to engage in research and develop innovative solutions to real-world business problems.
                Guide students in their academic projects through expert mentorship.
                Prepare students for competitive and professional exams like CA, ICWA, and CMA.
                Equip students with communication and leadership skills for better job prospects.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section-padding bg-orange-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Faculty"
            subtitle="Commerce educators with deep expertise in accounting, finance, and business"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-orange-400 uppercase tracking-wide mb-1">Head of Department</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 text-xs font-semibold rounded-lg transition-colors"
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
                  <div className="bg-white hover:bg-orange-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <FacultyPhoto src={f.photo} name={f.name} size="md" />
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm font-heading leading-snug">{f.name}</h4>
                        <p className="text-neutral-500 text-xs mt-0.5">{f.qualification}</p>
                        <p className="text-orange-600 text-xs font-medium mt-0.5">{f.role}</p>
                      </div>
                    </div>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-semibold rounded-lg border border-orange-100 transition-colors"
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
                { icon: FaChartLine,     value: '6',                  label: 'Semesters' },
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
              <div className="flex-1 min-w-[200px] bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <p className="text-sm font-bold text-primary-800">Bachelor of Commerce (B.Com)</p>
                <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
              </div>
              <div className="flex-1 min-w-[200px] bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <p className="text-sm font-bold text-primary-800">Master of Commerce (M.Com)</p>
                <p className="text-xs text-neutral-500 mt-1">Postgraduate Programme</p>
              </div>
            </div>
            {/* Programme Details Card */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <FaChartLine className="text-2xl text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.Com (General)</h3>
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
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/50 text-xs">Available in Shift I &amp; Shift II</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <FaChartLine className="text-2xl text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">M.Com</h3>
                    <p className="text-white/60 text-sm">Postgraduate Programme Details</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Degree</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">Master of Commerce (M.Com)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Specialisation</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">Commerce</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Duration</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">2 Years (4 Semesters)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Eligibility</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">B.Com from a recognized university</span>
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
            {/* Program Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outcomes.map((outcome, i) => (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <div className="flex items-start gap-3 bg-orange-50 rounded-xl p-5 border border-orange-100 shadow-sm h-full">
                    <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section id="activities" className="section-padding bg-orange-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Department Activities" subtitle="Promoting commerce knowledge and professional development" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-6 max-w-4xl mx-auto">
              The Department of Commerce (General) at SSKV College organizes seminars, workshops, guest lectures, industrial visits, and business plan competitions. Students participate in commerce quiz competitions, accounting workshops, and intercollegiate events to enhance their practical knowledge and professional skills.
            </p>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <ActivityGallery images={[
              { src: '/images/bcom_g/bcom_g_img_1.jpeg', caption: 'B.Com (General) Department Activity' },
              { src: '/images/bcom_g/bcom_g_img_2.jpeg', caption: 'B.Com (General) Department Activity' },
              { src: '/images/bcom_g/bcom_g_img_3.jpeg', caption: 'B.Com (General) Department Activity' },
              { src: '/images/bcom_g/bcom_g_img_4.jpeg', caption: 'B.Com (General) Department Activity' },
              { src: '/images/bcom_g/bcom_g_img_5.jpeg', caption: 'B.Com (General) Department Activity' },
              { src: '/images/bcom_g/bcom_g_img_6.jpeg', caption: 'B.Com (General) Department Activity' },
              { src: '/images/bcom_g/bcom_g_img_7.jpeg', caption: 'B.Com (General) Department Activity' },
              { src: '/images/bcom_g/bcom_g_img_8.jpeg', caption: 'B.Com (General) Department Activity' },
              { src: '/images/bcom_g/bcom_g_img_9.jpeg', caption: 'B.Com (General) Department Activity' },
              { src: '/images/bcom_g/bcom_g_img_10.jpeg', caption: 'B.Com (General) Department Activity' },
            ]} color="orange" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Interested in B.Com (General)?"
        subtitle="Apply now and build the commercial knowledge and financial skills for a successful career."
      />
    </>
  );
}
