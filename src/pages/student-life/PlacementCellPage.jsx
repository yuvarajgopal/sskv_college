import { FaBriefcase, FaBuilding, FaHandshake, FaChartLine, FaUserGraduate } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const milestones = [
  {
    year: 'June 2024',
    title: 'Nodal College for Placement Drives',
    desc: 'SSKV College selected as a Nodal College by the Government of Tamil Nadu for conducting placement drives.',
  },
  {
    year: 'September 2024',
    title: 'MOU with Infosys',
    desc: 'Signed MOU with Infosys enhancing industry-academia collaboration and placement opportunities.',
  },
  {
    year: 'December 2023',
    title: 'MOU with BHUMI',
    desc: 'Partnership with BHUMI strengthening student exposure to career paths.',
  },
];

const services = [
  { icon: FaBriefcase,  label: 'Campus Recruitment Drives' },
  { icon: FaBuilding,   label: 'Industry Visits & Exposure' },
  { icon: FaHandshake,  label: 'MOU with Industries' },
  { icon: FaChartLine,  label: 'Career Guidance & Counselling' },
];

const placementStats = [
  { year: '2022-2023', companies: 10, color: 'bg-blue-500' },
  { year: '2023-2024', companies: 15, color: 'bg-green-500' },
  { year: '2024-2025', companies: 18, color: 'bg-purple-500' },
  { year: '2025-2026', companies: 30, color: 'bg-yellow-500' },
];

const recruiters = [
  'echoVME', 'Verizon', 'Adenza', 'Airtel', 
  'Sutherland', 'Avasoft', 'LTIMindtree', 'SurveySparrow', 
  'PreludeSys', 'Adidas', 'Pickyourtrail', 'State Street', 'Goldman Sachs'
];

