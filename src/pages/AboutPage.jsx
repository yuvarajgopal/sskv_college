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
  'S.S.K.V Higher Secondary School,6-7-8, Collah Chatram Street,Kanchipuram',
  'S.S.K.V Matriculation Girls Higher Secondary School, 124-125 West Raja Street,Kanchipuram.',
  'S.S.K.V Matriculation boys Higher Secondary School, 124-125 Kailasanather Tample Street,Kanchipuram.',
  'S.S.K.V Pre-Primary School, Mahanadu Dharmarayar Street,Kanchipuram.',
  'S.S.K.V Elementary School,A.B.C Kamakshi Amman West Mada Street,Kanchipuram',
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
      <section id="genesis" className="section-padding bg-white">
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
                When, in the year 1904, one Shri Somasundara Sastry, a visionary, founded a school for girls in Kanchipuram little would he have realized that one day his school, like the banyan tree, would send new educational roots from its branches so that they would develop into strong trunks. It was, in a way, in keeping with the character of the town, Kanchipuram, that a school was founded here.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                But to found a school for girls in 1904, now, in retrospect, seems an act of courage, an act, animated by hope that favored intellect over established prejudices and an act which also embellished the truth in Winston Churchill’s statement that a man is as big as his decisions. History, as Carlyle said, is the essence of innumerable biographies and the history of the growth of the original SSKV School from a single entity to five schools and a college today is actually the biographies of several people who strove to sustain the small beginning of 1904. 
              </p>
              <p className="text-neutral-600 leading-relaxed">
                The stability of public favour has been prevailing upon the SSKV brand since the beginning because successive office bearers of the Conjeevaram Hindu Educational Society (under whose aegis all the institutions are run) have been as committed as they have been assiduous in their task of institution building. Of these, mention may be made of Shri C R Pattabhi Raman, the son of Sir Sri C P Ramaswami Aiyar, the illustrious Dewan of the erstwhile princely State of Travancore. Mr. A. R. Jagannathan the son-in-law of Shri C R Pattabhi Raman and Dr. Vengudi Ramamurthy.
              </p> <br />
               <p className="text-neutral-600 leading-relaxed">
                It is only proper that now the President of the Governing Body is Dr. Nanditha Krishna, the great grand daughter of Sir Sri C P Ramaswami Aiyar and who is a well-known personality in Chennai. Under her guidance combined with the industry of Dr. C.K. Raman, the Secretary and the benign influence of Mrs. Umadevi, Joint Secretary, a giant step was taken in 2007 when a College exclusively for women was founded thereby creating an important signpost in the history of SSKV institutions. 
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
                 Our first task in terms of small goals is to strengthen the academic competence of our faculty. They are young and the college is just seven years old. We are also aware that we need to develop in students knowledge and understanding; cognitive, transferable and practical skills. What is, perhaps, more important, is the creation of proper context and ambience for learning where meaningful education will take place.
                </p>
                <p className="text-neutral-700 leading-relaxed text-base">
                 Therefore, our catchword is “freedom.” The entire academic atmosphere in SSKV College is characterized by freedom, freedom not unbridled but controlled by responsibility. We strongly believe that no meaningful education, particularly, of girls will take place where oppression and tyranny rule. This spirit of freedom is well illustrated in our College Song. 
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
                    <p>Oh, we the girls of SSKV        	(Chorus),</p>
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
                   <p>Oh, we the girls of SSKV  	       	(Chorus)</p> 
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
                    <p>Oh, we the girls of SSKV (Chorus) </p>
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
                    The aim of the College is to offer to women education that will transform them into liberal minded human beings who shall remain at the cutting edge of knowledge; who shall endeavour to free their minds of bigotry and obstinacy; who shall develop a disinterested attitude where emotions are involved; who shall be able to distinguish between right and wrong without taking recourse to either of the two extremes of relationism and absolutism, and who, in all these endeavours, shall not forget the abiding grace of God who rules the world.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-700 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <FaBullseye className="text-2xl text-primary-700" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 font-heading mb-4">Our Mission</h3>
                <p className="text-neutral-600 leading-relaxed">
                   Our mission is to empower women through a transformative education that nurtures liberal thought, intellectual curiosity, and moral discernment. We strive to cultivate individuals who are free from prejudice and rigidity, who approach emotions with balanced objectivity, and who are guided by integrity avoiding both moral absolutism and excessive relativism. In all pursuits, we encourage a deep awareness of the divine grace that governs life and inspires purposeful living.  
                </p>
              
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
              { icon: '🌱', text: 'Students are encouraged to plant saplings once every 15 days, either on the college campus or in the villages proposed to be adopted by the institution. As part of this initiative, more than 2,000 saplings have been planted both on campus and in nearby villages.' },
              { icon: '🌾', text: 'On the occasions of Independence Day and Republic Day, students donate saplings as a symbol of environmental responsibility.' },
              { icon: '♻️', text: 'Separate garden spaces have been allotted on the campus for final-year students from all nine departments. They cultivate fruits, vegetables, and spinach. After harvest, the produce is sold to faculty members, office staff, and housekeeping staff, helping students gain practical exposure to entrepreneurship.' },
              { icon: '🧠', text: 'Instead of merely observing “No Plastic Day,” the institution actively educates students about the harmful effects of plastic usage. Plastic has been completely banned on campus. YRC students distribute paper bags to the canteen every 15 days, thereby reducing plastic usage. The college has also stopped purchasing plastic water bottles and now uses silver and glass bottles for all official functions.' },
              { icon: '🎓', text: 'To discourage late coming and promote reading habits, latecomers are required to stay back after college hours and read books or articles in the library. The following day, they present what they have read during the morning assembly. No fines are collected for any such activities.' },
              { icon: '🪡', text: 'A Bodhi Centre has been established to enhance the academic knowledge of faculty members by inviting subject experts for regular sessions.' },
              { icon: '🤖', text: 'To promote awareness of Indian culture and traditions, the college organizes cultural events such as Margazhi Peruvizha, Pongal, and Navaratri every year under the Indian Knowledge System banner.' },
              { icon: '🪙', text: 'Practical, hands-on training courses such as Aari embroidery and Silambam are offered to students in addition to their academic curriculum.' },
               { icon: '🪙', text: 'Recognizing the importance of Artificial Intelligence in today’s world, the college offers AI as an add-on course for students after regular class hours.' },
                { icon: '🪙', text: 'To encourage research among students, training is provided in Kalvettu (epigraphy), and exhibitions on Indian coins are organized during Republic Day celebrations.' },
              { icon: '🏃', text: 'To promote the theme “Healthy Youth, Healthy India,” a Fitness Club has been established. Students are sensitized to the importance of cereals and millets. As part of this initiative, students prepare healthy millet-based food and sell it during Republic Day celebrations.' },
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
                 SSKV College of Arts and Science for Women stands distinct for its holistic and value-based approach to women’s education, where academic excellence is complemented by environmental responsibility, cultural preservation, entrepreneurship, health awareness, research orientation, digital competence, wellness practices such as Yoga, Carnatic music, and a strong sports culture. The institution believes that true education goes beyond textbooks and examinations and therefore actively integrates life skills, social responsibility, physical fitness, mental wellness, and ethical values into the learning process. Through a wide range of structured initiatives, the college empowers women students to become confident, socially responsible, culturally rooted, and future-ready citizens.
                </p>
              </div>
            </AnimatedSection>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: '🌱',
                  title: 'Environmental Sustainability',
                  text: 'One of the most remarkable features of the institution is its strong commitment to environmental sustainability. Students are encouraged to plant saplings once every fifteen days either within the college campus or in nearby villages proposed to be adopted by the institution. This regular green initiative has resulted in the plantation of more than 2,000 saplings so far. By involving students directly in tree plantation, the college nurtures environmental consciousness, responsibility towards nature, and a sense of ownership for the surrounding ecosystem. The initiative not only enhances the green cover of the campus and villages but also instills sustainable habits among students.',
                },
                {
                  icon: '🌾',
                  title: 'Entrepreneurship through Campus Gardening',
                  text: 'Entrepreneurial skills are nurtured through a unique campus gardening initiative. Separate garden spaces have been allotted for final-year students from all nine departments to cultivate fruits, vegetables, and spinach. After harvest, the produce is sold to faculty members, office staff, and housekeeping staff. This activity exposes students to basic concepts of cultivation, marketing, teamwork, and financial management, helping them understand entrepreneurship in a practical and meaningful way.',
                },
                {
                  icon: '📚',
                  title: 'Discipline & Reading Habits',
                  text: 'Discipline and reading habits are promoted through an innovative, non-punitive system. Instead of collecting fines for latecoming, students are asked to stay back after college hours and read books or articles in the library. The next day, they present their learning during the morning assembly. This practice improves communication skills, encourages reading, and builds confidence while maintaining discipline through positive reinforcement.',
                },
                {
                  icon: '🧠',
                  title: 'Quiz Club & Peer Learning',
                  text: 'To enhance general knowledge and leadership qualities, the college has established several student clubs. The Quiz Club, in particular, enables students to conduct quizzes for their peers, promoting peer learning, critical thinking, and teamwork. Such platforms help students develop confidence and intellectual curiosity beyond the classroom.',
                },
                {
                  icon: '🎓',
                  title: 'Bodhi Centre — Faculty Development',
                  text: 'Faculty development is strengthened through the Bodhi Centre, which invites subject experts to conduct academic enrichment sessions. These programmes help faculty members stay updated with recent developments in their disciplines and improve teaching effectiveness, ensuring high academic standards for students.',
                },
                {
                  icon: '🎵',
                  title: 'Indian Culture & Traditions (IKS)',
                  text: 'The institution strongly promotes Indian culture and traditions through activities under the Indian Knowledge System (IKS) banner. Annual celebrations such as Margazhi Peruvizha, Pongal, and Navaratri expose students to traditional music, dance, rituals, and values. Carnatic music training is provided to nurture classical music appreciation and performance skills among students. Regular Yoga sessions are also conducted to promote physical, mental, and emotional well-being, helping students manage stress, improve concentration, and maintain a healthy lifestyle. The institution strongly promotes Indian culture and traditions through activities under the Indian Knowledge System (IKS) banner. Annual celebrations such as Margazhi Peruvizha, Pongal, and Navaratri expose students to traditional music, dance, rituals, and values. Carnatic music training is provided to nurture classical music appreciation and performance skills among students. Regular Yoga sessions are also conducted to promote physical, mental, and emotional well-being, helping students manage stress, improve concentration, and maintain a healthy lifestyle.',
                },
                {
                  icon: '🪡',
                  title: 'Practical Skill Development',
                  text: 'Practical skill development is another hallmark of the institution. Hands-on training courses such as Aari embroidery and Silambam are offered in addition to the academic curriculum. Aari work nurtures creativity and vocational skills, while Silambam enhances physical fitness, discipline, and self-defense.',
                },
                {
                  icon: '🤖',
                  title: 'Digital Literacy — AI Add-On Course',
                  text: 'Recognizing the importance of digital literacy, the college offers Artificial Intelligence (AI) as an add-on course after regular class hours. This initiative equips students with basic technological knowledge and prepares them for future career opportunities in a technology-driven world.',
                },
                {
                  icon: '🪙',
                  title: 'Research Orientation',
                  text: 'To encourage research orientation, the institution provides training in Kalvettu (epigraphy) and organizes exhibitions on Indian coins during Republic Day celebrations. These activities spark interest in history, archaeology, and research, helping students develop analytical and investigative skills.',
                },
                {
                  icon: '🌾',
                  title: 'Health Awareness — Fitness Club',
                  text: 'Health awareness is further promoted through the Fitness Club under the theme “Healthy Youth, Healthy India.” Students are sensitized to the nutritional value of cereals and millets. They prepare healthy millet-based food items and sell them during Republic Day celebrations, combining health education with entrepreneurship and community engagement.',
                },
                {
                  icon: '🏑',
                  title: 'Sports Culture & House System',
                  text: 'A distinctive feature of the institution is its strong sports culture. The entire student strength is divided into four sports houses, ensuring maximum participation in both on-campus and off-campus sports events. This house system motivates students to take part actively, discover their hidden talents, and develop teamwork and leadership skills. The institution firmly believes that participation itself is a powerful learning experience, and hence encourages even beginners to compete. As a result of these consistent efforts, the college has emerged as the champions in hockey for the last three consecutive years, bringing pride to the institution and boosting students’ confidence.',
                },
                {
                  icon: '🇮🇳',
                  title: 'National Values & Social Responsibility',
                  text: 'National values and social responsibility are integrated into campus life. On Independence Day and Republic Day, students donate saplings as a symbol of patriotism and environmental care. Such activities remind students of their responsibility toward the nation and the environment.',
                },
                {
                  icon: '🇮D',
                  title: 'institutional distinctiveness',
                  text: 'Overall, the institutional distinctiveness of SSKV College of Arts and Science for Women lies in its integrated model of education that blends sustainability, cultural heritage, wellness, skill development, entrepreneurship, research exposure, digital competence, and sports excellence. By nurturing both the mind and body through academics, Yoga, music, cultural practices, and athletics, the institution creates well-rounded, confident, and socially responsible women graduates. Through these initiatives, the college prepares students who are environmentally conscious, culturally rooted, physically fit, technologically skilled, mentally resilient, and socially responsible. This unique blend of tradition, innovation, and values makes SSKV College of Arts and Science for Women truly distinctive in its mission to empower women and contribute to nation-building.',
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
            {/* Annual Reports */}
<section id="annual-reports" className="section-padding bg-white">
  <div className="container-custom mx-auto">
    
    <SectionHeading
      title="Annual Reports"
      subtitle="Download the latest annual reports of SSKV College"
    />

    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
      
      <a
        href="/annual_report/annual-report-2022-23.docx" target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-primary-700 text-white rounded-lg shadow hover:bg-primary-800 transition font-semibold"
      >
        Annual Report 2022 - 23
      </a>

      <a
         href="/docs/annual-report-2023-24.docx" target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-primary-700 text-white rounded-lg shadow hover:bg-primary-800 transition font-semibold"
      >
        Annual Report 2023 - 24
      </a>

      <a href="/annual_report/annual-report-2024-25.docx" target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-primary-700 text-white rounded-lg shadow hover:bg-primary-800 transition font-semibold"
      >
        Annual Report 2024 - 25
      </a>

    </div>
  </div>
</section>
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
