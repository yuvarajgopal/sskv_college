import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaSpinner, FaDownload, FaCheckCircle, FaPhone, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { departments } from '../data/departments';
import { COLLEGE_INFO } from '../utils/constants';
import Hero from '../components/shared/Hero';
import { images } from '../data/media';
import { generateApplicationPDF } from '../utils/pdfGenerator';
import { sendApplicationEmail } from '../utils/emailService';
import { loadRazorpayScript, openCheckout } from '../utils/razorpay';

// ─── Step configuration ───────────────────────────────────────────────────────
const STEPS = [
  { id: 1, label: 'Personal' },
  { id: 2, label: 'Academics' },
  { id: 3, label: 'Program' },
  { id: 4, label: 'Parents' },
  { id: 5, label: 'Review & Pay' },
];

const COMMUNITIES = ['SC', 'ST', 'BC', 'MBC', 'OBC', 'General', 'Other'];
const RELIGIONS = ['Hindu', 'Muslim', 'Christian', 'Jain', 'Buddhist', 'Sikh', 'Other'];
const BOARDS = ['Tamil Nadu State Board', 'CBSE', 'ICSE', 'Matriculation', 'Anglo Indian', 'Other'];

const initialFormData = {
  // Step 1
  fullName: '', dob: '', gender: 'Female', nationality: 'Indian',
  religion: '', community: '', aadhaar: '', motherTongue: '',
  mobile: '', email: '', address: '', district: '', pin: '',
  // Step 2
  tenthBoard: '', tenthSchool: '', tenthYear: '', tenthMarks: '', tenthMax: '', tenthPercent: '',
  twelfthBoard: '', twelfthSchool: '', twelfthYear: '', twelfthSubjectGroup: '',
  twelfthMarks: '', twelfthMax: '', twelfthPercent: '',
  medium: '', firstGraduate: '',
  // Step 3
  program: '', shift: '', extracurricular: '',
  // Step 4
  fatherName: '', fatherOccupation: '', annualIncome: '',
  motherName: '', motherOccupation: '',
  emergencyName: '', emergencyPhone: '', emergencyRelation: '',
};

// ─── Validation ───────────────────────────────────────────────────────────────
function validateStep(step, data) {
  const err = {};
  if (step === 1) {
    if (!data.fullName.trim()) err.fullName = 'Full name is required';
    if (!data.dob) err.dob = 'Date of birth is required';
    if (!data.community) err.community = 'Community is required';
    if (!data.mobile.trim()) err.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(data.mobile.trim())) err.mobile = 'Enter a valid 10-digit mobile number';
    if (!data.email.trim()) err.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) err.email = 'Enter a valid email address';
    if (!data.address.trim()) err.address = 'Address is required';
  }
  if (step === 2) {
    if (!data.tenthBoard) err.tenthBoard = 'Board is required';
    if (!data.tenthSchool.trim()) err.tenthSchool = 'School name is required';
    if (!data.tenthYear) err.tenthYear = 'Year is required';
    if (!data.tenthMarks) err.tenthMarks = 'Marks obtained is required';
    if (!data.tenthMax) err.tenthMax = 'Maximum marks is required';
    if (!data.twelfthBoard) err.twelfthBoard = 'Board is required';
    if (!data.twelfthSchool.trim()) err.twelfthSchool = 'School name is required';
    if (!data.twelfthYear) err.twelfthYear = 'Year is required';
    if (!data.twelfthMarks) err.twelfthMarks = 'Marks obtained is required';
    if (!data.twelfthMax) err.twelfthMax = 'Maximum marks is required';
    if (!data.medium) err.medium = 'Medium of instruction is required';
    if (!data.firstGraduate) err.firstGraduate = 'This field is required';
  }
  if (step === 3) {
    if (!data.program) err.program = 'Please select a program';
  }
  if (step === 4) {
    if (!data.fatherName.trim()) err.fatherName = "Father's name is required";
    if (!data.motherName.trim()) err.motherName = "Mother's name is required";
    if (!data.emergencyPhone.trim()) err.emergencyPhone = 'Emergency contact phone is required';
    else if (!/^\d{10}$/.test(data.emergencyPhone.trim())) err.emergencyPhone = 'Enter a valid 10-digit number';
  }
  return err;
}

