import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaClipboardCheck,
  FaDownload,
  FaFileAlt,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
  FaMobileAlt
} from 'react-icons/fa';

import Hero from '../components/shared/Hero';
import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import { departments } from '../data/departments';
import { COLLEGE_INFO } from '../utils/constants';
import { images } from '../data/media';

const steps = [
  { icon: FaClipboardCheck, title: 'Check Eligibility', description: 'Review program requirements and ensure you meet the eligibility criteria.' },
  { icon: FaDownload, title: 'Get Application', description: 'Download the application form or collect it from the college office.' },
  { icon: FaFileAlt, title: 'Submit Application', description: 'Submit completed application with all required documents.' },
  { icon: FaCheckCircle, title: 'Confirmation', description: 'Receive admission confirmation and complete fee payment.' },
];

const documents = [
  '10th & 12th Mark Sheets (Originals + Copies)',
  'Transfer Certificate (TC)',
  'Community Certificate',
  'Passport-size Photographs (6 copies)',
  'Aadhar Card (Copy)',
  'Migration Certificate (if applicable)',
];

const faqs = [
  {
    q: 'What is the eligibility for B.Sc. Computer Science?',
    a: 'Candidates must have completed +2 with Mathematics or Computer Science as a subject from a recognized board.',
  },
  {
    q: 'Is there a Shift II option available?',
    a: 'Yes, Shift II (evening) programs are available for B.Sc. Computer Science, BCA, and B.Com (General).',
  },
  {
    q: 'When do admissions typically open?',
    a: 'Admissions usually open in May-June each year. Please contact the admissions office for exact dates.',
  },
  {
    q: 'Is hostel facility available?',
    a: 'Please contact the college administration for current hostel and accommodation information.',
  },
  {
    q: 'What placement support does the college offer?',
    a: 'Our Placement Cell actively conducts on-campus recruitment drives with a 75% placement rate.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50"
        >
          <span className="font-semibold text-primary-800 text-sm pr-4">{faq.q}</span>

          <FaChevronDown
            className={`text-accent-400 transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="px-5 pb-5 text-neutral-600 text-sm border-t pt-4">
                {faq.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function AdmissionsPage() {
  return (
    <>
      <Hero
        title="Admissions 2026–2027"
        subtitle="Your journey to a brighter future starts here"
        height="medium"
        breadcrumb="Admissions"
        bannerImage={images.admissions.banner}
      >
        <div className="flex gap-3 justify-center">
          <Button variant="gold" size="lg" href="/apply">Apply Online</Button>
          <Button variant="outline" size="lg" href="/fees">Pay Fees</Button>
        </div>
      </Hero>

      {/* Admission Process */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading title="Admission Process" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <AnimatedSection key={index}>
                <div className="relative text-center p-6">

                  <div className="w-16 h-16 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-primary-900 text-xl" />
                  </div>

                  {/* STEP NUMBER */}
                  <span className="absolute top-2 right-1/2 translate-x-[55px] text-xs bg-accent-50 text-accent-600 px-2 py-0.5 rounded-full font-bold">
                    Step {index + 1}
                  </span>

                  <h3 className="font-bold text-primary-800">{step.title}</h3>
                  <p className="text-sm text-neutral-600">{step.description}</p>

                  {/* CONNECTOR LINE */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-accent-200" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Programs & Eligibility" />

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white p-5 rounded-xl flex gap-4 border">

                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${dept.color}15` }}
                >
                  <dept.icon style={{ color: dept.color }} />
                </div>

                <div>
                  <h3 className="font-bold text-primary-800">{dept.degree}</h3>
                  <p className="text-xs text-neutral-500">
                    {dept.duration} • {dept.eligibility}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents + Contact */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto grid lg:grid-cols-2 gap-10 max-w-5xl">

          {/* Documents */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Documents Required</h2>
            {documents.map((doc, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <FaCheckCircle className="text-accent-400 mt-1" />
                <span className="text-sm">{doc}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="bg-accent-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Contact Admissions</h3>

            {/* Landline */}
            <div className="flex gap-3 mb-3">
              <FaPhone />
              <span>{COLLEGE_INFO.phone.join(' / ')}</span>
            </div>

            {/* Mobile FIXED */}
            <div className="flex gap-3 mb-3">
              <FaMobileAlt />
              <span>8680023003 / 7904428316</span>
            </div>

            {/* Email */}
            <div className="flex gap-3">
              <FaEnvelope />
              <span>{COLLEGE_INFO.email[1]}</span>
            </div>

            <Button className="mt-4" href="/contact">Send Inquiry</Button>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-3xl">
          <SectionHeading title="FAQ" />

          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}