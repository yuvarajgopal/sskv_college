import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaBook, FaUserTie, FaGraduationCap, FaUsers, FaAward, FaFilePdf, FaCamera } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import DepartmentSectionNav from '../../components/shared/DepartmentSectionNav';
import ActivityGallery from '../../components/shared/ActivityGallery';
import CTABanner from '../../components/sections/CTABanner';
import DepartmentNewsletter from '../../components/shared/DepartmentNewsletter';

const BASE_PHOTO  = '/images/faculty/tamil/';
const BASE_RESUME = '/pdfs/faculty/tamil/';
  

const faculty = [
  { name: 'Dr. B. Valli',    qualification: 'MA., M.Phil., BEd., Ph.D', role: 'Assistant Professor & HOD', isHod: true, photo: `${BASE_PHOTO}dr-b-valli.jpg`,    resume: `${BASE_RESUME}dr-b-valli.pdf` },
  { name: 'Ms. M. Arulambigai',  qualification: 'MA., M.Phil., NET',         role: 'Assistant Professor',               photo: `${BASE_PHOTO}m-arulambigai.jpg`,  resume: `${BASE_RESUME}m-arulambigai.pdf` },
  { name: 'Dr.K. Priya',        qualification: 'M.A., M.PHIL., Ph.D., NET & SET',   role: 'Assistant Professor',               photo: `${BASE_PHOTO}k-priya.jpg`,        resume: `${BASE_RESUME}k-priya.pdf` },
  { name: 'Dr. D. Ammu',     qualification: 'M.A., M.Phil., Ph.D., NET.',  role: 'Assistant Professor',               photo: `${BASE_PHOTO}dr-d-ammu.jpg`,      resume: `${BASE_RESUME}dr-d-ammu.pdf` },
  { name: 'Dr. R. Kannagi',  qualification: 'M.A., M.Phil., Ph.D., NET.',  role: 'Assistant Professor',               photo: `${BASE_PHOTO}dr-r-kannagi.jpg`,   resume: `${BASE_RESUME}dr-r-kannagi.pdf` },
  { name: 'Dr. P. Latha',    qualification: 'M.A., M.Phil., Ph.D., NET, SET',   role: 'Assistant Professor',               photo: `${BASE_PHOTO}dr-p-latha.jpg`,     resume: `${BASE_RESUME}dr-p-latha.pdf` },
  { name: 'Ms. T. Indrani',      qualification: 'MA,M.ed, NET ',             role: 'Assistant Professor',               photo: `${BASE_PHOTO}t-indrani.jpg`,      resume: `${BASE_RESUME}t-indrani.pdf` },
  { name: 'Ms. U. Revathi',      qualification: 'MA., M.Phil.,  BEd,  NET.',    role: 'Assistant Professor',               photo: `${BASE_PHOTO}u-revathi.jpg`,      resume: `${BASE_RESUME}u-revathi.pdf` },
  { name: 'Ms. D. Chithra',      qualification: 'MA., M.Phil.,  B.Ed. NET.',  role: 'Assistant Professor',               photo: `${BASE_PHOTO}d-chithra.jpg`,      resume: `${BASE_RESUME}d-chithra.pdf` },
  { name: 'Ms.G. Pavithra',     qualification: 'MA., NET',                  role: 'Assistant Professor',               photo: `${BASE_PHOTO}g-pavithra.jpg`,     resume: `${BASE_RESUME}g-pavithra.pdf` },
  { name: 'Ms. B. Bharathi',     qualification: 'MA., NET',                  role: 'Assistant Professor',               photo: `${BASE_PHOTO}b-bharathi.jpg`,     resume: `${BASE_RESUME}b-bharathi.pdf` },
  { name: 'Ms. V. Yuvalakshmi',  qualification: 'MA., NET',                  role: 'Assistant Professor',               photo: `${BASE_PHOTO}v-yuvalakshmi.jpg`,  resume: `${BASE_RESUME}v-yuvalakshmi.pdf` },
  { name: 'Ms. R. Shenbagam',    qualification: 'MA., NET',                  role: 'Assistant Professor',               photo: `${BASE_PHOTO}r-shenbagam.jpg`,    resume: `${BASE_RESUME}r-shenbagam.pdf` },
  { name: 'Ms. K. Sangeetha',    qualification: 'MA., NET',                  role: 'Assistant Professor',               photo: `${BASE_PHOTO}k-sangeetha.jpg`,    resume: `${BASE_RESUME}k-sangeetha.pdf` },
   { name: 'Ms.D.Tamizharuvi',    qualification: 'M.A.,B.ED.,NET',          role: 'Assistant Professor',               photo: `${BASE_PHOTO}aruvi.jpg`,    resume: `${BASE_RESUME}d._tamizharuvi.pdf` },
];

