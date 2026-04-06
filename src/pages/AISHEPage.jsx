import { FaDownload, FaCheckCircle, FaUniversity, FaChartBar, FaDatabase } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const features = [
  { icon: FaUniversity, title: 'Institutional Data', desc: 'Comprehensive data on infrastructure, faculty, student enrollment, and financial resources.' },
  { icon: FaChartBar, title: 'Academic Performance', desc: 'Tracking student outcomes, examination results, and academic progression metrics.' },
  { icon: FaDatabase, title: 'Data-Driven Planning', desc: 'Enabling evidence-based policy decisions for higher education development in India.' },
];

export default function AISHEPage() {
  return (
    <>
      <Hero
        title="AISHE"
        subtitle="All India Survey on Higher Education — Annual Data Submission"
        height="medium"
        breadcrumb="Academics › IQAC › AISHE"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About AISHE" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-4">
              The All India Survey on Higher Education (AISHE) is an annual web-based survey conducted by the Ministry of Education, Government of India. It covers all institutions of higher learning in the country and collects detailed information on various parameters such as student enrollment, faculty, infrastructure, financial information, and examination results.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              SSKV College of Arts & Science for Women participates in AISHE every year, providing accurate and timely data to support national-level planning and policy formulation for higher education.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <f.icon className="text-3xl text-primary-700 mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2">{f.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <SectionHeading title="Key Data Submitted" />
          <AnimatedSection>
            <ul className="space-y-2 mb-8">
              {[
                'Number of students enrolled across all programs and categories',
                'Faculty strength and qualifications',
                'Infrastructure and learning resources',
                'Financial information and funding received',
                'Examination results and pass percentages',
                'Programs offered and intake capacity',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-600 text-sm">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner title="Committed to Transparency" subtitle="SSKV College ensures timely and accurate submission of AISHE data every academic year." />
    </>
  );
}
