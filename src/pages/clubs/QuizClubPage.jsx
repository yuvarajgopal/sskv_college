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
      <Hero title="Quiz Club" subtitle="Fostering general knowledge, critical thinking, and academic curiosity" height="medium" breadcrumb="Activities › Clubs › Quiz Club" />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Quiz Club" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Quiz Club at SSKV College enhances students' general knowledge and intellectual curiosity through competitive quiz activities. The club enables students to conduct quizzes for their peers, promoting peer learning, critical thinking, and teamwork. Members regularly participate in inter-college quiz competitions.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Quiz Club" />
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
      <CTABanner title="Test Your Knowledge" subtitle="Join the Quiz Club and sharpen your intellect through friendly competition." />
    </>
  );
}
