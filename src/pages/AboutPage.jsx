import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaEye, FaBullseye, FaUserTie, FaBuilding, FaUniversity } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';
import { images } from '../data/media';

const leadership = [
  { name: 'President', designation: 'President', photo: '/images/leadership/president.jpg', message: 'Leading the institution towards excellence in education and holistic development.' },
  { name: 'Vice-President', designation: 'Vice-President', photo: '/images/leadership/vice-president.jpg', message: 'Committed to creating opportunities for women through quality education.' },
  { name: 'Secretary', designation: 'Secretary', photo: '/images/leadership/secretary.jpg', message: 'Ensuring administrative excellence and institutional growth.' },
    { name: 'Joint Secretary', designation: 'Joint Secretary', photo: '/images/leadership/joint-secretary.jpg', message: 'Ensuring administrative excellence and institutional growth.' },
  { name: 'Principal', designation: 'Principal', photo: '/images/leadership/principal.jpg', message: 'Fostering academic rigor and nurturing talent in every student.' },
];

function LeaderPhoto({ photo, designation }) {
  const [failed, setFailed] = useState(false);
  if (!failed) {
    return (
      <img
        src={photo}
        alt={designation}
        className="w-full h-full object-cover"
        onError={() => setFailed(true)}
      />
    );
  }
  return <FaUserTie className="text-2xl text-white" />;
}

const institutions = [
  'SSKV College of Arts & Science for Women',
  'SSKV Higher Secondary School',
  'SSKV Matriculation School',
  'SSKV Primary School',
  'SSKV Nursery & Primary School',
];

