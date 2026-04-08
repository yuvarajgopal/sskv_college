import { FaSyncAlt, FaHandsHelping, FaGlobe, FaHeart } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaHandsHelping, title: 'Community Service', desc: 'Regular community outreach programmes including health camps, donation drives, and village adoption initiatives.' },
  { icon: FaGlobe, title: 'Leadership Development', desc: 'Students develop leadership and organisational skills through planning and executing service projects.' },
  { icon: FaHeart, title: 'Social Awareness', desc: 'Awareness campaigns on health, hygiene, literacy, and social responsibility in collaboration with Rotary International.' },
  { icon: FaSyncAlt, title: 'Networking & Fellowship', desc: 'Opportunities to interact with Rotary members, professionals, and community leaders for personal growth.' },
];

export default function RotaryClubPage() {
  return (
    <>
      <Hero 
        title="Rotary Club" 
        subtitle="Community service, leadership, and social outreach" 
        height="medium" 
        breadcrumb="Activities › Clubs › Rotary Club" 
      />

      {/* MAIN CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="Rotary Club" subtitle="Service, Leadership & Community Engagement" />

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                To develop socially committed, ethical, and service-oriented students who actively contribute to community development through Rotary ideals of service above self.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The Rotary Club aims to inculcate leadership, social responsibility, and humanitarian values among students by engaging them in community service, professional development, and civic-oriented activities in collaboration with Rotary International.
              </p>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-8">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To promote the Rotary motto “Service Above Self” among students.</li>
                <li>To encourage student participation in community service and social welfare activities.</li>
                <li>To develop leadership skills, teamwork, and a sense of civic responsibility.</li>
                <li>To create awareness on social issues such as health, education, environment, and gender equality.</li>
                <li>To strengthen institutional–community partnerships through Rotary initiatives.</li>
                <li>To foster ethical values, empathy, and global citizenship among students.</li>
                <li>To provide opportunities for professional networking and personality development.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* COMMITTEE TABLE */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 overflow-x-auto">
              <h3 className="font-bold text-primary-800 mb-4">Rotary Club Committee</h3>
              <table className="w-full text-sm text-left border border-neutral-200">
                <thead className="bg-primary-800 text-white">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Department</th>
                    <th className="px-4 py-2">Role</th>
                    <th className="px-4 py-2">Contact Number</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. A. Ezhilarasi</td>
                    <td className="px-4 py-2">Department of Mathematics</td>
                    <td className="px-4 py-2">Coordinator</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. P. Rubalakshmi</td>
                    <td className="px-4 py-2">Department of Commerce</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. V. Vanitha</td>
                    <td className="px-4 py-2">Department of Computer Science with AI</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. V. Kavitha</td>
                    <td className="px-4 py-2">Department of Business Application</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. D. Ammu</td>
                    <td className="px-4 py-2">Department of Tamil</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. S. Banupriya</td>
                    <td className="px-4 py-2">Department of English</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Rotary Club" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        title="Service Above Self" 
        subtitle="Join the Rotary Club and make a positive impact in communities." 
      />
    </>
  );
}