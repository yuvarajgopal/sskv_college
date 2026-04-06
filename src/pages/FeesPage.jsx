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

// ─── Fee structure (placeholder — contact office for actual amounts) ───────────
const FEE_AMOUNTS = {
  'B.A. Tamil':              { enrollment: 2000, semester: 5000, exam: 600 },
  'B.A. English':            { enrollment: 2000, semester: 5000, exam: 600 },
  'B.Sc. Computer Science':  { enrollment: 3000, semester: 8000, exam: 700 },
  'B.Sc. CS with AI':        { enrollment: 3500, semester: 10000, exam: 700 },
  'B.Sc. Mathematics':       { enrollment: 2500, semester: 6000, exam: 600 },
  'BCA':                     { enrollment: 3000, semester: 8000, exam: 700 },
  'B.Com (General)':         { enrollment: 2500, semester: 6000, exam: 600 },
  'B.Com (A&F)':             { enrollment: 2500, semester: 6500, exam: 600 },
  'B.Com (CS)':              { enrollment: 2500, semester: 6500, exam: 600 },
  'BBA':                     { enrollment: 3000, semester: 7500, exam: 700 },
  'B.A. Criminology':        { enrollment: 2000, semester: 5000, exam: 600 },
};

const FEE_TYPES = [
  'Application Fee',
  'Enrollment Fee',
  '1st Semester Fee',
  '2nd Semester Fee',
  'Exam Fee',
];

function getAmount(feeType, programName) {
  const fees = FEE_AMOUNTS[programName];
  if (!fees) return 500;
  switch (feeType) {
    case 'Application Fee':   return 500;
    case 'Enrollment Fee':    return fees.enrollment;
    case '1st Semester Fee':  return fees.semester;
    case '2nd Semester Fee':  return fees.semester;
    case 'Exam Fee':          return fees.exam;
    default:                  return 500;
  }
}

const inputCls = 'w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white transition-colors';

