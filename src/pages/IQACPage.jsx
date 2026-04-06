import { FaDownload, FaCheckCircle, FaUsers, FaClipboardList, FaLightbulb } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import { images } from '../data/media';

const iqacMembers = [
  { role: 'Chairman', name: 'Dr. K. Thirumamagal, ', designation: 'Principal' },
  { role: 'Member', name: 'Dr. Sumanth C Raman', designation: 'Management Representative' },
  { role: 'IQAC Coordinator', name: 'Dr. J. Seethalakshmi', designation: '' },
  { role: 'Criterion I  Curriculum Design', name: 'Ms. J. Suganthi', designation: 'Department of Mathematics' },
  { role: 'Criterion II  Faculty Resources', name: 'Ms. R. Ramya', designation: 'Department of Computer Science' },
  { role: 'Criterion III Infrastructure', name: 'Ms. R. K. Ramya', designation: 'Department of Computer Applications' },
  { role: 'Criterion IV Financial Resources & Management', name: 'Ms. P. Anandhalakshmi', designation: 'Department of Commerce (General)' },
  { role: 'Criterion V Learning and Teaching', name: 'Dr. P. Revathi', designation: 'Department of Business Administration' },
  { role: 'Criterion VI Extended Curriculum Engagement', name: 'Dr. P. Meenakshi', designation: 'Department of Commerce (Corporate Secretaryship)' },
  { role: 'Criterion VII Governance and Administration', name: 'Ms. J. Ramani', designation: 'Department of Commerce (Accounting & Finance)' },
  { role: 'Criterion VIII Student Outcomes', name: 'Ms. Dr. B. Valli', designation: 'Department of Tamil' },
  { role: '	Criterion IX Research and Innovation Outcomes', name: 'Ms. H. Anusha', designation: 'Department of English' },
  { role: 'Criterion X Sustainability Outcomes', name: 'Dr. E. Kalaiselvi', designation: 'Library' },
  { role: 'member', name: 'Ms. Shenbagam', designation: 'Alumni Association' },
  { role: 'Student Representative', name: 'Ms. Kokilavani', designation: 'Parent Stakeholder' },
  { role: 'Administrative Officer', name: 'Mr. T. V. Jaganathan', designation: 'Office Superintendent' },
   { role: 'Assistant', name: 'Ms. Gayathri', designation: 'Office Clerk' },
];

const initiatives = [
  'Faculty Development Programmes (FDPs) on innovative pedagogy and ICT integration',
  'Annual Academic Audit and Internal Quality Audit',
  'Student feedback collection and analysis system',
  'Green campus initiatives and energy conservation drives',
  'Organizing national seminars, workshops, and guest lectures',
  'Industry-academia interface programs and MoU signings',
  'Mentoring and counselling programs for student welfare',
  'Library digitization and e-resource access enhancement',
  'Anti-ragging, gender sensitization, and women empowerment programs',
];

const meetings = [
  { date: 'Dec 2025', agenda: 'Review of Semester Results and Academic Progress', minutesPdf: true },
  { date: 'Sep 2025', agenda: 'Planning for NAAC Preparation and SSR Submission', minutesPdf: true },
  { date: 'Jun 2025', agenda: 'Annual Quality Review and Action Plan for 2025–26', minutesPdf: true },
  { date: 'Mar 2025', agenda: 'Review of Student Feedback and Faculty Appraisal', minutesPdf: true },
];

const bestPractices = [
  {
    title: 'Value-Based Education and Character Building',
    context: 'Developing moral and ethical values among students through structured programs.',
    practice: 'Regular yoga sessions, meditation, personality development workshops, and ethics classes are integrated into student schedules. Guest lectures by accomplished women leaders are organized to inspire students.',
    outcomes: 'Improved student discipline, mental well-being, and confidence levels.',
  },
  {
    title: 'Green Campus and Environmental Awareness',
    context: 'Creating environmental consciousness among students and reducing carbon footprint.',
    practice: 'Tree plantation drives, segregated waste disposal, solar energy usage, and annual Environment Day celebrations. Eco-clubs coordinate awareness campaigns.',
    outcomes: 'Greener campus, reduced energy consumption, environmentally conscious graduates.',
  },
];

