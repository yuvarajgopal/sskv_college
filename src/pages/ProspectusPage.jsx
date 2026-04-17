import { FaDownload, FaGraduationCap, FaRupeeSign, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const highlights = [
  { icon: FaGraduationCap, title: '11 UG Programs', desc: 'Diverse programmes in Arts, Science, Commerce, and Professional streams.' },
  { icon: FaRupeeSign, title: 'Affordable Fees', desc: 'Competitive and transparent fee structure with scholarship opportunities.' },
  { icon: FaCalendarAlt, title: 'Academic Year 2025–26', desc: 'Latest prospectus with updated curriculum and fee details.' },
];

const prospectusContents = [
  'About SSKV College and its Management',
  'Vision, Mission, and Institutional Goals',
  'Programmes Offered — UG (Shift I & Shift II)',
  'Eligibility Criteria and Admission Process',
  'Detailed Fee Structure for all Programmes',
  'Scholarship and Financial Aid Information',
  'Academic Calendar and Important Dates',
  'Rules and Regulations for Students',
  'Campus Infrastructure and Facilities',
  'Contact Information and Location Map',
];

export default function ProspectusPage() {
  return (
    <>
      <Hero
        title="Prospectus & Fees Structure"
        subtitle="Academic Year 2025–26 — Complete information for prospective students"
        height="medium"
        breadcrumb="Admissions › Prospectus"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {highlights.map((h, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow h-full">
                  <h.icon className="text-3xl text-primary-700 mx-auto mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2 text-sm">{h.title}</h3>
                  <p className="text-neutral-600 text-xs leading-relaxed">{h.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="What's in the Prospectus" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {prospectusContents.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <div className="flex items-start gap-2 bg-white rounded-xl px-4 py-3 border border-neutral-100">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-sm" />
                  <p className="text-sm text-neutral-700">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="bg-primary-800 rounded-2xl p-8 text-center text-white">
              <h3 className="font-heading font-bold text-2xl mb-3">Download Prospectus 2025–26</h3>
              <p className="text-white/60 mb-6">Get the complete prospectus with detailed fee structure, programme information, and admission guidelines.</p>
              <a
                href="/docs/prospectus-2025-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-400 text-primary-900 font-semibold rounded-lg hover:bg-accent-300 transition-colors"
              >
                <FaDownload />
                Download Prospectus (PDF)
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner title="Ready to Apply?" subtitle="Start your journey at SSKV College today." />
    </>
  );
}
