import { FaBook, FaPen, FaMicrophone, FaFeatherAlt } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaPen, title: 'Creative Writing', desc: 'Essay writing, poetry composition, and short story competitions that nurture literary talents and creative expression.' },
  { icon: FaMicrophone, title: 'Elocution & Debates', desc: 'Public speaking events, debates, and extempore sessions that build confidence and communication skills.' },
  { icon: FaBook, title: 'Book Reading Programmes', desc: 'Book reviews, reading circles, and literary discussions that promote a culture of reading among students.' },
  { icon: FaFeatherAlt, title: 'Literary Events', desc: 'Organising literary festivals, poetry recitals, and storytelling sessions during college events and special occasions.' },
];

export default function LiteraryClubPage() {
  return (
    <>
      <Hero 
        title="Literary Club" 
        subtitle="Promoting reading, writing, elocution, and creative expression" 
        height="medium" 
        breadcrumb="Activities › Clubs › Literary Club" 
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="Literary Club" />

          {/* INTRO */}
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Literary Club of our college is a friendly space where our students come together to enjoy language, literature, and ideas. It brings together students from all departments and helps them grow into confident, clear-speaking and socially responsible individuals. The club gives special attention to first-generation learners and Tamil-medium students, encouraging them to express themselves and actively participate in campus activities.
            </p>
          </AnimatedSection>

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600">
                To create an open and welcoming literary community that helps students develop a genuine love for reading and writing, think critically and creatively, and express themselves with confidence and sensitivity.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To provide platforms for quizzes, debates, elocution, creative writing, skits, and reading circles.</li>
                <li>To introduce students to diverse texts—regional and global—and encourage discussion and expression.</li>
                <li>To develop student leadership through event planning and coordination.</li>
                <li>To support shy learners in overcoming language barriers and stage fear.</li>
                <li>To promote values like empathy, respect, gender equality, and social awareness.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-8">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To organize literary programmes and competitions every semester.</li>
                <li>To improve listening, speaking, reading, and writing skills.</li>
                <li>To encourage critical thinking through discussions and interpretation.</li>
                <li>To identify and nurture literary talent among students.</li>
                <li>To build teamwork and organisational skills through event participation.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* COMMITTEE TABLE */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 overflow-x-auto">
              <h3 className="font-bold text-primary-800 mb-4">Literary Club Members</h3>
              <table className="w-full text-sm text-left border border-neutral-200">
                <thead className="bg-primary-800 text-white">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Designation</th>
                    <th className="px-4 py-2">Committee Role</th>
                    <th className="px-4 py-2">Contact</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. H. Anusha</td>
                    <td className="px-4 py-2">HOD, Dept of English</td>
                    <td className="px-4 py-2">Coordinator</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. S. Janani</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Business Administration</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">S. Jayashree</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Commerce (CS)</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. T. Indrani</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Tamil</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">B. Kokila</td>
                    <td className="px-4 py-2">Asst Prof, Dept of English</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. M. Lavanya</td>
                    <td className="px-4 py-2">Asst Prof, Dept of Maths</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Literary Club" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {activities.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <a.icon className="text-3xl text-primary-700 mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2">{a.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Words Have Power" 
        subtitle="Join the Literary Club and explore the world of literature and creative expression." 
      />
    </>
  );
}