import { FaVoteYea, FaBalanceScale, FaUsers, FaFlag } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaVoteYea, title: 'Voter Registration Drives', desc: 'Assisting eligible students in registering as voters and understanding the voter registration process.' },
  { icon: FaBalanceScale, title: 'Democracy Awareness', desc: 'Workshops and seminars on democratic values, the Indian constitution, and the importance of informed voting.' },
  { icon: FaFlag, title: 'National Events', desc: 'Programmes organised on National Voters\' Day, Constitution Day, and other nationally significant occasions.' },
  { icon: FaUsers, title: 'Mock Elections', desc: 'Conducting mock elections and role-play activities to give students practical experience of the electoral process.' },
];

export default function ElectoralLiteracyClubPage() {
  return (
    <>
      <Hero title="Electoral Literacy Club" subtitle="Educating students about democratic values and civic responsibilities" height="medium" breadcrumb="Activities › Clubs › Electoral Literacy Club" />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Electoral Literacy Club" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Electoral Literacy Club (ELC) at SSKV College functions under the guidelines of the Election Commission of India. The club educates students about democratic values, electoral processes, and their civic responsibilities as responsible citizens of India. It actively encourages voter registration and informed participation in elections.
            </p>
          </AnimatedSection>
        </div>
      </section>
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
      <CTABanner title="Every Vote Matters" subtitle="Be an informed and responsible citizen — exercise your right to vote." />
    </>
  );
}
