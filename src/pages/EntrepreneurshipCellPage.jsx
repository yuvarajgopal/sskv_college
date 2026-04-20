import Hero from '../components/shared/Hero'; 
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';
import { FaExternalLinkAlt } from 'react-icons/fa';

// ✅ Updated Documents (PDF Links)
const documents = [
  { file: '/pdfs/2022_23_ed_cell.pdf', label: '2022-23 ED CELL' },
  { file: '/pdfs/2023_24_ed_cell.pdf', label: '2023-24 ED CELL' },
  { file: '/pdfs/2025_26_ed_cell.pdf', label: '2025-26 ED CELL' },
];

// ✅ Coordinator Data (clean separation — scalable)
const coordinator = {
  name: 'MAHALAKSHMI M',
  designation: 'Assistant Professor',
  department: 'Department of Commerce',
  qualification: 'M.Com., B.Ed., M.Phil.',
  image: '/images/ed_cell/mahalakshmi.jpg', // 🔁 replace with actual path
};

export default function EntrepreneurshipCellPage() {
  return (
    <>
      <Hero
        title="Entrepreneurship Development Cell (ED Cell)"
        subtitle="Nurturing entrepreneurial spirit and innovation among students at SSKV College"
        height="medium"
        breadcrumb="Research & Development › Entrepreneurship Development Cell (ED Cell)"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          
          <SectionHeading
            title="Entrepreneurship Development Cell"
            subtitle="Activities, programmes, and initiatives fostering entrepreneurship"
          />

          {/* CONTENT */}
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6 space-y-6 text-neutral-700 leading-relaxed">
            
            <p>
              The Entrepreneurship Development Cell is designed to foster entrepreneurial spirit among students, 
              particularly empowering women to think creatively and pursue business ventures alongside their academic pursuits. 
              By embedding entrepreneurial skills into the academic environment, the college supports students’ holistic 
              development and readiness for the rapidly evolving job market — whether they choose to start their own ventures 
              or excel in established organisations.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Purpose and Vision</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Instil entrepreneurial thinking and innovation mindset among students</li>
                <li>Provide guidance in business planning, idea validation, and startup strategies</li>
                <li>Empower women to become job creators through skill development</li>
              </ul>
              <p className="mt-2">
                The vision is to nurture confident, creative, and self-reliant entrepreneurs contributing to society and economy.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Activities and Programmes</h3>

              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Workshops & Seminars:</strong> Sessions on startup fundamentals, marketing, finance, and digital tools.</li>
                <li><strong>Business Idea Competitions:</strong> Platforms for students to pitch ideas and gain feedback/support.</li>
                <li><strong>Mentorship & Networking:</strong> Interaction with industry experts, alumni, and entrepreneurs.</li>
                <li><strong>Training Programmes:</strong> Skill-building in leadership, communication, and business management.</li>
                <li><strong>Industrial Visits:</strong> Exposure to startups, incubators, and real-world business environments.</li>
              </ul>

              <p className="mt-3">
                These initiatives develop strategic thinking, problem-solving, teamwork, and leadership — essential qualities for entrepreneurship.
              </p>
            </div>

          </div>

          {/* 🔥 NEW: COORDINATOR SECTION */}
          <div className="mt-12">
            <SectionHeading title="ED Cell Coordinator" />

            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-md border border-neutral-200 p-6 flex flex-col md:flex-row items-center gap-6">
                
                {/* Image */}
                <div className="w-32 h-32 rounded-xl overflow-hidden border border-neutral-200">
                  <img
                    src={coordinator.image}
                    alt={coordinator.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-primary-800">{coordinator.name}</h3>
                  <p className="text-sm text-neutral-600 mt-1">{coordinator.designation}</p>
                  <p className="text-sm text-neutral-500">{coordinator.department}</p>

                  <div className="mt-3">
                    <p className="text-xs uppercase text-neutral-400 font-semibold mb-1">Qualification</p>
                    <p className="text-sm text-neutral-700">{coordinator.qualification}</p>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          </div>

          {/* ✅ BUTTON SECTION */}
          <div className="mt-10 text-center">
            <SectionHeading title="ED Cell Reports" />

            <div className="flex flex-col items-center gap-4 mt-6">
              {documents.map((doc, i) => (
                <AnimatedSection key={i}>
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-72 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition font-semibold text-sm"
                  >
                    {doc.label} <FaExternalLinkAlt className="text-xs" />
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTABanner
        title="Start Your Entrepreneurial Journey"
        subtitle="SSKV College is a Spoke Institution of the University of Madras Entrepreneurial Development Cell."
      />
    </>
  );
}