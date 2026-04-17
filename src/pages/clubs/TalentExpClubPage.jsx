import { FaStar, FaMicrophone, FaPaintBrush, FaLightbulb } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaMicrophone, title: 'Talent Shows', desc: 'Regular talent showcases where students perform singing, dancing, mimicry, and other performing arts.' },
  { icon: FaPaintBrush, title: 'Creative Exhibitions', desc: 'Art exhibitions, craft fairs, and creative displays that highlight students\' diverse artistic abilities.' },
  { icon: FaLightbulb, title: 'Innovation Showcase', desc: 'Platform for students to present innovative ideas, projects, and entrepreneurial concepts.' },
  { icon: FaStar, title: 'Inter-College Representation', desc: 'Identifying and nurturing talented students to represent the college in various inter-college competitions.' },
];

export default function TalentExpClubPage() {
  return (
    <>
      <Hero
        title="Students Talent Expo Club"
        subtitle="Discovering and showcasing diverse student talents"
        height="medium"
        breadcrumb="Activities › Clubs › Students Talent Expo Club"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="About the Students Talent Expo Club" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Students Talent Expo Club at SSKV College provides a vibrant platform to identify, nurture, and showcase 
              the diverse talents of students. It encourages creativity, innovation, and self-expression through various 
              artistic, cultural, literary, and skill-based activities, helping students grow in confidence and personality.
            </p>
          </AnimatedSection>

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                To identify, nurture, and showcase the diverse talents of students by providing a vibrant platform 
                that encourages creativity, confidence, and self-expression.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The Students Talent Expo Club aims to create opportunities for students to explore and exhibit their 
                artistic, cultural, literary, and innovative talents, fostering creativity, leadership, and holistic 
                personality development.
              </p>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To identify and encourage hidden talents among students.</li>
                <li>To provide a platform for students to showcase their skills and creativity.</li>
                <li>To promote cultural, artistic, literary, and innovative activities on campus.</li>
                <li>To build self-confidence, communication skills, and stage presence among students.</li>
                <li>To encourage teamwork, leadership, and collaborative learning.</li>
                <li>To create an inclusive environment that values diversity and individual abilities.</li>
                <li>To support holistic development beyond academic excellence.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* COMMITTEE TABLE */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 overflow-x-auto">
              <h3 className="font-bold text-primary-800 mb-4">Students Talent Expo Club Members</h3>
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
                    <td className="px-4 py-2">Ms. Sowmiya</td>
                    <td className="px-4 py-2">Asst Prof, Dept of English</td>
                    <td className="px-4 py-2">Coordinator</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. V. Vanitha</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Computer Science with AI</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. P. Rubalakshmi</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Commerce (CS)</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. V. Kavitha</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Business Administration</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. D. Ammu</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Tamil</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. S. Banupriya</td>
                    <td className="px-4 py-2">Asst Prof, Dept of English</td>
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
          <SectionHeading title="Activities" subtitle="Key initiatives of the Talent Expo Club" />

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
        title="Discover Your Talent"
        subtitle="Every student has a unique talent — find yours at the Students Talent Expo Club."
      />
    </>
  );
}