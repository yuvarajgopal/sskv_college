import { FaFlag, FaHandsHelping, FaLeaf, FaHeart, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const nssInfo = {
  coordinator: 'Dr. C.Sudha',
  qualification: 'MCA.,M.Phil.,Ph.D., Assistant Professor',
  dept: 'Department of Computer Science',

  vision: `To nurture socially committed and empowered women leaders who actively contribute to community development, uphold human values, and participate in nation-building through dedicated service.`,

  mission: [
    'To empower young women through meaningful community engagement and service-learning.',
    'To inculcate values of social responsibility, compassion, and leadership among students.',
    'To address local community needs in and around Kanchipuram through organized outreach programmes.',
    'To promote awareness on health, hygiene, women empowerment, education, and environmental sustainability.',
    'To encourage active participation in national initiatives, fostering unity, discipline, and democratic values.',
    'To develop self-confidence, teamwork, and decision-making skills among volunteers.',
  ],

  objectives: [
    'To understand the socio-economic conditions of rural and urban communities in and around Kanchipuram.',
    'To identify and work on issues such as women empowerment, literacy, health awareness, and environmental protection.',
    'To develop a sense of civic responsibility and commitment to social service among students.',
    'To involve students in community-based projects such as village adoption, cleanliness drives, and awareness campaigns.',
    'To enhance leadership qualities and organizational skills through NSS activities and camps.',
    'To promote gender equality and upliftment of women through focused programmes.',
    'To create awareness about government schemes and social welfare initiatives among the public.',
    'To encourage participation in national programmes like Swachh Bharat, Digital India, and Fit India Movement.',
    'To prepare students to respond effectively during emergencies and natural disasters.',
    'To foster national integration, communal harmony, and ethical values.',
  ],
};

const reports = [
  { title: 'NSS Annual Report 2020 - 2025', link: '/pdfs/nss/NSS Annual Report 2022-2025.pdf' },
  { title: 'NSS Annual Report 2025 - 2026', link: '/pdfs/nss/NSS Annual Report 2023-2024.pdf' },
  { title: 'NSS Special Camp Report 2024', link: '/pdfs/nss/nss_special_camp_2024.pdf' },
  { title: 'NSS Special Camp Report 2025', link: '/pdfs/nss/nss_special_camp_2025.pdf' },
  { title: 'NSS Special Camp Report 2026', link: '/pdfs/nss/nss_special_camp_2025_26.pdf' },
   { title: 'NSS Newsletter 2026', link: '/pdfs/nss/nss-newletter.pdf' },
];

function BulletBlock({ title, items }) {
  return (
    <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
      <h2 className="font-bold text-primary-800 mb-3">{title}</h2>
      <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2 leading-relaxed">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function NccNssPage() {
  return (
    <>
      <Hero
        title="NSS"
        subtitle="Serving the nation through discipline, dedication, and community involvement"
        height="medium"
        breadcrumb="Student Life › NSS"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="National Service Scheme (NSS)" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">

                {/* Vision */}
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
                  <h2 className="font-bold text-primary-800 mb-2">Vision</h2>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {nssInfo.vision}
                  </p>
                </div>

                {/* Mission */}
                <div className="mb-6">
                  <BulletBlock title="Mission" items={nssInfo.mission} />
                </div>

                {/* Objectives */}
                <div className="mb-6">
                  <BulletBlock title="Objectives" items={nssInfo.objectives} />
                </div>

                {/* NSS Reports */}
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <h3 className="font-bold text-primary-800 mb-3">NSS Reports</h3>
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

              </AnimatedSection>
            </div>

            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white">
                <p className="text-accent-400 text-xs font-bold uppercase tracking-wide mb-3">NSS Programme Officer</p>
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
