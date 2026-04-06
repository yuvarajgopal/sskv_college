import { FaDownload, FaFileAlt, FaFilePdf, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const downloads = [
  { title: 'UG Admission Application Form', desc: 'Application form for all undergraduate programmes (B.A., B.Sc., B.Com, BCA, BBA)', file: '/docs/admission-application-form.pdf' },
  { title: 'Prospectus 2025–26', desc: 'College prospectus with programme details, fee structure, and important information', file: '/docs/prospectus-2025-26.pdf' },
];

export default function DownloadApplicationPage() {
  return (
    <>
      <Hero
        title="Download Application"
        subtitle="Download admission forms and related documents"
        height="medium"
        breadcrumb="Admissions › Download Application"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Downloadable Forms" subtitle="Download the application form, fill it out, and submit it to the college office" />

          <div className="space-y-4 mb-12">
            {downloads.map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-center justify-between bg-neutral-50 border border-neutral-200 rounded-xl px-6 py-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                      <FaFilePdf className="text-red-500 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary-800 mb-1">{d.title}</h3>
                      <p className="text-neutral-600 text-sm">{d.desc}</p>
                    </div>
                  </div>
                  <a
                    href={d.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-semibold flex-shrink-0 ml-4"
                  >
                    <FaDownload />
                    Download
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 text-center">
              <FaFileAlt className="text-3xl text-primary-600 mx-auto mb-3" />
              <h3 className="font-heading font-bold text-primary-800 mb-2">Apply Online</h3>
              <p className="text-neutral-600 text-sm mb-4">You can also fill out the application form online for faster processing.</p>
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-400 text-primary-900 font-semibold rounded-lg hover:bg-accent-300 transition-colors text-sm"
              >
                Online Application <FaArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner title="Need Help with Admissions?" subtitle="Contact the college office for guidance on the admission process." />
    </>
  );
}
