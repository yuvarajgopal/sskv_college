import { FaHandsHelping, FaGlobe, FaUsers, FaLeaf, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaHandsHelping, title: 'Community Service', desc: 'Students actively participate in outreach programmes such as health camps, awareness drives, and social service initiatives.' },
  { icon: FaGlobe, title: 'Environmental Initiatives', desc: 'Activities like tree plantation, clean campus drives, and environmental awareness campaigns.' },
  { icon: FaUsers, title: 'Social Awareness', desc: 'Programmes focusing on education, hygiene, women empowerment, and community development.' },
  { icon: FaLeaf, title: 'Sustainable Development', desc: 'Encouraging eco-friendly practices and sustainable community engagement projects.' },
];

export default function StudentOutreachPage() {
  return (
    <>
      <Hero
        title="Student Outreach Programme"
        subtitle="Building socially responsible students through community engagement"
        height="medium"
        breadcrumb="Activities › Student Outreach Programme"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="About the Student Outreach Programme" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Student Outreach Programme at SSKV College focuses on developing socially responsible individuals 
              by engaging students in meaningful community service activities. It bridges academic learning with real-world 
              experiences, fostering empathy, leadership, and civic responsibility.
            </p>
          </AnimatedSection>

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                To nurture socially responsible, compassionate, and empowered students who actively contribute 
                to community development and nation-building through meaningful outreach initiatives.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The Students Outreach Programme aims to instil a sense of social responsibility and civic consciousness 
                among students by engaging them in community-oriented activities that address societal needs, promote 
                inclusive growth, and foster ethical values, leadership, and empathy.
              </p>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To sensitize students to social, economic, environmental, and health-related issues in the community.</li>
                <li>To encourage active student participation in outreach and extension activities.</li>
                <li>To promote values such as empathy, integrity, teamwork, and respect for diversity.</li>
                <li>To develop leadership qualities and problem-solving skills through community engagement.</li>
                <li>To strengthen the bond between the institution and the local community.</li>
                <li>To provide students with experiential learning opportunities beyond the classroom.</li>
                <li>To contribute positively to sustainable community development initiatives.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* COMMITTEE TABLE */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6 overflow-x-auto">
              <h3 className="font-bold text-primary-800 mb-4">Student Outreach Committee Members</h3>

              <table className="w-full text-sm text-left border border-neutral-200">
                <thead className="bg-primary-800 text-white">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Designation</th>
                    <th className="px-4 py-2">Committee Role</th>
                    <th className="px-4 py-2">Contact</th>
                  </tr>
                </thead>

                <tbody className="text-neutral-700">
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. Ramani</td>
                    <td className="px-4 py-2">HOD, Dept of Commerce (A&F)</td>
                    <td className="px-4 py-2">Coordinator</td>
                    <td className="px-4 py-2">9789357340</td>
                  </tr>

                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. B. Premalatha</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Maths</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">9626311054</td>
                  </tr>

                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. J. Lavanya</td>
                    <td className="px-4 py-2">Dept of Physical Education</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>

                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. P. Latha</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Tamil</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">8940955883</td>
                  </tr>

                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. B. Sowmiya Durga</td>
                    <td className="px-4 py-2">Asst Prof, Dept of English</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>

                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. B. Amudha</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Maths</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* 🔥 REPORT BUTTONS */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 text-center">
              <h3 className="font-bold text-primary-800 mb-4">Student Outreach Reports</h3>

              <div className="flex flex-wrap justify-center gap-3">
                <a href="/pdfs/st_outreach/outreach 24-25.pdf" target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">
                  <FaFilePdf /> 2023–24
                </a>

                <a href="/pdfs/st_outreach/outreach 24-25.pdf" target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">
                  <FaFilePdf /> 2024–25
                </a>

                <a href="/pdfs/st_outreach/outreach 25-26.pdf" target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">
                  <FaFilePdf /> 2025–26
                </a>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Outreach Programme" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {activities.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <a.icon className="text-3xl text-primary-700 mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2">{a.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Serve Society. Build Character."
        subtitle="Empowering students to make a difference through community engagement."
      />
    </>
  );
}