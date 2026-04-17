import {
  FaBookOpen,
  FaUserCheck,
  FaShieldAlt,
  FaClipboardList,
  FaHandshake,
  FaExclamationTriangle,
  FaFilePdf,
  FaDownload,
} from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const PDF_PATH = '/pdfs/policies/student-code-of-conduct.pdf';

const pillars = [
  {
    icon: FaUserCheck,
    title: 'Discipline & Respect',
    description:
      'Maintain discipline at all times and treat faculty, staff, peers, and visitors with courtesy and respect on and off campus.',
  },
  {
    icon: FaClipboardList,
    title: 'Attendance & Punctuality',
    description:
      'Attend all classes regularly and be punctual. A minimum of 75% attendance is mandatory to appear for examinations.',
  },
  {
    icon: FaBookOpen,
    title: 'Academic Integrity',
    description:
      'Uphold honesty in examinations, assignments, and projects. Plagiarism, malpractice, and unfair means are strictly prohibited.',
  },
  {
    icon: FaShieldAlt,
    title: 'Campus Safety',
    description:
      'Adhere to safety guidelines, zero tolerance for ragging, substance abuse, or any form of harassment or violence.',
  },
  {
    icon: FaHandshake,
    title: 'Dress & Identity',
    description:
      'The institution does not enforce a dress code. Students may dress as per their comfort and preference, while maintaining decency. Possession of the college ID card on campus is mandatory.',
  },
  {
    icon: FaExclamationTriangle,
    title: 'Prohibited Conduct',
    description:
      'Smoking, alcohol, weapons, and politically-motivated activities are strictly forbidden on campus.',
  },
];

const rules = [
  'Students must carry their identity card at all times inside the campus.',
  'Uniform is compulsory on all working days as per the college dress code.',
  'Students must maintain silence in the library, examination halls, and during college functions.',
  'Damage to college property will attract disciplinary action and recovery of cost.',
  'Usage of mobile phones is strictly prohibited inside classrooms and the library.',
  'Students must not engage in ragging in any form — zero tolerance policy is enforced.',
  'Any form of harassment (verbal, physical, or digital) is a serious offence.',
  'Students found indulging in smoking, drugs, or alcohol on campus will face immediate disciplinary action.',
  'Unauthorised gatherings, protests, or political activities are not allowed inside the campus.',
  'Students must follow all instructions issued by faculty, HODs, and the Principal from time to time.',
];

const disciplinaryActions = [
  { level: 'Level 1', label: 'Verbal Warning', desc: 'For minor first-time infractions.' },
  { level: 'Level 2', label: 'Written Warning', desc: 'Formal notice entered in student record.' },
  { level: 'Level 3', label: 'Parental Intimation', desc: 'Parents/Guardians notified and counselled.' },
  { level: 'Level 4', label: 'Suspension', desc: 'Temporary suspension from classes and college activities.' },
  { level: 'Level 5', label: 'Expulsion', desc: 'Permanent removal from the college in severe cases.' },
];

export default function StudentCodeOfConductPage() {
  return (
    <>
      <Hero
        title="Student's Code of Conduct"
        subtitle="Guidelines that shape responsible, disciplined, and empowered learners"
        height="medium"
        breadcrumb="Student Life › Code of Conduct"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-6xl">

          <SectionHeading
            title="Our Code of Conduct"
            subtitle="SSKV College is committed to nurturing students into confident, socially responsible citizens. Every student is expected to uphold the following values during their time at our institution."
          />

          {/* PILLARS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {pillars.map((pillar) => (
              <AnimatedSection key={pillar.title}>
                <div className="h-full bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent-400 flex items-center justify-center mb-4">
                    <pillar.icon className="text-2xl text-primary-900" />
                  </div>
                  <h3 className="font-bold text-primary-800 mb-2 font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* RULES */}
          <AnimatedSection>
            <div className="bg-primary-900 rounded-2xl p-8 md:p-10 text-white mb-16">
              <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                <FaClipboardList className="text-accent-400" /> Rules &amp; Regulations
              </h3>
              <ol className="space-y-3 list-decimal list-inside text-white/85 leading-relaxed">
                {rules.map((rule, i) => (
                  <li key={i} className="pl-2">{rule}</li>
                ))}
              </ol>
            </div>
          </AnimatedSection>

          {/* DISCIPLINARY ACTIONS */}
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-primary-800 font-heading mb-6 text-center">
              Disciplinary Framework
            </h3>
            <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-8">
              Violations of the code of conduct are addressed through a graded framework
              depending on the nature and severity of the offence.
            </p>
            <div className="grid md:grid-cols-5 gap-4">
              {disciplinaryActions.map((action) => (
                <div
                  key={action.level}
                  className="bg-white border-2 border-accent-400/30 rounded-xl p-5 text-center hover:border-accent-400 transition-colors duration-300"
                >
                  <p className="text-xs font-semibold text-accent-500 mb-2">{action.level}</p>
                  <p className="font-bold text-primary-800 mb-2">{action.label}</p>
                  <p className="text-xs text-neutral-600 leading-relaxed">{action.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* DOWNLOAD PDF */}
          <AnimatedSection>
            <div className="mt-16 bg-gradient-to-r from-primary-800 to-primary-900 rounded-2xl p-8 md:p-10 text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-400 flex items-center justify-center">
                <FaFilePdf className="text-3xl text-primary-900" />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-heading">
                Full Code of Conduct Document
              </h3>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                Download the complete Student Code of Conduct policy document for detailed
                guidelines, procedures, and reference.
              </p>
              <a
                href={PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-400 text-primary-900 font-semibold rounded-lg hover:bg-accent-300 transition-colors duration-200"
              >
                <FaDownload /> Download PDF
              </a>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTABanner
        title="Integrity. Discipline. Excellence."
        subtitle="Every SSKV student is a proud ambassador of our values and traditions."
      />
    </>
  );
}
