import { FaPalette, FaMusic, FaTheaterMasks, FaAward } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaMusic, title: 'Music & Dance Performances', desc: 'Organising classical, folk, and contemporary music and dance events during college celebrations and festivals.' },
  { icon: FaTheaterMasks, title: 'Drama & Theatre', desc: 'Skits, one-act plays, and mime performances that showcase students\' dramatic talents and social awareness.' },
  { icon: FaAward, title: 'Inter-College Competitions', desc: 'Students represent SSKV in cultural competitions, winning prizes and bringing laurels to the institution.' },
  { icon: FaPalette, title: 'Festival Celebrations', desc: 'Organising Pongal, Navaratri, Margazhi Peruvizha, and other cultural festivals with traditional performances.' },
];

export default function CulturalClubPage() {
  return (
    <>
      <Hero 
        title="Cultural Club" 
        subtitle="Celebrating arts, dance, music, and cultural expression" 
        height="medium" 
        breadcrumb="Activities › Clubs › Cultural Club" 
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="Cultural Club" />

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600">
                To create a vibrant platform for students to showcase, share, and learn about diverse cultures, traditions, and art forms, fostering unity and appreciation.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                To celebrate, preserve, and promote cultural diversity by providing students with opportunities to explore, express, and share their traditions, arts, and heritage. The club aims to foster creativity, unity, and respect for different cultures through events, performances, and collaborative activities.
              </p>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-8">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To organize cultural events and festivals.</li>
                <li>To promote cultural exchange and understanding among students.</li>
                <li>To provide a platform for students to showcase their talents.</li>
                <li>To preserve and promote Indian heritage and traditions.</li>
                <li>To encourage creativity, innovation, and artistic expression.</li>
                <li>To develop leadership skills, confidence, and emotional intelligence.</li>
                <li>To build a sense of belonging, mutual respect, and support among students.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* COMMITTEE TABLE */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 overflow-x-auto">
              <h3 className="font-bold text-primary-800 mb-4">Cultural Club Committee Members</h3>
              <table className="w-full text-sm text-left border border-neutral-200">
                <thead className="bg-primary-800 text-white">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Designation</th>
                    <th className="px-4 py-2">Committee Role</th>
                    <th className="px-4 py-2">Contact Number</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. Rubalakhsmi</td>
                    <td className="px-4 py-2">Assistant Professor, Department of Commerce (Corporate Secretaryship)</td>
                    <td className="px-4 py-2">Coordinator</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. J. Lavanya</td>
                    <td className="px-4 py-2">Department of Physical Education</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. V. Latha</td>
                    <td className="px-4 py-2">Assistant Professor, Department of Tamil</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. B. Sowmiya Durga</td>
                    <td className="px-4 py-2">Assistant Professor, Department of English</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. B. Amudha</td>
                    <td className="px-4 py-2">Assistant Professor, Department of Mathematics</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. S. Vani</td>
                    <td className="px-4 py-2">Assistant Professor, Department of Commerce</td>
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
          <SectionHeading title="Activities" subtitle="Key initiatives of the Cultural Club" />
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
        title="Express Yourself" 
        subtitle="Join the Cultural Club and showcase your artistic talents." 
      />
    </>
  );
}