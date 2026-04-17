import { FaShoppingCart, FaBalanceScale, FaShieldAlt, FaFileAlt } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaBalanceScale, title: 'Consumer Rights Awareness', desc: 'Workshops and seminars on consumer protection laws, rights, and responsibilities under the Consumer Protection Act.' },
  { icon: FaShieldAlt, title: 'Safe Consumption Practices', desc: 'Awareness about product quality, food safety, expiry dates, and how to identify counterfeit products.' },
  { icon: FaFileAlt, title: 'Financial Literacy', desc: 'Sessions on budgeting, savings, digital payments, and understanding financial products for everyday decision-making.' },
  { icon: FaShoppingCart, title: 'Consumer Day Celebrations', desc: 'Special programmes on World Consumer Rights Day and National Consumer Day with competitions and awareness activities.' },
];

export default function ConsumerClubPage() {
  return (
    <>
      <Hero 
        title="Consumer Club" 
        subtitle="Awareness on consumer rights, ethical consumption, and financial literacy" 
        height="medium" 
        breadcrumb="Activities › Clubs › Consumer Club" 
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="About the Consumer Club" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Consumer Club at SSKV College creates awareness about consumer rights, ethical consumption, and financial literacy among students. Through workshops, seminars, and special day celebrations, students learn about consumer protection laws, safe consumption practices, and responsible financial decision-making.
            </p>
          </AnimatedSection>

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>Empower students to become informed, responsible consumers.</li>
                <li>Promote awareness of consumer rights and ethical market practices.</li>
                <li>Create a community that advocates for fair trade, sustainability, and consumer protection.</li>
                <li>Inspire students to be proactive in addressing consumer issues in society.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>Educate students about consumer rights, responsibilities, and relevant laws.</li>
                <li>Organize workshops, seminars, and campaigns to spread awareness on consumer protection.</li>
                <li>Provide a platform for students to discuss and resolve consumer-related problems.</li>
                <li>Collaborate with consumer forums, government bodies, and NGOs to promote fair practices.</li>
                <li>Encourage students to engage in research and projects on consumer issues.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>Awareness: Conduct regular awareness programs on consumer rights and responsibilities.</li>
                <li>Education: Offer training on how to file complaints, use consumer courts, and avoid unfair trade practices.</li>
                <li>Engagement: Organize debates, quizzes, and competitions related to consumer topics.</li>
                <li>Support: Help students and the public resolve consumer grievances.</li>
                <li>Collaboration: Partner with external agencies for campaigns and events.</li>
                <li>Sustainability: Promote eco-friendly and ethical consumption habits.</li>
                <li>Research: Encourage students to undertake projects on consumer protection and market trends.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* COMMITTEE TABLE */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 overflow-x-auto">
              <h3 className="font-bold text-primary-800 mb-4">Consumer Club Members</h3>
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
                    <td className="px-4 py-2">Ms. S. Komala</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Maths</td>
                    <td className="px-4 py-2">Coordinator</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. G. Rajathi</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Commerce</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. U. Revathi</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Tamil</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. R. Ponmani</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Commerce</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. D. Chitra</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Tamil</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. C. Sudha</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Computer Science</td>
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
          <SectionHeading title="Activities" subtitle="Key initiatives of the Consumer Club" />

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
        title="Know Your Rights" 
        subtitle="Be an informed consumer — knowledge is the best protection." 
      />
    </>
  );
}