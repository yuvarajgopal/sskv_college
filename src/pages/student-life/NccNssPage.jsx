import { FaFlag, FaHandsHelping, FaLeaf, FaHeart } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const nssInfo = {
  coordinator: 'Dr. B. Amudha',
  qualification: 'M.Sc., M.Phil., Ph.D., Assistant Professor',
  dept: 'Department of Mathematics',

  about: `Our NSS is very active and organizes lectures and events that sensitize students to the values promoted globally by NSS. Every year, our students participate in the Geneva competition organized by the University of Madras. 

Tree planting, organizing awareness rallies, and fieldwork are some of the key programmes carried out regularly. The unit is guided by a dedicated team under the leadership of the NSS Coordinator.`,

  activities: [
    {
      title: "NSS Activities (June 2018 – March 2019)",
      content: `The NSS aims to develop the inner potential of students and transform them into socially responsible individuals. Regular activities and special camps are conducted focusing on educational, social, and community development.

The unit actively engages in cleanliness drives, tree plantation, and social service activities in the adopted village Kooram, Kanchipuram.`,
      points: [
        "100 students enrolled as NSS volunteers for the academic year 2018–2019",
        "Cleanliness drives conducted in college premises, canteen, and garden",
        "Plantation of around 60 saplings within the campus"
      ]
    },
    {
      title: "Swachh Bharat Mission Program (1–15 September)",
      content: `Swachh Bharat Abhiyan is a Government of India initiative aimed at ensuring cleanliness and sanitation across the nation. The programme promotes the vision of a clean and healthy India.

Under this initiative, NSS volunteers organized “Swachhta Pakhwada” from 1st to 15th September to create awareness about hygiene and sanitation among students and the surrounding community.`,
      points: [],
      extra: `Every year, a series of activities highlight the active NSS calendar. These initiatives stand as a testament to the commitment and contribution of our volunteers towards society.`
    }
  ],
};

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