import { FaDownload, FaCheckCircle, FaBook, FaChalkboardTeacher, FaFlask, FaBuilding, FaUsers, FaGlobe } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import { images } from '../data/media';

const qualityParams = [
  { icon: FaBook, label: 'Curricular Aspects', desc: 'CBCS curriculum aligned with UGC guidelines' },
  { icon: FaChalkboardTeacher, label: 'Teaching-Learning & Evaluation', desc: 'Innovative pedagogy and continuous assessment' },
  { icon: FaFlask, label: 'Research, Innovation & Extension', desc: 'Faculty research, community outreach programs' },
  { icon: FaBuilding, label: 'Infrastructure & Learning Resources', desc: 'Library, labs, smart classrooms, sports facilities' },
  { icon: FaUsers, label: 'Student Support & Progression', desc: 'Scholarships, counselling, placement support' },
  { icon: FaGlobe, label: 'Governance, Leadership & Management', desc: 'Transparent governance and strategic planning' },
];

const aqarReports = [
  { year: '2024–25', status: '-', date: 'Oct 2025' },
  { year: '2023–24', status: '-', date: 'Oct 2024' },
  { year: '2022–23', status: '-', date: 'Oct 2023' },
];

export default function NAACPage() {
  return (
    <>
      <Hero
        title="NAAC Accreditation"
        subtitle="National Assessment and Accreditation Council — Quality Assurance in Higher Education"
        bannerImage={images.about.banner}
        height="medium"
        breadcrumb="Academics › NAAC"
      />

      {/* Accreditation Status Card */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-8 text-center shadow-sm">
                <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-2xl">N</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-amber-800 mb-2">NAAC Accreditation</h2>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                  <FaCheckCircle />
                  Accreditation Process Initiated
                </div>
                <p className="text-amber-700 leading-relaxed">
                  SSKV College of Arts & Science for Women has initiated the NAAC accreditation process.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About NAAC */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="About NAAC"
            subtitle="Understanding the National Assessment and Accreditation Council"
          />
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h3 className="font-heading font-bold text-xl text-primary-800 mb-3">What is NAAC?</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  The National Assessment and Accreditation Council (NAAC) is an autonomous body established by the
                  University Grants Commission (UGC) of India. NAAC assesses and accredits higher education institutions
                  (HEIs) to ensure quality in higher education in India.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  NAAC evaluates institutions on a seven-point scale and awards grades from A++ to C, providing
                  students, parents, and employers with reliable information about the quality of education offered.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-primary-800 mb-3">Why Accreditation Matters</h3>
                <ul className="space-y-2">
                  {[
                    'Provides reliable quality information to all stakeholders',
                    'Helps institutions identify areas of improvement',
                    'Ensures accountability and transparency',
                    'Eligibility for UGC grants and funding',
                    'Enhanced recognition among students and employers',
                    'Drives quality culture within the institution',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-neutral-600 text-sm">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quality Parameters */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Quality Parameters"
            subtitle="NAAC evaluates institutions across seven key criteria"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityParams.map((param, index) => (
              <AnimatedSection key={param.label} delay={index * 0.1}>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <param.icon className="text-3xl text-primary-700 mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2">{param.label}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{param.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AQAR Reports */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="AQAR Reports"
            subtitle="Annual Quality Assurance Reports submitted to NAAC"
            light
          />
          <AnimatedSection>
            <div className="bg-white/10 rounded-2xl overflow-hidden border border-white/20">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/10 text-accent-300">
                    <th className="text-left px-6 py-3">Academic Year</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-left px-6 py-3">Submission Date</th>
                    <th className="text-left px-6 py-3">Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {aqarReports.map((report) => (
                    <tr key={report.year} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{report.year}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                          {report.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/60">{report.date}</td>
                      <td className="px-6 py-4">
                        <button className="flex items-center gap-1.5 text-accent-400 hover:text-accent-300 transition-colors text-xs font-semibold">
                          <FaDownload className="text-[11px]" />
                          PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* SSR */}
          <AnimatedSection>
            <div className="mt-8 bg-accent-400/10 border border-accent-400/30 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Self Study Report (SSR)</h3>
                <p className="text-white/60 text-sm mt-1">
                  
                </p>
              </div>
              <button className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-accent-400 text-primary-900 font-semibold rounded-lg hover:bg-accent-300 transition-colors text-sm">
                <FaDownload />
                Download SSR
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
