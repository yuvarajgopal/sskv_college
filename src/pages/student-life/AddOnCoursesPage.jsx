import { FaBookOpen, FaCalculator, FaLaptopCode, FaUsers } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const courses = [
  {
    icon: FaCalculator,
    title: 'Mathematics for Competitive Exam',
    short: 'MLR',
    desc: 'The department of Mathematics is offering a value added course in “Mathematics for Competitive Exams” spread over two semesters for all the I, II, and III year students.',
    dept: 'Department of Mathematics',
    color: '#8e44ad',
    objectives: [
      'The main aim of introducing “Quantitative Aptitude” for students is to develop skill to meet the competitive examinations for better job opportunity.',
      'Effort has been made to accommodate fundamental, mathematical aspects to install confidence among students.',
      'Enrich their knowledge and to develop their logical reasoning thinking ability.',
    ],
    outcomes: [
      'After successful completion of this course, students will have the knowledge and skills to solve the problems easily by using shortcut methods with time management.',
      'Analyze the problems logically and approach them in a different manner.',
    ],
  },

  {
    icon: FaLaptopCode,
    title: 'Web Designing',
    short: 'WD',
    desc: 'The departments of Computer Science and Computer Applications are offering a value added course in “Web Designing” for all III year students.',
    dept: 'Departments of Computer Science & Computer Applications',
    color: '#27ae60',
    objectives: [
      'Web Designing allows creating and building websites using various visual design elements.',
      'Provides multiple career opportunities with high employability in the IT industry.',
    ],
    outcomes: [
      'Develops creative and critical thinking abilities.',
      'Offers good career opportunities due to growth in online business.',
    ],
    placement: [
      'Front-End Developer',
      'Web Designer',
      'UI/UX Designer',
      'Freelance Web Developer',
      'Digital Marketing Executive',
    ],
  },

  {
    icon: FaUsers,
    title: 'Personality Development',
    short: 'BHRD',
    desc: 'The Department of B.Com Corporate Secretaryship offers a Personality Development Course to enhance students personality, professional skills, and confidence.',
    dept: 'Department of B.Com Corporate Secretaryship',
    color: '#3498db',
    objectives: [
      'To develop effective communication and interpersonal skills',
      'To boost self-confidence and presentation abilities',
      'To cultivate leadership qualities and teamwork',
      'To prepare students for professional challenges and interviews',
    ],
    outcomes: [
      'Participants will gain confidence, improve communication skills, and develop a professional demeanor.',
    ],
    benefits: [
      'Improved communication and soft skills',
      'Enhanced confidence and personality',
      'Better performance in interviews and group discussions',
      'Development of leadership and teamwork skills',
      'Increased employability in corporate sectors',
    ],
  },

  {
    icon: FaLaptopCode,
    title: 'Data Analytics using AI',
    short: 'DA-AI',
    desc: 'An innovative program designed to equip students with essential skills in analyzing data using Artificial Intelligence technologies.',
    dept: 'Department of BSc AI, BSc CS & BCA',
    color: '#27ae60',
    objectives: [
      'To introduce students to data analysis and AI concepts.',
      'To familiarize students with AI tools for data processing.',
      'To develop skills in analyzing and interpreting datasets.',
      'To build predictive models and derive insights.',
      'To encourage innovative problem-solving using AI.',
    ],
    outcomes: [], // removed as requested
  },

  {
    icon: FaLaptopCode,
    title: 'Practical Hands on Training courses',
    short: 'DA-AI',
    desc: 'Our Practical Hands-on Training Courses are designed to bridge the gap between theoretical knowledge and real-world application.',
    dept: 'Diploma in Aari Embroidery',
    color: '#27ae60',
    objectives: [
      'Gain practical exposure through real-world projects and live scenarios..',
      'Focus on developing industry-relevant skills rather than just theoretical knowledge.',
      'Learn directly from experienced professionals and industry experts.',
      'Engage in workshops, lab activities, and collaborative learning.',
      'Work on assignments and mini-projects to build a strong portfolio.',
    ],
    outcomes: [], // removed as requested
  },
  {
    icon: FaLaptopCode,
    title: 'Tally',
    short: 'DA-AI',
    desc: 'Tally course provides practical training in accounting, taxation, and financial management using Tally software. It helps students understand real-time business transactions, GST processes, and bookkeeping methods. This course is ideal for building strong accounting skills and preparing for careers in finance and commerce.',
    dept: 'Tally',
    color: '#27ae60',
    objectives: [
      'Hands-on experience in recording transactions, ledgers, and financial statements.',
      'Learn GST billing, returns filing, and tax calculations.',
      'Develop skills required for jobs like accountant, billing executive, and office admin.',
    ],
    outcomes: [], // removed as requested
  },
];

export default function AddOnCoursesPage() {
  return (
    <>
      <Hero
        title="Add-On Courses"
        subtitle="Skill enhancement programmes beyond the regular curriculum at SSKV College"
        height="medium"
        breadcrumb="Student Life › Add-On Courses"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading
            title="Add-On Courses Offered"
            subtitle="Certificate programmes designed to enhance employability and broaden students' skillsets"
          />

          <div className="space-y-5">
            {courses.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-neutral-50 rounded-2xl border border-neutral-100 p-6 flex items-start gap-5">
                  
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${c.color}15` }}
                  >
                    <c.icon style={{ color: c.color }} className="text-2xl" />
                  </div>

                  <div className="flex-1">
                    
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-primary-800 font-heading text-base">
                        {c.title}
                      </h3>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: c.color }}
                      >
                        {c.short}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-400 mb-2 font-medium">
                      {c.dept}
                    </p>

                    <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                      {c.desc}
                    </p>

                    {/* Learning Objectives */}
                    <div className="mb-2">
                      <h4 className="text-sm font-semibold text-primary-700 mb-1">
                        Learning Objectives
                      </h4>
                      <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-1">
                        {c.objectives.map((obj, index) => (
                          <li key={index}>{obj}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Learning Outcomes (only if exists) */}
                    {c.outcomes && c.outcomes.length > 0 && (
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-primary-700 mb-1">
                          Learning Outcomes
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-1">
                          {c.outcomes.map((out, index) => (
                            <li key={index}>{out}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Placement Opportunities (Web Designing only) */}
                    {c.placement && (
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-primary-700 mb-1">
                          Placement Opportunities
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-1">
                          {c.placement.map((p, index) => (
                            <li key={index}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Benefits to Students (Personality Development only) */}
                    {c.benefits && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary-700 mb-1">
                          Benefits to Students
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-1">
                          {c.benefits.map((b, index) => (
                            <li key={index}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Learn Beyond the Classroom"
        subtitle="Add-on courses at SSKV College bridge the gap between academics and real-world skills."
      />
    </>
  );
}