import { FaBuilding } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';
import { images } from '../data/media';

const institutions = [
  'S.S.K.V Higher Secondary School,6-7-8, Collah Chatram Street,Kanchipuram',
  'S.S.K.V Matriculation Girls Higher Secondary School, 124-125 West Raja Street,Kanchipuram.',
  'S.S.K.V Matriculation boys Higher Secondary School, 124-125 Kailasanather Tample Street,Kanchipuram.',
  'S.S.K.V Pre-Primary School, Mahanadu Dharmarayar Street,Kanchipuram.',
  'S.S.K.V Elementary School,A.B.C Kamakshi Amman West Mada Street,Kanchipuram',
];


export default function GroupInstitutionsPage() {
  return (
    <>
      <Hero
        title="Group of Institutions"
        subtitle="5 educational institutions under one trusted management"
        height="medium"
        breadcrumb="About Us › Group of Institutions"
        bannerImage={images.about.banner}
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Our Institutions"
            subtitle="A family of institutions dedicated to quality education at every level"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {institutions.map((inst, index) => (
              <AnimatedSection key={inst} delay={index * 0.08}>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-neutral-50 hover:bg-accent-50 transition-colors duration-300 border border-neutral-100">
                  <div className="w-12 h-12 rounded-lg bg-primary-700 flex items-center justify-center flex-shrink-0">
                    <FaBuilding className="text-white" />
                  </div>
                  <p className="font-semibold text-primary-800 text-sm">{inst}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Part of a Trusted Educational Family"
        subtitle="Join an institution backed by decades of commitment to quality education."
      />
    </>
  );
}
