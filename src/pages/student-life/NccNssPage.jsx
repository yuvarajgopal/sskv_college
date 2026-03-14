import { FaFlag, FaHandsHelping, FaLeaf, FaHeart } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const nssInfo = {
  coordinator: 'Dr. B. Amudha',
  qualification: 'M.Sc., M.Phil., Ph.D., Assistant Professor',
  dept: 'Department of Mathematics',
  about: 'The National Service Scheme (NSS) at SSKV College encourages students to participate in community service, social outreach, and national development activities. Through NSS, students develop leadership, social responsibility, and civic consciousness while contributing meaningfully to society.',
  activities: [
    'Community service and village adoption programmes',
    'Health awareness and free medical camps',
    'Environmental conservation and tree plantation drives',
    'Blood donation camps and awareness campaigns',
    'Literacy and adult education initiatives',
    'NSS special camps and residential programmes',
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
                <p className="text-neutral-600 leading-relaxed mb-6">{nssInfo.about}</p>
                <h3 className="text-base font-bold text-primary-800 font-heading mb-3">Activities</h3>
                <div className="space-y-2">
                  {nssInfo.activities.map((a, i) => (
                    <div key={i} className="flex items-start gap-3 bg-neutral-50 rounded-lg px-4 py-3 border border-neutral-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0 mt-2" />
                      <span className="text-sm text-neutral-700">{a}</span>
                    </div>
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
                  { icon: FaLeaf,         label: 'Environment' },
                  { icon: FaHeart,        label: 'Health Camps' },
                  { icon: FaFlag,         label: 'NSS Camps' },
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

      <CTABanner title="Serve. Lead. Grow." subtitle="NSS at SSKV College shapes students into compassionate, responsible citizens." />
    </>
  );
}
