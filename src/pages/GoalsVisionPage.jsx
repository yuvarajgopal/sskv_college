import { FaEye, FaBullseye } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';
import { images } from '../data/media';

export default function GoalsVisionPage() {
  return (
    <>
      <Hero
        title="Goals & Vision"
        subtitle="Our aspirations and guiding principles for women's education"
        height="medium"
        breadcrumb="About Us › Goals & Vision"
        bannerImage={images.about.banner}
      />

      {/* Goals */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Our Goals"
            subtitle="Short-term milestones on the path to becoming one of Tamil Nadu's finest institutions"
          />
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100 mb-8">
                <p className="text-neutral-700 leading-relaxed text-base mb-4">
                  Goals, as everybody knows, can be short term and long term. A long term goal includes many short term goals. Our long term goal is to grow into one of the finest educational institutions in Tamil Nadu where girls while they acquire knowledge will also grow into complete women; where shall prevail truth, honesty, uprightness, love and goodness.
                </p>
                <p className="text-neutral-700 leading-relaxed text-base mb-4">
                  Our first task in terms of small goals is to strengthen the academic competence of our faculty. We are also aware that we need to develop in students knowledge and understanding; cognitive, transferable and practical skills. What is, perhaps, more important, is the creation of proper context and ambience for learning where meaningful education will take place.
                </p>
                <p className="text-neutral-700 leading-relaxed text-base">
                  Therefore, our catchword is <span className="font-semibold text-primary-800">&ldquo;freedom.&rdquo;</span> The entire academic atmosphere in SSKV College is characterized by freedom — freedom not unbridled but controlled by responsibility. We strongly believe that no meaningful education, particularly, of girls will take place where oppression and tyranny rule.
                </p>
              </div>
            </AnimatedSection>

            {/* College Song */}
            <AnimatedSection delay={0.15}>
              <div className="bg-primary-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold font-heading text-accent-400 mb-6 text-center">College Song</h3>
                <div className="text-center space-y-6 text-white/85 text-sm leading-loose">
                  <p className="font-semibold text-white/95 italic">
                    Oh, we the girls of SSKV<br />
                    a glorious college we<br />
                    We belong to SSKV<br />
                    a College proud and free
                  </p>
                  <div>
                    <p className="mb-1">1. Come on all you young scholars</p>
                    <p className="mb-1">And join us one and all</p>
                    <p className="mb-1">We&apos;re the jolliest girls of SSKV</p>
                    <p>the toast of Kanchipuram</p>
                  </div>
                  <div>
                    <p className="mb-1">2. We gather here in college</p>
                    <p className="mb-1">from places far and near</p>
                    <p className="mb-1">We file into our classes</p>
                    <p className="mb-1">with eagerness and cheer</p>
                    <p className="mb-1">As we listen to our teachers</p>
                    <p className="mb-1">Our problems disappear</p>
                    <p className="mb-1">And as we work diligently</p>
                    <p>we&apos;ve no concern or fear</p>
                  </div>
                  <div>
                    <p className="mb-1">3. It&apos;s fun to be in college</p>
                    <p className="mb-1">the cream of students we</p>
                    <p className="mb-1">we love to dance and sing</p>
                    <p className="mb-1">at moments we are free</p>
                    <p className="mb-1">And when we are off to study</p>
                    <p className="mb-1">we&apos;re hives of industry</p>
                    <p className="mb-1">So that altogether</p>
                    <p>we are a fine community</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-accent-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Vision & Mission" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-accent-400 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
                  <FaEye className="text-2xl text-accent-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 font-heading mb-4">Our Vision</h3>
                <p className="text-neutral-600 leading-relaxed">
                  To empower women through quality education, fostering academic excellence,
                  ethical values, and holistic development, enabling them to become leaders and
                  contribute meaningfully to society.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-700 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <FaBullseye className="text-2xl text-primary-700" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 font-heading mb-4">Our Mission</h3>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">&bull;</span>
                    Provide accessible, quality higher education for women
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">&bull;</span>
                    Promote research aptitude and innovative thinking
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">&bull;</span>
                    Develop employable skills through industry collaborations
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">&bull;</span>
                    Instill ethical values and social responsibility
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-400 mt-1">&bull;</span>
                    Foster holistic development through co-curricular activities
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Be Part of Our Legacy?"
        subtitle="Join thousands of women who have built successful careers starting at SSKV College."
      />
    </>
  );
}