function FacultyPhoto({ src, name, size = 'md' }) {
  const [failed, setFailed] = useState(false);
  const sizeClass = size === 'lg'
    ? 'w-24 h-24 text-4xl'
    : 'w-14 h-14 text-2xl';

  if (!failed) {
    return (
      <img
        src={src}
        alt={name}
        onError={() => setFailed(true)}
        className={`${sizeClass} rounded-full object-cover flex-shrink-0`}
      />
    );
  }
  return (
    <div className={`${sizeClass} rounded-full bg-red-100 flex items-center justify-center flex-shrink-0`}>
      <FaUserTie className="text-red-400" />
    </div>
  );
}


const programDetails = [
  { label: 'Degree', value: 'Bachelor of Arts (B.A.)' },
  { label: 'Specialisation', value: 'Tamil Language & Literature' },
  { label: 'Duration', value: '3 Years (6 Semesters)' },
  { label: 'Eligibility', value: 'Preference to Tamil at HSC.' },
  { label: 'Affiliation', value: 'University of Madras' },
  { label: 'Curriculum', value: 'CBCS — Choice Based Credit System' },
  { label: 'Syllabus',     value: (<a
        href="/pdfs/tamil-syllabus.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-600 underline hover:text-orange-800">UG Syllabus</a>
    )
  },
];

const outcomes = [
  'In-depth knowledge of classical and modern Tamil literature',
  'Strong command of Tamil language, grammar, and linguistics',
  'Ability to analyze and interpret literary texts critically',
  'Research and writing skills for academic and professional pursuits',
  'Cultural understanding of Tamil heritage, history, and traditions',
  'Career readiness for teaching, writing, translation, and civil services',
];

const offered = [
  'Bachelor of Arts (B.A.,)',
  'Master of Arts(M.A.,)',
];