export default function AboutPage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      const el = document.getElementById(section);
      if (el) setTimeout(() => {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 110;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchParams]);

  return (
    <>
      <Hero
        title="About SSKV College"
        subtitle="A legacy of empowering women through education in the heart of Kanchipuram"
        height="medium"
        breadcrumb="About Us"
        bannerImage={images.about.banner}
      />

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                Genesis & Growth
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                SSKV College of Arts and Science for Women was established with a noble vision of
                providing quality higher education to women in Kanchipuram and surrounding areas.
                Located in Kilambi, Kanchipuram, the college has grown to become a trusted institution
                offering diverse academic programs.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Affiliated to the prestigious University of Madras, our college follows the Choice Based
                Credit System (CBCS) and offers 11 undergraduate programs spanning Arts, Science,
                Commerce, and Professional streams. Our institution is part of a group of 5 educational
                institutions under a single dedicated management.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                With 70+ experienced faculty members, modern infrastructure, and a commitment to
                holistic development, SSKV College continues to shape confident, skilled, and socially
                responsible women leaders.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={images.about.building}
                    alt="SSKV College Building"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/50 to-transparent flex items-end">
                    <div className="text-center text-white p-8 w-full">
                      <FaUniversity className="text-7xl text-accent-400 mx-auto mb-6" />
                      <p className="text-xl font-heading font-bold">University of Madras</p>
                      <p className="text-white/60 mt-2">Affiliated Institution</p>
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <p className="text-3xl font-bold text-accent-400">11</p>
                        <p className="text-white/60 text-sm">Academic Programs</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-400/20 rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section id="goals" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Our Goals"
            subtitle="Short-term milestones on the path to becoming one of Tamil Nadu's finest institutions"
          />
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100 mb-8">
                <p className="text-neutral-700 leading-relaxed text-base mb-4">
                  Goals, as everybody knows, can be short term and long term. A long term goal includes many short term goals. Our long term goal is to grow into one of the finest educational institutions in Tamil Nadu where girls while they acquire knowledge will also grow into complete women; where shall prevail truth, honesty, uprightness, love and goodness.
                </p>
                <p className="text-neutral-700 leading-relaxed text-base mb-4">
                  Our first task in terms of small goals is to strengthen the academic competence of our faculty. We are also aware that we need to develop in students knowledge and understanding; cognitive, transferable and practical skills. What is, perhaps, more important, is the creation of proper context and ambience for learning where meaningful education will take place.
                </p>
                <p className="text-neutral-700 leading-relaxed text-base">
                  Therefore, our catchword is <span className="font-semibold text-primary-800">"freedom."</span> The entire academic atmosphere in SSKV College is characterized by freedom — freedom not unbridled but controlled by responsibility. We strongly believe that no meaningful education, particularly, of girls will take place where oppression and tyranny rule.
                </p>
              </div>
            </AnimatedSection>

            {/* College Song */}
            <AnimatedSection delay={0.15}>
              <div className="bg-primary-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold font-heading text-accent-400 mb-6 text-center">College Song</h3>
                <div className="text-center space-y-6 text-white/85 text-sm leading-loose">
                  <p className="font-semibold text-white/95 italic">
                    Oh, we the girls of SSKV<br />
                    a glorious college we<br />
                    We belong to SSKV<br />
                    a College proud and free
                  </p>
                  <div>
                    <p className="mb-1">1. Come on all you young scholars</p>
                    <p className="mb-1">And join us one and all</p>
                    <p className="mb-1">We're the jolliest girls of SSKV</p>
                    <p>the toast of Kanchipuram</p>
                  </div>
                  <div>
                    <p className="mb-1">2. We gather here in college</p>
                    <p className="mb-1">from places far and near</p>
                    <p className="mb-1">We file into our classes</p>
                    <p className="mb-1">with eagerness and cheer</p>
                    <p className="mb-1">As we listen to our teachers</p>
                    <p className="mb-1">Our problems disappear</p>
                    <p className="mb-1">And as we work diligently</p>
                    <p>we've no concern or fear</p>
                  </div>
                  <div>
                    <p className="mb-1">3. It's fun to be in college</p>
                    <p className="mb-1">the cream of students we</p>
                    <p className="mb-1">we love to dance and sing</p>
                    <p className="mb-1">at moments we are free</p>
                    <p className="mb-1">And when we are off to study</p>
                    <p className="mb-1">we're hives of industry</p>
                    <p className="mb-1">So that altogether</p>
                    <p>we are a fine community</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="section-padding bg-accent-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Vision & Mission" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-accent-400 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
                  <FaEye className="text-2xl text-accent-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 font-heading mb-4">Our Vision</h3>
                <p className="text-neutral-600 leading-relaxed">
                  To empower women through quality education, fostering academic excellence,
                  ethical values, and holistic development, enabling them to become leaders and
                  contribute meaningfully to society.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-700 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <FaBullseye className="text-2xl text-primary-700" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 font-heading mb-4">Our Mission</h3>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    Provide accessible, quality higher education for women
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    Promote research aptitude and innovative thinking
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    Develop employable skills through industry collaborations
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    Instill ethical values and social responsibility
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">•</span>
                    Foster holistic development through co-curricular activities
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Best Practices"
            subtitle="Distinctive initiatives that set SSKV apart in its commitment to holistic education"
          />
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '🌱', text: 'Students plant saplings once every 15 days on campus or in nearby villages — over 2,000 saplings planted. On Independence Day and Republic Day, students donate saplings as a symbol of environmental responsibility.' },
              { icon: '🌾', text: 'Separate garden spaces are allotted for final-year students from all nine departments to cultivate fruits, vegetables, and spinach. Harvested produce is sold to staff, giving students hands-on entrepreneurship experience.' },
              { icon: '♻️', text: 'Plastic is completely banned on campus. YRC students distribute paper bags to the canteen every 15 days. Silver and glass bottles replace plastic water bottles at all official functions.' },
              { icon: '📚', text: 'Latecomers stay back after college hours to read books or articles in the library. The next day they present what they read at morning assembly. No fines are collected — discipline through positive reinforcement.' },
              { icon: '🧠', text: 'Several clubs have been formed to improve general knowledge. The Quiz Club has students conducting quizzes for their peers, fostering peer learning and critical thinking.' },
              { icon: '🎓', text: 'A Bodhi Centre has been established to enhance faculty knowledge by regularly inviting subject experts to conduct academic enrichment sessions.' },
              { icon: '🎵', text: 'Cultural events such as Margazhi Peruvizha, Pongal, and Navaratri are organized every year under the Indian Knowledge System banner to promote awareness of Indian culture and traditions.' },
              { icon: '🪡', text: 'Practical, hands-on training courses such as Aari embroidery and Silambam are offered alongside the academic curriculum to develop creativity, fitness, and vocational skills.' },
              { icon: '🤖', text: 'Recognizing the importance of AI in today\'s world, the college offers Artificial Intelligence as an add-on course for students after regular class hours.' },
              { icon: '🪙', text: 'To encourage research, training is provided in Kalvettu (epigraphy) and exhibitions on Indian coins are organized during Republic Day celebrations.' },
              { icon: '🏃', text: 'A Fitness Club promotes "Healthy Youth, Healthy India." Students are sensitized to the importance of cereals and millets, and prepare healthy millet-based food to sell during Republic Day celebrations.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 bg-neutral-50 hover:bg-accent-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 h-full">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-neutral-100 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
  <div className="container-custom mx-auto">
    <SectionHeading 
      title="Our Leadership" 
      subtitle="Guided by experienced administrators committed to educational excellence" 
      light 
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {leadership.map((leader, index) => (
        <AnimatedSection key={leader.designation} delay={index * 0.1}>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
            
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mx-auto mb-4 overflow-hidden">
              <LeaderPhoto photo={leader.photo} designation={leader.designation} />
            </div>

            <h3 className="text-lg font-bold text-white font-heading">
              {leader.designation}
            </h3>

            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              {leader.message}
            </p>

          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>

      {/* Group of Institutions */}
      <section id="institutions" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Group of Institutions"
            subtitle="5 educational institutions under one trusted management"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {institutions.map((inst, index) => (
              <AnimatedSection key={inst} delay={index * 0.08}>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-neutral-50 hover:bg-accent-50 transition-colors duration-300 border border-neutral-100">
                  <div className="w-12 h-12 rounded-lg bg-primary-700 flex items-center justify-center flex-shrink-0">
                    <FaBuilding className="text-white" />
                  </div>
                  <p className="font-semibold text-primary-800 text-sm">{inst}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Distinctiveness */}
      <section id="distinctiveness" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Institutional Distinctiveness"
            subtitle="A holistic, value-based model that blends sustainability, culture, wellness, and excellence"
          />
          <div className="max-w-5xl mx-auto">

            {/* Intro */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-10">
                <p className="leading-relaxed text-white/85 text-base">
                  SSKV College of Arts and Science for Women stands distinct for its holistic and value-based approach to women's education, where academic excellence is complemented by environmental responsibility, cultural preservation, entrepreneurship, health awareness, research orientation, digital competence, wellness practices such as Yoga and Carnatic music, and a strong sports culture. The institution believes that true education goes beyond textbooks and actively integrates life skills, social responsibility, physical fitness, mental wellness, and ethical values into the learning process.
                </p>
              </div>
            </AnimatedSection>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: '🌱',
                  title: 'Environmental Sustainability',
                  text: 'Students plant saplings once every fifteen days on campus or in nearby villages — over 2,000 saplings planted so far. Plastic has been completely banned; YRC volunteers supply paper bags to the canteen, and silver/glass bottles replace plastic at all functions.',
                },
                {
                  icon: '🌾',
                  title: 'Entrepreneurship through Campus Gardening',
                  text: 'Final-year students from all nine departments cultivate fruits, vegetables, and spinach in dedicated garden plots. Harvested produce is sold to faculty and staff, giving students hands-on experience in cultivation, marketing, teamwork, and financial management.',
                },
                {
                  icon: '📚',
                  title: 'Discipline & Reading Habits',
                  text: 'Instead of fines for latecoming, students read books or articles in the library after college hours and present their learning at the next morning assembly — building communication skills, reading habits, and confidence through positive reinforcement.',
                },
                {
                  icon: '🧠',
                  title: 'Quiz Club & Peer Learning',
                  text: 'The Quiz Club enables students to conduct quizzes for their peers, promoting critical thinking, teamwork, and intellectual curiosity well beyond the classroom.',
                },
                {
                  icon: '🎓',
                  title: 'Bodhi Centre — Faculty Development',
                  text: 'Subject experts are invited to conduct academic enrichment sessions, keeping faculty updated with recent developments in their disciplines and ensuring consistently high teaching standards.',
                },
                {
                  icon: '🎵',
                  title: 'Indian Culture & Traditions (IKS)',
                  text: 'Annual celebrations of Margazhi Peruvizha, Pongal, and Navaratri; Carnatic music training; and regular Yoga sessions promote physical, mental, and emotional well-being alongside deep cultural rootedness.',
                },
                {
                  icon: '🪡',
                  title: 'Practical Skill Development',
                  text: 'Hands-on courses in Aari embroidery (creativity & vocation) and Silambam (fitness, discipline & self-defence) complement the academic curriculum.',
                },
                {
                  icon: '🤖',
                  title: 'Digital Literacy — AI Add-On Course',
                  text: 'Artificial Intelligence is offered as an add-on course after regular class hours, equipping students with foundational technological knowledge for a technology-driven future.',
                },
                {
                  icon: '🪙',
                  title: 'Research Orientation',
                  text: 'Training in Kalvettu (epigraphy) and exhibitions on Indian coins during Republic Day celebrations spark interest in history, archaeology, and analytical investigation.',
                },
                {
                  icon: '🌾',
                  title: 'Health Awareness — Fitness Club',
                  text: 'Under the theme "Healthy Youth, Healthy India," students prepare and sell millet-based healthy food during Republic Day celebrations, combining nutrition education with entrepreneurship.',
                },
                {
                  icon: '🏑',
                  title: 'Sports Culture & House System',
                  text: 'The entire student body is divided into four sports houses ensuring maximum participation. The college has emerged as Hockey Champions for three consecutive years, building teamwork, leadership, and confidence.',
                },
                {
                  icon: '🇮🇳',
                  title: 'National Values & Social Responsibility',
                  text: 'On Independence Day and Republic Day, students donate saplings as a symbol of patriotism and environmental care, integrating civic responsibility into campus life.',
                },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.05}>
                  <div className="bg-neutral-50 hover:bg-accent-50 transition-colors duration-300 rounded-xl p-6 border border-neutral-100 h-full flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center text-xl flex-shrink-0 border border-neutral-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary-800 font-heading mb-1.5">{item.title}</h4>
                      <p className="text-neutral-600 leading-relaxed text-sm">{item.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Closing */}
            <AnimatedSection delay={0.3}>
              <div className="bg-accent-50 border border-accent-200 rounded-2xl p-8 text-center">
                <p className="text-neutral-700 leading-relaxed text-base">
                  This unique blend of <span className="font-semibold text-primary-800">tradition, innovation, and values</span> makes SSKV College truly distinctive — preparing women who are environmentally conscious, culturally rooted, physically fit, technologically skilled, mentally resilient, and socially responsible, contributing meaningfully to nation-building.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Institutional Development Plan */}
      <section id="devplan" className="section-padding bg-accent-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Institutional Development Plan"
            subtitle="Our strategic roadmap for academic and infrastructural growth"
          />
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { icon: '🎓', title: 'Academic Excellence', text: 'Continuously enriching the curriculum with industry-relevant, interdisciplinary, and skill-based programmes, while promoting innovative teaching methods and ongoing faculty development through workshops, seminars, and academic training.' },
              { icon: '🔬', title: 'Research Culture', text: 'Fostering a strong research culture through academic collaborations, encouragement of publications, and active participation in funded projects.' },
              { icon: '🏛️', title: 'Infrastructure Development', text: 'Steadily upgrading infrastructure by introducing smart classrooms, modern laboratories, digital library resources, and advanced ICT facilities to support blended and technology-enabled learning.' },
              { icon: '🌱', title: 'Student Support & Holistic Development', text: 'Comprehensive student support services including career guidance, placement training, internships, mentoring, and counselling to ensure the holistic development of every learner.' },
              { icon: '🤝', title: 'Industry & Community Engagement', text: 'Actively maintaining industry partnerships, alumni engagement, and community outreach programmes to enhance employability and social impact.' },
              { icon: '♻️', title: 'Sustainability', text: 'Sustained focus on green campus initiatives, energy conservation, waste management, and environmental awareness programmes.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-primary-800 font-heading mb-1">{item.title}</h4>
                    <p className="text-neutral-600 leading-relaxed text-sm">{item.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={0.5}>
              <div className="bg-primary-900 rounded-xl p-6 text-white text-center">
                <p className="leading-relaxed text-white/85">
                  Through systematic planning, quality assurance practices, and continuous monitoring, <span className="text-accent-400 font-semibold">SSKV College empowers women with knowledge, confidence, leadership skills, and ethical values</span>, enabling them to contribute meaningfully to society and the nation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Be Part of Our Legacy?"
        subtitle="Join thousands of women who have built successful careers starting at SSKV College."
      />
    </>
  );
}
