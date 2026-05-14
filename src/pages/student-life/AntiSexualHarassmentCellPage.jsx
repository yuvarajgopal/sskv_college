import { FaShieldAlt, FaExclamationTriangle, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const objectives = [
  'To prevent sexual harassment at the workplace',
  'To promote gender equality and dignity',
  'To provide a safe and supportive environment',
];

const complaintSteps = [
  'A written complaint must be submitted to the ICC within 3 months of the incident.',
  'Complaints can be submitted in person or via email.',
  'The complaint should include details of the incident and supporting documents, if any.',
];

const redressalSteps = [
  'The ICC will acknowledge the complaint within a reasonable time.',
  'A fair and impartial inquiry will be conducted.',
  'Both parties will be given an opportunity to be heard.',
  'Confidentiality will be strictly maintained.',
  'Recommendations will be submitted to the Principal for appropriate action.',
];

const awarenessActivities = ['Workshops', 'Seminars', 'Awareness campaigns'];

const members = [
  { name: 'Dr. K. Thirumamagal', designation: 'Principal', role: 'Presiding Officer', contact: '9994745157' },
  { name: 'R.K. Ramya', designation: 'HOD, Department of BCA', role: 'Faculty Member', contact: '9940749481' },
  { name: 'N. Ramya', designation: 'Assistant Professor, Department of Mathematics', role: 'Faculty Member', contact: '9944561867' },
  { name: 'Mr. T.V. Jaganathan', designation: 'Office Superintendent', role: 'Non-Teaching Member', contact: '9381080510' },
  { name: 'Dr. H. Varalakshmi', designation: 'Health & Safety Officer', role: 'Non-Teaching Member', contact: '8680023003' },
  { name: 'R. Aarthi', designation: 'II Year AI', role: 'Student Member', contact: '—' },
  { name: 'M. Thaibunnisa', designation: 'I MA English', role: 'Student Member', contact: '—' },
  { name: 'J. Ragini', designation: 'II M.Com', role: 'Student Member', contact: '—' },
  { name: 'Mr. Pannerselvam', designation: 'Founder – Sarvam Trust', role: 'NGO Member', contact: '9500218240' },
  { name: 'Mr. G. Sridhar', designation: 'Lawyer', role: 'Legal Advisor', contact: '9444087709' },
];

export default function AntiSexualHarassmentCellPage() {
  return (
    <>
      <Hero
        title="Anti-Sexual Harassment Cell"
        subtitle="Ensuring a safe, respectful, and dignified environment for all students and staff"
        height="medium"
        breadcrumb="Student Life › Anti-Sexual Harassment Cell"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <AnimatedSection delay={0.1}>
            <div className="bg-primary-50 border-l-4 border-accent-400 rounded-r-xl p-6 mb-8">
              <p className="text-neutral-700 leading-relaxed text-sm">
                The Anti Sexual Harassment cell is constituted as per the provisions of the Sexual Harassment of
                Women at Workplace Act 2013 and UGC regulations to ensure a safe and secure environment for all
                students and staff.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
              <FaExclamationTriangle className="text-red-500 text-2xl flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-red-800 font-heading text-base mb-1">
                  Zero Tolerance Policy
                </h3>
                <p className="text-sm text-red-700 leading-relaxed">
                  The college adopts a zero-tolerance policy towards sexual harassment and is committed to taking
                  strict action against any violation.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionHeading title="Objectives" />
            <div className="space-y-3 mb-8">
              {objectives.map((obj, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100"
                >
                  <span className="w-6 h-6 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionHeading title="Constitution of the Cell" />
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
              <FaLink className="text-amber-600 text-lg flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed">
                The Anti-Sexual Harassment Cell functions through the{' '}
                <Link
                  to="/administration/icc"
                  className="font-semibold underline hover:text-amber-900 transition-colors"
                >
                  Internal Complaints Committee (ICC)
                </Link>
                . The committee members are responsible for receiving, investigating, and redressing complaints
                in accordance with the Sexual Harassment of Women at Workplace Act 2013.
              </p>
            </div>

            {/* Members Table */}
            <div className="mt-6 mb-8 overflow-x-auto">
              <h3 className="text-lg font-bold text-primary-800 mb-4">
                Members of the Cell
              </h3>

              <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary-800 text-white">
                    <tr>
                      <th className="px-4 py-3">S.No</th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Designation</th>
                      <th className="px-4 py-3">Role</th>
                      <th className="px-4 py-3">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member, index) => (
                      <tr
                        key={index}
                        className="border-b border-neutral-200 hover:bg-neutral-50"
                      >
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3 font-medium text-neutral-800">
                          {member.name}
                        </td>
                        <td className="px-4 py-3 text-neutral-700">
                          {member.designation}
                        </td>
                        <td className="px-4 py-3 text-neutral-700">
                          {member.role}
                        </td>
                        <td className="px-4 py-3 text-neutral-700">
                          {member.contact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionHeading title="Procedure to File a Complaint" />
            <div className="space-y-3 mb-8">
              {complaintSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100"
                >
                  <span className="w-6 h-6 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionHeading title="Redressal Mechanism" />
            <div className="space-y-3 mb-8">
              {redressalSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100"
                >
                  <span className="w-6 h-6 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionHeading title="Confidentiality Assurance" />
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8">
              <p className="text-sm text-blue-800 leading-relaxed">
                All proceedings of the ICC are strictly confidential. The identity of the complainant, respondent,
                and witnesses will not be disclosed.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionHeading title="Awareness Programmes" />
            <p className="text-sm text-neutral-700 mb-3">
              The college regularly conducts the following to educate students and staff about gender sensitivity and prevention of sexual harassment:
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {awarenessActivities.map((act, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-primary-50 border border-primary-100 text-primary-800 text-sm font-medium rounded-full"
                >
                  {act}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionHeading title="Annual Reports" />
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 mb-8">
              <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                The Anti Sexual Harassment cell prepares an annual report summarizing:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600">
                <li>Number of complaints received</li>
                <li>Actions taken</li>
                <li>Awareness programmes conducted</li>
              </ul>
              <p className="text-xs text-neutral-500 mt-3 italic">
                (Available upon request or as per institutional policy)
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <FaShieldAlt className="text-2xl text-accent-400" />
              </div>
              <div>
                <p className="text-accent-400 text-xs font-bold uppercase tracking-wide mb-0.5">
                  Committee
                </p>
                <h3 className="text-base font-bold font-heading">
                  Internal Complaints Committee (ICC)
                </h3>
                <p className="text-white/70 text-xs mt-1 leading-relaxed">
                  Constituted under the Sexual Harassment of Women at Workplace
                  (Prevention, Prohibition and Redressal) Act, 2013
                </p>
                <Link
                  to="/administration/icc"
                  className="inline-block mt-3 text-accent-400 text-xs font-semibold hover:text-accent-300 transition-colors underline"
                >
                  View Committee Members →
                </Link>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTABanner
        title="Safe Campus. Safe Future."
        subtitle="SSKV College ensures a dignified, respectful, and harassment-free environment for all students and staff."
      />
    </>
  );
}