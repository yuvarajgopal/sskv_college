import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaMoneyBillWave, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf, FaCamera } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import DepartmentSectionNav from '../../components/shared/DepartmentSectionNav';
import ActivityGallery from '../../components/shared/ActivityGallery';
import CTABanner from '../../components/sections/CTABanner';
import DepartmentNewsletter from '../../components/shared/DepartmentNewsletter';

const BASE_PHOTO  = '/images/faculty/bcom-af/';
const BASE_RESUME = '/pdfs/faculty/bcom-af/';

const faculty = [
  { name: 'J. Ramani',           qualification: 'M.Com., M.Phil., M.B.A., Ph.D., B.Ed., SET.,  ', role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}j-ramani.jpg`,            resume: `${BASE_RESUME}j-ramani.pdf` },
  { name: 'Ms. K. Krishnaveni',  qualification: 'M.Com',                               role: 'Assistant Professor',               photo: `${BASE_PHOTO}k-krishnaveni.jpg`,      resume: `${BASE_RESUME}k-krishnaveni.pdf` },
  { name: 'B. Dhivyadharshini',  qualification: 'M.Com',                               role: 'Assistant Professor',               photo: `${BASE_PHOTO}b-dhivyadharshini.jpg`,  resume: `${BASE_RESUME}b-dhivyadharshini.pdf` },
  { name: 'Dr. K.P. Sowmya',     qualification: 'M.Com., Ph.D.',                       role: 'Assistant Professor',               photo: `${BASE_PHOTO}dr-kp-sowmya.jpg`,       resume: `${BASE_RESUME}dr-kp-sowmya.pdf` },
   { name: 'Ms. R. Ramya',       qualification: 'MM.Com.,',                            role: 'Assistant Professor',               photo: `${BASE_PHOTO}ramya.jpg`,              resume: `${BASE_RESUME}ramaya.pdf` }, 
  
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
    <div className={`${sizeClass} rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-emerald-400" />
    </div>
  );
}


