import { FaLeaf, FaSyncAlt, FaQuestion, FaPalette, FaBook, FaVoteYea, FaDumbbell, FaStar, FaUsers, FaHandsHelping, FaShoppingCart, FaPray, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const clubs = [
  { icon: FaLeaf,         name: 'EVS Club',                     desc: 'Environmental awareness and conservation initiatives promoting a green and sustainable campus.', link: '/clubs/evs' },
  { icon: FaSyncAlt,      name: 'Rotary Club',                  desc: 'Community service, leadership development, and social outreach in partnership with Rotary International.', link: '/clubs/rotary' },
  { icon: FaQuestion,     name: 'Quiz Club',                    desc: 'Competitive quiz activities fostering general knowledge, critical thinking, and academic curiosity.', link: '/clubs/quiz' },
  { icon: FaPalette,      name: 'Cultural Club',                desc: 'Celebrating arts, dance, music, and cultural expression through events and inter-college competitions.', link: '/clubs/cultural' },
  { icon: FaBook,         name: 'Literary Club',                desc: 'Promoting reading, writing, elocution, and creative expression through literary activities and programmes.', link: '/clubs/literary' },
  { icon: FaVoteYea,      name: 'Electoral Literacy Club',      desc: 'Educating students about democratic values, electoral processes, and their civic responsibilities.', link: '/clubs/electoral-literacy' },
  { icon: FaDumbbell,     name: 'Fitness Club',                 desc: 'Encouraging physical fitness, wellness, and healthy lifestyle choices among students and staff.', link: '/clubs/fitness' },
  { icon: FaStar,         name: 'Students Talent Exp Club',     desc: 'A platform to discover and showcase diverse student talents in arts, performance, and innovation.', link: '/clubs/talent-exp' },
  { icon: FaUsers,        name: 'Student Outreach Club',        desc: 'Engaging students in community outreach, social responsibility, and volunteer activities.', link: '/clubs/outreach' },
  { icon: FaHandsHelping, name: 'Student Support Club',         desc: 'Peer support, mentoring, and assistance programmes to help students navigate academic and personal challenges.', link: '/clubs/support' },
  { icon: FaShoppingCart, name: 'Consumer Club',                desc: 'Awareness on consumer rights, ethical consumption, and financial literacy for everyday decision-making.', link: '/clubs/consumer' },
  { icon: FaPray,         name: 'Value Education Club',         desc: 'Instilling moral values, ethical conduct, and character development through structured value education programmes.', link: '/clubs/value-education' },
];

export default function ClubsPage() {
  return (
    <>
      <Hero
        title="Clubs"
        subtitle="A vibrant ecosystem of student clubs driving growth beyond the classroom"
        height="medium"
        breadcrumb="Activities › Clubs"
      />

      <div className="bg-primary-900 py-4">
        <div className="container-custom mx-auto flex justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-400 font-heading">{clubs.length}</div>
            <div className="text-white/60 text-xs mt-0.5">Active Clubs</div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Student Clubs" subtitle="The college's vibrant club scene offers something for everyone, with a diverse range of groups catering to various interests. The Environmental Science (EVS) Club and Consumer Club focus on sustainability and consumer awareness, while the Rotaract Club and Student Outreach Club emphasize community service and social responsibility. The Electoral Literacy Club empowers students to engage with the democratic process, and the Cultural Club showcases the richness of diverse traditions through music, dance, and art. For those with a competitive streak, the Quiz Club is a hub for trivia enthusiasts, while the Fitness Club promotes physical well-being and healthy lifestyles. With such a wide range of options, students can easily find their niche and connect with like-minded peers who share their passions. " />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clubs.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <Link to={c.link} className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow h-full flex items-start gap-4 group block">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <c.icon className="text-primary-700 text-base" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-800 font-heading text-sm mb-1 leading-snug group-hover:text-accent-600 transition-colors">{c.name}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{c.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-primary-600 font-semibold mt-2 group-hover:text-accent-600 transition-colors">Learn More <FaArrowRight className="text-[10px]" /></span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Find Your Passion. Join a Club." subtitle="SSKV College's clubs offer every student a platform to explore, grow, and make a difference." />
    </>
  );
}
