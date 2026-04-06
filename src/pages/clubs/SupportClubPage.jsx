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
      <Hero title="Student Support Club" subtitle="Peer support, mentoring, and assistance programmes" height="medium" breadcrumb="Activities › Clubs › Student Support Club" />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Student Support Club" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Student Support Club at SSKV College provides peer support, mentoring, and assistance programmes to help students navigate academic and personal challenges. Through buddy systems, group study sessions, and counselling facilitation, the club ensures that every student feels supported and included in the campus community.
            </p>
          </AnimatedSection>
        </div>
      </section>
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
      <CTABanner title="You're Not Alone" subtitle="The Student Support Club is here to help you through every step of your college journey." />
    </>
  );
}