const programDetails = [
  { label: 'Degree',        value: 'Bachelor of Commerce (B.Com)' },
  { label: 'Specialisation', value: 'Accounting & Finance' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: 'Must have studied Commerce & Accountancy at HSC.' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
  { label: 'Syllabus',     value: (<a
        href="/pdfs/bcom_af_syllabus.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-600 underline hover:text-orange-800">UG Syllabus</a>
    )
  },
];

const outcomes = [
  'Advanced proficiency in financial accounting, corporate accounting, and auditing',
  'Deep understanding of financial markets, investment analysis, and portfolio management',
  'Knowledge of cost accounting, management accounting, and budgetary control',
  'Skills in financial planning, risk assessment, and working capital management',
  'Preparation for professional certifications including CA, CFA, CMA, and MBA Finance',
  'Career readiness for roles in banking, investment firms, accounting, and financial consulting',
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function BComAFDepartmentPage() {
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
        title="Accounting & Finance"
        subtitle="B.Com (A&F) — Specialised education in accounting, financial markets, and wealth management"
        height="medium"
        breadcrumb="Academics › B.Com (A&F)"
      />

      {/* Section Nav */}
      <DepartmentSectionNav />

      {/* About the Department */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-semibold rounded-full mb-4">
                Commerce — 3 Year Program
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Benjamin Franklin's (among several of his brilliant statements), "No nation was ever required by trade" best illustrates
                the fact that commerce started when man set foot on this planet. As everyone knows commerce is a popular course. What with kanchipuram's
                neighbourhood becoming the hub of business the city is getting transformed. No wonder there are opportunities for the right
                people and thus since the founding of the college in 2007 the demand for seats in commerce has been growing.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Therefore, to cater to the needs of demand a second stream in B.Com Accountancy & finance was started in 2011. Since then there has
                been no looking back. A healthy competition between the students of B.Com (General) and B.Com (Accounting and Finance)
                has made students more competitive. Of course, we do work in tandem and the spirit of bonhomie exists between the two streams.
                The vision of the department is to offer excellent education so that in keeping with the government's policy of "make in India",
                we are able to turn out entrepreneurs and not mere graduates.
              </p>
              <h3 className="text-xl font-bold text-primary-800 font-heading mb-3 mt-6">
                Vision
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The department aim is to emerge as a premier hub of commerce education in accounting and finance by imparting globally relevant knowledge,
                fostering innovation, and nurturing responsible professionals who contribute to business excellence, economic development, and societal progress.
              </p>
              <h3 className="text-xl font-bold text-primary-800 font-heading mb-3 mt-6">
                Mission
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We provide value-based and industry-oriented education in accounting, auditing, taxation, banking, and finance.
                We bridge the gap between academic learning and professional practice through research, training, and consultancy.
                We collaborate with industries, professional bodies, and academic institutions for mutual growth and student empowerment.
              </p>
              <h3 className="text-xl font-bold text-primary-800 font-heading mb-3 mt-6">
                Objectives
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                To impart comprehensive knowledge of commerce, accounting standards, financial management, and corporate practices.
                To provide practical exposure through internships, industrial visits, live projects, and case studies.
                To equip students with skills to excel in professional courses like CA, CMA, CS, ACCA, CFA, MBA, etc.
                To prepare students for careers in accounting, auditing, banking, taxation, insurance, investment, and financial services.
                To strengthen communication, analytical, and problem-solving skills for effective professional performance.
                To inculcate ethical values, social commitment, and environmental consciousness in future business leaders.
                To promote research culture among faculty and students in emerging areas like fintech, taxation reforms, forensic accounting, and global financial systems.
                To organize seminars, workshops, guest lectures, and value-added courses for holistic development.
                To enhance employability and entrepreneurial skills through skill development programs.
                To foster teamwork, leadership, and corporate social responsibility (CSR) initiatives.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section-padding bg-emerald-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Faculty"
            subtitle="Finance and accounting specialists guiding students to professional excellence"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-1">Head of Department</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold rounded-lg transition-colors"
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
                  <div className="bg-white hover:bg-emerald-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <FacultyPhoto src={f.photo} name={f.name} size="md" />
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm font-heading leading-snug">{f.name}</h4>
                        <p className="text-neutral-500 text-xs mt-0.5">{f.qualification}</p>
                        <p className="text-emerald-600 text-xs font-medium mt-0.5">{f.role}</p>
                      </div>
                    </div>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-lg border border-emerald-100 transition-colors"
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
                { icon: FaUsers,          value: facultyCount || '—', label: 'Faculty Members' },
                { icon: FaAward,          value: phdCount || '—',     label: 'Ph.D Holders' },
                { icon: FaGraduationCap,  value: '3',                  label: 'Years Duration' },
                { icon: FaMoneyBillWave,  value: '6',                  label: 'Semesters' },
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
              <div className="flex-1 min-w-[200px] bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <p className="text-sm font-bold text-primary-800">Bachelor of Commerce — Accounting & Finance (B.Com A&F)</p>
                <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
              </div>
              
            </div>
            {/* Programme Details Card */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <FaMoneyBillWave className="text-2xl text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.Com (A&amp;F)</h3>
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

            {/* Program Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outcomes.map((outcome, i) => (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <div className="flex items-start gap-3 bg-emerald-50 rounded-xl p-5 border border-emerald-100 shadow-sm h-full">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section id="activities" className="section-padding bg-emerald-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Department Activities" subtitle="Strengthening accounting and financial expertise" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-6 max-w-4xl mx-auto">
              The Department of B.Com (Accounting & Finance) at SSKV College organizes accounting workshops, guest lectures on financial management, industrial visits to banks and financial institutions, and seminars on taxation and auditing. Students participate in budget preparation competitions, stock market simulations, and intercollegiate commerce events.
            </p>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <ActivityGallery images={[
              { src: '/images/activities/bcom_af/1.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/2.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/3.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/4.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/5.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/6.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/7.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/8.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/9.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/10.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/11.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/12.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/13.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/14.jpg', caption: 'B.Com (A&F) Department Activity' },
              { src: '/images/activities/bcom_af/15.jpg', caption: 'B.Com (A&F) Department Activity' },
            ]} color="emerald" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <DepartmentNewsletter
        departmentName="B.Com (A&F)"
        pdfHrefOdd="/pdfs/newsletter/bcom_af.pdf"
        pdfHrefEven="/pdfs/newsletter/bcom_af_even.pdf"
      />


      <CTABanner
        title="Interested in B.Com (A&F)?"
        subtitle="Apply now and build the financial expertise that drives today's economy."
      />
    </>
  );
}
