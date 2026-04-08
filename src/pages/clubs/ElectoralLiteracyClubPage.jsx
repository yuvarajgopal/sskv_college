import { FaVoteYea, FaBalanceScale, FaUsers, FaFlag } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaVoteYea, title: 'Voter Registration Drives', desc: 'Assisting eligible students in registering as voters and understanding the voter registration process.' },
  { icon: FaBalanceScale, title: 'Democracy Awareness', desc: 'Workshops and seminars on democratic values, the Constitution of India, and the importance of informed voting.' },
  { icon: FaFlag, title: 'National Events', desc: 'Programmes organised on National Voters\' Day, Constitution Day, and other important national occasions.' },
  { icon: FaUsers, title: 'Mock Elections', desc: 'Conducting mock elections and role-play activities to provide practical experience of the electoral process.' },
];

export default function ElectoralLiteracyClubPage() {
  return (
    <>
      <Hero 
        title="Electoral Literacy Club" 
        subtitle="Educating students about democratic values and civic responsibilities" 
        height="medium" 
        breadcrumb="Activities › Clubs › Electoral Literacy Club" 
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="Electoral Literacy Club" />

          {/* INTRO */}
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Electoral Literacy Club (ELC) at SSKV College functions under the guidance of the Election Commission of India. The club aims to educate students about democratic values, electoral processes, and civic responsibilities. It encourages students, especially first-time voters, to actively participate in elections and become responsible citizens of the nation.
            </p>
          </AnimatedSection>

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600">
                To create an informed, aware, and responsible citizenry by promoting democratic values and encouraging active participation in the electoral process, especially among students and young voters.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To educate students about the importance of voting in a democracy.</li>
                <li>To spread awareness about the Indian electoral system and voter rights.</li>
                <li>To motivate first-time voters to register and vote responsibly.</li>
                <li>To build a sense of civic duty and leadership among students.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-8">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To create awareness about elections and the Constitution of India.</li>
                <li>To explain the role of the Election Commission of India.</li>
                <li>To promote ethical voting and electoral participation.</li>
                <li>To encourage students to become informed and responsible citizens.</li>
                <li>To develop leadership, critical thinking, and democratic values.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* COMMITTEE TABLE */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 overflow-x-auto">
              <h3 className="font-bold text-primary-800 mb-4">Electoral Literacy Club Members</h3>
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
                    <td className="px-4 py-2">Ms. D. Chitra</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Tamil</td>
                    <td className="px-4 py-2">Coordinator</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. G. Rajathii</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Commerce</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. U. Revathi</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Tamil (CS)</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. V. Aswini</td>
                    <td className="px-4 py-2">Asst Prof, Dept of English</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. R. Ponmani</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Commerce</td>
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
          <SectionHeading title="Activities" subtitle="Key initiatives of the Electoral Literacy Club" />
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
        title="Every Vote Matters" 
        subtitle="Be an informed and responsible citizen — exercise your right to vote." 
      />
    </>
  );
}