import { FaExternalLinkAlt, FaBookOpen, FaBalanceScale, FaFileAlt } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const links = [
  { label: 'CBCS Regulations', url: 'https://www.unom.ac.in/index.php?route=admission/cbcssyllabus', desc: 'Choice Based Credit System regulations and syllabus from the University of Madras.' },
  { label: 'CBCS — Academic Information', url: 'https://www.unom.ac.in/index.php?route=academic/cbcs', desc: 'Detailed academic information on CBCS implementation and guidelines.' },
];

export default function StatutesOrdinancesPage() {
  return (
    <>
      <Hero
        title="Statutes & Ordinances"
        subtitle="Regulatory framework pertaining to admissions and academics"
        height="medium"
        breadcrumb="Academics › Statutes & Ordinances"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Statutes & Ordinances Pertaining to Admissions/Academics" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              SSKV College of Arts & Science for Women, affiliated to the University of Madras, follows the statutes, ordinances, and regulations laid down by the University for all academic and admission-related matters. The following resources provide detailed information on the regulatory framework governing our academic programmes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: FaBookOpen, title: 'University Statutes', desc: 'Rules and regulations governing the functioning of affiliated colleges under the University of Madras.' },
              { icon: FaBalanceScale, title: 'Ordinances', desc: 'Academic ordinances covering examinations, grading, attendance requirements, and student conduct.' },
              { icon: FaFileAlt, title: 'CBCS Framework', desc: 'Choice Based Credit System regulations for curriculum design, evaluation, and credit transfer.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <item.icon className="text-3xl text-primary-700 mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <SectionHeading title="Important Links" />
          <div className="space-y-4">
            {links.map((link, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-primary-50 border border-primary-100 rounded-xl px-6 py-4 hover:bg-primary-100 transition-colors group"
                >
                  <div>
                    <h4 className="font-heading font-bold text-primary-800 mb-1">{link.label}</h4>
                    <p className="text-neutral-600 text-sm">{link.desc}</p>
                  </div>
                  <FaExternalLinkAlt className="text-primary-400 group-hover:text-primary-600 flex-shrink-0 ml-4" />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Academic Governance" subtitle="Ensuring compliance with University of Madras regulations for quality education." />
    </>
  );
}