// ─── Shared form field components ─────────────────────────────────────────────
function FormField({ label, required, error, children, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-primary-800 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

const inputCls = 'w-full border border-neutral-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-colors';
const errInputCls = 'w-full border border-red-400 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-colors';

function TextInput({ value, onChange, placeholder, type = 'text', error, disabled }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={error ? errInputCls : inputCls}
    />
  );
}

function SelectInput({ value, onChange, options, placeholder, error }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={(error ? errInputCls : inputCls) + ' bg-white cursor-pointer'}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((opt) => (
        <option key={opt.value || opt} value={opt.value || opt}>
          {opt.label || opt}
        </option>
      ))}
    </select>
  );
}

function TextArea({ value, onChange, placeholder, rows = 3 }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className={inputCls + ' resize-none'}
    />
  );
}

// ─── Step Components ──────────────────────────────────────────────────────────
function Step1({ formData, errors, onChange }) {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold font-heading text-primary-800">Personal Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Full Name" required error={errors.fullName} className="sm:col-span-2">
          <TextInput value={formData.fullName} onChange={(v) => onChange('fullName', v)} placeholder="As per 10th certificate" error={errors.fullName} />
        </FormField>

        <FormField label="Date of Birth" required error={errors.dob}>
          <TextInput type="date" value={formData.dob} onChange={(v) => onChange('dob', v)} error={errors.dob} />
        </FormField>

        <FormField label="Gender">
          <SelectInput
            value={formData.gender}
            onChange={(v) => onChange('gender', v)}
            options={['Female', 'Male', 'Transgender', 'Prefer not to say']}
          />
        </FormField>

        <FormField label="Nationality">
          <TextInput value={formData.nationality} onChange={(v) => onChange('nationality', v)} placeholder="Indian" />
        </FormField>

        <FormField label="Religion">
          <SelectInput
            value={formData.religion}
            onChange={(v) => onChange('religion', v)}
            options={RELIGIONS}
            placeholder="Select religion"
          />
        </FormField>

        <FormField label="Community" required error={errors.community}>
          <SelectInput
            value={formData.community}
            onChange={(v) => onChange('community', v)}
            options={COMMUNITIES}
            placeholder="Select community"
            error={errors.community}
          />
        </FormField>

        <FormField label="Mother Tongue">
          <TextInput value={formData.motherTongue} onChange={(v) => onChange('motherTongue', v)} placeholder="e.g. Tamil" />
        </FormField>

        <FormField label="Aadhaar Number">
          <TextInput value={formData.aadhaar} onChange={(v) => onChange('aadhaar', v)} placeholder="12-digit Aadhaar number" maxLength={12} />
        </FormField>

        <FormField label="Mobile Number" required error={errors.mobile}>
          <TextInput type="tel" value={formData.mobile} onChange={(v) => onChange('mobile', v)} placeholder="10-digit mobile" error={errors.mobile} maxLength={10} />
        </FormField>

        <FormField label="Email Address" required error={errors.email}>
          <TextInput type="email" value={formData.email} onChange={(v) => onChange('email', v)} placeholder="your@email.com" error={errors.email} />
        </FormField>

        <FormField label="Permanent Address" required error={errors.address} className="sm:col-span-2">
          <TextArea value={formData.address} onChange={(v) => onChange('address', v)} placeholder="Door No, Street, Area" />
          {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
        </FormField>

        <FormField label="District">
          <TextInput value={formData.district} onChange={(v) => onChange('district', v)} placeholder="e.g. Kanchipuram" />
        </FormField>

        <FormField label="PIN Code">
          <TextInput value={formData.pin} onChange={(v) => onChange('pin', v)} placeholder="6-digit PIN" maxLength={6} />
        </FormField>
      </div>
    </div>
  );
}

