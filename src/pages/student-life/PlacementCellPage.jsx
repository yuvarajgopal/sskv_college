import { FaBriefcase, FaBuilding, FaHandshake, FaChartLine, FaUserGraduate } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
  { year: '2022-23', students: 79,  companies: 6  },
  { year: '2023-24', students: 141, companies: 12 },
  { year: '2024-25', students: 221, companies: 15 },
  { year: '2025-26', students: 231, companies: 30 },
];

const recruiters = [
  { name: 'HDB', logo: '/images/placement_cel/HDB.jpg' },
  { name: 'Allins', logo: '/images/placement_cel/allins.jpg' },
  { name: 'quess', logo: '/images/placement_cel/quess.jpg' },
  { name: 'cafs', logo: '/images/placement_cel/cafs.jpg' },
  { name: 'flezo', logo: '/images/placement_cel/flezo.jpg' },
  { name: 'izeon', logo: '/images/placement_cel/izeon.jpg' },
  { name: 'ienergnier', logo: '/images/placement_cel/ienergnier.jpg' },
  { name: 'Systopic', logo: '/images/placement_cel/s.jpg' },
  { name: 'source_corp', logo: '/images/placement_cel/source_corp.jpg' },
  { name: 'Cavinkare', logo: '/images/placement_cel/cavincare.jpg' },
  { name: 'forte', logo: '/images/placement_cel/forte.jpg' },
  { name: '247', logo: '/images/placement_cel/247.jpg' },
  { name: 'talent trenz', logo: '/images/placement_cel/talent.jpg' },
  { name: 'mmc', logo: '/images/placement_cel/mmc.jpg' },
  { name: 'india_cement', logo: '/images/placement_cel/india_cement.jpg' },
  { name: 'AlfaPTE', logo: '/images/placement_cel/a.jpg' },
  { name: 'tatamotors', logo: '/images/placement_cel/tatamotors.jpg' },
  { name: 'medlplus', logo: '/images/placement_cel/medlplus.jpg' },
  { name: 'Mastermind', logo: '/images/placement_cel/mm.jpg' },
  { name: 'delivede', logo: '/images/placement_cel/delivede.jpg' },
  { name: 'sbi_life', logo: '/images/placement_cel/sbi_life.jpg' },
  { name: 'v4u', logo: '/images/placement_cel/v4u.jpg' },
  { name: 'ison', logo: '/images/placement_cel/ison.jpg' },
  { name: 'cameo', logo: '/images/placement_cel/cameo.jpg' },
  { name: 'equitas', logo: '/images/placement_cel/equitas.jpg' },
  { name: 'indus', logo: '/images/placement_cel/indus.jpg' },
  { name: 'muhoot', logo: '/images/placement_cel/muhoot.jpg' }
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
                  <p className="text-xs font-semibold text-primary-800 font-heading">
                    {s.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* OVERVIEW */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-8">
              <h3 className="font-bold text-primary-800 mb-3">Overview</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The placement cell of the college was established on 11 August 2010 with the aim of ensuring maximum placements. In 2025-26, 231 students received offer letters.
              </p>
            </div>
          </AnimatedSection>

          {/* STATS */}
          <SectionHeading
            title="Placement Statistics"
            subtitle="Students placed and companies visited per academic year"
          />

          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-12">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={placementStats} margin={{ top: 10, right: 20, left: 0, bottom: 5 }} barCategoryGap="30%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" tick={{ fontSize: 13, fill: '#374151' }} />
                  <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} />
                  <Tooltip
                    contentStyle={{ borderRadius: '10px', border: '1px solid #e5e7eb', fontSize: 13 }}
                    formatter={(value, name) => [value, name === 'students' ? 'Students Placed' : 'Companies Visited']}
                  />
                  <Legend formatter={(value) => value === 'students' ? 'Students Placed' : 'Companies Visited'} />
                  <Bar dataKey="students" fill="#1e3a5f" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="companies" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>

          {/* RECRUITERS */}
          <SectionHeading
            title="Our Recruiters"
            subtitle="Leading companies hiring our talented students"
          />

          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm mb-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                {recruiters.map((r, i) => (
                  <div key={i} className="flex flex-col items-center p-4 bg-neutral-50 rounded-xl border border-neutral-100 w-[140px]">
                    <img src={r.logo} alt={r.name} className="h-12 object-contain mb-2" />
                    <p className="text-xs font-semibold text-neutral-700 text-center">{r.name}</p>
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