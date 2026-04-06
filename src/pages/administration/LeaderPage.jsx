import { useState } from 'react';
import { FaUserTie, FaQuoteLeft, FaGlobe } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';
import { images } from '../../data/media';

function LeaderPhoto({ photo, name }) {
  const [failed, setFailed] = useState(false);
  if (!failed) {
    return (
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover object-top"
        onError={() => setFailed(true)}
      />
    );
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary-100">
      <FaUserTie className="text-5xl text-primary-300" />
    </div>
  );
}

export default function LeaderPage({ leader }) {
  return (
    <>
      <Hero
        title={`${leader.designation}'s Message`}
        subtitle={`${leader.name} — ${leader.org}`}
        height="medium"
        breadcrumb={`Administration › ${leader.designation}`}
        bannerImage={images.about.banner}
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Photo card */}
            <AnimatedSection direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-xs mx-auto">
                <LeaderPhoto photo={leader.photo} name={leader.name} />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-primary-800 font-heading">{leader.name}</h2>
                <p className="text-accent-600 font-semibold text-sm mt-1">{leader.designation}</p>
                <p className="text-neutral-500 text-xs mt-0.5">{leader.org}</p>
                {leader.website && (
                  <a
                    href={leader.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs text-primary-600 hover:text-accent-600 transition-colors"
                  >
                    <FaGlobe className="text-[10px]" /> Personal Website
                  </a>
                )}
              </div>
            </AnimatedSection>

            {/* Content */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-4">
                  {leader.designation}
                </span>

                <div className="bg-primary-50 border-l-4 border-accent-400 rounded-r-xl p-5 mb-6">
                  <FaQuoteLeft className="text-accent-400 text-xl mb-2" />
                  <p className="text-primary-800 italic leading-relaxed text-sm">{leader.message}</p>
                </div>

                <div className="space-y-3">
                  {leader.bio.map((para, i) => (
                    <p key={i} className="text-neutral-600 leading-relaxed text-sm">{para}</p>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Guided by Excellence, Driven by Purpose"
        subtitle="Join the SSKV family and be mentored by leaders committed to your growth."
      />
    </>
  );
}