function Step2({ formData, errors, onChange }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold font-heading text-primary-800">Educational Qualifications</h2>

      {/* 10th */}
      <div>
        <h3 className="text-base font-semibold text-primary-700 mb-3 pb-1 border-b border-neutral-200">10th Standard (SSLC)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Board / University" required error={errors.tenthBoard}>
            <SelectInput value={formData.tenthBoard} onChange={(v) => onChange('tenthBoard', v)} options={BOARDS} placeholder="Select board" error={errors.tenthBoard} />
          </FormField>
          <FormField label="School Name" required error={errors.tenthSchool}>
            <TextInput value={formData.tenthSchool} onChange={(v) => onChange('tenthSchool', v)} placeholder="School name" error={errors.tenthSchool} />
          </FormField>
          <FormField label="Year of Passing" required error={errors.tenthYear}>
            <TextInput type="number" value={formData.tenthYear} onChange={(v) => onChange('tenthYear', v)} placeholder="e.g. 2022" error={errors.tenthYear} min="2000" max="2026" />
          </FormField>
          <FormField label="Marks Obtained" required error={errors.tenthMarks}>
            <TextInput type="number" value={formData.tenthMarks} onChange={(v) => onChange('tenthMarks', v)} placeholder="e.g. 450" error={errors.tenthMarks} />
          </FormField>
          <FormField label="Maximum Marks" required error={errors.tenthMax}>
            <TextInput type="number" value={formData.tenthMax} onChange={(v) => onChange('tenthMax', v)} placeholder="e.g. 500" error={errors.tenthMax} />
          </FormField>
          <FormField label="Percentage (%)">
            <TextInput value={formData.tenthPercent} onChange={(v) => onChange('tenthPercent', v)} placeholder="Auto-calculated" disabled={!!(formData.tenthMarks && formData.tenthMax)} />
          </FormField>
        </div>
      </div>

      {/* 12th */}
      <div>
        <h3 className="text-base font-semibold text-primary-700 mb-3 pb-1 border-b border-neutral-200">12th Standard (HSC)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Board / University" required error={errors.twelfthBoard}>
            <SelectInput value={formData.twelfthBoard} onChange={(v) => onChange('twelfthBoard', v)} options={BOARDS} placeholder="Select board" error={errors.twelfthBoard} />
          </FormField>
          <FormField label="School Name" required error={errors.twelfthSchool}>
            <TextInput value={formData.twelfthSchool} onChange={(v) => onChange('twelfthSchool', v)} placeholder="School name" error={errors.twelfthSchool} />
          </FormField>
          <FormField label="Year of Passing" required error={errors.twelfthYear}>
            <TextInput type="number" value={formData.twelfthYear} onChange={(v) => onChange('twelfthYear', v)} placeholder="e.g. 2024" error={errors.twelfthYear} min="2000" max="2026" />
          </FormField>
          <FormField label="Subject Group">
            <TextInput value={formData.twelfthSubjectGroup} onChange={(v) => onChange('twelfthSubjectGroup', v)} placeholder="e.g. Maths, Biology, Commerce" />
          </FormField>
          <FormField label="Marks Obtained" required error={errors.twelfthMarks}>
            <TextInput type="number" value={formData.twelfthMarks} onChange={(v) => onChange('twelfthMarks', v)} placeholder="e.g. 900" error={errors.twelfthMarks} />
          </FormField>
          <FormField label="Maximum Marks" required error={errors.twelfthMax}>
            <TextInput type="number" value={formData.twelfthMax} onChange={(v) => onChange('twelfthMax', v)} placeholder="e.g. 1200" error={errors.twelfthMax} />
          </FormField>
          <FormField label="Percentage (%)">
            <TextInput value={formData.twelfthPercent} onChange={(v) => onChange('twelfthPercent', v)} placeholder="Auto-calculated" disabled={!!(formData.twelfthMarks && formData.twelfthMax)} />
          </FormField>
        </div>
      </div>

      {/* Medium + First Graduate */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Medium of Instruction" required error={errors.medium}>
          <SelectInput
            value={formData.medium}
            onChange={(v) => onChange('medium', v)}
            options={['Tamil', 'English', 'Tamil & English']}
            placeholder="Select medium"
            error={errors.medium}
          />
        </FormField>
        <FormField label="First Graduate in Family?" required error={errors.firstGraduate}>
          <SelectInput
            value={formData.firstGraduate}
            onChange={(v) => onChange('firstGraduate', v)}
            options={['Yes', 'No']}
            placeholder="Select..."
            error={errors.firstGraduate}
          />
        </FormField>
      </div>
    </div>
  );
}

function Step3({ formData, errors, onChange }) {
  const selectedDept = departments.find((d) => d.degree === formData.program);
  const hasShifts = selectedDept?.shifts?.length > 0;

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold font-heading text-primary-800">Program Selection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Program Applied For" required error={errors.program} className="sm:col-span-2">
          <SelectInput
            value={formData.program}
            onChange={(v) => {
              onChange('program', v);
              onChange('shift', ''); // reset shift when program changes
            }}
            options={departments.map((d) => ({ value: d.degree, label: `${d.degree} (${d.duration})` }))}
            placeholder="-- Select Program --"
            error={errors.program}
          />
        </FormField>

        {hasShifts && (
          <FormField label="Shift Preference">
            <SelectInput
              value={formData.shift}
              onChange={(v) => onChange('shift', v)}
              options={selectedDept.shifts}
              placeholder="Select shift"
            />
          </FormField>
        )}

        <FormField label="Extracurricular Activities (optional)" className="sm:col-span-2">
          <TextArea
            value={formData.extracurricular}
            onChange={(v) => onChange('extracurricular', v)}
            placeholder="Sports, cultural activities, NSS, NCC, etc."
          />
        </FormField>
      </div>

      {selectedDept && (
        <div className="rounded-xl bg-accent-50 border border-accent-200 p-4 text-sm text-primary-800">
          <p className="font-semibold mb-1">{selectedDept.degree}</p>
          <p className="text-neutral-600">{selectedDept.description}</p>
          <p className="mt-2 text-xs text-neutral-500">
            Duration: {selectedDept.duration} &nbsp;|&nbsp; Eligibility: {selectedDept.eligibility}
          </p>
        </div>
      )}
    </div>
  );
}

