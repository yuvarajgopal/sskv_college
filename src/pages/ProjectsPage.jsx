import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';
import { FaExternalLinkAlt } from 'react-icons/fa';


export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Projects"
        subtitle="Student and faculty research projects driving innovation and applied learning"
        height="medium"
        breadcrumb="Research & Development › Projects"
      />

    
         
 {/* Annual Reports */}
<section className="section-padding bg-white">
  <div className="container-custom mx-auto">
    
    <SectionHeading
      title="Research Projects"
      subtitle="Ongoing and completed projects by departments and research groups"
    />
  <h3 className="text-lg font-semibold text-primary-800 mb-6 text-center">
                Year-Wise Students Project List
              </h3>
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
    
      <a
        href="/rd_projects/2022-23_project.xlsx" target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-primary-700 text-white rounded-lg shadow hover:bg-primary-800 transition font-semibold"
      >
        2022 - 23
      </a>

      <a
          href="/rd_projects/2023-24_project.xlsx" target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-primary-700 text-white rounded-lg shadow hover:bg-primary-800 transition font-semibold"
      >
       2023 - 24
      </a>

      <a  href="/rd_projects/2024-25_project.xlsx" target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-primary-700 text-white rounded-lg shadow hover:bg-primary-800 transition font-semibold"
      >
       2024 - 25
      </a>

       <a  href="/rd_projects/2025-26_project.xlsx" target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-primary-700 text-white rounded-lg shadow hover:bg-primary-800 transition font-semibold"
      >
         2025 - 26
      </a>


    </div>
  </div>
</section>

  
      <CTABanner
        title="Explore & Innovate"
        subtitle="Our students and faculty work on meaningful projects that bridge classroom learning and real-world application."
      />
    </>
  );
}