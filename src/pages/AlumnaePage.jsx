import { FaUserGraduate, FaClipboardList, FaComments, FaNetworkWired } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const links = [
  {
    icon: FaClipboardList,
    title: 'Alumnae Registration Form',
    desc: 'Register as an official alumnae member and stay connected with your alma mater.',
    url: 'https://forms.gle/7jSgQBW52F3vgGv19',
    label: 'Register Now',
    color: '#3498db',
  },
  {
    icon: FaComments,
    title: 'Suggestion & Feedback Form',
    desc: 'Share your suggestions, experiences, and feedback to help us improve and grow.',
    url: 'https://forms.gle/yQz7exXMn7yWf6928',
    label: 'Submit Feedback',
    color: '#27ae60',
  },
];

export default function AlumnaePage() {
  return (
    <>
      <Hero
        title="Alumnae Association"
        subtitle="Celebrating our graduates — a lifelong bond with SSKV College"
        height="medium"
        breadcrumb="Alumnae › Association & Report"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Alumnae Association" subtitle="Staying connected beyond graduation" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">
              The SSKV College Alumnae Association brings together graduates across all years and disciplines, fostering a lifelong community of empowered women. Alumnae contribute to mentoring current students, participating in college events, and strengthening the institution's legacy of excellence.
            </p>
          </AnimatedSection>

          {/* Committee Table */}
          <AnimatedSection>
            <div className="overflow-x-auto mb-12">
              <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
                <thead className="bg-primary-800 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Name</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Designation / Department</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Role</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Contact</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-neutral-700">
                  {[
                    ['Dr. C.K. Raman', 'Secretary', 'President (Ex-Officio)', '—'],
                    ['Dr. K. Thirumamagal', 'Principal', 'Vice-President (Ex-Officio)', '—'],
                    ['Ms. S. Komala', 'Assistant Professor, Mathematics', 'Vice-President (Ex-Officio)', '—'],
                    ['Dr. P. Revathi', 'HOD, Business Administration', 'Treasurer', '—'],
                    ['Dr. P. Revathy', 'Placement Officer, English', 'Executive Member (Ex-Officio)', '—'],
                    ['Dr. K. P. Sowmiya', 'Alumnae Officer, Accounting & Finance', 'Executive Member (Ex-Officio)', '—'],
                    ['Ms. K. Vijayalakshmi', 'Assistant Professor, Commerce (General)', 'Executive Member', '—'],
                    ['Ms. Ponmani', 'Assistant Professor, Commerce (General)', 'Executive Member', '—'],
                    ['Ms. P. Shenbagam', 'Assistant Professor, Tamil', 'Executive Member', '—'],
                    ['Mr. T. V. Jagannathan', 'Office Superintendent', 'Executive Member', '—'],
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-neutral-200 hover:bg-neutral-50">
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {links.map((l, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: `${l.color}15` }}>
                    <l.icon style={{ color: l.color }} className="text-xl" />
                  </div>
                  <h3 className="font-bold text-primary-800 font-heading text-base mb-2">{l.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-4">{l.desc}</p>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90 self-start"
                    style={{ backgroundColor: l.color }}
                  >
                    {l.label} →
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Always an SSKV-ite." subtitle="Once a student, always part of the SSKV family. Join our growing alumnae community." />
    </>
  );
}