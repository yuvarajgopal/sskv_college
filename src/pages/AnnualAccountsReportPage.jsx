import { FaDownload, FaFilePdf, FaRupeeSign, FaChartPie, FaBalanceScale } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const reports = [
  { year: '2024–25', file: '/docs/annual-accounts-2024-25.pdf' },
  { year: '2023–24', file: '/docs/annual-accounts-2023-24.pdf' },
  { year: '2022–23', file: '/docs/annual-accounts-2022-23.pdf' },
];

const features = [
  { icon: FaRupeeSign, title: 'Income & Expenditure', desc: 'Detailed statement of income received and expenditure incurred during the academic year.' },
  { icon: FaChartPie, title: 'Balance Sheet', desc: 'Assets, liabilities, and fund position of the institution at the end of each financial year.' },
  { icon: FaBalanceScale, title: 'Audit Report', desc: 'Audited accounts certified by a chartered accountant ensuring financial transparency.' },
];

export default function AnnualAccountsReportPage() {
  return (
    <>
      <Hero
        title="Annual Accounts Report"
        subtitle="Financial transparency and accountability in institutional governance"
        height="medium"
        breadcrumb="About Us › Annual Accounts Report"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Annual Accounts" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              SSKV College of Arts & Science for Women maintains complete transparency in its financial management. The annual accounts are audited by a certified chartered accountant and are made available for review by all stakeholders.
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

          <SectionHeading title="Download Reports" />
          <div className="space-y-4">
            {reports.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-center justify-between bg-neutral-50 border border-neutral-200 rounded-xl px-6 py-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                      <FaFilePdf className="text-red-500 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-primary-800">Annual Accounts {r.year}</h4>
                      <p className="text-neutral-500 text-xs">Audited Financial Statement</p>
                    </div>
                  </div>
                  <a
                    href={r.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-semibold flex-shrink-0 ml-4"
                  >
                    <FaDownload className="text-xs" />
                    Download
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Financial Transparency" subtitle="SSKV College is committed to accountability and responsible financial governance." />
    </>
  );
}
