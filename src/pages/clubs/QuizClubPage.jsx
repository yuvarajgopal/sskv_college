import { FaQuestion, FaBrain, FaTrophy, FaUsers } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaBrain, title: 'Inter-Class Quiz Competitions', desc: 'Regular quiz events across departments covering general knowledge, current affairs, science, and literature.' },
  { icon: FaTrophy, title: 'Inter-College Competitions', desc: 'Students represent the college in district and state-level quiz competitions, winning accolades and recognition.' },
  { icon: FaUsers, title: 'Peer Learning', desc: 'Students conduct quizzes for their peers, promoting knowledge sharing, critical thinking, and teamwork.' },
  { icon: FaQuestion, title: 'Special Theme Quizzes', desc: 'Quizzes organised on special occasions like Independence Day, Republic Day, and Science Day on relevant themes.' },
];

export default function QuizClubPage() {
  return (
    <>
      <Hero 
        title="Quiz Club" 
        subtitle="Fostering general knowledge, critical thinking, and academic curiosity" 
        height="medium" 
        breadcrumb="Activities › Clubs › Quiz Club" 
      />

      {/* MAIN CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="Quiz Club" subtitle="Knowledge, Curiosity & Competitive Spirit" />

          {/* ABOUT */}
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Quiz Club at SSKV College enhances students' general knowledge and intellectual curiosity through competitive quiz activities. The club enables students to conduct quizzes for their peers, promoting peer learning, critical thinking, and teamwork. Members regularly participate in inter-college quiz competitions.
            </p>
          </AnimatedSection>

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                To create a vibrant learning community that nurtures curiosity, critical thinking, and a spirit of healthy competition among students through quiz-based activities.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To encourage students to expand their knowledge beyond the classroom.</li>
                <li>To develop analytical, reasoning, and decision-making skills through quizzes.</li>
                <li>To promote teamwork, confidence, and effective communication among students.</li>
                <li>To identify and nurture quiz talent for inter-college and competitive events.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-8">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To organize regular quizzes on academic, current affairs, and general knowledge topics.</li>
                <li>To enhance students’ awareness of national and international developments.</li>
                <li>To improve quick thinking, problem-solving, and time-management skills.</li>
                <li>To motivate students to participate in intra-college, inter-college, and national-level quiz competitions.</li>
                <li>To provide a platform for students to showcase their intellectual abilities.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* QUIZ COMMITTEE TABLE */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 overflow-x-auto">
              <h3 className="font-bold text-primary-800 mb-4">Quiz Committee</h3>
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
                    <td className="px-4 py-2">Dr.G.Rajathi</td>
                    <td className="px-4 py-2">Asst. Prof, Department of Commerce</td>
                    <td className="px-4 py-2">Coordinator</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. B. Premalatha</td>
                    <td className="px-4 py-2">Asst. Prof, Department of Mathematics</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. K. Thenmozhi</td>
                    <td className="px-4 py-2">Asst. Prof, Department of Commerce</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. K. P. Sowmiya</td>
                    <td className="px-4 py-2">Asst. Prof, Department of Commerce (A&F)</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. K. Sridevi</td>
                    <td className="px-4 py-2">Asst. Prof, Department of Commerce (Shift II)</td>
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
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Quiz Club" />

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
        title="Test Your Knowledge" 
        subtitle="Join the Quiz Club and sharpen your intellect through friendly competition." 
      />
    </>
  );
}