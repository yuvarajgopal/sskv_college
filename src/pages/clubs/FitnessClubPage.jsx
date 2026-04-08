import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaRunning } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaRunning, title: 'Fitness Sessions', desc: 'Regular yoga, aerobics, and physical fitness sessions to promote an active and healthy lifestyle among students.' },
  { icon: FaAppleAlt, title: 'Healthy Food Awareness', desc: 'Under the theme "Healthy Youth, Healthy India," students are sensitised to the importance of cereals and millets.' },
  { icon: FaHeartbeat, title: 'Health Awareness Campaigns', desc: 'Awareness programmes on physical and mental health, stress management, and wellness practices.' },
  { icon: FaDumbbell, title: 'Millet Food Festival', desc: 'Students prepare healthy millet-based food items and present them during college celebrations.' },
];

export default function FitnessClubPage() {
  return (
    <>
      <Hero
        title="Fitness Club"
        subtitle="Encouraging physical fitness, wellness, and healthy lifestyle choices"
        height="medium"
        breadcrumb="Activities › Clubs › Fitness Club"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="About the Fitness Club" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Fitness Club at SSKV College promotes a culture of health, wellness, and active living among students. 
              It encourages physical fitness, mental well-being, and healthy lifestyle choices through regular activities, 
              awareness programmes, and student participation in wellness initiatives.
            </p>
          </AnimatedSection>

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                To promote a culture of health, fitness, and well-being among students by encouraging an active lifestyle 
                that supports physical, mental, and emotional wellness.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The Fitness Club aims to inspire students to adopt healthy habits through regular physical activities, 
                fitness awareness programmes, and wellness initiatives, thereby enhancing overall fitness, discipline, 
                and quality of life.
              </p>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To encourage regular physical activity and fitness practices among students.</li>
                <li>To improve physical endurance, flexibility, and overall health.</li>
                <li>To promote mental well-being through stress-relieving fitness activities.</li>
                <li>To create awareness about the importance of fitness, nutrition, and healthy lifestyle choices.</li>
                <li>To identify and nurture sporting and fitness talents among students.</li>
                <li>To instill discipline, self-confidence, and team spirit through fitness programmes.</li>
                <li>To support holistic development and academic performance through physical well-being.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* COMMITTEE TABLE */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 overflow-x-auto">
              <h3 className="font-bold text-primary-800 mb-4">Fitness Club Committee Members</h3>
              <table className="w-full text-sm text-left border border-neutral-200">
                <thead className="bg-primary-800 text-white">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Department</th>
                    <th className="px-4 py-2">Committee Role</th>
                    <th className="px-4 py-2">Contact</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. A. Ezhilarasi</td>
                    <td className="px-4 py-2">Department of Maths</td>
                    <td className="px-4 py-2">Coordinator</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. R. Kannagi</td>
                    <td className="px-4 py-2">Department of Tamil</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. R. Revathi</td>
                    <td className="px-4 py-2">Department of Business Administration</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. V. Aswini</td>
                    <td className="px-4 py-2">Department of English</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. S. Komala</td>
                    <td className="px-4 py-2">Department of Maths</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. M. Mahalakshmi</td>
                    <td className="px-4 py-2">Department of Commerce</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. B. Dhivyadharshini</td>
                    <td className="px-4 py-2">Department of Maths</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Fitness Club" />

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
        title="Healthy Youth, Healthy India"
        subtitle="Stay active, eat well, and embrace a healthy lifestyle with the Fitness Club."
      />
    </>
  );
}