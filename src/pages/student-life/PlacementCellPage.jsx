import { FaBriefcase, FaBuilding, FaHandshake, FaChartLine } from 'react-icons/fa';
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
                The Placement Cell of the college was established on 11 August 2010 with Ms. K. Krishnaveni as Alumnae & Placement Officer. 
                To strengthen the activities of the cell, the placement officer underwent training conducted by the University of Madras.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                The Dean actively supports the cell by conducting sessions on leadership and employability skills.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Students have successfully secured placements through campus drives conducted by leading companies like Wipro and TCS.
              </p>
            </div>
          </AnimatedSection>

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600">
                Empower every female student with skills, confidence, and a global outlook to build a successful career.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>Aim for 100% placement</li>
                <li>Bridge academics and industry</li>
                <li>Provide training in aptitude & HR skills</li>
                <li>Conduct mock interviews</li>
                <li>Build industry connections</li>
                <li>Enhance communication skills</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-8">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>Training in aptitude, technical, and soft skills</li>
                <li>Resume building and interview preparation</li>
                <li>Coordinate placement drives</li>
                <li>Career guidance support</li>
                <li>Encourage entrepreneurship</li>
                <li>Continuous improvement</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 🔥 EXCEL REPORT BUTTONS */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 text-center">
              <h3 className="font-bold text-primary-800 mb-4">Placement Reports</h3>
              <div className="flex flex-wrap justify-center gap-3">

                <a href="/excel/placement-2024.xlsx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">
                  Placement Report 2024
                </a>

                <a href="/excel/campus-selection-2023-2024.xlsx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">
                  2023–2024 Selected Student List
                </a>

                <a href="/excel/report-2020-2023.xlsx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">
                  2020–2023 Report
                </a>

                <a href="/excel/report-2021-2024.xlsx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">
                  2021–2024 Report
                </a>

                <a href="/excel/report-2022-2025.xlsx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">
                  2022–2025 Report
                </a>

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