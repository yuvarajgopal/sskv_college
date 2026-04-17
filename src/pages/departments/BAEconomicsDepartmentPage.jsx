import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaCoins, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';
import DepartmentNewsletter from '../../components/shared/DepartmentNewsletter';
import DepartmentSectionNav from '../../components/shared/DepartmentSectionNav';
import ActivityGallery from '../../components/shared/ActivityGallery';

const BASE_PHOTO  = '/images/faculty/ba-economics/';
const BASE_RESUME = '/pdfs/faculty/ba-economics/';

const faculty = [
  // Add faculty members here as they join the department
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
  { label: 'Degree',         value: 'Bachelor of Arts (B.A.)' },
  { label: 'Specialisation', value: 'Economics' },
  { label: 'Duration',       value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',    value: 'Pass any group in HSC.' },
  { label: 'Affiliation',    value: 'University of Madras' },
  { label: 'Curriculum',     value: 'CBCS — Choice Based Credit System' },
  { label: 'Syllabus',       value: (
    <a
      href="/pdfs/ba_economics_syllabus.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white-600 underline hover:text-orange-800"
    >
      UG Syllabus
    </a>
  )},
];

const outcomes = [
  'Strong foundation in microeconomic and macroeconomic theory and applications',
  'Quantitative and statistical skills for economic data analysis and interpretation',
  'Understanding of Indian and global economic systems, policies, and institutions',
  'Insight into development economics, public finance, and international trade',
  'Analytical thinking for solving real-world economic and business problems',
  'Career readiness for banking, finance, civil services, research, and policy analysis',
];

const activityPhotos = [
  { src: '/images/activities/ba-economics/1.jpg', caption: 'Guest Lecture on Indian Economy' },
  { src: '/images/activities/ba-economics/2.jpg', caption: 'Economics Seminar' },
  { src: '/images/activities/ba-economics/3.jpg', caption: 'Budget Analysis Workshop' },
  { src: '/images/activities/ba-economics/4.jpg', caption: 'Field Visit' },
  { src: '/images/activities/ba-economics/5.jpg', caption: 'Student Presentation' },
  { src: '/images/activities/ba-economics/6.jpg', caption: 'Department Day' },
];

const facultyCount = faculty.length;
const phdCount = faculty.filter(f => f.qualification?.includes('Ph.D')).length;

export default function BAEconomicsDepartmentPage() {
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
        title="Department of Economics"
        subtitle="B.A. Economics — Understanding markets, policies, and the forces that shape society"
        height="medium"
        breadcrumb="Academics › B.A. Economics"
      />

      <DepartmentSectionNav />

      {/* ─── About the Department ─── */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 text-sm font-semibold rounded-full mb-4">
                Arts — 3 Year Program
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">
                About the Department
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
               The college proudly introduces the Bachelor of Arts (B.A.) in Economics programme from the academic year 2026–27, 
               marking a significant step towards strengthening the institution’s commitment to social sciences and contemporary 
               academic disciplines.


              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Economics is a dynamic and ever-evolving field that studies how individuals, households, businesses, 
                and governments make decisions in the context of limited resources. The B.A. Economics programme is 
                designed to equip students with strong analytical thinking, problem-solving abilities, and a deep understanding of
                 economic systems at both national and global levels.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 font-heading mb-3">
                Programme Highlights
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The curriculum offers a balanced blend of theoretical knowledge and quantitative skills, enabling 
                students to understand real-world economic issues with clarity and confidence. Key areas of study include:
                <ul> <li>•	  Microeconomics and Macroeconomics  </li>
                <li>•	  Indian Economy and Development Studies </li>
                <li>•	  Statistics for Economics  </li>
                <li>•	  Econometrics and Data Analysis   </li>
                <li>•	  Public Finance and Policy Studies    </li>
                 <li>•	  International Economics and Trade     </li>
                </ul>	<br></br> 
                The programme also encourages students to engage with contemporary issues such as inflation, unemployment, poverty, sustainable development, and digital economy trends.</p>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 font-heading mb-3">
                Learning Outcomes
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-2">
             Students enrolling in B.A. Economics will develop:
 •	Strong analytical and critical thinking skills <br></br> 
•	 Ability to interpret economic data and trends <br></br> 
•	 Understanding of policy-making and governance <br></br> 
•	 Quantitative and statistical reasoning abilities <br></br> 
•	 Awareness of national and global economic challenges  <br></br> 

              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 font-heading mb-3">
                Career Opportunities
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-2">
                Graduates of B.A. Economics can pursue a wide range of career paths in both public and private sectors, including:
                •	Banking and Financial Services <br></br> 
•	Civil Services and Competitive Examinations <br></br> 
•	Economic Research and Data Analysis <br></br> 
•	Teaching and Academic Careers <br></br> 
•	Policy Research and Development Organisations <br></br> 
•	Higher Studies such as M.A. Economics, MBA, and professional certifications <br></br> 

              </p>
               <h3 className="text-2xl md:text-3xl font-bold text-primary-800 font-heading mb-3">
                Vision of the Programme
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                The introduction of B.A. Economics aims to empower students—especially young women—with the knowledge and skills 
                required to actively participate in economic decision-making and nation-building. The programme nurtures intellectual 
                growth, social responsibility, and career readiness in a rapidly changing global economy.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Faculty ─── */}
      <section id="faculty" className="section-padding bg-amber-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Faculty"
            subtitle="Economists and educators guiding students through theory and applied practice"
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
                { icon: FaCoins,         value: '6',                  label: 'Semesters' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-5 text-center border border-amber-100">
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
            subtitle="What students gain from the B.A. Economics program"
          />

          {/* Programmes List */}
          <div className="flex flex-wrap gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex-1 min-w-[200px] bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-3">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <p className="text-sm font-bold text-primary-800">Bachelor of Arts — Economics (B.A.)</p>
              <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
            </div>
          </div>

          {/* Wide dark program card */}
          <AnimatedSection>
            <div className="max-w-4xl mx-auto mb-10">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <FaCoins className="text-2xl text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.A. Economics</h3>
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
      </section>

      {/* ─── Department Activities ─── */}
      <section id="activities" className="section-padding bg-amber-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Department Activities"
            subtitle="Seminars, workshops, and events that connect theory with the real economy"
          />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto text-center mb-10">
              The Department of Economics at SSKV College organises guest lectures, seminars on
              contemporary economic issues, budget analysis sessions, and workshops on data and
              statistics. Students participate in field visits, debates, and research presentations
              that help them connect classroom learning with real-world economic policy and practice.
            </p>
          </AnimatedSection>

          {/* Photo gallery */}
          <ActivityGallery images={activityPhotos} color="amber" />
        </div>
      </section>
      <DepartmentNewsletter
        departmentName="B.A. Economics"
        pdfHref="/pdfs/newsletter/SSKV_Newsletter_2026.pdf"
      />


      <CTABanner
        title="Interested in B.A. Economics?"
        subtitle="Apply now and begin your journey into the world of markets, policy, and economic thought."
      />
    </>
  );
}
