import { FaFlag, FaHandsHelping, FaLeaf, FaHeart, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const nssInfo = {
  coordinator: 'Dr. B. Amudha',
  qualification: 'M.Sc., M.Phil., Ph.D., Assistant Professor',
  dept: 'Department of Mathematics',

  about: `Our NSS is very active and organizes lectures, events sensitizing our students to the values that the NSS perpetuates globally. Every year our students participate in the Geneva competition organized by the University of Madras. Tree planting, organizing rallies for spreading messages and field work are some of the programmes that cover our yearly itinerary. We have a very able NSS Coordinator is Ms. EZHILARASI, Assistant Professor of MATHEMATICS. 

  THE NSS ACTIVITIES UNDERTAKEN FROM JUNE 2018 TO MARCH 2019.`,

  activities: [
    {
      title: "REPORT ON REGULAR ACTIVITIES",
      content: `The NSS aims in developing the inner potentialities and transforming the students mentally to fit into the society to which he/she belongs.`,
      points: [
        "Total 100 students enrolled as NSS volunteers.",
        "Cleanliness drives in campus and surroundings.",
        "About 60 plants planted in the college premises."
      ]
    },
    {
      title: "SWACHH BHARAT MISSION PROGRAM",
      content: `Swachh Bharat Abhiyan aims to make India clean and promote sanitation awareness among citizens.`,
      points: [],
      extra: `NSS volunteers actively participated in spreading awareness on cleanliness.`
    }
  ],
};

// 🔥 PDF Buttons Data (Update links here)
const reports = [
  { title: 'NSS Annual Report 2020 - 2025', link: '/pdfs/nss/NSS Annual Report 2022-2025.pdf' },
  { title: 'NSS Annual Report 2025 - 2026', link: '/pdfs/nss/NSS Annual Report 2023-2024.pdf' },
  { title: 'NSS Special Camp Report 2024', link: '/pdfs/nss/nss_special_camp_2024.pdf' },
  { title: 'NSS Special Camp Report 2025', link: '/pdfs/nss/nss_special_camp_2025.pdf' },
  { title: 'NSS Special Camp Report 2026', link: '/pdfs/nss/nss_special_camp_2025_26.pdf' },
];

export default function NccNssPage() {
  return (
    <>
      <Hero
        title="NCC / NSS"
        subtitle="Serving the nation through discipline, dedication, and community involvement"
        height="medium"
        breadcrumb="Student Life › NCC / NSS"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="National Service Scheme (NSS)" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                
                {/* About Section */}
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
                  <h3 className="font-bold text-primary-800 mb-2">About NSS</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
                    {nssInfo.about}
                  </p>
                </div>

                {/* Activities */}
                <h3 className="text-base font-bold text-primary-800 font-heading mb-3">Activities</h3>

                <div className="space-y-4">
                  {nssInfo.activities.map((a, i) => (
                    <AnimatedSection key={i}>
                      <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">

                        <h3 className="font-bold text-primary-800 mb-2">{a.title}</h3>

                        <p className="text-sm text-neutral-600 mb-3 whitespace-pre-line">
                          {a.content}
                        </p>

                        {a.points.length > 0 && (
                          <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                            {a.points.map((p, idx) => (
                              <li key={idx}>{p}</li>
                            ))}
                          </ul>
                        )}

                        {a.extra && (
                          <p className="text-sm text-neutral-600 mt-4 whitespace-pre-line">
                            {a.extra}
                          </p>
                        )}

                        {/* 🔥 INSERT BUTTONS ONLY AFTER SWACHH BHARAT */}
                        {a.title === "SWACHH BHARAT MISSION PROGRAM" && (
                          <div className="mt-6">
                            <h4 className="text-sm font-bold text-primary-800 mb-3">NSS Reports</h4>

                            <div className="grid sm:grid-cols-2 gap-4">
                              {reports.map((r, idx) => (
                                <a
                                  key={idx}
                                  href={r.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition"
                                >
                                  <FaFilePdf className="text-red-600 text-lg" />
                                  <span className="text-sm font-medium text-neutral-700">{r.title}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                    </AnimatedSection>
                  ))}
                </div>

              </AnimatedSection>
            </div>

            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white">
                <p className="text-accent-400 text-xs font-bold uppercase tracking-wide mb-3">NSS Coordinator</p>
                <h3 className="text-lg font-bold font-heading">{nssInfo.coordinator}</h3>
                <p className="text-white/60 text-xs mt-1">{nssInfo.qualification}</p>
                <p className="text-white/50 text-xs mt-0.5">{nssInfo.dept}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  { icon: FaHandsHelping, label: 'Community Service' },
                  { icon: FaLeaf, label: 'Environment' },
                  { icon: FaHeart, label: 'Health Camps' },
                  { icon: FaFlag, label: 'NSS Camps' },
                ].map((item, i) => (
                  <div key={i} className="bg-primary-50 rounded-xl p-4 text-center border border-primary-100">
                    <item.icon className="text-primary-700 text-xl mx-auto mb-1.5" />
                    <p className="text-xs font-semibold text-primary-800">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      <CTABanner
        title="Serve. Lead. Grow."
        subtitle="NSS at SSKV College shapes students into compassionate, responsible citizens."
      />
    </>
  );
}