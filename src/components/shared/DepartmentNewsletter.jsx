import { FaDownload, FaClipboardList } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

export default function DepartmentNewsletter({ departmentName, pdfHref, bgClass = 'bg-neutral-50' }) {
  const headline = `${departmentName} Newsletter`;
  return (
    <section id="newsletter" className={`section-padding ${bgClass}`}>
      <div className="container-custom mx-auto">
        <SectionHeading
          title="Newsletter"
          subtitle="Department news, achievements, and highlights"
        />
        <AnimatedSection>
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FaClipboardList className="text-3xl text-primary-700" />
              <div>
                <h3 className="font-heading font-bold text-lg text-primary-800">{headline}</h3>
                <p className="text-neutral-500 text-sm">Latest edition with department updates</p>
              </div>
            </div>
            <p className="text-neutral-600 leading-relaxed mb-4">
              The {departmentName} Newsletter showcases curricular and co-curricular activities, faculty
              and student achievements, events, and other notable happenings of the department. Download
              the latest edition to stay updated on our journey.
            </p>
            <a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-800 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm"
            >
              <FaDownload />
              Download {headline}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
