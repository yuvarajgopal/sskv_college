import { FaDownload, FaCheckCircle, FaUniversity, FaUsers, FaBuilding, FaShieldAlt } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import { images } from '../data/media';
import { departments } from '../data/departments';
import { COLLEGE_INFO } from '../utils/constants';

const disclosures = [
  { category: 'Name of the Institution', value: 'SSKV College of Arts & Science for Women' },
  { category: 'Address', value: 'Kilambi, Kanchipuram — 631 551, Tamil Nadu' },
  { category: 'Date of Establishment', value: '2007' },
  { category: 'Type of Institution', value: "Women's College — Arts & Science" },
  { category: 'Ownership', value: 'Private — SSKV Trust' },
  { category: 'Affiliating University', value: 'University of Madras, Chennai' },
  { category: 'UGC Recognition under Section 2(f)', value: 'Yes — Recognized' },
  { category: 'UGC Recognition under Section 12(B)', value: 'Applied / Under Process' },
  { category: 'Phone', value: '044-27277880 | 044-27277900' },
  { category: 'Email', value: 'sskvcollege@yahoo.com | sskvcollege2007@gmail.com' },
  { category: 'Website', value: 'www.sskvcollege.com' },
  { category: 'NAAC Accreditation', value: 'Accreditation process initiated' },
  { category: 'Anti-Ragging Helpline', value: '1800-180-5522 (Toll Free)' },
];

const infrastructureDetails = [
  { item: 'Total Campus Area', detail: 'Approximately [area] Acres' },
  { item: 'Built-up Area', detail: '[area] Sq. ft. (approx.)' },
  { item: 'Classrooms', detail: 'Well-equipped classrooms with modern facilities' },
  { item: 'Laboratories', detail: 'Computer labs, Science labs, Language lab' },
  { item: 'Library', detail: 'Fully automated library with [N] volumes and e-resources' },
  { item: 'Auditorium', detail: 'Vedanta Auditorium — Capacity [N] students' },
  { item: 'Sports Facilities', detail: 'Indoor and outdoor sports facilities' },
  { item: 'Hostel', detail: 'Ladies hostel facility available' },
];

const studentCounts = [
  { year: '2024–25', ug: 'Contact college for details', total: '—' },
  { year: '2023–24', ug: 'Contact college for details', total: '—' },
  { year: '2022–23', ug: 'Contact college for details', total: '—' },
];

const downloadDocs = [
  { title: 'UGC Recognition Certificate — 2(f)', type: 'PDF' },
  { title: 'Affiliation Certificate — University of Madras', type: 'PDF' },
  { title: 'Trust Registration Certificate', type: 'PDF' },
  { title: 'Anti-Ragging Affidavit', type: 'PDF' },
  { title: 'Fee Structure 2025–26', type: 'PDF' },
  { title: 'Faculty Details', type: 'PDF' },
];

export default function MandatoryDisclosuresPage() {
  return (
    <>
      <Hero
        title="Mandatory Disclosures"
        subtitle="Transparency in Higher Education — As Required by UGC Regulations"
        bannerImage={images.about.banner}
        height="medium"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4">
                <FaUniversity />
                UGC Mandatory Disclosure
              </div>
              <p className="text-neutral-600 leading-relaxed">
                In compliance with the University Grants Commission (UGC) regulations and the directives of
                the Ministry of Education, SSKV College of Arts & Science for Women publishes the following
                mandatory disclosures. These disclosures ensure transparency, accountability, and provide
                accurate information to students, parents, and regulatory authorities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* General Disclosures Table */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="General Information"
            subtitle="Basic institutional details as mandated by regulatory authorities"
          />
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-6 py-3 w-2/5">Category</th>
                    <th className="text-left px-6 py-3">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {disclosures.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-6 py-3.5 font-semibold text-neutral-700">{row.category}</td>
                      <td className="px-6 py-3.5 text-neutral-600">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Programs Offered"
            subtitle="List of undergraduate programs approved by the University of Madras"
          />
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-4 py-3">S.No</th>
                    <th className="text-left px-4 py-3">Program</th>
                    <th className="text-left px-4 py-3">Department</th>
                    <th className="text-left px-4 py-3">Duration</th>
                    <th className="text-left px-4 py-3">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {departments.map((dept, index) => (
                    <tr key={dept.id} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-4 py-3 text-neutral-500">{index + 1}</td>
                      <td className="px-4 py-3 font-semibold text-neutral-800">{dept.degree}</td>
                      <td className="px-4 py-3 text-neutral-600">{dept.name}</td>
                      <td className="px-4 py-3 text-neutral-600">{dept.duration}</td>
                      <td className="px-4 py-3">
                        <span className="capitalize px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full">
                          {dept.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Infrastructure Details"
            subtitle="Physical facilities and infrastructure available at the institution"
          />
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infrastructureDetails.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-neutral-200">
                  <FaBuilding className="text-primary-600 text-lg flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-800 text-sm">{item.item}</p>
                    <p className="text-neutral-600 text-sm mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Anti-Ragging */}
      <section id="anti-ragging" className="section-padding bg-red-50 border-y border-red-200">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-red-800">Anti-Ragging Measures</h2>
                  <p className="text-red-600 text-sm">Zero tolerance policy against ragging</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  'Anti-Ragging Committee constituted as per UGC regulations',
                  'Anti-ragging affidavit obtained from students and parents every year',
                  'CCTV surveillance in all campus areas',
                  'Awareness campaigns and sensitization programs conducted regularly',
                  'Online complaint portal and confidential reporting mechanism',
                  'Zero tolerance policy — strict disciplinary action for offenders',
                ].map((measure) => (
                  <div key={measure} className="flex items-start gap-2 text-neutral-700 text-sm">
                    <FaCheckCircle className="text-red-500 mt-0.5 flex-shrink-0" />
                    {measure}
                  </div>
                ))}
              </div>
              <div className="bg-red-600 text-white rounded-xl p-4 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="font-bold text-lg">Anti-Ragging Helpline</p>
                  <p className="text-white/80 text-sm">Available 24×7 — Toll Free</p>
                </div>
                <div className="text-3xl font-bold">1800-180-5522</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Student Count */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Student Strength"
            subtitle="Year-wise student enrollment details"
          />
          <AnimatedSection>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-6 py-3">Academic Year</th>
                    <th className="text-left px-6 py-3">UG Students</th>
                    <th className="text-left px-6 py-3">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {studentCounts.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="px-6 py-3.5 font-semibold text-neutral-700">{row.year}</td>
                      <td className="px-6 py-3.5 text-neutral-600">{row.ug}</td>
                      <td className="px-6 py-3.5 text-neutral-600">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-neutral-400 px-6 py-2 border-t">
                * Exact figures available upon request from the college office.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Document Downloads"
            subtitle="Download relevant documents and certificates"
            light
          />
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {downloadDocs.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-red-500 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">PDF</span>
                    </div>
                    <p className="text-white/80 text-sm leading-snug">{doc.title}</p>
                  </div>
                  <button className="flex-shrink-0 p-2 text-accent-400 hover:text-accent-300 transition-colors" aria-label={`Download ${doc.title}`}>
                    <FaDownload />
                  </button>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
