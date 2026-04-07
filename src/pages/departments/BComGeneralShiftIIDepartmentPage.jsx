import { useState } from 'react';
import { FaChartLine, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const programDetails = [
  { label: 'Degree',        value: 'B.Com (General)' },
  { label: 'Shift',         value: 'Shift II (Evening)' },
  { label: 'Duration',      value: '3 Years (6 Semesters)' },
  { label: 'Eligibility',   value: 'Must have studied Commerce & Accountancy at HSC. 20% seats reserved for Commerce Vocational Stream.' },
  { label: 'Affiliation',   value: 'University of Madras' },
  { label: 'Curriculum',    value: 'CBCS — Choice Based Credit System' },
    { label: 'Syllabus',     value: (<a href="/pdfs/bcom_general.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-600 underline hover:text-orange-800"> UG Syllabus</a>
    )
  },
];

const outcomes = [
  'Comprehensive understanding of accounting, finance, and business management',
  'Proficiency in financial reporting, auditing, and taxation',
  'Knowledge of business law, corporate governance, and banking',
  'Practical skills in computerised accounting (Tally) and office automation',
  'Communication and interpersonal skills for the corporate environment',
  'Readiness for higher studies (M.Com, MBA, CA, ICWA) or careers in commerce',
];

export default function BComGeneralShiftIIDepartmentPage() {
  return (
    <>
      <Hero
        title="Department of B.Com General (Shift II)"
        subtitle="Bachelor of Commerce — Evening Programme for flexible learning"
        height="medium"
        breadcrumb="Academics › B.Com General (Shift II)"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 text-sm font-semibold rounded-full mb-4">
                Shift II — Evening Programme
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">About the Department</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The B.Com General (Shift II) programme offers the same comprehensive commerce curriculum as the day programme, scheduled in the evening for students who prefer flexible timings. The programme provides a strong foundation in accounting, finance, and business studies.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Students enrolled in Shift II enjoy the same academic rigor, access to library resources, computer labs, and placement support as their Shift I counterparts. The curriculum follows the University of Madras CBCS framework.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Graduates can pursue professional certifications (CA, ICWA, CS), higher studies (M.Com, MBA), or enter the workforce in banking, finance, accounting, and business management roles.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <FaChartLine className="text-2xl text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.Com General (Shift II)</h3>
                    <p className="text-white/60 text-sm">Program Details</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {programDetails.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">{item.label}</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-amber-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Program Outcomes" subtitle="What students gain from the B.Com General (Shift II) program" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-amber-100 shadow-sm h-full">
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

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading title="Our Faculty" subtitle="Faculty information for Shift II" />
          <p className="text-center text-neutral-400 py-8 text-sm">Faculty information will be updated soon.</p>

          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 max-w-3xl mx-auto">
              {[
                { icon: FaUsers,         value: '—', label: 'Faculty Members' },
                { icon: FaAward,         value: '—', label: 'Ph.D Holders' },
                { icon: FaGraduationCap, value: '3', label: 'Years Duration' },
                { icon: FaChartLine,     value: '6', label: 'Semesters' },
              ].map((stat) => (
                <div key={stat.label} className="bg-primary-50 rounded-xl p-5 text-center">
                  <stat.icon className="text-2xl text-primary-700 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-800 font-heading">{stat.value}</div>
                  <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner title="Interested in B.Com General (Shift II)?" subtitle="Apply now for the evening programme in Commerce." />
    </>
  );
}
