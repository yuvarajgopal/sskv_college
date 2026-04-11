import Hero from '../components/shared/Hero'; 
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';
import { FaExternalLinkAlt } from 'react-icons/fa';

// ── Drive file IDs ─────────────────────────────────────
const documents = [
  { id: '116DGd9srNsKOicepw4kn3nqeokGdEalS', label: 'Entrepreneurship Development Cell (ED Cell) — Document 1' },
  { id: '1No5Rz1L8g70A3K9B4L90h1AnCz_p5BpO', label: 'Entrepreneurship Development Cell (ED Cell) — Document 2' },
  { id: '1k-0E9FRhbwy-7lH9mQDffmljB69EDEHu', label: 'Entrepreneurship Development Cell (ED Cell) — Document 3' },
];

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

          {/* 🔥 ADDED CONTENT STARTS HERE */}
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
                <li>
                  <strong>Workshops & Seminars:</strong> Sessions on startup fundamentals, marketing, finance, and digital tools.
                </li>
                <li>
                  <strong>Business Idea Competitions:</strong> Platforms for students to pitch ideas and gain feedback/support.
                </li>
                <li>
                  <strong>Mentorship & Networking:</strong> Interaction with industry experts, alumni, and entrepreneurs.
                </li>
                <li>
                  <strong>Training Programmes:</strong> Skill-building in leadership, communication, and business management.
                </li>
                <li>
                  <strong>Industrial Visits:</strong> Exposure to startups, incubators, and real-world business environments.
                </li>
              </ul>

              <p className="mt-3">
                These initiatives develop strategic thinking, problem-solving, teamwork, and leadership — essential qualities for entrepreneurship.
              </p>
            </div>

          </div>
          {/* 🔥 CONTENT ENDS HERE */}

          <div className="space-y-8 mt-10">
            {documents.map((doc, i) => (
              <AnimatedSection key={doc.id} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
                    <p className="font-semibold text-primary-800 font-heading text-sm">{doc.label}</p>
                    <a
                      href={`https://drive.google.com/file/d/${doc.id}/view`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-accent-600 transition-colors"
                    >
                      Open in Drive <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                  <div className="w-full" style={{ height: '520px' }}>
                    <iframe
                      src={`https://drive.google.com/file/d/${doc.id}/preview`}
                      title={doc.label}
                      className="w-full h-full border-0"
                      allow="autoplay"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
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