import { FaHandsHelping, FaGraduationCap, FaRupeeSign, FaBook, FaFileAlt } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const objectives = [
'To identify students from socio-economically disadvantaged backgrounds and provide them with necessary academic and financial support.',
'To create awareness about government scholarships, welfare schemes, and institutional support facilities.',
'To organize mentoring, remedial coaching, and counseling programmes for academic improvement.',
'To promote skill development and career guidance activities for better employability.',
'To ensure equal participation of disadvantaged students in curricular, co-curricular, and extracurricular activities.',
'To provide a supportive and inclusive campus environment that respects diversity and social equity.',
'To address issues related to discrimination, financial constraints, and social challenges faced by students.',
];

const initiatives = [
  { icon: FaRupeeSign, title: 'Scholarship Assistance', desc: 'Guidance for government scholarships including BC/MBC/SC/ST schemes.' },
  { icon: FaBook, title: 'Remedial Coaching', desc: 'Additional academic support through remedial classes.' },
  { icon: FaGraduationCap, title: 'Career Guidance', desc: 'Career counselling, competitive coaching, and soft skills training.' },
  { icon: FaHandsHelping, title: 'Mentoring Programme', desc: 'One-on-one mentoring by faculty members.' },
];

export default function SEDGCellPage() {
  return (
    <>
      <Hero
        title="Socio Economically Disadvantaged Group Cell"
        subtitle="Empowering students from disadvantaged backgrounds through support and opportunities"
        height="medium"
        breadcrumb="Student Life › SEDG Cell"
      />

      {/* ABOUT + VISION + OBJECTIVES */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          {/* ABOUT */}
          <SectionHeading title="About the SEDG Cell" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-10">
              The Socio Economically Disadvantaged Group (SEDG) Cell at SSKV College supports students from economically weaker and disadvantaged backgrounds with academic, financial, and personal assistance.
            </p>
          </AnimatedSection>

          {/* VISION & MISSION */}
          <SectionHeading title="Vision & Mission" />

          <div className="space-y-5 mb-10">
            <AnimatedSection>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-4">
                <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  To empower socio-economically disadvantaged students through equal access to education and opportunities.
                </p>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  To support disadvantaged students through academic assistance, financial guidance, and skill development initiatives.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* OBJECTIVES */}
          <SectionHeading title="Objectives" />
          <div className="space-y-3">
            {objectives.map((o, i) => (
              <AnimatedSection key={i}>
                <div className="flex items-start gap-3 bg-neutral-50 rounded-xl px-4 py-3 border">
                  <span className="w-6 h-6 rounded-full bg-primary-800 text-white text-xs flex items-center justify-center">{i + 1}</span>
                  <p className="text-sm text-neutral-700">{o}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* COMMITTEE + REPORTS */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="SEDG Cell Committee" />

          <AnimatedSection>
            <div className="overflow-x-auto mb-10">
              <table className="w-full border border-neutral-300 rounded-xl overflow-hidden">
                <thead className="bg-primary-900 text-white text-sm">
                  <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Designation</th>
                    <th className="p-3 text-left">Role</th>
                    <th className="p-3 text-left">Contact</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-neutral-700">
                  <tr className="border-t">
                    <td className="p-3">Dr. K. Thirumamagal</td>
                    <td className="p-3">Principal</td>
                    <td className="p-3 font-semibold">Chairperson</td>
                    <td className="p-3">9994745157</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Ms. M. Mahalakshmi</td>
                    <td className="p-3">Assistant Professor of Commerce</td>
                    <td className="p-3 font-semibold">Coordinator</td>
                    <td className="p-3">9566441320</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Ms. M. Lavanya</td>
                    <td className="p-3">Assistant Professor of Mathematics</td>
                    <td className="p-3 font-semibold">Member</td>
                    <td className="p-3">9994502098</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Ms. S. Banupriya</td>
                    <td className="p-3">Assistant Professor of English</td>
                    <td className="p-3 font-semibold">Member</td>
                    <td className="p-3">7548806673</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* REPORTS */}
          <SectionHeading title="Reports" />

          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <a href="/pdfs/sdge_cell/2022-2023 socio eco.pdf" target="_blank"
                className="w-72 text-center px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition">
                <FaFileAlt className="inline mr-2" />
                Report 2022-2023
              </a>

              <a href="/pdfs/sdge_cell/2023-2024 socio eco.pdf" target="_blank"
                className="w-72 text-center px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition">
                <FaFileAlt className="inline mr-2" />
                Report 2023-2024
              </a>

              <a href="/pdfs/sdge_cell/2024-2025 socio eco.pdf" target="_blank"
                className="w-72 text-center px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition">
                <FaFileAlt className="inline mr-2" />
                Report 2024-2025
              </a>

              <a href="/pdfs/sdge_cell/2025-2026 socio eco.pdf" target="_blank"
                className="w-72 text-center px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition">
                <FaFileAlt className="inline mr-2" />
                Report 2025-2026
              </a>

            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* INITIATIVES */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Our Initiatives" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {initiatives.map((item, i) => (
              <AnimatedSection key={i}>
                <div className="bg-white border rounded-xl p-6">
                  <item.icon className="text-2xl mb-2 text-primary-800" />
                  <h3 className="font-bold text-primary-800">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="No Student Left Behind" 
        subtitle="SSKV College ensures every student has equal opportunity to succeed." 
      />
    </>
  );
}