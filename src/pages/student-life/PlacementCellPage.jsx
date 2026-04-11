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
  { icon: FaBriefcase, label: 'Campus Recruitment Drives' },
  { icon: FaBuilding, label: 'Industry Visits & Exposure' },
  { icon: FaHandshake, label: 'MOU with Industries' },
  { icon: FaChartLine, label: 'Career Guidance & Counselling' },
];

const placementStats = [
  { year: '2022-2023', companies: 10, color: 'bg-blue-500' },
  { year: '2023-2024', companies: 15, color: 'bg-green-500' },
  { year: '2024-2025', companies: 18, color: 'bg-purple-500' },
  { year: '2025-2026', companies: 30, color: 'bg-yellow-500' },
];

// ✅ UPDATED STRUCTURE (READY FOR LOGOS)
const recruiters = [
  { name: 'Adidas', logo: '/images/placement_cel/addias.jpg' },
  { name: 'Adenza', logo: '/images/placement_cel/advenza.jpg' },
  { name: 'Airtel', logo: '/images/placement_cel/airtel.jpg' },
  { name: 'Avasoft', logo: '/images/placement_cel/avsoft.jpg' },
  { name: 'echoVME', logo: '/images/placement_cel/echo.jpg' },
  { name: 'Goldman Sachs', logo: '/images/placement_cel/gold_sachs.jpg' },
  { name: 'LTIMindtree', logo: '/images/placement_cel/LT_tree.jpg' },
  { name: 'PreludeSys', logo: '/images/placement_cel/prelude.jpg' },
  { name: 'State Street', logo: '/images/placement_cel/state.jpg' },
  { name: 'SurveySparrow', logo: '/images/placement_cel/survey.jpg' },
  { name: 'Sutherland', logo: '/images/placement_cel/sutherland.jpg' },
  { name: 'Verizon', logo: '/images/placement_cel/verizon.jpg' },
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
                The placement cell of the college was established on 11 August 2010 with the sole aim of finding maximum number of placements for the students. Ms.N.Ramya, Assistant Professor of Mathematics is the Placement Officer. In 2025-26, 231 students received offer letters.
              </p>
            </div>
          </AnimatedSection>

          {/* PLACEMENT STATISTICS */}
          <SectionHeading title="Placement Statistics" subtitle="No of companies visited and No of Students Placed" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

            <AnimatedSection>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                {placementStats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 mb-3">
                    <span className="w-24 text-sm">{stat.year}</span>
                    <div className="flex-1 bg-gray-200 h-3 rounded">
                      <div className={`${stat.color} h-3 rounded`} style={{ width: `${(stat.companies / 30) * 100}%` }} />
                    </div>
                    <span>{stat.companies}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 text-center">
                <FaUserGraduate className="text-5xl text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold text-primary-800">Students Placed</h3>
                <p className="text-3xl font-bold text-primary-800">141</p>
              </div>
            </AnimatedSection>

          </div>

          {/* 🔥 UPDATED RECRUITERS SECTION */}
          <SectionHeading title="Our Recruiters" subtitle="Leading companies hiring our talented students" />

          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm mb-12">

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">

                {recruiters.map((r, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:shadow-md transition w-[140px]"
                  >

                    {/* LOGO BOX */}
                    <div className="w-[120px] h-[60px] flex items-center justify-center bg-white rounded-md overflow-hidden">
                      {r.logo ? (
                        <img
                          src={r.logo}
                          alt={r.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <span className="text-xs text-neutral-400">Add Logo</span>
                      )}
                    </div>

                    {/* NAME */}
                    <p className="text-xs font-semibold text-neutral-700 text-center mt-2">
                      {r.name}
                    </p>

                  </div>
                ))}

              </div>
            </div>
          </AnimatedSection>

          {/* MILESTONES */}
          <SectionHeading title="Key Milestones" />
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <AnimatedSection key={i}>
                <div className="flex items-start gap-4 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <span className="px-3 py-1 bg-primary-800 text-white text-xs rounded-full">
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