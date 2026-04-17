import { FaLaptopCode, FaComments, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

export default function ERPPage() {
  return (
    <>
      <Hero
        title="ERP Portal"
        subtitle="Smart digital platform for students, parents, and faculty"
        height="medium"
        breadcrumb="Student Life › ERP Portal"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-6xl">

          <SectionHeading title="Enterprise Resource Planning (ERP)" />

          {/* INTRO */}
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Enterprise Resource Planning (ERP) is an online portal that enables
              parents and students to access complete academic and administrative
              information related to the student&rsquo;s journey in the college.
            </p>
          </AnimatedSection>

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* LEFT CONTENT */}
            <div>

              {/* SERVICES */}
              <AnimatedSection>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
                  <h3 className="font-bold text-primary-800 mb-4 flex items-center gap-2">
                    <FaLaptopCode /> Services Provided
                  </h3>

                  <ul className="space-y-3 text-neutral-700">
                    <li>• Attendance Tracking</li>
                    <li>• Online Fees Payment</li>
                    <li>• Internal Exam Results</li>
                    <li>• General Notifications</li>
                    <li>• E-Resources Access</li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* FEATURES */}
              <AnimatedSection>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
                  <h3 className="font-bold text-primary-800 mb-4 flex items-center gap-2">
                    <FaDatabase /> Key Features
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Parents can conveniently access comprehensive information about their
                    child&rsquo;s academic journey through the ERP portal. This includes:
                  </p>

                  <ul className="list-disc pl-5 mt-3 text-sm text-neutral-600 space-y-2">
                    <li>Marks and Academic Performance</li>
                    <li>Attendance Records</li>
                    <li>Fee Payment History</li>
                    <li>Subject Information</li>
                    <li>Class Timetables</li>
                    <li>Exam Schedules</li>
                    <li>Teacher Feedback</li>
                    <li>Library Usage</li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* COMMUNICATION */}
              <AnimatedSection>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <h3 className="font-bold text-primary-800 mb-4 flex items-center gap-2">
                    <FaComments /> Communication System
                  </h3>

                  <p className="text-sm text-neutral-600 mb-3">
                    The portal also features an integrated messaging system for seamless communication:
                  </p>

                  <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                    <li>Admin and Students</li>
                    <li>Admin and Parents</li>
                    <li>Teachers and Parents</li>
                    <li>Teachers and Students</li>
                  </ul>
                </div>
              </AnimatedSection>

            </div>

            {/* RIGHT VISUAL */}
            <AnimatedSection>
              <div className="sticky top-40 bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-10 shadow-xl border border-primary-700 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent-400 flex items-center justify-center">
                  <FaMobileAlt className="text-5xl text-primary-900" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                  SSKV ERP Mobile App
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Stay connected with your child&rsquo;s academic journey anytime, anywhere.
                  Access attendance, fees, results, and timetables from your phone.
                </p>
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-primary-900/50 rounded-lg p-3 border border-primary-700">
                    <p className="text-accent-400 text-xs font-semibold mb-1">REAL-TIME</p>
                    <p className="text-white text-sm">Live attendance &amp; marks</p>
                  </div>
                  <div className="bg-primary-900/50 rounded-lg p-3 border border-primary-700">
                    <p className="text-accent-400 text-xs font-semibold mb-1">SECURE</p>
                    <p className="text-white text-sm">Protected student data</p>
                  </div>
                  <div className="bg-primary-900/50 rounded-lg p-3 border border-primary-700">
                    <p className="text-accent-400 text-xs font-semibold mb-1">PAYMENTS</p>
                    <p className="text-white text-sm">Online fee payment</p>
                  </div>
                  <div className="bg-primary-900/50 rounded-lg p-3 border border-primary-700">
                    <p className="text-accent-400 text-xs font-semibold mb-1">MESSAGING</p>
                    <p className="text-white text-sm">Parent-teacher chat</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>

          {/* DOWNLOAD SECTION */}
          <AnimatedSection>
            <div className="mt-12 text-center bg-primary-800 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2">
                Download the FREE Mobile App
              </h3>
              <p className="text-sm mb-4">
                Available on Google Play Store and Apple App Store
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-12"
                />
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-12"
                />
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTABanner
        title="Smart Education Starts Here"
        subtitle="Access everything you need with the SSKV ERP Portal anytime, anywhere."
      />
    </>
  );
}
