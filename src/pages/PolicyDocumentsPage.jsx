import { FaFilePdf, FaDownload, FaShieldAlt, FaUsers, FaBook, FaLeaf, FaGavel, FaLaptop, FaBriefcase } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

// ── Add / edit policy documents here ─────────────────────────────────────────
// file: name of the PDF inside public/pdfs/policies/
// Set available: false until you upload the actual PDF
const categories = [
  {
    name: 'Student Welfare & Safety',
    icon: FaShieldAlt,
    color: '#e74c3c',
      policies: [
      { title: 'Anti-Ragging Policy', file: 'anti-ragging-policy.pdf', available: true },
      { title: 'Sexual Harassment Policy (ICC)', file: 'sexual-harassment-policy.pdf', available: true },
      { title: 'Grievance Redressal Policy', file: 'grievance-redressal-policy.pdf', available: true },
      { title: 'Student Code of Conduct', file: 'student-code-of-conduct.pdf', available: true },
    ],
  },
  {
    name: 'Academic Policies',
    icon: FaBook,
    color: '#3498db',
    policies: [
      { title: 'Admission Policy', file: 'admission-policy.pdf', available: true },
      { title: 'Examination Policy', file: 'examination-policy.pdf', available: true },
      { title: 'Fee Refund Policy', file: 'fee-refund-policy.pdf', available: true },
      { title: 'Library Policy', file: 'library-policy.pdf', available: true },
      { title: 'IQAC Policy', file: 'iqac-policy.pdf', available: true },
    ],
  },
  {
    name: 'Sustainability & Infrastructure',
    icon: FaLeaf,
    color: '#27ae60',
    policies: [
      { title: 'Environmental Policy', file: 'environmental-policy.pdf', available: true },
      { title: 'IT Usage Policy', file: 'it-usage-policy.pdf', available: true },
    ],
  },
   {
    name: 'Placement & Industry',
    icon: FaBriefcase,
    color: '#e67e22',
    policies: [
      { title: 'Placement Policy', file: 'placement-policy.pdf', available: true },
    ],
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function PolicyCard({ policy, color }) {
  const BASE = '/pdfs/policies/';

  return (
    <div className="flex items-center justify-between gap-4 bg-white rounded-xl px-5 py-4 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${color}15` }}>
          <FaFilePdf style={{ color }} className="text-base" />
        </div>
        <span className="text-sm font-semibold text-primary-800 leading-snug">{policy.title}</span>
      </div>

      {policy.available ? (
        <a
          href={`${BASE}${policy.file}`}
          download
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white whitespace-nowrap flex-shrink-0 transition-opacity hover:opacity-90"
          style={{ backgroundColor: color }}
        >
          <FaDownload className="text-[10px]" /> Download
        </a>
      ) : (
        <span className="px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-400 bg-neutral-100 whitespace-nowrap flex-shrink-0">
          Coming Soon
        </span>
      )}
    </div>
  );
}

export default function PolicyDocumentsPage() {
  const total = categories.reduce((sum, c) => sum + c.policies.length, 0);
  const available = categories.reduce(
    (sum, c) => sum + c.policies.filter((p) => p.available).length, 0
  );

  return (
    <>
      <Hero
        title="Policy Documents"
        subtitle="Our Policies. Click to Know!"
        height="medium"
        breadcrumb="About Us › Policy Documents"
      />

      {/* Stats bar */}
      <div className="bg-primary-900 py-4">
        <div className="container-custom mx-auto flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-accent-400 font-heading">{total}</div>
            <div className="text-white/60 text-xs mt-0.5">Total Policies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent-400 font-heading">{categories.length}</div>
            <div className="text-white/60 text-xs mt-0.5">Categories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent-400 font-heading">{available}</div>
            <div className="text-white/60 text-xs mt-0.5">Available to Download</div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl space-y-10">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.name} delay={i * 0.08}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${cat.color}15` }}>
                  <cat.icon style={{ color: cat.color }} className="text-lg" />
                </div>
                <h2 className="text-lg font-bold text-primary-800 font-heading">{cat.name}</h2>
                <div className="flex-1 h-px bg-neutral-200" />
                <span className="text-xs text-neutral-400 font-medium">{cat.policies.length} document{cat.policies.length !== 1 ? 's' : ''}</span>
              </div>

              {/* Policy cards */}
              <div className="space-y-3">
                {cat.policies.map((policy) => (
                  <PolicyCard key={policy.file} policy={policy} color={cat.color} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTABanner
        title="Transparency & Accountability"
        subtitle="SSKV College is committed to open governance and clear institutional policies."
      />
    </>
  );
}
