import { FaHandsHelping, FaUserFriends, FaComments, FaGraduationCap } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaUserFriends, title: 'Peer Mentoring', desc: 'Senior students mentor juniors, helping them navigate academic challenges and campus life during their initial semesters.' },
  { icon: FaComments, title: 'Counselling Support', desc: 'Facilitating access to counselling services for students facing academic stress, personal difficulties, or adjustment issues.' },
  { icon: FaGraduationCap, title: 'Academic Assistance', desc: 'Organising group study sessions, doubt-clearing sessions, and academic support for students who need extra help.' },
  { icon: FaHandsHelping, title: 'Bridge Programmes', desc: 'Programmes to help new students transition smoothly into college life, including orientation sessions and buddy systems.' },
];

export default function SupportClubPage() {
  return (
    <>
      <Hero 
        title="Student Support Club" 
        subtitle="Peer support, mentoring, and assistance programmes" 
        height="medium" 
        breadcrumb="Activities › Clubs › Student Support Club" 
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="About the Student Support Club" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Student Support Club at SSKV College provides peer support, mentoring, and assistance programmes to help students navigate academic and personal challenges. Through buddy systems, group study sessions, and counselling facilitation, the club ensures that every student feels supported and included in the campus community.
            </p>
          </AnimatedSection>

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600">
                To create a supportive and inclusive campus environment that empowers students academically, emotionally, and socially for holistic development.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The mission of the Support Club is to assist students through academic guidance, peer mentoring, emotional support, and skill-enhancement activities that promote overall well-being and success.
              </p>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To provide academic support to students through mentoring, peer tutoring, and remedial guidance.</li>
                <li>To identify students facing academic, emotional, or personal challenges and extend appropriate support in a timely manner.</li>
                <li>To promote students’ emotional well-being by creating awareness about stress management, mental health, and positive coping strategies.</li>
                <li>To enhance students’ life skills such as communication, time management, problem-solving, and decision-making.</li>
                <li>To bridge the gap between students and faculty by serving as a platform for open communication and guidance.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* COMMITTEE TABLE */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 overflow-x-auto">
              <h3 className="font-bold text-primary-800 mb-4">Student Support Club Members</h3>
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
                    <td className="px-4 py-2">Ms. J. Suganthi</td>
                    <td className="px-4 py-2">HOD, Dept of Maths</td>
                    <td className="px-4 py-2">Coordinator</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. S. Vani</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Commerce</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. S. Janani</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Business Administration</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. S. Jayashree</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Commerce (CS)</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. T. Indrani</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Tamil</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. M. Lavanya</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Maths</td>
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
          <SectionHeading title="Activities" subtitle="Key initiatives of the Student Support Club" />

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
        title="You're Not Alone" 
        subtitle="The Student Support Club is here to help you through every step of your college journey." 
      />
    </>
  );
}