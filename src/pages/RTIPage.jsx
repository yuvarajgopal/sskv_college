import { FaUserTie, FaGavel, FaFileAlt, FaMoneyBillWave } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const applicationSteps = [
  'Applications under RTI may be submitted in writing or electronically.',
  'The application should clearly specify the information sought.',
  'Applicants must provide their contact details for communication.',
  'The application should be addressed to the Public Information Officer.',
];

export default function RTIPage() {
  return (
    <>
      <Hero
        title="Right to Information (RTI)"
        subtitle="Promoting transparency and accountability in accordance with the RTI Act 2005"
        height="medium"
        breadcrumb="RTI"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <AnimatedSection delay={0.1}>
            <div className="bg-primary-50 border-l-4 border-accent-400 rounded-r-xl p-6 mb-10">
              <p className="text-neutral-700 leading-relaxed text-sm">
                In accordance with the provisions of the Right to Information Act 2005 and guidelines issued by
                the University Grants Commission, Our College provides the following information to promote
                transparency and accountability.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <AnimatedSection delay={0.15}>
              <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <FaUserTie className="text-primary-700 text-lg" />
                  </div>
                  <h3 className="font-bold text-primary-900 font-heading text-base">Public Information Officer (PIO)</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-neutral-500 text-xs uppercase tracking-wide">Name</span>
                    <p className="font-semibold text-neutral-800">Mr. T.V. Jaganathan</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-xs uppercase tracking-wide">Designation</span>
                    <p className="text-neutral-700">Office Superintendent</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-xs uppercase tracking-wide">Contact</span>
                    <p className="text-neutral-700">
                      <a href="tel:9381080510" className="text-primary-700 hover:text-primary-900 font-medium transition-colors">9381080510</a>
                    </p>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-xs uppercase tracking-wide">Email</span>
                    <p className="text-neutral-700">
                      <a href="mailto:sskvcollege@yahoo.com" className="text-primary-700 hover:text-primary-900 transition-colors break-all">sskvcollege@yahoo.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                    <FaGavel className="text-accent-700 text-lg" />
                  </div>
                  <h3 className="font-bold text-primary-900 font-heading text-base">Appellate Authority</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-neutral-500 text-xs uppercase tracking-wide">Name</span>
                    <p className="font-semibold text-neutral-800">Dr. K. Thirumamagal</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-xs uppercase tracking-wide">Designation</span>
                    <p className="text-neutral-700">Principal</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-xs uppercase tracking-wide">Contact</span>
                    <p className="text-neutral-700">
                      <a href="tel:9994745157" className="text-primary-700 hover:text-primary-900 font-medium transition-colors">9994745157</a>
                    </p>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-xs uppercase tracking-wide">Email</span>
                    <p className="text-neutral-700">
                      <a href="mailto:sskvcollegeprincipal2007@gmail.com" className="text-primary-700 hover:text-primary-900 transition-colors break-all">sskvcollegeprincipal2007@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <SectionHeading title="RTI Application Procedure" />
            <div className="space-y-3 mb-10">
              {applicationSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100">
                  <span className="w-6 h-6 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionHeading title="RTI Fee Details" />
            <div className="overflow-x-auto rounded-xl shadow border border-neutral-100 mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-900 text-white">
                    <th className="px-5 py-3 text-left font-semibold font-heading">Description</th>
                    <th className="px-5 py-3 text-left font-semibold font-heading">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-neutral-100">
                    <td className="px-5 py-3 font-medium text-neutral-700">Application Fee</td>
                    <td className="px-5 py-3 text-neutral-700">Rs. 10/-</td>
                  </tr>
                  <tr className="bg-neutral-50 border-b border-neutral-100">
                    <td className="px-5 py-3 font-medium text-neutral-700">Mode of Payment</td>
                    <td className="px-5 py-3 text-neutral-700">Cash / Demand Draft / Online Transfer (as applicable)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium text-neutral-700">Additional Charges</td>
                    <td className="px-5 py-3 text-neutral-700">As per RTI rules for providing copies/documents</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaMoneyBillWave className="text-amber-600 text-xl flex-shrink-0" />
                <h3 className="font-bold text-amber-900 font-heading text-base">Mandatory Disclosure</h3>
              </div>
              <p className="text-sm text-amber-800 mb-4 leading-relaxed">
                The mandatory disclosure document under the Right to Information Act 2005 is available for
                download below.
              </p>
              <a
                href="/pdfs/manditory.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-900 hover:bg-primary-800 text-white text-sm font-semibold rounded-lg shadow transition-colors duration-200"
              >
                <FaFileAlt />
                Download Mandatory Disclosure (PDF)
              </a>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTABanner
        title="Transparent. Accountable. Accessible."
        subtitle="SSKV College is committed to providing information as per the Right to Information Act 2005."
      />
    </>
  );
}
