import { FaUsers, FaComments, FaBook, FaBalanceScale } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

export default function StudentCodeConductPage() {
  return (
    <>
      <Hero
        title="Student Code of Conduct"
        subtitle="Guidelines to maintain discipline, respect, and excellence"
        height="medium"
        breadcrumb="Student Life › Code of Conduct"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-6xl">

          <SectionHeading title="Student Code of Conduct" />

          {/* INTRO */}
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              The Student Code of Conduct outlines the expectations and responsibilities 
              of students to ensure a safe, respectful, and disciplined academic environment. 
              All students are expected to follow these guidelines both inside and outside the campus.
            </p>
          </AnimatedSection>

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* LEFT CONTENT */}
            <div>

              {/* GENERAL DISCIPLINE */}
              <AnimatedSection>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
                  <h3 className="font-bold text-primary-800 mb-4 flex items-center gap-2">
                    <FaUsers /> General Discipline
                  </h3>

                  <ul className="space-y-3 text-neutral-700">
                    <li>• Students must maintain discipline and decorum on campus.</li>
                    <li>• Respect towards teachers, staff, and fellow students is mandatory.</li>
                    <li>• Any form of misconduct or indiscipline will not be tolerated.</li>
                    <li>• Students must carry their ID cards at all times.</li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* ACADEMIC RESPONSIBILITY */}
              <AnimatedSection>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
                  <h3 className="font-bold text-primary-800 mb-4 flex items-center gap-2">
                    <FaBook /> Academic Responsibility
                  </h3>

                  <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                    <li>Attend classes regularly and be punctual.</li>
                    <li>Complete assignments and academic work on time.</li>
                    <li>Maintain academic integrity and avoid malpractice.</li>
                    <li>Follow examination rules strictly.</li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* BEHAVIOUR */}
              <AnimatedSection>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <h3 className="font-bold text-primary-800 mb-4 flex items-center gap-2">
                    <FaComments /> Behaviour & Conduct
                  </h3>

                  <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                    <li>Maintain polite and respectful communication.</li>
                    <li>Avoid use of abusive language or inappropriate behaviour.</li>
                    <li>Follow dress code as prescribed by the institution.</li>
                    <li>Use mobile phones only where permitted.</li>
                  </ul>
                </div>
              </AnimatedSection>

            </div>

            {/* RIGHT CONTENT */}
            <div>

              {/* CAMPUS RULES */}
              <AnimatedSection>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
                  <h3 className="font-bold text-primary-800 mb-4 flex items-center gap-2">
                    <FaBalanceScale /> Campus Rules
                  </h3>

                  <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                    <li>Maintain cleanliness and protect campus property.</li>
                    <li>Ragging is strictly prohibited.</li>
                    <li>No involvement in unlawful or harmful activities.</li>
                    <li>Follow safety rules within labs and classrooms.</li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* ATTENDANCE */}
              <AnimatedSection>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
                  <h3 className="font-bold text-primary-800 mb-4">
                    Attendance & Participation
                  </h3>

                  <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                    <li>Students must maintain required attendance percentage.</li>
                    <li>Active participation in academic and co-curricular activities is encouraged.</li>
                    <li>Leave should be taken only with proper permission.</li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* DISCIPLINARY ACTION */}
              <AnimatedSection>
                <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                  <h3 className="font-bold text-red-700 mb-4">
                    Disciplinary Action
                  </h3>

                  <p className="text-sm text-red-600 leading-relaxed">
                    Violation of the code of conduct may result in disciplinary action 
                    including warnings, suspension, or dismissal depending on the severity 
                    of the offense.
                  </p>
                </div>
              </AnimatedSection>

            </div>

          </div>

        </div>
      </section>

      <CTABanner
        title="Be Responsible, Be Respectful"
        subtitle="Follow the code of conduct and build a better academic community."
      />
    </>
  );
}