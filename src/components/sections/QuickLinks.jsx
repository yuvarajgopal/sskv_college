import AnimatedSection from '../shared/AnimatedSection';
import SectionHeading from '../shared/SectionHeading';

const links = [
  {
    label: 'UGC',
    fullName: 'University Grants Commission',
    url: 'https://www.ugc.ac.in',
    color: 'bg-blue-600',
    abbr: 'UGC',
  },
  {
    label: 'MHRD',
    fullName: 'Ministry of Education',
    url: 'https://www.education.gov.in',
    color: 'bg-green-700',
    abbr: 'MOE',
  },
  {
    label: 'SWAYAM',
    fullName: 'Free Online Education',
    url: 'https://swayam.gov.in',
    color: 'bg-orange-600',
    abbr: 'SW',
  },
  {
    label: 'e-PG Patshala',
    fullName: 'Post-Graduate e-Resources',
    url: 'https://epgp.inflibnet.ac.in',
    color: 'bg-purple-600',
    abbr: 'ePG',
  },
  {
    label: 'University of Madras',
    fullName: 'Affiliating University',
    url: 'https://www.unom.ac.in',
    color: 'bg-red-700',
    abbr: 'UoM',
  },
  {
    label: 'NDLI',
    fullName: 'National Digital Library of India',
    url: 'https://ndl.iitkgp.ac.in',
    color: 'bg-teal-600',
    abbr: 'NDLI',
  },
  {
    label: 'Digital India',
    fullName: 'Government Digital Initiative',
    url: 'https://www.digitalindia.gov.in',
    color: 'bg-indigo-600',
    abbr: 'DI',
  },
  {
    label: 'NAAC',
    fullName: 'National Assessment & Accreditation Council',
    url: 'https://www.naac.gov.in',
    color: 'bg-amber-600',
    abbr: 'NAAC',
  },
];

export default function QuickLinks() {
  return (
    <section className="section-padding bg-primary-900">
      <div className="container-custom mx-auto">
        <SectionHeading
          title="Important Links"
          subtitle="Access government and educational portals for academic resources and information"
          light
        />
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-accent-400/50 transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 rounded-xl ${link.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-sm">{link.abbr}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight group-hover:text-accent-400 transition-colors">
                    {link.label}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5 leading-tight">{link.fullName}</p>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