export default function IQACPage() {
  return (
    <>
      <Hero
        title="IQAC — Internal Quality Assurance Cell"
        subtitle="Striving for continuous quality improvement in all academic and administrative activities"
        bannerImage={images.about.building}
        height="medium"
      />

      {/* About IQAC */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <SectionHeading title="About IQAC" subtitle="" className="text-left items-start" />
              <p className="text-neutral-600 leading-relaxed mb-4">
                The difference between what one can do and what one should do is the difference between lethargy and initiative. Norman Richard, Vice President of Xerox Corporation, once said, “The quest for quality is a race without a finishing line.”
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Inspired by this thought, the initiative to establish the Internal Quality Assurance Cell (IQAC) was taken in the year 2012, even though the institution was only five years old at that time. While the establishment of IQAC becomes mandatory only after NAAC accreditation, the College proactively constituted the cell to promote quality consciousness among all stakeholders, including the management.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                This initiative has yielded rich dividends, as the faculty members are now well aware of NAAC expectations, assessment criteria, quality parameters, and areas requiring improvement. Gradually, the institution has been enhancing its infrastructural facilities and sensitizing all stakeholders to the importance of quality education and effective logistics.
              </p>
                <p className="text-neutral-600 leading-relaxed mb-4">
                The College is also planning to establish Quality Circles, and the process of quality initiation has already begun. The IQAC Coordinator plays a very active role and is involved in all aspects of academics and administration. It is noteworthy that the institution is a young college, with the average age of the faculty being around 30 years.
              </p>
                <p className="text-neutral-600 leading-relaxed mb-4">
                The institution has also undertaken a SWOT analysis, albeit on a modest scale. The management has shown sensitivity towards identifying and establishing important milestones for institutional growth. As the proverb goes, “Slow and steady wins the race,” and the College is progressing cautiously, yet confidently, in the right direction.
              </p>
              <h3 className="font-heading font-bold text-lg text-primary-800 mb-3">Objectives</h3>
              <ul className="space-y-2">
                {[
                  'To develop quality benchmarks for the academic and administrative activities',
                  'To facilitate the creation of a learner-centric environment',
                  'To prepare the Annual Quality Assurance Report (AQAR)',
                  'To initiate and promote research, consultancy, and extension activities',
                  'To ensure continuous improvement in all academic and administrative activities',
                ].map((obj) => (
                  <li key={obj} className="flex items-start gap-2 text-neutral-600 text-sm">
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-800 flex items-center justify-center">
                    <FaUsers className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary-800">IQAC Composition</h3>
                </div>
                <div className="space-y-2">
                  {iqacMembers.map((member, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-primary-100 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-primary-800">{member.name}</p>
                        <p className="text-xs text-neutral-500">{member.designation}</p>
                      </div>
                      <span className="text-xs px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full flex-shrink-0 ml-2">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="IQAC Initiatives"
            subtitle="Key activities undertaken to enhance quality in the institution"
          />
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {initiatives.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-neutral-200 shadow-sm"
                >
                  <FaLightbulb className="text-accent-500 text-lg flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Minutes of Meetings */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Minutes of IQAC Meetings"
            subtitle="Records of IQAC deliberations and decisions"
            light
          />
          <AnimatedSection>
            <div className="bg-white/10 rounded-2xl overflow-hidden border border-white/20">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/10 text-accent-300">
                    <th className="text-left px-6 py-3">Meeting Date</th>
                    <th className="text-left px-6 py-3">Agenda</th>
                    <th className="text-left px-6 py-3">Minutes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {meetings.map((meeting) => (
                    <tr key={meeting.date} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white font-medium whitespace-nowrap">{meeting.date}</td>
                      <td className="px-6 py-4 text-white/70">{meeting.agenda}</td>
                      <td className="px-6 py-4">
                        {meeting.minutesPdf && (
                          <button className="flex items-center gap-1.5 text-accent-400 hover:text-accent-300 transition-colors text-xs font-semibold">
                            <FaDownload className="text-[11px]" />
                            Download
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Best Practices"
            subtitle="Institutional best practices as per NAAC format"
          />
          <div className="space-y-6">
            {bestPractices.map((practice, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-400 flex items-center justify-center font-bold text-primary-900">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-primary-800 mb-3">{practice.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-neutral-400 uppercase mb-1">Context</p>
                          <p className="text-neutral-600 text-sm leading-relaxed">{practice.context}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-neutral-400 uppercase mb-1">The Practice</p>
                          <p className="text-neutral-600 text-sm leading-relaxed">{practice.practice}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-neutral-400 uppercase mb-1">Outcomes</p>
                          <p className="text-neutral-600 text-sm leading-relaxed">{practice.outcomes}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Action Taken Reports */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Action Taken Reports"
            subtitle="Follow-up on IQAC decisions and quality improvement measures"
          />
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaClipboardList className="text-3xl text-primary-700" />
                <div>
                  <h3 className="font-heading font-bold text-lg text-primary-800">ATR for 2025–26</h3>
                  <p className="text-neutral-500 text-sm">Action taken on IQAC recommendations</p>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Action Taken Reports document the steps taken by the institution in response to IQAC
                recommendations and peer feedback. These reports ensure accountability and continuous
                improvement in academic and administrative processes.
              </p>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-primary-800 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm">
                <FaDownload />
                Download ATR 2025–26
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