export default function TamilDepartmentPage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      const el = document.getElementById(section);
      if (el) setTimeout(() => {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 130;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchParams]);

  return (
    <>
      {/* Hero */}
      <Hero
        title="Department of Tamil"
        subtitle="B.A. Tamil — Preserving and advancing the richness of Tamil language, literature, and culture"
        height="medium"
        breadcrumb="Academics › B.A. Tamil"
      />

      {/* Section Nav */}
      <DepartmentSectionNav />

      {/* About the Department */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading title="About the Department" subtitle="Preserving and advancing Tamil language, literature, and culture" />
          <AnimatedSection direction="left">
            <span className="inline-block px-4 py-1.5 bg-red-50 text-red-700 text-sm font-semibold rounded-full mb-4">
              Arts — 3 Year Program
            </span>
            <p className="text-neutral-600 leading-relaxed mb-4">
              நாம் மொழிக்குள் இருக்கிறோம். மொழிதான் மனிதனை பிற உயிர்களிடமிருந்து வேறுபடுத்திக் காண்பிக்கிறது. மொழி என்பது தொல்லுயிர் எச்சத்தின் கவிதையென்று செல்லி பகர்ந்தார் மொழியால் நாம் மொழியப்படுகிறோம். தொல்காப்பியர் தொட்டு வள்ளுவப் பெருந்தகையனாருடன் சேர்ந்து இளங்கோவடிகள் கம்பர் வளர்த்த தமிழ் இன்று மொழியின் இயல்புக்கேற்றவாறு காலத்தின் கட்டாயத்தினால் மாறுபட்டு வந்து கொண்டிருக்கிறது. இலக்கண மரபை குறிக்கும் பொழுது பவணந்தி முனிவர். "பழையன கழிதலும் புதியன புகுதலும் வழவல கால வகையினானே" என்று சொன்னது மொழிக்கும் பொருந்தும் இன்று அறிவியலும் அறிவியல் சார்ந்த தகவல் தொழில்நுட்பமும் வளர்ந்தாலும் இலக்கியம் படிப்பதில் நமக்கு ஆர்வம் இருக்கிறது. மற்ற மொழியின் இலக்கியங்களில் காணமுடியாத முழுமைத்தனம் நமது தமிழ் மொழி இலக்கியத்தில்தான் உள்ளது. ஆங்கில இலக்கிய விமர்சகர் சேக்ஸ்பியரை திரும்பவும் கண்டு பிடிக்கவேண்டும் என்பார். அவ்வகையில் நமது பழைய இலக்கியங்களை சங்கஇலக்கியங்களை அகம் புறம் வகுத்தவர்களை அன்றிலிருந்து இன்று வரை நமது உள்ளத்தில் தாக்கங்கள் ஏற்படுத்திய இலக்கிய கர்த்தாக்களை மறுபடியும் கண்டுப்பிடிக்க வேண்டும். "இறைவனை வேண்டுதல் வேண்டாமை இலான் - இருமைத்தன்மை அற்றவன்". என்று எந்த மொழியிலும் புலவன் சொன்னதாகத் தெரியவில்லை. உழவனுக்கு ஏற்றம் கொடுத்து பதிவு செய்தோர்கள் எவ்வளவு மற்ற மொழிகளில் உள்ளனர் எனத் தெரியவில்லை. "ஆசைக்கோர் அளவில்லை அகிலமெல்லாம் கட்டி ஆளினும் கடல் மிதிலே ஆணை செலவே நினைவர்" என்றார் தாயுமானவர் உண்மைதான் எஸ்.எஸ்.கே.வி மகளீர் கல்லூரியின் தமிழ்த்துறை ஆசிரியர்கள் ஏழுவருடம் கல்லூரி தொடங்கியது முதல் நன்குக்கால் ஊன்றிக்கொண்டு தமிழ்க்கடலில் ஆணை செலுத்த முடியாதென்றாலும் தமிழ்க்கடலில் பயணம் செய்யும் பொருட்டு இவ்வருடம்(2014) தமிழை முதன்மைப்பாடமாக அறிமுகப்படுத்துகிறோம்.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section-padding bg-red-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Faculty"
            subtitle="14 dedicated educators committed to academic and cultural excellence"
          />

          {/* HOD */}
          {faculty.filter((f) => f.isHod).map((f) => (
            <AnimatedSection key={f.name}>
              <div className="max-w-lg mx-auto mb-10">
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 flex items-center gap-5 text-white">
                  <FacultyPhoto src={f.photo} name={f.name} size="lg" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-red-400 Sentence Case tracking-wide mb-1">Head of Department</div>
                    <h3 className="text-lg font-bold font-heading">{f.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{f.qualification}</p>
                    <a
                      href={f.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-semibold rounded-lg transition-colors"
                    >
                      <FaFilePdf className="text-xs" /> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Faculty grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {faculty.filter((f) => !f.isHod).map((f, i) => (
              <AnimatedSection key={f.name} delay={i * 0.05}>
                <div className="bg-white hover:bg-red-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <FacultyPhoto src={f.photo} name={f.name} size="md" />
                    <div>
                      <h4 className="font-bold text-primary-800 text-sm font-heading leading-snug">{f.name}</h4>
                      <p className="text-neutral-500 text-xs mt-0.5">{f.qualification}</p>
                      <p className="text-red-600 text-xs font-medium mt-0.5">{f.role}</p>
                    </div>
                  </div>
                  <a
                    href={f.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold rounded-lg border border-red-100 transition-colors"
                  >
                    <FaFilePdf className="text-xs" /> View Profile
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Stats row */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
              {[
                { icon: FaUsers,      value: '14', label: 'Faculty Members' },
                { icon: FaAward,      value: '4',  label: 'Ph.D Holders' },
                { icon: FaGraduationCap, value: '3', label: 'Years Duration' },
                { icon: FaBook,       value: '6',  label: 'Semesters' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-5 text-center">
                  <stat.icon className="text-2xl text-primary-700 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-800 font-heading">{stat.value}</div>
                  <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Programmes Offered */}
      <section id="programmes" className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading title="Programmes Offered" subtitle="Academic programmes and learning outcomes" />
          <div className="max-w-5xl mx-auto">
            {/* Programmes List */}
            <div className="flex flex-wrap gap-4 mb-8 max-w-5xl mx-auto">
              <div className="flex-1 min-w-[200px] bg-red-50 border border-red-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <p className="text-sm font-bold text-primary-800">Bachelor of Arts (B.A.)</p>
                <p className="text-xs text-neutral-500 mt-1">Undergraduate Programme</p>
              </div>
              <div className="flex-1 min-w-[200px] bg-red-50 border border-red-200 rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-3">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <p className="text-sm font-bold text-primary-800">Master of Arts (M.A.)</p>
                <p className="text-xs text-neutral-500 mt-1">Postgraduate Programme</p>
              </div>
            </div>
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <FaBook className="text-2xl text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">B.A. Tamil</h3>
                    <p className="text-white/60 text-sm">Program Details</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {programDetails.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">{item.label}</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <FaBook className="text-2xl text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">M.A. Tamil</h3>
                    <p className="text-white/60 text-sm">Postgraduate Programme Details</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Degree</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">Master of Arts (M.A.)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Specialisation</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">Tamil Language & Literature</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Duration</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">2 Years (4 Semesters)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Eligibility</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">B.A. Tamil from a recognized university</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Affiliation</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">University of Madras</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">Curriculum</span>
                      <span className="text-white font-semibold text-sm text-right ml-4">CBCS — Choice Based Credit System</span>
                    </div>
                </div>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outcomes.map((outcome, i) => (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <div className="flex items-start gap-3 bg-red-50 rounded-xl p-5 border border-red-100 shadow-sm h-full">
                    <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-neutral-700 text-sm leading-relaxed">{outcome}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Department Activities */}
      <section id="activities" className="section-padding bg-red-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Department Activities" subtitle="Promoting Tamil language, literature, and culture" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-4 max-w-4xl mx-auto">
              The Department of Tamil at SSKV College of Arts and Science for Women actively promotes Tamil language, literature, and culture through various academic and co-curricular activities. The department organizes seminars, guest lectures, literary competitions, and cultural programs to enhance students' linguistic skills and literary appreciation. Special activities such as Tamil Mandram, poetry recitation, essay writing, and celebrations of Tamil festivals help nurture creativity and cultural awareness among students. The department also encourages participation in intercollegiate events and community-oriented programs to strengthen students confidence and social responsibility.
            </p>
          </AnimatedSection>
          <ActivityGallery images={[
                { src: '/images/activities/tamil/1.jpeg', caption: 'Tamil Mandram Inauguration' },
                { src: '/images/activities/tamil/2.jpeg', caption: 'Poetry Recitation' },
                { src: '/images/activities/tamil/3.jpeg', caption: 'Tamil Literary Competition' },
                { src: '/images/activities/tamil/4.jpeg', caption: 'Guest Lecture' },
                { src: '/images/activities/tamil/5.jpeg', caption: 'Essay Writing Competition' },
                { src: '/images/activities/tamil/6.jpeg', caption: 'Cultural Programme' },

              ]} color="red" />
        </div>
      </section>

      {/* CTA */}
      <DepartmentNewsletter
        departmentName="Tamil"
        pdfHref="/pdfs/newsletter/tamil_1.pdf"
      />

      <CTABanner
        title="Interested in B.A. Tamil?"
        subtitle="Apply now and begin your journey into the world's oldest classical language."
      />
    </>
  );
}