function Step4({ formData, errors, onChange }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold font-heading text-primary-800">Parent / Guardian Details</h2>

      <div>
        <h3 className="text-base font-semibold text-primary-700 mb-3 pb-1 border-b border-neutral-200">Father's Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Father's Name" required error={errors.fatherName}>
            <TextInput value={formData.fatherName} onChange={(v) => onChange('fatherName', v)} placeholder="Father's full name" error={errors.fatherName} />
          </FormField>
          <FormField label="Occupation">
            <TextInput value={formData.fatherOccupation} onChange={(v) => onChange('fatherOccupation', v)} placeholder="e.g. Farmer, Employee" />
          </FormField>
          <FormField label="Annual Income">
            <TextInput value={formData.annualIncome} onChange={(v) => onChange('annualIncome', v)} placeholder="e.g. ₹1,80,000" />
          </FormField>
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold text-primary-700 mb-3 pb-1 border-b border-neutral-200">Mother's Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Mother's Name" required error={errors.motherName}>
            <TextInput value={formData.motherName} onChange={(v) => onChange('motherName', v)} placeholder="Mother's full name" error={errors.motherName} />
          </FormField>
          <FormField label="Occupation">
            <TextInput value={formData.motherOccupation} onChange={(v) => onChange('motherOccupation', v)} placeholder="e.g. Housewife, Teacher" />
          </FormField>
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold text-primary-700 mb-3 pb-1 border-b border-neutral-200">Emergency Contact</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Contact Name">
            <TextInput value={formData.emergencyName} onChange={(v) => onChange('emergencyName', v)} placeholder="Name" />
          </FormField>
          <FormField label="Contact Phone" required error={errors.emergencyPhone}>
            <TextInput type="tel" value={formData.emergencyPhone} onChange={(v) => onChange('emergencyPhone', v)} placeholder="10-digit number" error={errors.emergencyPhone} maxLength={10} />
          </FormField>
          <FormField label="Relationship">
            <SelectInput
              value={formData.emergencyRelation}
              onChange={(v) => onChange('emergencyRelation', v)}
              options={['Father', 'Mother', 'Guardian', 'Sibling', 'Other']}
              placeholder="Select relationship"
            />
          </FormField>
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ title, rows }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-3 bg-neutral-50 hover:bg-neutral-100 transition-colors text-left"
      >
        <span className="font-semibold text-primary-800 text-sm">{title}</span>
        <span className="text-neutral-400 text-xs">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="divide-y divide-neutral-100">
          {rows.map(([label, value]) => (
            <div key={label} className="flex px-5 py-2.5 text-sm gap-3">
              <span className="text-neutral-500 w-44 shrink-0">{label}</span>
              <span className="text-primary-900 font-medium break-words">{value || '—'}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Step5({ formData, loading, onPay }) {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold font-heading text-primary-800">Review & Payment</h2>
      <p className="text-sm text-neutral-500">Please review your details carefully before proceeding to payment.</p>

      <ReviewCard
        title="Personal Information"
        rows={[
          ['Full Name', formData.fullName],
          ['Date of Birth', formData.dob],
          ['Gender', formData.gender],
          ['Community', formData.community],
          ['Mobile', formData.mobile],
          ['Email', formData.email],
          ['Address', formData.address],
          ['District', formData.district],
          ['PIN Code', formData.pin],
        ]}
      />

      <ReviewCard
        title="Educational Qualifications"
        rows={[
          ['10th Board', formData.tenthBoard],
          ['10th School', formData.tenthSchool],
          ['10th Year / %', `${formData.tenthYear} — ${formData.tenthPercent}%`],
          ['12th Board', formData.twelfthBoard],
          ['12th School', formData.twelfthSchool],
          ['12th Year / %', `${formData.twelfthYear} — ${formData.twelfthPercent}%`],
          ['Medium', formData.medium],
          ['First Graduate', formData.firstGraduate],
        ]}
      />

      <ReviewCard
        title="Program Selection"
        rows={[
          ['Program', formData.program],
          ['Shift', formData.shift || 'N/A'],
          ['Extracurricular', formData.extracurricular || 'None'],
        ]}
      />

      <ReviewCard
        title="Parent / Guardian"
        rows={[
          ["Father's Name", formData.fatherName],
          ["Mother's Name", formData.motherName],
          ['Emergency Phone', formData.emergencyPhone],
        ]}
      />

      {/* Payment Box */}
      <div className="rounded-2xl border-2 border-accent-400 bg-accent-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-primary-800">Application Fee (one-time, non-refundable)</p>
          <p className="text-3xl font-bold text-primary-900 mt-1">₹500</p>
        </div>
        <button
          onClick={onPay}
          disabled={loading}
          className="flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-900 font-bold px-8 py-3 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base shadow-md hover:shadow-lg"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" />
              Processing...
            </>
          ) : (
            'Pay ₹500 & Submit Application'
          )}
        </button>
      </div>

      <p className="text-xs text-neutral-400 text-center">
        Secure payment powered by Razorpay. Your application PDF will be generated and emailed after payment.
      </p>
    </div>
  );
}

