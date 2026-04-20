import Hero from '../components/shared/Hero';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const events = [
  {
    date: 'September 2007',
    title: 'College Founded',
    description: 'College founded and temporarily functioned in school annexe in Collah Chatram street in Kanchipuram with Dr. S. Chandra as Principal in charge.',
  },
  {
    date: 'September 2008',
    title: 'B.Sc. Mathematics Introduced',
    description: 'B.Sc. (Mathematics) course introduced, expanding the academic offerings of the college.',
  },
  {
    date: 'February 2009',
    title: 'First Full-Fledged Principal',
    description: 'Dr. V. Rajagopalan appointed as the first full-fledged Principal of the college.',
  },
  {
    date: 'January 2010',
    title: 'New Campus at Kizhambi',
    description: 'College moved to its new premises at Kizhambi, providing a dedicated and fully equipped campus.',
  },
  {
    date: 'July 2010',
    title: 'Department Associations Created',
    description: 'Creation of Department Associations to foster academic engagement, student leadership, and co-curricular activities.',
  },
  {
    date: 'July 2011',
    title: 'First Graduation Day',
    description: 'First Graduation Day held with Mr. Somiyaji, Senior Advocate General of Tamil Nadu, as the Chief Guest.',
  },
  {
    date: 'September 2011',
    title: 'BBA & B.Com (A&F) Introduced',
    description: 'Introduction of new courses — BBA and B.Com (Accounting & Finance) — broadening the professional programme offerings.',
  },
  {
    date: 'January 2012',
    title: 'Tally Programme Launched',
    description: 'Inauguration of the Tally programme as part of the college\'s add-on courses, enhancing students\' accounting and software skills.',
  },
  {
    date: 'October 2012',
    title: 'Carnatic Music Association',
    description: 'Inauguration of the Carnatic Music Association and introduction of Carnatic Music as an add-on course, nurturing cultural heritage.',
  },
  {
    date: 'June 2013',
    title: 'New Principal Appointed',
    description: 'Dr. S. Rukmani appointed as the new Principal of the college.',
  },
  {
    date: 'August 2014',
    title: 'B.A. English & M.Com Introduced',
    description: 'B.A. English and M.Com courses introduced, adding Arts and Postgraduate level programmes to the college.',
  },
  {
    date: 'February 2015',
    title: 'Student Counsellor Appointed',
    description: 'Ms. Ritambhari M. appointed as Counsellor to support the mental health and well-being of students.',
  },
  {
    date: 'June 2015',
    title: 'New Canteen Inaugurated',
    description: 'New canteen inaugurated on campus, improving student facilities and campus life.',
  },
  {
    date: 'August 2015',
    title: 'B.A. Tamil Introduced',
    description: 'B.A. Tamil course introduced, strengthening the college\'s commitment to preserving classical Tamil language and literature.',
  },
  {
    date: 'February 2016',
    title: 'College Magazine Launched',
    description: '"Reflections," the college magazine, launched — providing a platform for student creativity, expression, and academic writing.',
  },
  {
    date: 'July 2019',
    title: 'B.Com (Corporate Secretaryship) Introduced',
    description: 'B.Com (Corporate Secretaryship) course introduced, equipping students with specialised corporate governance knowledge.',
  },
  {
    date: 'April 2021',
    title: 'New Principal Takes Charge',
    description: 'Dr.S.Rukmani resigned. Dr.K.Thirumamagal took over as a principal from the afternoon of 7 April 2021.',
  },
  {
    date: 'June 2021',
    title: 'EDC Spoke Institution',
    description: 'Our college became a spoke institution of the University of Madras Enterpreneurial Development Cell.',
  },
  {
    date: 'January 2022',
    title: 'Best College — District Collector Recognition',
    description: 'College selected as the Best College by the District Collector of Kanchipuram to sensitize higher secondary students on higher education.',
  },
  {
    date: 'July 2023',
    title: 'Shift II Programme Launched',
    description: 'Shift II introduced with three new courses — B.Com (General), B.Sc. (Computer Science), and BCA — providing flexible learning options.',
  },
  {
    date: 'July 2023',
    title: 'New Add-On Courses',
    description: 'Add-on courses in "Mathematics for Logical Reasoning" and "Web Designing" introduced by the Departments of Mathematics, Computer Science, and Computer Applications.',
  },
  {
    date: 'September 2023',
    title: 'AZONE Women\'s Tournament',
    description: 'College enrolled in the AZONE Women Tournament of the University of Madras. Winners went on to represent at the state level in sports.',
  },
  {
    date: 'December 2023',
    title: 'MOU with BHUMI',
    description: 'MOU signed with BHUMI, India\'s Largest Youth Volunteer Organisation, strengthening social responsibility and community engagement.',
  },
  {
    date: 'June 2024',
    title: 'Value-Added Courses Introduced',
    description: 'Introduction of value-added courses in Carnatic Music, Yoga, and Silambam — promoting cultural, physical, and mental well-being.',
  },
  {
    date: 'June 2024',
    title: 'Nodal College for Placement Drives',
    description: 'College selected as a Nodal College by the Government of Tamil Nadu for conducting placement drives for final-year students across colleges in Kanchipuram.',
  },
  {
    date: 'July 2024',
    title: 'New Shift I Courses',
    description: 'Introduction of new Shift I courses — B.Sc. (Criminology and Criminal Justice Science), B.Sc. (Computer Science with Artificial Intelligence), and M.A. (English).',
  },
  {
    date: 'September 2024',
    title: 'MOU with Infosys',
    description: 'MOU signed with Infosys, one of India\'s leading IT companies, enhancing industry-academia collaboration and placement opportunities.',
  },
];

export default function CollegeTimelinePage() {
  return (
    <>
      <Hero
        title="College Timeline"
        subtitle="A journey of growth, achievement, and unwavering commitment to women's education"
        height="medium"
        breadcrumb="About Us › College Timeline"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-400 via-primary-400 to-primary-200" />

            <div className="space-y-8">
              {events.map((event, i) => (
                <AnimatedSection key={i} delay={Math.min(i * 0.04, 0.4)}>
                  <div className="flex items-start gap-6 pl-2">
                    {/* Dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary-800 border-4 border-white shadow-lg flex items-center justify-center z-10 relative">
                        <div className="w-2 h-2 rounded-full bg-accent-400" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-neutral-50 hover:bg-accent-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 shadow-sm -mt-1">
                      <span className="inline-block px-3 py-1 bg-primary-800 text-accent-400 text-xs font-bold rounded-full mb-2.5 font-heading tracking-wide">
                        {event.date}
                      </span>
                      <h3 className="text-base font-bold text-primary-800 font-heading mb-1.5">
                        {event.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Be Part of Our Continuing Story"
        subtitle="Join SSKV College and write the next chapter in our journey of excellence."
      />
    </>
  );
}
