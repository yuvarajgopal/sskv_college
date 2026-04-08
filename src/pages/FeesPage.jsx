import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionHeading from '../components/shared/SectionHeading';
import { loadRazorpayScript, openCheckout } from '../utils/razorpay';

// ✅ UPDATED DATA FROM IMAGE
const FEE_DATA = [
  { id: 1, program: 'B.COM(A&F) - FIRST YEAR', admission: 3100, semester: 16500 },
  { id: 2, program: 'B.COM(CS) - FIRST YEAR', admission: 3100, semester: 16500 },
  { id: 3, program: 'B.COM(G) - FIRST YEAR SHIFT I', admission: 3100, semester: 16500 },
  { id: 4, program: 'B.COM(G) - FIRST YEAR SHIFT II', admission: 3100, semester: 16500 },
  { id: 5, program: 'BA(ENG) - FIRST YEAR SHIFT II', admission: 3100, semester: 13000 },
  { id: 6, program: 'BA(TAM) - FIRST YEAR', admission: 3100, semester: 14000 },
  { id: 7, program: 'BBA - FIRST YEAR', admission: 3350, semester: 14000 },
  { id: 8, program: 'BCA - FIRST YEAR SHIFT II', admission: 3600, semester: 17500 },
  { id: 9, program: 'B.SC(CS) - FIRST YEAR SHIFT I', admission: 3600, semester: 17500 },
  { id: 10, program: 'B.SC(CS) - FIRST YEAR SHIFT II', admission: 3600, semester: 17500 },
  { id: 11, program: 'B.SC(MATHS) - FIRST YEAR', admission: 3350, semester: 15500 },
  { id: 12, program: 'M.COM - FIRST YEAR', admission: 3350, semester: 18000 },
  { id: 13, program: 'MA(TAM) - FIRST YEAR', admission: 3350, semester: 16000 },
  { id: 14, program: 'BSC(CS WITH AI) - FIRST YEAR', admission: 3600, semester: 18500 },
  { id: 15, program: 'MA(ENG) - FIRST YEAR', admission: 3350, semester: 18000 },
];

// helper
const getAmount = (type, program) => {
  const item = FEE_DATA.find(f => f.program === program);
  if (!item) return 0;
  return type === 'Admission Fee' ? item.admission : item.semester;
};

// TABLE
function FeeTable() {
  return (
    <AnimatedSection>
      <div className="max-w-5xl mx-auto">
        <div className="overflow-x-auto border rounded-xl shadow">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-800 text-white">
                <th className="p-3">S.NO</th>
                <th className="p-3 text-left">Class</th>
                <th className="p-3 text-center">1st Semester Fees</th>
                <th className="p-3 text-center">Admission Fees</th>
              </tr>
            </thead>
            <tbody>
              {FEE_DATA.map((row, i) => (
                <tr key={row.id} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 text-center">{row.id}</td>
                  <td className="p-3">{row.program}</td>
                  <td className="p-3 text-center font-medium">₹{row.semester}</td>
                  <td className="p-3 text-center font-medium">₹{row.admission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AnimatedSection>
  );
}

// PAYMENT FORM
function PaymentForm() {
  const [data, setData] = useState({
    feeType: '',
    program: '',
    name: '',
    mobile: '',
  });

  const [loading, setLoading] = useState(false);

  const amount = getAmount(data.feeType, data.program);

  const handlePay = async () => {
    if (!amount) return alert('Select program & fee type');

    setLoading(true);
    const loaded = await loadRazorpayScript();
    if (!loaded) return alert('Payment failed');

    openCheckout({
      amount,
      name: data.feeType,
      description: data.program,
      prefill: { name: data.name, contact: data.mobile },
      onSuccess: () => {
        alert('Payment Successful');
        setLoading(false);
      },
      onFailure: () => setLoading(false),
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-3">
      
      <select onChange={(e) => setData({ ...data, feeType: e.target.value })} className="w-full border p-2 rounded">
        <option value="">Select Fee Type</option>
        <option>Admission Fee</option>
        <option>1st Semester Fee</option>
      </select>

      <select onChange={(e) => setData({ ...data, program: e.target.value })} className="w-full border p-2 rounded">
        <option value="">Select Program</option>
        {FEE_DATA.map(f => <option key={f.id}>{f.program}</option>)}
      </select>

      {amount > 0 && (
        <div className="text-center font-bold text-lg">
          Amount: ₹{amount}
        </div>
      )}

      <button onClick={handlePay} className="w-full bg-accent-400 text-white py-2 rounded">
        {loading ? <FaSpinner className="animate-spin mx-auto" /> : 'Pay Now'}
      </button>
    </div>
  );
}

// MAIN PAGE
export default function FeesPage() {
  return (
    <>
      <Hero title="Fees Structure" />

      <section className="p-6">
        <SectionHeading title="Semester Fee Structure 2025–2026" />
        <FeeTable />
      </section>

      <section className="p-6 bg-gray-50">
        <SectionHeading title="Online Fee Payment" />
        <PaymentForm />
      </section>
    </>
  );
}