// ─── Success Screen ───────────────────────────────────────────────────────────
function SuccessScreen({ success, formData }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = success.pdfBase64;
    link.download = `${success.applicationNo}_application.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCheckCircle className="text-3xl text-green-500" />
        </div>
        <h2 className="text-2xl font-bold font-heading text-primary-800 mb-2">Application Submitted!</h2>
        <p className="text-neutral-600 text-sm mb-6">
          Your application has been successfully submitted. A confirmation email will be sent to{' '}
          <span className="font-semibold">{formData.email}</span>.
        </p>

        <div className="bg-accent-50 rounded-xl px-5 py-4 mb-6 text-left">
          <p className="text-xs text-neutral-500 mb-1">Application Number</p>
          <p className="text-lg font-bold text-primary-800 tracking-wide">{success.applicationNo}</p>
          <p className="text-xs text-neutral-400 mt-1">Please save this for future reference</p>
        </div>

        <button
          onClick={handleDownload}
          className="w-full flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-900 font-bold py-3 rounded-xl transition-colors mb-4"
        >
          <FaDownload />
          Download Application PDF
        </button>

        <div className="border-t border-neutral-100 pt-4 text-xs text-neutral-500 space-y-1">
          <p className="font-semibold text-primary-700 mb-2">Need help?</p>
          <div className="flex items-center justify-center gap-2">
            <FaPhone className="text-accent-400" />
            <span>{COLLEGE_INFO.phone.join(' / ')}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-accent-400" />
            <span>{COLLEGE_INFO.email[0]}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Step Indicator ───────────────────────────────────────────────────────────
function StepIndicator({ currentStep }) {
  return (
    <div className="bg-white border-b border-neutral-200">
      <div className="container-custom mx-auto max-w-2xl px-4 py-5">
        <div className="flex items-center justify-between">
          {STEPS.map((s, idx) => {
            const done = currentStep > s.id;
            const active = currentStep === s.id;
            return (
              <div key={s.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                      done
                        ? 'bg-accent-400 border-accent-400 text-primary-900'
                        : active
                        ? 'bg-white border-accent-400 text-accent-500'
                        : 'bg-white border-neutral-300 text-neutral-400'
                    }`}
                  >
                    {done ? <FaCheck className="text-xs" /> : s.id}
                  </div>
                  <span className={`mt-1 text-xs hidden sm:block ${active ? 'text-primary-800 font-semibold' : 'text-neutral-400'}`}>
                    {s.label}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-1 ${done ? 'bg-accent-400' : 'bg-neutral-200'}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ApplicationFormPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null); // { applicationNo, pdfBase64 }

  const handleChange = (field, value) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      // Auto-calculate percentage for 10th
      if (field === 'tenthMarks' || field === 'tenthMax') {
        const m = parseFloat(field === 'tenthMarks' ? value : prev.tenthMarks);
        const max = parseFloat(field === 'tenthMax' ? value : prev.tenthMax);
        if (!isNaN(m) && !isNaN(max) && max > 0) {
          next.tenthPercent = ((m / max) * 100).toFixed(2);
        }
      }
      // Auto-calculate percentage for 12th
      if (field === 'twelfthMarks' || field === 'twelfthMax') {
        const m = parseFloat(field === 'twelfthMarks' ? value : prev.twelfthMarks);
        const max = parseFloat(field === 'twelfthMax' ? value : prev.twelfthMax);
        if (!isNaN(m) && !isNaN(max) && max > 0) {
          next.twelfthPercent = ((m / max) * 100).toFixed(2);
        }
      }
      return next;
    });
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleNext = () => {
    const validationErrors = validateStep(step, formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setErrors({});
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePay = async () => {
    setLoading(true);
    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        alert('Failed to load payment gateway. Please check your internet connection and try again.');
        setLoading(false);
        return;
      }
      openCheckout({
        amount: 500,
        name: 'Application Fee',
        description: `Application for ${formData.program}`,
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.mobile,
        },
        onSuccess: async (response) => {
          const { base64, applicationNo } = generateApplicationPDF(formData);
          try {
            await sendApplicationEmail(formData, base64, applicationNo);
          } catch (emailErr) {
            console.error('Email sending failed:', emailErr);
          }
          setSuccess({ applicationNo, pdfBase64: base64 });
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
      console.error('Payment error:', err);
      setLoading(false);
    }
  };

  if (success) {
    return <SuccessScreen success={success} formData={formData} />;
  }

  return (
    <>
      <Hero
        title="Online Application Form"
        subtitle="SSKV College of Arts & Science for Women — Admissions 2026–2027"
        height="medium"
        breadcrumb="Admissions › Application Form"
        bannerImage={images.admissions.banner}
      />

      {/* Download banner */}
      <div className="bg-accent-50 border-b border-accent-100">
        <div className="container-custom mx-auto max-w-2xl px-4 py-4">
          <p className="text-xs font-semibold text-primary-700 uppercase tracking-wide mb-3">Download Before You Apply</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/pdfs/application-form-2026-27.pdf"
              download
              className="flex items-center gap-3 flex-1 bg-white border border-accent-200 rounded-xl px-4 py-3 hover:shadow-md transition-shadow group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                <FaFilePdf className="text-primary-700 text-base" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-primary-800 font-heading leading-tight">Application Form 2026–27</p>
                <p className="text-xs text-neutral-400 mt-0.5">Printable admission form (PDF)</p>
              </div>
              <FaDownload className="text-primary-400 group-hover:text-primary-700 transition-colors flex-shrink-0" />
            </a>
            <a
              href="/pdfs/prospectus-2025-26.pdf"
              download
              className="flex items-center gap-3 flex-1 bg-white border border-accent-200 rounded-xl px-4 py-3 hover:shadow-md transition-shadow group"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0">
                <FaFilePdf className="text-accent-600 text-base" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-primary-800 font-heading leading-tight">Prospectus 2025–26</p>
                <p className="text-xs text-neutral-400 mt-0.5">Courses, fees & college handbook (PDF)</p>
              </div>
              <FaDownload className="text-accent-400 group-hover:text-accent-600 transition-colors flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>

      <StepIndicator currentStep={step} />

      <div className="container-custom mx-auto py-8 px-4 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              {step === 1 && <Step1 formData={formData} errors={errors} onChange={handleChange} />}
              {step === 2 && <Step2 formData={formData} errors={errors} onChange={handleChange} />}
              {step === 3 && <Step3 formData={formData} errors={errors} onChange={handleChange} />}
              {step === 4 && <Step4 formData={formData} errors={errors} onChange={handleChange} />}
              {step === 5 && <Step5 formData={formData} loading={loading} onPay={handlePay} />}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {step < 5 && (
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-neutral-100">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="px-6 py-2.5 rounded-lg border-2 border-neutral-300 text-neutral-600 font-semibold text-sm hover:border-primary-400 hover:text-primary-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                ← Back
              </button>
              <button
                onClick={handleNext}
                className="px-8 py-2.5 rounded-lg bg-primary-800 text-white font-bold text-sm hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md"
              >
                Next →
              </button>
            </div>
          )}
          {step === 5 && step > 1 && (
            <div className="flex justify-start mt-6 pt-4 border-t border-neutral-100">
              <button
                onClick={handleBack}
                disabled={loading}
                className="px-6 py-2.5 rounded-lg border-2 border-neutral-300 text-neutral-600 font-semibold text-sm hover:border-primary-400 hover:text-primary-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                ← Back
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
