import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const refundSchedule = [
  { period: 'Before commencement of classes', refund: '100% of tuition fees (after deducting processing fee)' },
  { period: 'Within 15 days of commencement', refund: '80% of tuition fees' },
  { period: 'Within 30 days of commencement', refund: '50% of tuition fees' },
  { period: 'After 30 days of commencement', refund: 'No refund' },
];

const conditions = [
  'The refund request must be submitted in writing to the college office along with original fee receipt.',
  'Processing/registration fees are non-refundable under any circumstances.',
  'Refunds will be processed within 15 working days of approval.',
  'Caution deposit / library deposit will be refunded at the time of leaving the college after clearance from all departments.',
  'In case of transfer to another institution, a No Objection Certificate (NOC) must be obtained.',
  'Fee refund for scholarship students will be governed by the respective scholarship guidelines.',
];

export default function FeeRefundPolicyPage() {
  return (
    <>
      <Hero
        title="Fee Refund Policy"
        subtitle="Guidelines for fee refund at SSKV College of Arts & Science for Women"
        height="medium"
        breadcrumb="Admissions › Fee Refund Policy"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Fee Refund Policy" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              SSKV College follows a transparent and fair fee refund policy in accordance with UGC guidelines. Students who wish to withdraw their admission may apply for a refund as per the schedule below.
            </p>
          </AnimatedSection>

          <SectionHeading title="Refund Schedule" />
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200 mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    <th className="text-left px-6 py-3">Period of Withdrawal</th>
                    <th className="text-left px-6 py-3">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {refundSchedule.map((row, i) => (
                    <tr key={i} className="hover:bg-neutral-100 transition-colors">
                      <td className="px-6 py-4 font-medium text-neutral-800">{row.period}</td>
                      <td className="px-6 py-4 text-neutral-600">{row.refund}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <SectionHeading title="Terms & Conditions" />
          <div className="space-y-3 mb-10">
            {conditions.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100">
                  <span className="w-6 h-6 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{c}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
              <FaExclamationTriangle className="text-amber-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Note:</strong> The college reserves the right to modify the refund policy as per UGC/University of Madras guidelines. For the latest policy, please contact the college office.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner title="Questions About Fees?" subtitle="Contact the college office for clarification on fee refund or payment options." />
    </>
  );
}