export default function PlacementCellPage() {
  return (
    <>
      <Hero
        title="Placement Cell"
        subtitle="Connecting SSKV graduates with leading employers and career opportunities"
        height="medium"
        breadcrumb="Student Life › Placement Cell"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">

          <SectionHeading 
            title="Placement Cell" 
            subtitle="Bridging academic excellence and professional success" 
          />

          {/* SERVICES */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="bg-primary-50 rounded-2xl p-5 text-center border border-primary-100 h-full">
                  <s.icon className="text-primary-700 text-2xl mx-auto mb-2" />
                  <p className="text-xs font-semibold text-primary-800 font-heading">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* OVERVIEW */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-8">
              <h3 className="font-bold text-primary-800 mb-3">Overview</h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                The placement cell of the college was established on 11 August 2010 with the sole aim of finding maximum number of placements for the students.  Ms.N.Ramya, Assistant Professor of Mathematics if the Placement Officer.  In 2025-26, 231 students received offer letters.  Every year, we organize Career Development Programmes, Skill Development Programmes  besides the usual training programmes.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                In the academic year 2011-2012 one more training programme was attended by the placement officer conducted by TCS, when 
                the University of Madras organized campus interviews for colleges. On 21st Jan, 2012, 58 students of our college took 
                part in the campus interview organized by Wipro technologies in which 285 students from thirteen colleges participated. 
                Out of these 285 students only ten cleared the first round and out of these ten, three were from our college. In the final 
                round of interview Papitha of BCA was selected for the job. When one considers that totally only three were finally selected, 
                this is a great achievement for the college.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                On 12th Feb, 2012 we sent 50 students of our college to participate in the campus interview organized by Tata Consultancy Services 
                for their BPO wing. Out of 1100 students three of our students cleared the first two rounds. Finally, A.Athilabanu of BCA was 
                selected for the job Since then the cell has been active by sensitizing the students to the importance of employability skills. 
                2013 a few students were placed in government and private sectors. Every year a one day programme on employability skills is 
                conducted for all the 3rd year students besides the usual training programmes.
              </p>
            </div>
          </AnimatedSection>

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600">
                Empower every female student with skills, confidence, and a global outlook so she can launch a successful career. 
                The placement cell aspires to boost employability, nurture professionalism, hard work, and integrity for women across all sectors.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>Aim for 100% placement by fostering dedication, positive attitude, and active participation of students.</li>
                <li>Bridge the gap between academic learning and industry demands through curated programs that build a solid professional foundation.</li>
                <li>Deliver company-specific training in technical, aptitude, and soft-skill areas, including mock interviews, group discussions, and HR preparation, using expert trainers</li>
                <li>Generate extensive placement opportunities, support off-campus drives, and build strong ties with industry and corporate partners.</li>
                <li>Enhance communication, soft skills, and career planning, while encouraging higher studies and competitive exams (CAT, GATE, GRE, etc.).</li>
                <li>Enhance communication skills</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-8">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>Skill Development: Provide targeted training in aptitude, technical, and soft skills, plus resume building and interview techniques.</li>
                <li> Industry Liaison: Invite companies for pre-placement talks, coordinate recruitment cycles, and maintain strong HR relationships.</li>
                <li>Student Support: Offer career counseling, resources for competitive exams, and facilitate on- and off-campus recruitment participation.</li>
                <li>Entrepreneurship: Encourage students to explore start-up ideas and business strategies, fostering a creator mindset.</li>
                <li>Monitoring & Improvement: Track placement statistics, gather feedback, and continuously refine training to meet evolving industry needs.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 🔥 EXCEL REPORT BUTTONS */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 text-center">
              <h3 className="font-bold text-primary-800 mb-4">Placement Reports</h3>
              <div className="flex flex-wrap justify-center gap-3">

                <a href="/pdfs/placement/placement_detail_2024.xlsx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm transition hover:bg-primary-700">
                  Placement Report 2024
                </a>

                <a href="/pdfs/placement/placement_detail_2024.xlsx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm transition hover:bg-primary-700">
                  2023–2024 Selected Student List
                </a>

                <a href="/pdfs//placement/2020_23.xlsx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm transition hover:bg-primary-700">
                  2020–2023 Report
                </a>

                <a href="/pdfs//placement/2021-24.xlsx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm transition hover:bg-primary-700">
                  2021–2024 Report
                </a>

                <a href="/pdfs//placement/2021-24.xlsx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm transition hover:bg-primary-700">
                  2022–2025 Report
                </a>

              </div>
            </div>
          </AnimatedSection>

          {/* PLACEMENT STATISTICS */}
          <SectionHeading title="Placement Statistics" subtitle="No of companies visited and No of Students Placed" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            <AnimatedSection delay={0.1}>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 h-full">
                <h3 className="font-bold text-primary-800 mb-6 text-center">No of Companies Visited</h3>
                <div className="space-y-4">
                  {placementStats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="w-20 text-sm font-semibold text-neutral-700">{stat.year}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                        <div 
                          className={`${stat.color} h-4 rounded-full`} 
                          style={{ width: `${(stat.companies / 30) * 100}%` }}
                        ></div>
                      </div>
                      <span className="w-8 text-sm font-bold text-primary-800 text-right">{stat.companies}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 h-full flex flex-col justify-center items-center text-center">
                <FaUserGraduate className="text-blue-500 text-5xl mb-4" />
                <h3 className="font-bold text-primary-800 mb-2">Students Placed Highlights</h3>
                <div className="mt-4">
                  <span className="block text-4xl font-extrabold text-primary-800">141</span>
                  <span className="block text-sm text-neutral-600 mt-1">Students placed in the 2021-2024 batch</span>
                </div>
              </div>
            </AnimatedSection>

          </div>

          {/* OUR RECRUITERS */}
          <SectionHeading title="Our Recruiters" subtitle="Leading companies hiring our talented students" />
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm mb-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recruiters.map((recruiter, i) => (
                  <div key={i} className="flex items-center justify-center p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:shadow-md transition-shadow">
                    <span className="font-bold text-neutral-700 text-center">{recruiter}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* MILESTONES */}
          <SectionHeading title="Key Milestones" />
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <span className="inline-block px-3 py-1 bg-primary-800 text-accent-400 text-xs font-bold rounded-full">
                    {m.year}
                  </span>
                  <div>
                    <h3 className="font-bold text-primary-800">{m.title}</h3>
                    <p className="text-sm text-neutral-600">{m.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      <CTABanner 
        title="Your Career Starts Here" 
        subtitle="The SSKV Placement Cell is committed to preparing students for a successful professional journey." 
      />
    </>
  );
}