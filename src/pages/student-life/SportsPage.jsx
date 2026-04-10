import { useState, useEffect } from 'react';
import { FaTrophy, FaRunning, FaMedal, FaUniversity, FaFilePdf } from 'react-icons/fa';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const achievements = [
  {
    year: 'September 2023',
    title: 'AZONE Women\'s Tournament',
    desc: 'College enrolled in the AZONE Women\'s Tournament of the University of Madras. Winners went on to represent at the state level in sports.',
  },
  {
    year: 'June 2024',
    title: 'Nodal College for Placement Drives',
    desc: 'Selected as a Nodal College by the Government of Tamil Nadu — reflecting the overall strength and reputation of the institution including sports activities.',
  },
];

const facilities = [
  { icon: FaRunning, label: 'Athletic Track' },
  { icon: FaTrophy, label: 'Indoor Sports' },
  { icon: FaMedal, label: 'Inter-College Competitions' },
  { icon: FaUniversity, label: 'University Tournaments' },
];

// 🔥 Achievers Data
const achievers = [
  {
    name: 'R. Dharshini II B.Com(G)',
    img: '/images/sports/dharshini_1.JPG',
    desc: 'This award is given to Ms. R.Dharshini II B.Com(G) - Shift II for representing our college in the District Level Competition for "The Chief Ministers Trophy Games" in September 2025 and won Bronze Medal in Carrom (Doubles).'
  },
  {
    name: 'Ms. R.Priya III B.Com (G)',
    img: '/images/sports/priya_2.JPG',
    desc: 'This award is given to Ms. R.Priya III B.Com (G) - Shift II for representing our college in the District Level Competition for "The Chief Ministers Trophy Games" and won Bronze Medal in Carrom.'
  },
  {
    name: 'Ms. D. Bharathi',
    img: '/images/sports/bharathi_3.JPG',
    desc: 'Award is given to Ms. D.Bharathi for representing our college in the District Level Competitior ef Minister s Trophy Games" in September 2025 and won Sliver Medal in Carrom(D).'
  },
  {
    name: 'Ms. B. Bharathi',
    img: '/images/sports/bharthi_4.JPG',
    desc: 'Award is given to Ms. B.Bharathi for representing our college in the District Level Competition ! Chief Minister s Trophy Games" in September 2025 and won Sliver Medal in Carrom(D).'
  },
  {
    name: 'Ms. J. Katherine Mancy Jenifer',
    img: '/images/sports/karreena_5.JPG',
    desc: 'This award is given to Ms. J.Katherine Mancy Jenifer II B.Sc. (CCJS) for representing our college in the District Level Competition for "The Chief Minister s Trophy Games" in September 2025 and won Brozen Medal in Volley Ball.'
  },
  {
    name: 'Ms. M. Sudharshana | B.C.A.',
    img: '/images/sports/sundharshana_6.JPG',
    desc: 'This award is given to Ms. M.Sudharshana | B.C.A. for representing our college in the District Level Competition for "The Chief Minister s Trophy Games" in September 2025 and won Brozen Medal in Volley Ball.'
  }
];

export default function SportsPage() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/images/sports/sports1.JPG',
    '/images/sports/sports2.JPG',
    '/images/sports/sports3.jpg',
    '/images/sports/sports4.jpg',
    '/images/sports/sports5.JPG',
    '/images/sports/sports6.JPG',
    '/images/sports/sports7.JPG',
    '/images/sports/sports8.JPG',
    '/images/sports/sports9.JPG',
    '/images/sports/sports10.JPG',
    '/images/sports/sports11.JPG',
    '/images/sports/sports12.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SLIDER */}
      <div className="relative w-full h-[720px] overflow-hidden -mt-20">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, i) => (
            <img key={i} src={img} alt="" className="w-full h-full object-cover flex-shrink-0" />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold font-heading">Sports</h1>
          <p className="text-sm md:text-base mt-2 max-w-xl">
            Building champions — on the field and in life — at SSKV College
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          
          <SectionHeading title="Sports at SSKV College" subtitle="A tradition of athletic excellence and competitive spirit" />

          <p className="text-neutral-600 leading-relaxed mb-8">
            Juvenal, the Roman poet, famously wrote, "Mens sana in corpore sano"...
          </p>

          <p className="text-neutral-600 leading-relaxed mb-8">
            Some of our students who distinguished themselves in sports/athletics in the past:
          </p>

          {/* REPORT BUTTONS */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 text-center">
              <h3 className="font-bold text-primary-800 mb-4">Sports Annual Reports</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/pdfs/sports-2022-23.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-lg text-sm"><FaFilePdf /> 2022–23</a>
                <a href="/pdfs/sports-2023-24.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-lg text-sm"><FaFilePdf /> 2023–24</a>
                <a href="/pdfs/sports-2024-25.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-lg text-sm"><FaFilePdf /> 2024–25</a>
              </div>
            </div>
          </AnimatedSection>

          <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">Objectives</h3>

          <p className="text-neutral-600 leading-relaxed mb-8">
            Ms. Priya, B.Com in 2010 achieved the following...
          </p>

          {/* 🔥 ACHIEVERS SECTION (UPDATED LAYOUT) */}
          <SectionHeading title="Student Achievers in Sports" />

          <div className="space-y-6 mb-10">
            {achievers.map((a, i) => (
              <AnimatedSection key={i}>
                <div className="bg-white border border-neutral-100 rounded-2xl shadow-sm p-4 flex items-start gap-4">
                  
                  {/* Passport Image */}
                  <img 
                    src={a.img} 
                    alt={a.name} 
                    className="w-20 h-24 object-cover rounded-lg border"
                  />

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-primary-800 mb-1">{a.name}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{a.desc}</p>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Facilities */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {facilities.map((f, i) => (
              <AnimatedSection key={i}>
                <div className="bg-primary-50 rounded-2xl p-5 text-center border border-primary-100">
                  <f.icon className="text-primary-700 text-2xl mx-auto mb-2" />
                  <p className="text-sm font-semibold text-primary-800">{f.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Achievements */}
          <SectionHeading title="Recent Achievements" />

          <div className="space-y-4">
            {achievements.map((a, i) => (
              <AnimatedSection key={i}>
                <div className="flex items-start gap-4 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <span className="px-3 py-1 bg-primary-800 text-accent-400 text-xs font-bold rounded-full">{a.year}</span>
                  <div>
                    <h3 className="font-bold text-primary-800">{a.title}</h3>
                    <p className="text-sm text-neutral-600">{a.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      <CTABanner title="Play. Compete. Excel." subtitle="Sports at SSKV College develop discipline, teamwork, and excellence." />
    </>
  );
}