// ─── Fee Structure Table ──────────────────────────────────────────────────────
function FeeTable() {
  return (
    <AnimatedSection>
      <div className="overflow-x-auto rounded-xl shadow-sm border border-neutral-200">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-primary-800 text-white">
              <th className="px-5 py-3 text-left font-semibold">Program</th>
              <th className="px-5 py-3 text-center font-semibold">Application Fee</th>
              <th className="px-5 py-3 text-center font-semibold">Enrollment Fee</th>
              <th className="px-5 py-3 text-center font-semibold">Semester Fee (approx.)</th>
              <th className="px-5 py-3 text-center font-semibold">Exam Fee</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept, idx) => {
              const fees = FEE_AMOUNTS[dept.degree] || { enrollment: '—', semester: '—', exam: '—' };
              return (
                <tr key={dept.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                  <td className="px-5 py-3 font-medium text-primary-800">{dept.degree}</td>
                  <td className="px-5 py-3 text-center text-neutral-700">₹500</td>
                  <td className="px-5 py-3 text-center text-neutral-700">
                    {fees.enrollment ? `₹${fees.enrollment.toLocaleString('en-IN')}` : '—'}
                  </td>
                  <td className="px-5 py-3 text-center text-neutral-700">
                    {fees.semester ? `₹${fees.semester.toLocaleString('en-IN')}` : '—'}
                  </td>
                  <td className="px-5 py-3 text-center text-neutral-700">
                    {fees.exam ? `₹${fees.exam.toLocaleString('en-IN')}` : '—'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="flex items-center gap-2 mt-3 text-xs text-neutral-500">
        <FaInfoCircle className="text-accent-400 flex-shrink-0" />
        Amounts shown are approximate. Contact the college office for exact fee details and applicable concessions.
      </p>
    </AnimatedSection>
  );
}

// ─── Payment Form ─────────────────────────────────────────────────────────────
function PaymentForm() {
  const [payData, setPayData] = useState({
    feeType: '',
    program: '',
    studentName: '',
    rollNo: '',
    mobile: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [receipt, setReceipt] = useState(null); // base64 URI

  const amount = payData.feeType && payData.program
    ? getAmount(payData.feeType, payData.program)
    : null;

  const handleChange = (field, value) => {
    setPayData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }));
  };

  const validate = () => {
    const err = {};
    if (!payData.feeType) err.feeType = 'Select a fee type';
    if (!payData.program) err.program = 'Select a program';
    if (!payData.studentName.trim()) err.studentName = 'Student name is required';
    if (!payData.rollNo.trim()) err.rollNo = 'Roll / Registration number is required';
    if (!payData.mobile.trim()) err.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(payData.mobile.trim())) err.mobile = 'Enter a valid 10-digit number';
    return err;
  };

  const handlePay = async () => {
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    setLoading(true);
    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        alert('Failed to load payment gateway. Please check your internet connection.');
        setLoading(false);
        return;
      }
      openCheckout({
        amount,
        name: payData.feeType,
        description: `${payData.feeType} — ${payData.program}`,
        prefill: {
          name: payData.studentName,
          contact: payData.mobile,
        },
        onSuccess: (response) => {
          const pdfUri = generateReceiptPDF({
            studentName: payData.studentName,
            rollNo: payData.rollNo,
            program: payData.program,
            feeType: payData.feeType,
            amount,
            transactionId: response.razorpay_payment_id,
          });
          setReceipt(pdfUri);
          setLoading(false);
        },
        onFailure: (error) => {
          if (error?.message !== 'Payment cancelled by user') {
            alert('Payment failed. Please try again.');
          }
          setLoading(false);
        },
      });
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleDownloadReceipt = () => {
    const link = document.createElement('a');
    link.href = receipt;
    link.download = `fee_receipt_${payData.rollNo || 'student'}.pdf`;
    link.click();
  };

  if (receipt) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 text-center"
      >
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCheckCircle className="text-2xl text-green-500" />
        </div>
        <h3 className="text-xl font-bold font-heading text-primary-800 mb-2">Payment Successful!</h3>
        <p className="text-neutral-600 text-sm mb-6">
          {payData.feeType} of ₹{amount?.toLocaleString('en-IN')} paid for{' '}
          <span className="font-semibold">{payData.studentName}</span>.
        </p>
        <button
          onClick={handleDownloadReceipt}
          className="flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-900 font-bold px-8 py-3 rounded-xl transition-colors mx-auto mb-3"
        >
          <FaDownload />
          Download Receipt PDF
        </button>
        <button
          onClick={() => { setReceipt(null); setPayData({ feeType: '', program: '', studentName: '', rollNo: '', mobile: '' }); }}
          className="text-sm text-neutral-500 hover:text-primary-700 underline"
        >
          Make another payment
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6 md:p-8">
      <h3 className="text-xl font-bold font-heading text-primary-800 mb-6">Online Fee Payment</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Fee Type */}
        <div>
          <label className="block text-sm font-semibold text-primary-800 mb-1">
            Fee Type <span className="text-red-500">*</span>
          </label>
          <select
            value={payData.feeType}
            onChange={(e) => handleChange('feeType', e.target.value)}
            className={inputCls}
          >
            <option value="">-- Select Fee Type --</option>
            {FEE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.feeType && <p className="mt-1 text-xs text-red-500">{errors.feeType}</p>}
        </div>

        {/* Program */}
        <div>
          <label className="block text-sm font-semibold text-primary-800 mb-1">
            Program <span className="text-red-500">*</span>
          </label>
          <select
            value={payData.program}
            onChange={(e) => handleChange('program', e.target.value)}
            className={inputCls}
          >
            <option value="">-- Select Program --</option>
            {departments.map((d) => (
              <option key={d.id} value={d.degree}>{d.degree}</option>
            ))}
          </select>
          {errors.program && <p className="mt-1 text-xs text-red-500">{errors.program}</p>}
        </div>

        {/* Student Name */}
        <div>
          <label className="block text-sm font-semibold text-primary-800 mb-1">
            Student Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={payData.studentName}
            onChange={(e) => handleChange('studentName', e.target.value)}
            placeholder="Full name"
            className={inputCls}
          />
          {errors.studentName && <p className="mt-1 text-xs text-red-500">{errors.studentName}</p>}
        </div>

        {/* Roll No */}
        <div>
          <label className="block text-sm font-semibold text-primary-800 mb-1">
            Roll / Registration No. <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={payData.rollNo}
            onChange={(e) => handleChange('rollNo', e.target.value)}
            placeholder="e.g. 2024CS001"
            className={inputCls}
          />
          {errors.rollNo && <p className="mt-1 text-xs text-red-500">{errors.rollNo}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-semibold text-primary-800 mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={payData.mobile}
            onChange={(e) => handleChange('mobile', e.target.value)}
            placeholder="10-digit mobile"
            maxLength={10}
            className={inputCls}
          />
          {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
        </div>

        {/* Amount display */}
        {amount !== null && (
          <div className="sm:col-span-2">
            <div className="rounded-xl bg-accent-50 border-2 border-accent-300 px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">{payData.feeType} — {payData.program}</p>
                <p className="text-2xl font-bold text-primary-900 mt-0.5">₹{amount.toLocaleString('en-IN')}</p>
              </div>
              <button
                onClick={handlePay}
                disabled={loading}
                className="flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-900 font-bold px-6 py-2.5 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
              >
                {loading ? <><FaSpinner className="animate-spin" /> Processing...</> : 'Pay Now'}
              </button>
            </div>
          </div>
        )}
      </div>

      {amount === null && (
        <div className="mt-4">
          <button
            onClick={handlePay}
            disabled={loading}
            className="flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-900 font-bold px-8 py-3 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-sm mt-2"
          >
            {loading ? <><FaSpinner className="animate-spin" /> Processing...</> : 'Pay Now'}
          </button>
        </div>
      )}

      <p className="mt-4 text-xs text-neutral-400 flex items-center gap-1">
        <FaInfoCircle />
        Secure payment powered by Razorpay. You will receive a receipt PDF after successful payment.
      </p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function FeesPage() {
  return (
    <>
      <Hero
        title="Prospectus with Fees"
        subtitle="Pay fees online, download receipts instantly"
        height="medium"
        breadcrumb="Admissions › Fees"
        bannerImage={images.admissions.banner}
      />

      {/* Fee Structure */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Fee Structure 2026–2027"
            subtitle="Overview of fees for all programs (approximate amounts — contact office for exact details)"
          />
          <FeeTable />
        </div>
      </section>

      {/* Online Payment */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-2xl">
          <SectionHeading
            title="Pay Online"
            subtitle="Select your fee type and program, then proceed to secure payment"
          />
          <AnimatedSection>
            <PaymentForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
