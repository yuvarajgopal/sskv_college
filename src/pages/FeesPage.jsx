import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaInfoCircle, FaSpinner, FaCheckCircle } from 'react-icons/fa';
import { departments } from '../data/departments';
import Hero from '../components/shared/Hero';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionHeading from '../components/shared/SectionHeading';
import { images } from '../data/media';
import { generateReceiptPDF } from '../utils/pdfGenerator';
import { loadRazorpayScript, openCheckout } from '../utils/razorpay';

// ✅ UPDATED FEES
const FEE_AMOUNTS = {
  'B.COM(A&F) - FIRST YEAR': { enrollment: 3100, semester: 16500 },
  'B.COM(CS) - FIRST YEAR': { enrollment: 3100, semester: 16500 },
  'B.COM(G) - FIRST YEAR SHIFT I': { enrollment: 3100, semester: 16500 },
  'B.COM(G) - FIRST YEAR SHIFT II': { enrollment: 3100, semester: 16500 },
  'BA(ENG) - FIRST YEAR SHIFT II': { enrollment: 3100, semester: 13000 },
  'BA(TAM) - FIRST YEAR': { enrollment: 3100, semester: 14000 },
  'BBA - FIRST YEAR': { enrollment: 3350, semester: 14000 },
  'BCA - FIRST YEAR SHIFT II': { enrollment: 3600, semester: 17500 },
  'B.SC(CS) - FIRST YEAR SHIFT I': { enrollment: 3600, semester: 17500 },
  'B.SC(CS) - FIRST YEAR SHIFT II': { enrollment: 3600, semester: 17500 },
  'B.SC(MATHS) - FIRST YEAR': { enrollment: 3350, semester: 15500 },
  'M.COM - FIRST YEAR': { enrollment: 3350, semester: 18000 },
  'MA(TAM) - FIRST YEAR': { enrollment: 3350, semester: 16000 },
  'BSC(CS WITH AI) - FIRST YEAR': { enrollment: 3600, semester: 18500 },
  'MA(ENG) - FIRST YEAR': { enrollment: 3350, semester: 18000 },
};

const FEE_TYPES = ['Admission Fee', '1st Semester Fee'];

// ✅ FIXED FUNCTION
function getAmount(feeType, programName) {
  const fees = FEE_AMOUNTS[programName];
  if (!fees) return 0;

  if (feeType === 'Admission Fee') return fees.enrollment;
  if (feeType === '1st Semester Fee') return fees.semester;

  return 0;
}

const inputCls = 'w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400';

// ✅ FIXED TABLE
function FeeTable() {
  return (
    <AnimatedSection>
      <div className="max-w-4xl mx-auto">
        <div className="overflow-x-auto rounded-xl shadow border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-800 text-white">
                <th className="px-5 py-3 text-left">Program</th>
                <th className="px-5 py-3 text-center">Admission Fee</th>
                <th className="px-5 py-3 text-center">Semester Fee</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, idx) => {
                const fees = FEE_AMOUNTS[dept.degree];

                return (
                  <tr key={dept.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 font-medium">{dept.degree}</td>

                    {/* ✅ FIXED */}
                    <td className="text-center">
                      {fees ? `₹${fees.enrollment}` : '—'}
                    </td>

                    <td className="text-center">
                      {fees ? `₹${fees.semester}` : '—'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-3 text-center">
        Fees are based on official 2025–2026 structure.
      </p>
    </AnimatedSection>
  );
}

// ✅ FIXED PAYMENT FORM
function PaymentForm() {
  const [payData, setPayData] = useState({
    feeType: '',
    program: '',
    studentName: '',
    rollNo: '',
    mobile: '',
  });

  const [loading, setLoading] = useState(false);

  const amount =
    payData.feeType && payData.program
      ? getAmount(payData.feeType, payData.program)
      : 0;

  const handleChange = (field, value) => {
    setPayData((p) => ({ ...p, [field]: value }));
  };

  const handlePay = async () => {
    if (!amount) return alert('Select program and fee type');

    setLoading(true);
    const loaded = await loadRazorpayScript();

    if (!loaded) return alert('Payment failed');

    openCheckout({
      amount,
      name: payData.feeType,
      description: payData.program,
      prefill: {
        name: payData.studentName,
        contact: payData.mobile,
      },
      onSuccess: () => {
        alert('Payment Successful');
        setLoading(false);
      },
      onFailure: () => setLoading(false),
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <select onChange={(e) => handleChange('feeType', e.target.value)} className={inputCls}>
        <option value="">Select Fee Type</option>
        {FEE_TYPES.map((t) => <option key={t}>{t}</option>)}
      </select>

      <select onChange={(e) => handleChange('program', e.target.value)} className={inputCls}>
        <option value="">Select Program</option>
        {departments.map((d) => <option key={d.id}>{d.degree}</option>)}
      </select>

      {amount > 0 && (
        <div className="mt-3 text-center font-bold">
          Amount: ₹{amount}
        </div>
      )}

      <button
        onClick={handlePay}
        className="mt-4 w-full bg-accent-400 py-2 rounded"
      >
        {loading ? <FaSpinner className="animate-spin mx-auto" /> : 'Pay Now'}
      </button>
    </div>
  );
}

// MAIN
export default function FeesPage() {
  return (
    <>
      <Hero title="Fees Structure" />

      <section className="p-6">
        <SectionHeading title="Fee Structure 2025–2026" />
        <FeeTable />
      </section>

      <section className="p-6 bg-gray-50">
        <SectionHeading title="Pay Online" />
        <PaymentForm />
      </section>
    </>
  );
}